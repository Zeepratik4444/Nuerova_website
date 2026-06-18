import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { API_BASE_URL } from "@/lib/utils";

const APP_URL = import.meta.env.VITE_APP_URL || "https://nuerova.cloud";
const BRAND = "rgb(18,117,226)";

const schema = z.object({
	password: z.string().min(8, "At least 8 characters required"),
	confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
	message: "Passwords don't match",
	path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

type TokenState = "checking" | "valid" | "expired" | "invalid";
type SubmitState = "idle" | "loading" | "success" | "error";

function strengthScore(pw: string): 0 | 1 | 2 | 3 | 4 {
	let s = 0;
	if (pw.length >= 8) s++;
	if (/[A-Z]/.test(pw)) s++;
	if (/[0-9]/.test(pw)) s++;
	if (/[^A-Za-z0-9]/.test(pw)) s++;
	return s as 0 | 1 | 2 | 3 | 4;
}

const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["", "#ef4444", "#f97316", "#eab308", "#22c55e"];

export function SetPasswordPage() {
	useSEO({
		title: "Activate Account — Nuerova",
		description: "Set your password to activate your Nuerova account.",
	});

	const search = useSearch({ from: "/set-password" });
	const token = (search as Record<string, string>).token ?? "";

	const [tokenState, setTokenState] = useState<TokenState>("checking");
	const [userName, setUserName]     = useState("");
	const [submitState, setSubmitState] = useState<SubmitState>("idle");
	const [errorMsg, setErrorMsg]     = useState("");
	const [resendEmail, setResendEmail] = useState("");
	const [resendSent, setResendSent]   = useState(false);
	const [showPw, setShowPw]   = useState(false);
	const [showCpw, setShowCpw] = useState(false);

	const { register, handleSubmit, watch, formState: { errors } } =
		useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

	const pwValue = watch("password") ?? "";
	const score   = strengthScore(pwValue);

	// Validate token on mount
	useEffect(() => {
		if (!token) { setTokenState("invalid"); return; }
		fetch(`${API_BASE_URL}/api/trial/validate-token?token=${encodeURIComponent(token)}`)
			.then((r) => r.json())
			.then((data) => {
				if (data.valid) {
					setTokenState("valid");
					setUserName(data.name || "");
				} else if (data.already_set) {
					setTokenState("expired"); // reuse expired UI → "already activated"
					setErrorMsg(data.message || "Account already activated. Please log in.");
				} else {
					setTokenState("invalid");
				}
			})
			.catch(() => setTokenState("invalid"));
	}, [token]);

	const onSubmit = async (data: FormData) => {
		setSubmitState("loading");
		setErrorMsg("");
		try {
			const res = await fetch(`${API_BASE_URL}/api/trial/set-password`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token, password: data.password }),
			});
			const result = await res.json();
			if (res.status === 400 && result.detail === "expired") {
				setTokenState("expired");
				setSubmitState("idle");
				return;
			}
			if (!res.ok) throw new Error(result.detail || "Failed to set password.");
			setSubmitState("success");
		} catch (err) {
			setSubmitState("error");
			setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
		}
	};

	const handleResend = async () => {
		if (!resendEmail) return;
		try {
			const res = await fetch(`${API_BASE_URL}/api/trial/resend-activation`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: resendEmail }),
			});
			if (res.ok) setResendSent(true);
			else {
				const d = await res.json();
				setErrorMsg(d.detail || "Could not resend. Please contact support.");
			}
		} catch {
			setErrorMsg("Could not resend. Please contact support.");
		}
	};

	// ── States ────────────────────────────────────────────────────────────────

	if (tokenState === "checking") {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<Loader2 className="animate-spin text-blue-600" size={36} />
			</div>
		);
	}

	if (tokenState === "invalid") {
		return (
			<PageShell>
				<div className="text-center space-y-3">
					<XCircle className="mx-auto text-red-500" size={40} />
					<p className="font-semibold text-gray-800">Invalid activation link</p>
					<p className="text-sm text-gray-500">
						This link is invalid or has been tampered with. Please use the link
						from your invitation email, or contact support.
					</p>
					<a href={APP_URL} className="text-sm underline" style={{ color: BRAND }}>
						Go to Nuerova
					</a>
				</div>
			</PageShell>
		);
	}

	if (tokenState === "expired") {
		return (
			<PageShell>
				<div className="space-y-4">
					<div className="text-center space-y-2">
						<XCircle className="mx-auto text-orange-400" size={40} />
						<p className="font-semibold text-gray-800">
							{errorMsg || "Your activation link has expired"}
						</p>
						<p className="text-sm text-gray-500">
							Links are valid for 24 hours. Enter your email to get a new one.
						</p>
					</div>
					{resendSent ? (
						<div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800 text-center">
							New activation email sent — check your inbox.
						</div>
					) : (
						<>
							<div className="space-y-2">
								<Label htmlFor="resendEmail">Your email address</Label>
								<Input
									id="resendEmail"
									type="email"
									placeholder="you@company.com"
									value={resendEmail}
									onChange={(e) => setResendEmail(e.target.value)}
								/>
							</div>
							{errorMsg && (
								<p className="text-sm text-red-600">{errorMsg}</p>
							)}
							<Button
								className="w-full"
								style={{ background: BRAND }}
								onClick={handleResend}
								disabled={!resendEmail}
							>
								Resend activation email
							</Button>
						</>
					)}
					<p className="text-center text-sm text-gray-400">
						Already activated?{" "}
						<a href={`${APP_URL}/login`} style={{ color: BRAND }} className="underline">
							Log in
						</a>
					</p>
				</div>
			</PageShell>
		);
	}

	if (submitState === "success") {
		return (
			<PageShell>
				<div className="text-center space-y-4">
					<CheckCircle2 className="mx-auto text-green-500" size={48} />
					<p className="text-lg font-semibold text-gray-800">You're all set!</p>
					<p className="text-sm text-gray-500">
						Your password has been set and your account is now active.
					</p>
					<a
						href={`${APP_URL}/login`}
						className="inline-block w-full text-center py-2.5 px-4 rounded-md text-white font-semibold transition-opacity hover:opacity-90"
						style={{ background: BRAND }}
					>
						Log in to Nuerova →
					</a>
				</div>
			</PageShell>
		);
	}

	// ── Main form ─────────────────────────────────────────────────────────────
	return (
		<PageShell>
			{userName && (
				<p className="text-center text-gray-500 text-sm -mt-2 mb-2">
					Hi <strong>{userName}</strong> — choose a secure password to activate your account.
				</p>
			)}

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
				{/* Password */}
				<div className="space-y-1">
					<Label htmlFor="password">New Password</Label>
					<div className="relative">
						<Input
							id="password"
							type={showPw ? "text" : "password"}
							placeholder="At least 8 characters"
							className="pr-10"
							{...register("password")}
						/>
						<button
							type="button"
							tabIndex={-1}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
							onClick={() => setShowPw((v) => !v)}
							aria-label={showPw ? "Hide password" : "Show password"}
						>
							{showPw ? <EyeOff size={16} /> : <Eye size={16} />}
						</button>
					</div>
					{/* Strength bar */}
					{pwValue && (
						<div className="space-y-1 pt-1">
							<div className="flex gap-1">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="h-1 flex-1 rounded-full transition-colors duration-300"
										style={{ background: i <= score ? STRENGTH_COLORS[score] : "#e5e7eb" }}
									/>
								))}
							</div>
							<p className="text-xs" style={{ color: STRENGTH_COLORS[score] }}>
								{STRENGTH_LABELS[score]}
							</p>
						</div>
					)}
					{errors.password && (
						<p className="text-xs text-red-600">{errors.password.message}</p>
					)}
				</div>

				{/* Confirm password */}
				<div className="space-y-1">
					<Label htmlFor="confirmPassword">Confirm Password</Label>
					<div className="relative">
						<Input
							id="confirmPassword"
							type={showCpw ? "text" : "password"}
							placeholder="Repeat your password"
							className="pr-10"
							{...register("confirmPassword")}
						/>
						<button
							type="button"
							tabIndex={-1}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
							onClick={() => setShowCpw((v) => !v)}
							aria-label={showCpw ? "Hide password" : "Show password"}
						>
							{showCpw ? <EyeOff size={16} /> : <Eye size={16} />}
						</button>
					</div>
					{errors.confirmPassword && (
						<p className="text-xs text-red-600">{errors.confirmPassword.message}</p>
					)}
				</div>

				{submitState === "error" && (
					<div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
						{errorMsg}
					</div>
				)}

				<Button
					type="submit"
					className="w-full font-semibold"
					disabled={submitState === "loading"}
					style={{ background: BRAND }}
				>
					{submitState === "loading" ? (
						<><Loader2 size={16} className="animate-spin mr-2" />Activating…</>
					) : (
						"Set Password & Activate"
					)}
				</Button>

				<p className="text-center text-xs text-gray-400">
					Already activated?{" "}
					<a href={`${APP_URL}/login`} style={{ color: BRAND }} className="underline">
						Log in here
					</a>
				</p>
			</form>
		</PageShell>
	);
}

function PageShell({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
			<Card className="w-full max-w-md shadow-lg">
				<CardHeader className="pb-2">
					<div className="text-center mb-2">
						<span className="text-2xl font-bold" style={{ color: BRAND }}>
							Nuerova
						</span>
					</div>
					<CardTitle className="text-xl text-center text-gray-800">
						Activate Your Account
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-4">{children}</CardContent>
			</Card>
		</div>
	);
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSEO } from "@/hooks/useSEO";

const passwordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type PasswordFormData = z.infer<typeof passwordSchema>;

export function SetPasswordPage() {
    useSEO({
        title: "Set Password - Renewal360",
        description: "Set your password for Renewal360.",
    });

    const search = useSearch({ from: '/set-password' });
    const token = (search as any).token;
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema)
    });

    const onSubmit = async (data: PasswordFormData) => {
        setSubmitStatus("idle");
        setErrorMessage("");

        if (!token) {
            setSubmitStatus("error");
            setErrorMessage("No token provided. Please use the link from your email.");
            return;
        }

        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
            const response = await fetch(`${API_BASE_URL}/api/trial/set-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password: data.password }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.detail || "Failed to set password.");
            }

            setSubmitStatus("success");
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Set Your Password</CardTitle>
                </CardHeader>
                <CardContent>
                    {submitStatus === 'success' ? (
                        <div className="text-center text-green-700">
                            <p>Your password has been set successfully!</p>
                            <p className="mt-4">You can now close this page and log in.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="password">New Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("password")}
                                    placeholder="Enter your new password"
                                />
                                {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    {...register("confirmPassword")}
                                    placeholder="Confirm your new password"
                                />
                                {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
                            </div>

                            {submitStatus === "error" && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                                    {errorMessage}
                                </div>
                            )}

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Setting Password..." : "Set Password"}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

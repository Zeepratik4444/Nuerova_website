import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { API_BASE_URL } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: string;
    billingCycle: "monthly" | "yearly";
    currency: string;
    price: string;
}

export function CheckoutModal({ isOpen, onClose, plan, billingCycle, currency, price }: CheckoutModalProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        companyName: "",
        password: ""
    });
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Call Backend to Create User + Order
            const res = await fetch(`${API_BASE_URL}/api/billing/public/checkout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company_name: formData.companyName,
                    password: formData.password,
                    plan: plan.toLowerCase(),
                    billing_cycle: billingCycle,
                    currency: currency
                })
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.detail || "Checkout failed. Please try again.");
            }

            const data = await res.json();
            const { access_token, order } = data;

            // 2. Save Token for auto-login after success
            if (typeof window !== 'undefined') {
                localStorage.setItem("token", access_token);
                // Also set as cookie if needed, but localStorage is fine for SPA for now
            }

            // 3. Open Razorpay
            const options = {
                key: order.key_id,
                amount: order.amount,
                currency: order.currency,
                name: "Nuerova",
                description: `${plan} Plan - ${billingCycle}`,
                order_id: order.order_id,
                prefill: {
                    email: order.user_email,
                    contact: order.user_contact || "",
                    name: formData.name
                },
                notes: {
                    organization: order.organization_name,
                },
                theme: {
                    color: "#2563EB",
                },
                handler: async (response: any) => {
                    // 4. Verify Payment (Authenticated)
                    try {
                        const verifyRes = await fetch(`${API_BASE_URL}/api/billing/verify-payment`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${access_token}`
                            },
                            body: JSON.stringify({
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        });

                        const result = await verifyRes.json();

                        if (result.success) {
                            // Redirect to success page or Dashboard
                            // Note: In dev, Dashboard might be on localhost:5173. 
                            // If this site is localhost:3000, we might need cross-domain logic.
                            // For now, we assume simple success page.
                            window.location.href = `/payment-success?plan=${plan}`;
                        } else {
                            alert("Payment verification failed. Please contact support.");
                        }
                    } catch (verifyErr) {
                        console.error("Verification error:", verifyErr);
                        alert("Payment succeeded but verification failed. Please contact support.");
                    }
                },
                modal: {
                    ondismiss: () => {
                        setLoading(false);
                        // Optional: Don't close modal? Or show "Cancelled" toast?
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", (response: any) => {
                alert(`Payment failed: ${response.error.description}`);
                setLoading(false);
            });

            // Close our form modal so Razorpay can take over (or keep it as background?)
            // Usually keeping it open is fine as Razorpay is an overlay.
            // But if we close it, user context is lost if they cancel.
            // We'll keep it open with 'loading' state maybe? 
            // Actually, Razorpay is modal. We can close ours OR hide it.
            // Let's keep it open but maybe show "Processing Payment..."
            rzp.open();

        } catch (error: any) {
            console.error(error);
            alert(error.message);
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Complete Your Subscription</DialogTitle>
                    <DialogDescription>
                        Create your account to activate the <strong>{plan}</strong> plan.
                    </DialogDescription>
                </DialogHeader>

                <div className="bg-blue-50 p-4 rounded-md mb-4 flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-blue-900">{plan} Plan ({billingCycle})</p>
                        <p className="text-sm text-blue-700">billed {billingCycle === 'monthly' ? 'monthly' : 'annually'}</p>
                    </div>
                    <div className="text-xl font-bold text-blue-900">
                        {price}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company</Label>
                            <Input
                                id="companyName"
                                name="companyName"
                                placeholder="Acme Inc."
                                required
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            minLength={8}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-start gap-3 mt-1">
                        <input
                            type="checkbox"
                            id="checkoutAcceptTerms"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="checkoutAcceptTerms" className="text-sm text-gray-600 cursor-pointer">
                            I agree to the{" "}
                            <Link to="/terms" target="_blank" className="text-blue-600 hover:underline font-medium">Terms of Service & Privacy Policy</Link>
                            <span className="text-red-500 ml-0.5">*</span>
                        </label>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading || !acceptTerms}>
                        {loading ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Lock className="mr-2 h-4 w-4" /> Pay {price} & Get Started</>
                        )}
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-2">
                        Secure payment via Razorpay.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}

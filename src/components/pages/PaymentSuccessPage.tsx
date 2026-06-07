import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useSearch } from "@tanstack/react-router";
import { useSEO } from "@/hooks/useSEO";

export function PaymentSuccessPage() {
    useSEO({
        title: "Payment Successful - Renewal360",
        description: "Thank you for subscribing to Renewal360.",
    });

    const search = useSearch({ strict: false }) as { plan?: string };
    const planName = search?.plan || "your selected";

    const COPILOT_URL = "https://copilot.renewal360.in";

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <div className="max-w-2xl mx-auto px-4 py-24 text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 rounded-full p-4">
                        <CheckCircle2 className="h-16 w-16 text-green-600" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Payment Successful!
                </h1>

                <p className="text-lg text-gray-600 mb-2">
                    Thank you for subscribing to the{" "}
                    <span className="font-semibold text-blue-600">
                        {planName}
                    </span>{" "}
                    plan.
                </p>
                <p className="text-gray-500 mb-8">
                    Your account has been upgraded. A receipt has been sent to
                    your email.
                </p>

                {/* Next Steps */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
                    <h2 className="font-semibold text-blue-900 mb-3 text-lg">
                        What's Next?
                    </h2>
                    <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>
                                Your account limits have been instantly upgraded.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>
                                Log in to your Dashboard to start managing more
                                renewals.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>
                                Check your email for a payment receipt and
                                transaction details.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={COPILOT_URL}>
                        <Button
                            size="lg"
                            className="text-lg px-8 bg-blue-600 hover:bg-blue-700"
                        >
                            Go to Dashboard{" "}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </a>
                    <a href="/">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8"
                        >
                            Back to Home
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

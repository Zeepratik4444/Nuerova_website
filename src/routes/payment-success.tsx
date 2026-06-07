import { createFileRoute } from "@tanstack/react-router";
import { PaymentSuccessPage } from "@/components/pages/PaymentSuccessPage";

export const Route = createFileRoute("/payment-success")({
    component: PaymentSuccessPage,
});

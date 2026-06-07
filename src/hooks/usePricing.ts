import { useState, useEffect } from "react";
import { type Currency, PRICING_DATA, ADD_ONS } from "@/lib/pricing";

export function usePricing() {
    const [currency, setCurrency] = useState<Currency>("USD");
    const [isAnnual, setIsAnnual] = useState(false);
    const [isDetecting, setIsDetecting] = useState(true);

    useEffect(() => {
        const detectLocation = async () => {
            try {
                const response = await fetch("https://ipwho.is/");
                if (!response.ok) throw new Error("IP API request failed");
                const data = await response.json();
                if (!data.success) throw new Error("IP API lookup failed");

                const apiCurrency = data.currency?.code as string;

                if (apiCurrency === "INR") {
                    setCurrency("INR");
                } else if (apiCurrency === "GBP") {
                    setCurrency("GBP");
                } else if (apiCurrency === "EUR") {
                    setCurrency("EUR");
                } else {
                    const country = data.country_code as string;
                    if (
                        data.continent_code === "EU" ||
                        ["DE", "FR", "IT", "ES", "NL"].includes(country)
                    ) {
                        setCurrency("EUR");
                    } else {
                        setCurrency("USD");
                    }
                }
            } catch {
                // Fallback: timezone-based detection
                try {
                    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (
                        timeZone.startsWith("Asia/Kolkata") ||
                        timeZone.startsWith("Asia/Calcutta")
                    ) {
                        setCurrency("INR");
                    } else if (
                        timeZone.startsWith("Europe/London") ||
                        timeZone === "GMT" ||
                        timeZone === "BST"
                    ) {
                        setCurrency("GBP");
                    } else if (timeZone.startsWith("Europe/")) {
                        setCurrency("EUR");
                    } else {
                        setCurrency("USD");
                    }
                } catch {
                    setCurrency("USD");
                }
            } finally {
                setIsDetecting(false);
            }
        };

        detectLocation();
    }, []);

    const plans = PRICING_DATA[currency];
    const addOn = ADD_ONS[currency];

    const getPrice = (tier: (typeof plans)[number]) =>
        isAnnual ? tier.yearlyPrice : tier.monthlyPrice;

    return {
        currency,
        setCurrency,
        isAnnual,
        setIsAnnual,
        isDetecting,
        plans,
        addOn,
        getPrice,
    };
}
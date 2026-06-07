export type FunnelStage = "awareness" | "consideration" | "decision";

export type AnalyticsEventName =
	| "cta_clicked"
	| "form_started"
	| "form_submitted"
	| "pricing_plan_clicked"
	| "blog_next_step_clicked"
	| "roi_calculator_used";

export type AnalyticsProperties = {
	page_path?: string;
	page_title?: string;
	cta_text?: string;
	cta_location?: string;
	funnel_stage?: FunnelStage;
	target_url?: string;
	blog_slug?: string;
	plan_name?: string;
	form_type?: string;
};

declare global {
	interface Window {
		dataLayer?: Array<Record<string, unknown>>;
	}
}

let gtmInitialized = false;

function getGtmId() {
	return import.meta.env.VITE_GTM_ID as string | undefined;
}

function getPageContext() {
	if (typeof window === "undefined" || typeof document === "undefined") {
		return {};
	}

	return {
		page_path: window.location.pathname,
		page_title: document.title,
	};
}

export function initGtm() {
	const gtmId = getGtmId();

	if (
		!gtmId ||
		gtmInitialized ||
		typeof window === "undefined" ||
		typeof document === "undefined"
	) {
		return;
	}

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: "gtm.js",
		"gtm.start": Date.now(),
	});

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
	document.head.appendChild(script);
	gtmInitialized = true;
}

export function trackEvent(
	event: AnalyticsEventName,
	properties: AnalyticsProperties = {},
) {
	if (typeof window === "undefined") {
		return;
	}

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event,
		...getPageContext(),
		...properties,
	});
}

export function trackCtaClick(properties: AnalyticsProperties) {
	trackEvent("cta_clicked", properties);
}

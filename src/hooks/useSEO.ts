import { useEffect } from "react";

const BASE_URL = "https://nuerova.xyz";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOProps {
	title: string;
	description: string;
	/** Absolute path for this page, e.g. "/pricing" - defaults to current pathname */
	canonicalPath?: string;
	/** Override og:image for a specific page (optional) */
	ogImage?: string;
	/**
	 * Set to true for pages that should not appear in Google search results.
	 * Sets <meta name="robots" content="noindex, nofollow">
	 */
	noIndex?: boolean;
	/**
	 * Override og:type. Defaults to "website". Use "article" for blog posts.
	 */
	ogType?: string;
	/**
	 * JSON-LD Structured Data payload for AEO/GEO engine compatibility
	 */
	schemaOrg?: Record<string, any> | Record<string, any>[];
}

export function useSEO({ title, description, canonicalPath, ogImage, noIndex = false, ogType = "website", schemaOrg }: SEOProps) {
	useEffect(() => {
		const path = canonicalPath ?? window.location.pathname;
		const canonicalUrl = `${BASE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
		const imageUrl = ogImage ?? DEFAULT_OG_IMAGE;

		// ─── <title> ───────────────────────────────────────────────
		document.title = title;

		// ─── Helper: upsert <meta> tags ────────────────────────────
		const setMeta = (attr: string, key: string, content: string) => {
			let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
			if (!el) {
				el = document.createElement("meta");
				el.setAttribute(attr, key);
				document.head.appendChild(el);
			}
			el.setAttribute("content", content);
		};

		// ─── Helper: upsert <link> tags ────────────────────────────
		const setLink = (rel: string, href: string) => {
			let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
			if (!el) {
				el = document.createElement("link");
				el.setAttribute("rel", rel);
				document.head.appendChild(el);
			}
			el.setAttribute("href", href);
		};

		// ─── JSON-LD Structured Data (Schema.org) ──────────────────
		let schemaEl = document.getElementById("json-ld-schema") as HTMLScriptElement | null;
		if (schemaOrg) {
			if (!schemaEl) {
				schemaEl = document.createElement("script");
				schemaEl.setAttribute("type", "application/ld+json");
				schemaEl.setAttribute("id", "json-ld-schema");
				document.head.appendChild(schemaEl);
			}
			schemaEl.textContent = JSON.stringify(
				Array.isArray(schemaOrg) 
					? schemaOrg.map(s => ({ "@context": "https://schema.org", ...s }))
					: { "@context": "https://schema.org", ...schemaOrg }
			);
		} else if (schemaEl) {
			schemaEl.remove();
		}

		// ─── Robots (noindex) ──────────────────────────────────────
		if (noIndex) {
			setMeta("name", "robots", "noindex, nofollow");
		} else {
			setMeta("name", "robots", "index, follow");
		}

		// ─── Standard SEO ──────────────────────────────────────────
		setMeta("name", "description", description);
		setLink("canonical", canonicalUrl);

		// ─── Open Graph ────────────────────────────────────────────
		setMeta("property", "og:title", title);
		setMeta("property", "og:description", description);
		setMeta("property", "og:url", canonicalUrl);
		setMeta("property", "og:image", imageUrl);
		setMeta("property", "og:image:width", "1200");
		setMeta("property", "og:image:height", "630");
		setMeta("property", "og:image:alt", title);
		setMeta("property", "og:type", ogType);
		setMeta("property", "og:site_name", "Nuerova");

		// ─── Twitter Card ──────────────────────────────────────────
		setMeta("name", "twitter:title", title);
		setMeta("name", "twitter:description", description);
		setMeta("name", "twitter:image", imageUrl);
		setMeta("name", "twitter:image:alt", title);
		setMeta("name", "twitter:card", "summary_large_image");

		// ─── Cleanup: restore homepage defaults on unmount ─────────
		return () => {
			const defaultTitle = "Nuerova: Scoped Knowledge Clusters & Team Intelligence Platforms";
			const defaultDesc =
				"Nuerova centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations so your momentum is never lost.";
			const defaultUrl = `${BASE_URL}/`;

			document.title = defaultTitle;
			setMeta("name", "description", defaultDesc);
			setLink("canonical", defaultUrl);
			setMeta("name", "robots", "index, follow");
			setMeta("property", "og:title", defaultTitle);
			setMeta("property", "og:description", defaultDesc);
			setMeta("property", "og:url", defaultUrl);
			setMeta("property", "og:image", DEFAULT_OG_IMAGE);
			setMeta("property", "og:image:alt", defaultTitle);
			setMeta("name", "twitter:title", defaultTitle);
			setMeta("name", "twitter:description", defaultDesc);
			setMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
			setMeta("name", "twitter:image:alt", defaultTitle);

			// Remove the specific schema script when component unmounts
			// (The next page will mount and inject its own schema if it has one)
			const oldSchemaEl = document.getElementById("json-ld-schema");
			if (oldSchemaEl) {
				oldSchemaEl.remove();
			}
		};
	}, [title, description, canonicalPath, ogImage, noIndex, schemaOrg]);
}

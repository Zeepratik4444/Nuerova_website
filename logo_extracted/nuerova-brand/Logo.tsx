import type { CSSProperties } from "react";

/**
 * Nuerova "Strata" brand mark — three stacked planes representing
 * persistent, layered shared knowledge.
 *
 * Tints are solid (not opacity) so the mark renders predictably on
 * any background and at any size.
 */

const TINTS = ["#9CC2F4", "#5A9BEA", "#1275E2"] as const;

type MarkProps = {
	/** Rendered height & width in px. Default 32. */
	size?: number;
	/** "brand" = blue strata, "mono" = single solid color (uses `color`). */
	variant?: "brand" | "mono";
	/** Fill used when variant="mono". Default "#ffffff". */
	color?: string;
	className?: string;
	style?: CSSProperties;
};

export function NuerovaMark({
	size = 32,
	variant = "brand",
	color = "#ffffff",
	className,
	style,
}: MarkProps) {
	const fills =
		variant === "mono"
			? [color, color, color]
			: [TINTS[0], TINTS[1], TINTS[2]];
	const opacities = variant === "mono" ? [0.4, 0.68, 1] : [1, 1, 1];
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 48 48"
			fill="none"
			className={className}
			style={style}
			role="img"
			aria-label="Nuerova"
		>
			<rect x="15" y="7" width="26" height="26" rx="7" fill={fills[0]} fillOpacity={opacities[0]} />
			<rect x="11.5" y="11.5" width="26" height="26" rx="7" fill={fills[1]} fillOpacity={opacities[1]} />
			<rect x="8" y="16" width="26" height="26" rx="7" fill={fills[2]} fillOpacity={opacities[2]} />
		</svg>
	);
}

type LogoProps = {
	/** Mark height in px; wordmark scales from it. Default 30. */
	size?: number;
	/** Show the "Nuerova" wordmark next to the mark. Default true. */
	wordmark?: boolean;
	/** Wordmark text color. Default "#ffffff" (dark backgrounds). */
	color?: string;
	className?: string;
	style?: CSSProperties;
};

export function NuerovaLogo({
	size = 30,
	wordmark = true,
	color = "#ffffff",
	className,
	style,
}: LogoProps) {
	return (
		<span
			className={className}
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: Math.round(size * 0.36),
				...style,
			}}
		>
			<NuerovaMark size={size} />
			{wordmark && (
				<span
					style={{
						fontFamily: "'Geist', sans-serif",
						fontWeight: 700,
						letterSpacing: "-0.03em",
						fontSize: Math.round(size * 0.95),
						lineHeight: 1,
						color,
					}}
				>
					Nuerova
				</span>
			)}
		</span>
	);
}

export default NuerovaLogo;

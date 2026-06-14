import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogPosts";

type Props = {
	posts: [BlogPost, BlogPost];
};

export function RelatedPosts({ posts }: Props) {
	return (
		<div style={{ marginTop: "56px", marginBottom: "8px" }}>
			<p
				style={{
					fontSize: "11px",
					fontWeight: 800,
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					color: "var(--ink-soft, #8e9192)",
					marginBottom: "20px",
				}}
			>
				Continue reading
			</p>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
					gap: "16px",
				}}
			>
				{posts.map((post, i) => (
					<Link
						key={post.slug}
						to="/blog/$slug"
						params={{ slug: post.slug }}
						style={{ textDecoration: "none" }}
					>
						<div
							style={{
								border: "1px solid rgba(255,255,255,0.08)",
								borderRadius: "10px",
								padding: "20px 22px",
								background: i === 0
									? "rgba(18,117,226,0.06)"
									: "rgba(255,255,255,0.02)",
								transition: "border-color 0.18s, background 0.18s",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
							className="related-post-card"
						>
							<span
								style={{
									fontSize: "10px",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									color: "#60a5fa",
								}}
							>
								{post.tags[0]}
							</span>
							<p
								style={{
									margin: 0,
									fontSize: "15px",
									fontWeight: 700,
									color: "rgba(255,255,255,0.92)",
									lineHeight: 1.4,
									flex: 1,
								}}
							>
								{post.title}
							</p>
							<p
								style={{
									margin: 0,
									fontSize: "13px",
									color: "rgba(255,255,255,0.50)",
									lineHeight: 1.6,
								}}
							>
								{post.summary}
							</p>
							<span
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "5px",
									fontSize: "13px",
									fontWeight: 600,
									color: "#60a5fa",
									marginTop: "4px",
								}}
							>
								Read <ArrowRight style={{ width: "13px", height: "13px" }} />
							</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

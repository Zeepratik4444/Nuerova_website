import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCtaClick, type FunnelStage } from "@/lib/analytics";

type CtaLink = {
	label: string;
	to: string;
};

type FunnelCTAProps = {
	stage: FunnelStage;
	title: string;
	description: string;
	primary: CtaLink;
	secondary?: CtaLink;
	location: string;
	proofPoints?: string[];
};

const stageLabels: Record<FunnelStage, string> = {
	awareness: "Diagnose your renewal process",
	consideration: "See how Renewal360 works",
	decision: "Start your free pilot",
};

export function FunnelCTA({
	stage,
	title,
	description,
	primary,
	secondary,
	location,
	proofPoints = [],
}: FunnelCTAProps) {
	const track = (cta: CtaLink) => {
		trackCtaClick({
			cta_text: cta.label,
			cta_location: location,
			funnel_stage: stage,
			target_url: cta.to,
		});
	};

	return (
		<section className="rounded-lg border border-blue-100 bg-blue-50/70 p-6 md:p-8">
			<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<div className="max-w-2xl">
					<p className="text-sm font-semibold text-blue-700">
						{stageLabels[stage]}
					</p>
					<h2 className="mt-2 text-2xl font-bold text-gray-900">{title}</h2>
					<p className="mt-3 text-base leading-relaxed text-gray-600">
						{description}
					</p>
					{proofPoints.length > 0 && (
						<div className="mt-5 grid gap-2 sm:grid-cols-3">
							{proofPoints.map((point) => (
								<div key={point} className="flex items-start gap-2 text-sm text-gray-700">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
									<span>{point}</span>
								</div>
							))}
						</div>
					)}
				</div>
				<div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
					<a href={primary.to} onClick={() => track(primary)}>
						<Button size="lg" className="w-full sm:w-auto">
							{primary.label}
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</a>
					{secondary && (
						<a href={secondary.to} onClick={() => track(secondary)}>
							<Button size="lg" variant="outline" className="w-full sm:w-auto bg-white">
								{secondary.label}
							</Button>
						</a>
					)}
				</div>
			</div>
		</section>
	);
}

export function WhoThisIsFor({
	items,
	title = "Who this is for",
}: {
	items: string[];
	title?: string;
}) {
	return (
		<section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
			<div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-center">
				<h2 className="text-sm font-bold uppercase tracking-wide text-gray-500">
					{title}
				</h2>
				<div className="grid gap-3 md:grid-cols-3">
					{items.map((item) => (
						<div key={item} className="flex items-start gap-2 text-sm text-gray-700">
							<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

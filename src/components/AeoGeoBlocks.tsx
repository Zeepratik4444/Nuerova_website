import { CheckCircle2 } from "lucide-react";

export type FaqItem = {
	question: string;
	answer: string;
};

type AnswerBlockProps = {
	question: string;
	answer: string;
	facts?: string[];
};

type FactBoxProps = {
	title: string;
	facts: string[];
};

type ComparisonRow = {
	label: string;
	value: string;
	detail: string;
};

export function AnswerBlock({ question, answer, facts = [] }: AnswerBlockProps) {
	return (
		<section className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-7">
			<p className="text-xs font-bold uppercase tracking-wide text-slate-500">
				Direct answer
			</p>
			<h2 className="mt-2 text-2xl font-bold text-slate-950">{question}</h2>
			<p className="mt-3 text-base leading-relaxed text-slate-700">{answer}</p>
			{facts.length > 0 && (
				<ul className="mt-5 grid gap-3 md:grid-cols-3">
					{facts.map((fact) => (
						<li key={fact} className="flex items-start gap-2 text-sm text-slate-700">
							<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
							<span>{fact}</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}

export function FactBox({ title, facts }: FactBoxProps) {
	return (
		<section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
			<h2 className="text-lg font-bold text-slate-950">{title}</h2>
			<div className="mt-4 grid gap-3 md:grid-cols-2">
				{facts.map((fact) => (
					<div key={fact} className="flex items-start gap-2 text-sm text-slate-700">
						<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
						<span>{fact}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export function ComparisonSummary({
	title,
	rows,
}: {
	title: string;
	rows: ComparisonRow[];
}) {
	return (
		<section className="rounded-lg border border-slate-200 bg-white shadow-sm">
			<div className="border-b border-slate-200 px-6 py-4">
				<h2 className="text-lg font-bold text-slate-950">{title}</h2>
			</div>
			<div className="divide-y divide-slate-100">
				{rows.map((row) => (
					<div key={row.label} className="grid gap-2 px-6 py-4 md:grid-cols-[180px_1fr]">
						<div className="text-sm font-semibold text-slate-500">{row.label}</div>
						<div>
							<div className="text-sm font-bold text-slate-950">{row.value}</div>
							<p className="mt-1 text-sm leading-relaxed text-slate-600">
								{row.detail}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export function PageFAQ({
	title = "Questions buyers ask",
	items,
}: {
	title?: string;
	items: FaqItem[];
}) {
	return (
		<section className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
			<h2 className="text-2xl font-bold text-slate-950">{title}</h2>
			<div className="mt-5 divide-y divide-slate-200">
				{items.map((item) => (
					<details key={item.question} className="group py-4">
						<summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
							<span className="inline-flex w-full items-center justify-between gap-4">
								{item.question}
								<span className="text-blue-600 group-open:hidden">+</span>
								<span className="hidden text-blue-600 group-open:inline">-</span>
							</span>
						</summary>
						<p className="mt-3 text-sm leading-relaxed text-slate-600">
							{item.answer}
						</p>
					</details>
				))}
			</div>
		</section>
	);
}

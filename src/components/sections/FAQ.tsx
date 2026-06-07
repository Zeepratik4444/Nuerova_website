import { useState } from 'react';

const faqs = [
  {
    q: "Is Renewal360 a software or a managed service?",
    a: "It's both. The core engine is a powerful AI software platform, but it operates as a managed service - we handle the AI infrastructure, email delivery, and operational details. You provide your renewal data, approve emails, and track results. You don't need a technical team or dedicated admin to run it."
  },
  {
    q: "Do I have to approve every email the AI writes?",
    a: "Yes - and that's intentional. Every email goes through your team before reaching a customer. You can edit, approve, or reject any email. You're always in control. Once you're comfortable, you can configure auto-send for lower-risk segments while keeping manual approval for key accounts."
  },
  {
    q: "How long does setup take?",
    a: "About 7 days end-to-end. Here's the breakdown: Connect your data (1–2 days) → Configure templates (1–2 days) → Team training session (1 day) → Send a test batch (1–2 days). Our onboarding team handles all the heavy lifting."
  },
  {
    q: "What happens to my data if I cancel?",
    a: "We export all your data and email history in a standard format. No lock-in - your data is always yours. You'll receive a full export within 5 business days of cancellation at no additional cost."
  },
  {
    q: "Does it work for my industry?",
    a: "Yes. Renewal360 is built for SaaS broadly: HR software, Marketing tools, Project management platforms, Analytics products, Communication and collaboration tools, and more. The AI adapts its email tone and context to your specific product and customer base."
  },
  {
    q: "How is this different from just using our CRM?",
    a: "Your CRM organises data - it doesn't act on it. Renewal360 reads your CRM data and automatically generates personalised outreach, surfaces at-risk accounts based on behaviour signals, and tracks whether your renewal emails are working. It's the action layer on top of your system of record."
  },
  {
    q: "Is our data secure?",
    a: "Yes. We're built on SOC 2-ready infrastructure with TLS 1.3 + AES-256 encryption. We only parse the fields explicitly necessary for renewal conversations - we never use your proprietary data to train base AI models. Your customer data never leaves your region."
  },
];

export function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl bg-white overflow-hidden transition-all duration-200">
      <button
        className="w-full text-left p-6 font-semibold text-base flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`transform transition-transform shrink-0 text-muted-foreground ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Syne', sans-serif"}}>
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground">
          Built on 15+ real questions from CSMs and RevOps leaders evaluating Renewal360.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackEvent } from "@/lib/analytics";

export function HomePage() {
	useSEO({
		title: "Nuerova | Shared AI Memory and Automation for Teams",
		description: "Nuerova gives teams a shared AI brain, scoped knowledge clusters, reusable skills, and agent-native automation with enterprise controls.",
	});

	useScrollReveal();

	// Typewriter effect
	const TW_WORDS = ["CS teams", "Ops teams", "Engineering", "Enterprise"];
	const [twIdx, setTwIdx] = useState(0);
	const [twText, setTwText] = useState("");
	const [twDeleting, setTwDeleting] = useState(false);

	useEffect(() => {
		const target = TW_WORDS[twIdx];
		if (!twDeleting && twText === target) {
			const pause = setTimeout(() => setTwDeleting(true), 1800);
			return () => clearTimeout(pause);
		}
		const delay = twDeleting ? 55 : 95;
		const t = setTimeout(() => {
			if (twDeleting) {
				setTwText(s => s.slice(0, -1));
				if (twText.length <= 1) {
					setTwDeleting(false);
					setTwIdx(i => (i + 1) % TW_WORDS.length);
				}
			} else {
				setTwText(target.slice(0, twText.length + 1));
			}
		}, delay);
		return () => clearTimeout(t);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [twText, twDeleting, twIdx]);

	const heroCanvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = heroCanvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const COLORS = ['rgba(59,130,246,', 'rgba(139,92,246,', 'rgba(96,165,250,'];
		let W = 0, H = 0;
		type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number; col: string };
		let particles: Particle[] = [];
		let animId = 0;
		const c = canvas;
		const cx = ctx;

		function resize() {
			W = c.width = c.offsetWidth;
			H = c.height = c.offsetHeight;
		}

		function mkParticle(): Particle {
			const col = COLORS[Math.floor(Math.random() * COLORS.length)];
			return {
				x: Math.random() * W,
				y: Math.random() * H,
				r: Math.random() * 1.5 + 0.5,
				vx: (Math.random() - 0.5) * 0.25,
				vy: (Math.random() - 0.5) * 0.25,
				a: Math.random() * 0.5 + 0.1,
				col,
			};
		}

		function init() {
			resize();
			const count = Math.min(Math.floor((W * H) / 15000), 60);
			particles = Array.from({ length: count }, mkParticle);
		}

		function tick() {
			cx.clearRect(0, 0, W, H);
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < 110) {
						cx.beginPath();
						cx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 110)})`;
						cx.lineWidth = 0.5;
						cx.moveTo(particles[i].x, particles[i].y);
						cx.lineTo(particles[j].x, particles[j].y);
						cx.stroke();
					}
				}
			}
			particles.forEach(p => {
				p.x += p.vx; p.y += p.vy;
				if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
				if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
				cx.beginPath();
				cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				cx.fillStyle = p.col + p.a + ')';
				cx.fill();
			});
			animId = requestAnimationFrame(tick);
		}

		init();
		tick();
		window.addEventListener('resize', init);

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', init);
		};
	}, []);

	// Interactive state for Platform Glimpses tabs
	const [activeTab, setActiveTab] = useState<"clusters" | "agents" | "automation" | "audit">("clusters");
	const [consoleTab, setConsoleTab] = useState<"ask" | "automate" | "clusters">("ask");

	// Demo Request form state
	const [demoSubmitted, setDemoSubmitted] = useState(false);
	const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
	const [demoMessage, setDemoMessage] = useState("");
	const [demoError, setDemoError] = useState<string | null>(null);

	const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formDataObj = new FormData(form);
		const name = formDataObj.get("name") as string;
		const email = formDataObj.get("email") as string;
		const company = formDataObj.get("company") as string;
		const teamSize = formDataObj.get("team-size") as string;
		const useCase = formDataObj.get("use-case") as string;
		const msgText = formDataObj.get("message") as string;

		try {
			setIsDemoSubmitting(true);
			setDemoError(null);

			const compiledMessage = `Team Size: ${teamSize || "Not specified"}\nUse Case: ${useCase || "Not specified"}\n\nMessage:\n${msgText || "No additional message"}`;

			const response = await fetch("/api/request-demo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					company_name: company,
					contact_person_name: name,
					email_address: email,
					phone_number: null,
					message: compiledMessage,
					product: "nuerova",
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Submission failed");
			}

			setDemoSubmitted(true);
			setDemoMessage(data.message || "Thank you for requesting a demo! Your trial has been activated. Please check your email for instructions.");
			trackEvent("form_submitted", {
				cta_location: "home_footer_form",
				funnel_stage: "decision"
			});
		} catch (err) {
			console.error("Demo submission error:", err);
			setDemoError(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsDemoSubmitting(false);
		}
	};

	// Early Access Waitlist form state
	const [waitlistEmail, setWaitlistEmail] = useState("");
	const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
	const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);
	const [waitlistError, setWaitlistError] = useState<string | null>(null);

	const handleWaitlistSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!waitlistEmail) return;

		try {
			setIsWaitlistSubmitting(true);
			setWaitlistError(null);

			// Extract temporary contact and company names from email domain/username
			const emailParts = waitlistEmail.split("@");
			const localPart = emailParts[0] || "Early Access";
			const domainPart = emailParts[1] || "Participant";
			
			// Format name: "john.doe" -> "John Doe"
			const contactName = localPart
				.split(/[._-]/)
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join(" ");
			
			// Format company: "acme.com" -> "Acme"
			const companyName = domainPart.split(".")[0] || "Early Access";
			const formattedCompany = companyName.charAt(0).toUpperCase() + companyName.slice(1);

			const response = await fetch("/api/request-demo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					company_name: formattedCompany,
					contact_person_name: contactName,
					email_address: waitlistEmail,
					phone_number: null,
					message: "Submitted via Early Access waitlist form.",
					product: "nuerova",
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Submission failed");
			}

			setWaitlistSubmitted(true);
			trackEvent("form_submitted", {
				cta_location: "early_access_waitlist_form",
				funnel_stage: "decision"
			});
		} catch (err) {
			console.error("Waitlist submission error:", err);
			setWaitlistError(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsWaitlistSubmitting(false);
		}
	};

	const scrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		e.preventDefault();
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="js-enabled bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-16">
				{/* ── HERO SECTION ── */}
				<section className="relative overflow-hidden" style={{ height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
					{/* Particle canvas */}
					<canvas ref={heroCanvasRef} className="hero-canvas" />
					{/* Grid lines overlay */}
					<div className="hero-grid-overlay" />
					{/* Gradient orbs */}
					<div className="hero-orb hero-orb-blue" />
					<div className="hero-orb hero-orb-purple" />

					<div className="max-w-container-max mx-auto px-gutter md:px-stack-lg flex flex-col md:flex-row items-center pb-16 gap-24 pt-4 relative z-10 w-full">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-flex items-center gap-2 mb-stack-md mt-10 hero-enter transition-all duration-200 hover:bg-status-blue/20 hover:border-status-blue/40 hover:text-white cursor-default">
								<div className="w-1.5 h-1.5 rounded-full bg-status-blue hero-dot-pulse"></div>
								Finally, AI that works for the whole team
							</span>
							<h1 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight hero-enter" style={{ animationDelay: '0.1s' }}>
								Your team's AI, built for{' '}
								<span className="whitespace-nowrap"><span className="hero-tw-text">{twText}</span><span className="hero-tw-cursor">|</span></span>
							</h1>
							<p className="font-body-lg text-body-lg text-white/50 mb-stack-lg max-w-xl hero-enter" style={{ animationDelay: '0.2s' }}>
								Your best answers are buried in Slack, Salesforce, and last quarter's docs. Nuerova finds them instantly, runs the follow-up automatically, and makes sure everyone benefits — not just whoever was in the room.
							</p>
							<div className="flex flex-col sm:flex-row gap-stack-md mb-stack-lg hero-enter" style={{ animationDelay: '0.3s' }}>
								<button
									onClick={scrollToContact}
									className="font-button text-button bg-status-blue text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:-translate-y-0.5"
									style={{ boxShadow: '0 0 24px rgba(59,130,246,0.25)' }}
									onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.45)'; }}
									onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(59,130,246,0.25)'; }}
								>
									Request Demo
								</button>
								<Link
									to="/how-it-works"
									className="font-button text-button bg-transparent border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-150 flex items-center justify-center font-bold"
								>
									See how it works
								</Link>
							</div>
							<div className="flex flex-wrap gap-4 hero-enter" style={{ animationDelay: '0.4s' }}>
								<span className="font-label-caps text-[11px] text-white/60 border border-white/10 px-3 py-1.5 rounded-full transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/5 cursor-default">Works with tools you already use</span>
								<span className="font-label-caps text-[11px] text-white/60 border border-white/10 px-3 py-1.5 rounded-full transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/5 cursor-default">Learns from every conversation</span>
								<span className="font-label-caps text-[11px] text-white/60 border border-white/10 px-3 py-1.5 rounded-full transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/5 cursor-default">Enterprise-ready from day one</span>
							</div>
						</div>

						{/* Nova Engine Agent Console */}
						<div className="flex-1 w-full md:mt-0 border border-white/10 rounded-xl bg-[#0f0f0f] overflow-hidden mt-8 hero-console-float" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
							{/* Window chrome */}
							<div className="h-10 border-b border-white/10 flex items-center justify-between px-4 bg-[#131313]">
								<div className="flex gap-2">
									<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
									<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
									<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
								</div>
								<div className="text-[10px] text-white/40 font-medium tracking-wide">Nuerova — Team Intelligence</div>
								<div className="flex items-center gap-1.5">
									<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 hero-dot-pulse"></div>
									<span className="text-[10px] text-emerald-400">Live</span>
								</div>
							</div>

							{/* Body: sidebar + chat */}
							<div className="flex">
								{/* Mini icon sidebar */}
								<div className="w-10 border-r border-white/10 flex flex-col items-center py-3 gap-5 bg-[#0a0a0a] flex-shrink-0">
									<div className="w-6 h-6 rounded bg-status-blue/20 border border-status-blue/30 flex items-center justify-center" title="Agents">
										<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="rgba(96,165,250,0.8)" strokeWidth="1.5"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="rgba(96,165,250,0.8)" strokeWidth="1.5" strokeLinecap="round"/></svg>
									</div>
									<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center" title="Automations">
										<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h3l2-4 2 8 2-4h1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
									</div>
									<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center" title="Skills">
										<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/></svg>
									</div>
									<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center" title="Memory">
										<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><ellipse cx="8" cy="5" rx="5" ry="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><path d="M3 5v6c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/></svg>
									</div>
									<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center" title="LLM Keys">
										<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="5.5" cy="8" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><path d="M8 8h6M12 6v4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/></svg>
									</div>
								</div>

							{/* Chat area */}
							<div className="flex-1 flex flex-col overflow-hidden">

  							{/* Tab bar */}
  							<div className="flex border-b border-white/10 bg-[#0d0d0d]">
    							{(["ask", "automate", "clusters"] as const).map(tab => (
      							<button key={tab} onClick={() => setConsoleTab(tab)}
        							className={`px-4 py-2.5 text-[11px] font-medium tracking-wide transition-all duration-150 border-b-2 ${consoleTab === tab ? 'text-white border-status-blue' : 'text-white/35 border-transparent hover:text-white/60'}`}
      							>
        							{tab === 'ask' ? 'Ask Anything' : tab === 'automate' ? 'Automate' : 'Clusters'}
      							</button>
    							))}
  							</div>

  							{/* ASK TAB */}
  							{consoleTab === 'ask' && (
    							<div className="p-3 space-y-2.5">
      							<div className="flex justify-end">
        							<div className="bg-status-blue/15 border border-status-blue/20 px-3 py-2 rounded-lg max-w-[82%]">
          							<p className="text-[11px] text-white leading-relaxed">Which accounts are at churn risk this quarter?</p>
        							</div>
      							</div>
      							<div className="border border-orange-500/20 bg-orange-500/[0.04] rounded-lg px-3 py-2">
        							<div className="flex items-center gap-2 mb-1">
          							<span className="text-[10px] text-orange-400 font-mono font-medium">sql_query</span>
          							<span className="text-[9px] text-white/30">→ CS Cluster · Salesforce</span>
        							</div>
        							<code className="text-[9px] text-white/45 font-mono">SELECT account, health_score FROM accounts WHERE churn_risk &gt; 0.65</code>
      							</div>
      							<div className="border border-purple-500/20 bg-purple-500/[0.04] rounded-lg px-3 py-2">
        							<div className="flex items-center gap-2 mb-1">
          							<span className="text-[10px] text-purple-400 font-mono font-medium">web_search</span>
          							<span className="text-[9px] text-white/30">→ Gong calls · Slack history</span>
        							</div>
        							<code className="text-[9px] text-white/45 font-mono">Q2 sentiment: acme globaltech meridian</code>
      							</div>
      							<div className="flex gap-2 items-start">
        							<div className="w-5 h-5 rounded bg-status-blue/20 border border-status-blue/30 flex-shrink-0 flex items-center justify-center mt-0.5"><span className="text-[7px] text-status-blue font-bold">N</span></div>
        							<div className="flex-1 min-w-0">
          							<p className="text-[11px] text-white/80 leading-relaxed"><span className="text-white font-semibold">3 accounts flagged:</span> Acme Corp (usage ↓28%), GlobalTech (renewal Sept), Meridian (negative sentiment ×3). Recommend immediate outreach.</p>
          							<div className="flex flex-wrap gap-1.5 mt-2">
            							<span className="text-[9px] text-status-blue bg-status-blue/10 border border-status-blue/20 px-2 py-0.5 rounded">CS Cluster ↗</span>
            							<span className="text-[9px] text-status-blue bg-status-blue/10 border border-status-blue/20 px-2 py-0.5 rounded">Salesforce ↗</span>
            							<span className="text-[9px] text-status-blue bg-status-blue/10 border border-status-blue/20 px-2 py-0.5 rounded">Gong Calls ↗</span>
          							</div>
        							</div>
      							</div>
    							</div>
  							)}

  							{/* AUTOMATE TAB */}
  							{consoleTab === 'automate' && (
    							<div className="p-3">
      							<div className="flex items-center justify-between mb-3">
        							<div>
          							<div className="text-xs font-semibold text-white">Account Renewal Risk</div>
          							<div className="text-[10px] text-white/40">Runs automatically · last ran 2h ago · 12 runs this week</div>
        							</div>
        							<span className="text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">Active</span>
      							</div>
      							<div className="space-y-1.5">
        							<div className="border border-white/10 bg-white/[0.02] rounded-lg px-3 py-2 flex items-center gap-3">
          							<div className="w-5 h-5 rounded bg-orange-500/20 border border-orange-500/30 flex-shrink-0 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 1v3l2 1" stroke="rgba(249,115,22,0.9)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="4" cy="4" r="3" stroke="rgba(249,115,22,0.6)" strokeWidth="1"/></svg></div>
          							<div className="flex-1"><div className="text-[11px] text-white">Trigger</div><div className="text-[10px] text-white/40">Renewal date &lt; 45 days · from Salesforce</div></div>
        							</div>
        							<div className="flex justify-center"><div className="w-px h-3 bg-white/10"></div></div>
        							<div className="border border-status-blue/20 bg-status-blue/[0.04] rounded-lg px-3 py-2 flex items-center gap-3">
          							<div className="w-5 h-5 rounded bg-status-blue/20 border border-status-blue/30 flex-shrink-0 flex items-center justify-center"><span className="text-[7px] text-status-blue font-bold">N</span></div>
          							<div className="flex-1"><div className="text-[11px] text-white">Nova Agent reasons over CS Cluster</div><div className="text-[10px] text-white/40">Pulls account health, call history, and usage data</div></div>
        							</div>
        							<div className="flex justify-center"><div className="w-px h-3 bg-white/10"></div></div>
        							<div className="border border-white/10 bg-white/[0.02] rounded-lg px-3 py-2 flex items-center gap-3">
          							<div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-500/30 flex-shrink-0 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 2h6M1 4h4M1 6h5" stroke="rgba(168,85,247,0.9)" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
          							<div className="flex-1"><div className="text-[11px] text-white">Draft account brief</div><div className="text-[10px] text-white/40">AI-written summary with risk score and recommended actions</div></div>
        							</div>
        							<div className="flex justify-center"><div className="w-px h-3 bg-white/10"></div></div>
        							<div className="border border-emerald-500/20 bg-emerald-500/[0.04] rounded-lg px-3 py-2 flex items-center gap-3">
          							<div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex-shrink-0 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="rgba(52,211,153,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          							<div className="flex-1"><div className="text-[11px] text-white">Post to Slack #cs-alerts + create Salesforce task</div><div className="text-[10px] text-white/40">Team notified · follow-up tracked automatically</div></div>
        							</div>
      							</div>
    							</div>
  							)}

  							{/* CLUSTERS TAB */}
  							{consoleTab === 'clusters' && (
    							<div className="p-3 space-y-2.5">
      							<div className="border border-white/10 bg-white/[0.02] rounded-lg px-3 py-2">
        							<div className="text-[10px] text-white/40 mb-2">CS Cluster · 3 members contributing</div>
        							<div className="space-y-1.5">
          							<div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-status-blue/30 border border-status-blue/40 flex items-center justify-center"><span className="text-[7px] text-status-blue">A</span></div><span className="text-[10px] text-white/70">Alice</span><span className="text-[9px] text-white/30">Salesforce · Gong Calls</span></div>
          							<div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-500/30 border border-purple-500/40 flex items-center justify-center"><span className="text-[7px] text-purple-400">B</span></div><span className="text-[10px] text-white/70">Bob</span><span className="text-[9px] text-white/30">Slack · Gmail</span></div>
          							<div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-500/30 border border-emerald-500/40 flex items-center justify-center"><span className="text-[7px] text-emerald-400">C</span></div><span className="text-[10px] text-white/70">Carol</span><span className="text-[9px] text-white/30">Google Drive · Confluence</span></div>
        							</div>
      							</div>
      							<div className="flex justify-end">
        							<div className="bg-status-blue/15 border border-status-blue/20 px-3 py-2 rounded-lg max-w-[85%]"><p className="text-[11px] text-white">What came out of the GlobalTech call?</p></div>
      							</div>
      							<div className="flex gap-2 items-start">
        							<div className="w-5 h-5 rounded bg-status-blue/20 border border-status-blue/30 flex-shrink-0 flex items-center justify-center mt-0.5"><span className="text-[7px] text-status-blue font-bold">N</span></div>
        							<div className="flex-1 min-w-0">
          							<p className="text-[11px] text-white/80 leading-relaxed"><span className="text-white font-semibold">From Alice's Gong call (Jun 11):</span> GlobalTech raised pricing concerns and asked for a dedicated CSM. Bob's Slack thread confirms exec sponsor is disengaged since May.</p>
          							<div className="flex flex-wrap gap-1.5 mt-2">
            							<span className="text-[9px] text-status-blue bg-status-blue/10 border border-status-blue/20 px-2 py-0.5 rounded">Alice / Gong ↗</span>
            							<span className="text-[9px] text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2 py-0.5 rounded">Bob / Slack ↗</span>
          							</div>
        							</div>
      							</div>
    							</div>
  							)}

							</div>
							</div>
							{/* Footer: models + memory */}
							<div className="border-t border-white/10 px-4 py-2 bg-[#0a0a0a] flex items-center justify-between">
								<div className="flex items-center gap-2">
									<span className="text-[9px] text-white/30 uppercase tracking-wide">LLM</span>
									<span className="text-[9px] text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded">GPT-4o</span>
									<span className="text-[9px] text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded">Claude 3.5</span>
									<span className="text-[9px] text-white/35">+8 models</span>
								</div>
								<div className="flex items-center gap-1.5">
									<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
									<span className="text-[9px] text-white/35">mem0 memory · RBAC enforced</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── CURRENT REALITY SECTION ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-stack-lg flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">THE CURRENT REALITY</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl mb-4 font-bold tracking-tight">Teams are running on scattered context and manual heroics.</h2>
						<p className="font-body-md text-body-md text-white/50">Every tool captures knowledge. None of it compounds.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
						<div className="border border-white/10 p-8 rounded-lg bg-transparent">
							<div className="font-headline-lg text-5xl text-primary mb-4 font-bold">73%</div>
							<p className="font-body-md text-sm text-white/50">of critical context gets trapped in private threads, docs, and inboxes.</p>
						</div>
						<div className="border border-white/10 p-8 rounded-lg bg-transparent">
							<div className="font-headline-lg text-5xl text-primary mb-4 font-bold">40 hrs</div>
							<p className="font-body-md text-sm text-white/50">lost each month re-sharing background that should already be known.</p>
						</div>
						<div className="border border-white/10 p-8 rounded-lg bg-transparent">
							<div className="font-headline-lg text-5xl text-primary mb-4 font-bold">6 mo</div>
							<p className="font-body-md text-sm text-white/50">of momentum can disappear when a senior operator leaves.</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="border border-white/10 border-t-2 border-t-red-500 p-8 rounded-b-lg bg-transparent">
							<div className="text-xs text-status-blue font-bold mb-4 bg-status-blue/10 w-8 h-8 flex items-center justify-center rounded">01</div>
							<h3 className="font-headline-sm text-xl text-primary mb-3 font-semibold">Brain drain every time someone leaves</h3>
							<p className="font-body-md text-sm text-white/50">When your best people exit, they take the playbooks with them. Nuerova makes that knowledge durable.</p>
						</div>
						<div className="border border-white/10 border-t-2 border-t-orange-500 p-8 rounded-b-lg bg-transparent">
							<div className="text-xs text-status-blue font-bold mb-4 bg-status-blue/10 w-8 h-8 flex items-center justify-center rounded">02</div>
							<h3 className="font-headline-sm text-xl text-primary mb-3 font-semibold">Agents with no memory are expensive search bars</h3>
							<p className="font-body-md text-sm text-white/50">Generic AI tools start from zero every session. Nuerova agents inherit team context automatically.</p>
						</div>
						<div className="border border-white/10 border-t-2 border-t-slate-500 p-8 rounded-b-lg bg-transparent">
							<div className="text-xs text-status-blue font-bold mb-4 bg-status-blue/10 w-8 h-8 flex items-center justify-center rounded">03</div>
							<h3 className="font-headline-sm text-xl text-primary mb-3 font-semibold">Automation that cannot think cannot scale</h3>
							<p className="font-body-md text-sm text-white/50">Rigid rules break on edge cases. Nuerova workflows reason before they act or escalate.</p>
						</div>
					</div>
				</section>

				{/* ── HOW IT WORKS SECTION ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">HOW IT WORKS</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl font-bold tracking-tight">From scattered context to governed execution in five steps.</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
						<div className="border border-white/10 p-6 rounded-lg bg-transparent">
							<div className="text-sm text-status-blue font-bold mb-4">01</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Connect your stack</h3>
							<p className="font-body-md text-xs text-white/50">Sync Notion, Slack, Drive, CRM, GitHub, and internal sources.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-lg bg-transparent">
							<div className="text-sm text-status-blue font-bold mb-4">02</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Build clusters</h3>
							<p className="font-body-md text-xs text-white/50">Scope memory by team, project, account, or organization.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-lg bg-transparent">
							<div className="text-sm text-status-blue font-bold mb-4">03</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Deploy agents</h3>
							<p className="font-body-md text-xs text-white/50">Agents inherit the right cluster context before responding.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-lg bg-transparent">
							<div className="text-sm text-status-blue font-bold mb-4">04</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Automate work</h3>
							<p className="font-body-md text-xs text-white/50">Trigger workflows that reason, branch, act, and escalate.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-lg bg-transparent">
							<div className="text-sm text-status-blue font-bold mb-4">05</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Govern confidently</h3>
							<p className="font-body-md text-xs text-white/50">Review RBAC, approvals, audit logs, and usage visibility.</p>
						</div>
					</div>
				</section>

				{/* ── PLATFORM GLIMPSES SECTION (Interactive Tabs) ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">PLATFORM GLIMPSES</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl mb-4 font-bold tracking-tight">A shared AI brain you can inspect, govern, and reuse.</h2>
						<p className="font-body-md text-body-md text-white/50">Product visuals designed around the surfaces enterprise buyers need to see.</p>
					</div>
					<div className="border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a]">
						{/* Tab Selectors */}
						<div className="flex border-b border-white/10 flex-wrap">
							<button 
								onClick={() => setActiveTab("clusters")}
								className={`flex-1 py-4 text-sm font-medium transition-all ${activeTab === "clusters" ? "text-status-blue bg-status-blue/5 border-b-2 border-status-blue font-semibold" : "text-white/60 hover:text-white/80"}`}
							>
								Knowledge Clusters
							</button>
							<button 
								onClick={() => setActiveTab("agents")}
								className={`flex-1 py-4 text-sm font-medium transition-all ${activeTab === "agents" ? "text-status-blue bg-status-blue/5 border-b-2 border-status-blue font-semibold" : "text-white/60 hover:text-white/80"}`}
							>
								Agent Workspace
							</button>
							<button 
								onClick={() => setActiveTab("automation")}
								className={`flex-1 py-4 text-sm font-medium transition-all ${activeTab === "automation" ? "text-status-blue bg-status-blue/5 border-b-2 border-status-blue font-semibold" : "text-white/60 hover:text-white/80"}`}
							>
								Automation Builder
							</button>
							<button 
								onClick={() => setActiveTab("audit")}
								className={`flex-1 py-4 text-sm font-medium transition-all ${activeTab === "audit" ? "text-status-blue bg-status-blue/5 border-b-2 border-status-blue font-semibold" : "text-white/60 hover:text-white/80"}`}
							>
								Admin and Audit
							</button>
						</div>

						{/* Tab Panel contents */}
						<div className="flex flex-col md:flex-row p-8 gap-12 items-center">
							{activeTab === "clusters" && (
								<>
									<div className="flex-1 w-full border border-white/10 rounded-lg p-6 bg-[#131313] relative min-h-[400px] flex flex-col justify-between">
										<div className="flex justify-between items-center mb-8">
											<span className="text-xs font-medium text-white/50">Cluster health</span>
											<span className="text-xs font-medium text-emerald-500">Org scoped</span>
										</div>
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="w-full h-px bg-white/10 absolute top-1/2"></div>
											<div className="h-full w-px bg-white/10 absolute left-1/2"></div>
										</div>
										<div className="relative h-64 flex items-center justify-center">
											<div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-white/20 px-6 py-3 rounded-full text-sm font-medium">CS</div>
											<div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-white/20 px-6 py-3 rounded-full text-sm font-medium">Ops</div>
											<div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-[#1a1a1a] border border-white/20 px-6 py-3 rounded-full text-sm font-medium">Eng</div>
											<div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-[#1a1a1a] border border-white/20 px-6 py-3 rounded-full text-sm font-medium">RevOps</div>
											<div className="bg-primary text-black px-8 py-4 rounded-full text-base font-bold relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">Nuerova</div>
										</div>
										<div className="grid grid-cols-3 gap-4 mt-8">
											<div className="border border-white/10 p-3 rounded text-xs text-white/80 text-center">Permissions synced</div>
											<div className="border border-white/10 p-3 rounded text-xs text-white/80 text-center">124 citations this week</div>
											<div className="border border-white/10 p-3 rounded text-xs text-white/80 text-center">3 stale sources flagged</div>
										</div>
									</div>
									<div className="w-full md:w-80 flex-shrink-0">
										<h3 className="font-headline-md text-3xl text-primary mb-4 leading-snug font-bold">Every cluster scoped.<br />Nothing bleeds across teams.</h3>
										<p className="font-body-md text-sm text-white/50 leading-relaxed">
											Knowledge is organized by permission boundary, so agents only reason over the context they are allowed to use.
										</p>
									</div>
								</>
							)}

							{activeTab === "agents" && (
								<>
									<div className="flex-1 w-full border border-white/10 rounded-lg p-6 bg-[#131313] min-h-[400px] flex flex-col justify-between">
										<div className="flex justify-between items-center mb-6">
											<span className="text-xs font-medium text-white/50">Agent Sessions</span>
											<span className="text-xs font-medium text-emerald-500">Online</span>
										</div>
										<div className="space-y-4 flex-grow flex flex-col justify-center">
											<div className="flex justify-end">
												<div className="bg-status-blue/20 border border-status-blue/30 text-white p-3 rounded-lg text-sm max-w-md">
													What changed since the last QBR?
												</div>
											</div>
											<div className="flex justify-start">
												<div className="bg-white/5 border border-white/10 text-white p-4 rounded-lg text-sm max-w-md relative">
													<div className="w-full h-1 bg-white/10 rounded-full mb-3 overflow-hidden">
														<div className="w-full h-full bg-status-blue"></div>
													</div>
													<p className="leading-relaxed mb-3">Usage recovered after onboarding. Security review is the only open blocker.</p>
													<div className="flex gap-2">
														<span className="text-[10px] text-status-blue bg-status-blue/10 px-2 py-0.5 rounded">Gong recap</span>
														<span className="text-[10px] text-status-blue bg-status-blue/10 px-2 py-0.5 rounded">Salesforce Opp</span>
													</div>
												</div>
											</div>
										</div>
										<div className="text-[10px] text-white/30 text-center mt-4">Security isolation active. Answers are fully cited.</div>
									</div>
									<div className="w-full md:w-80 flex-shrink-0">
										<h3 className="font-headline-md text-3xl text-primary mb-4 leading-snug font-bold">Agents that know your context, not just your question.</h3>
										<p className="font-body-md text-sm text-white/50 leading-relaxed">
											Responses cite cluster knowledge inline, making AI output reviewable instead of mysterious.
										</p>
									</div>
								</>
							)}

							{activeTab === "automation" && (
								<>
									<div className="flex-1 w-full border border-white/10 rounded-lg p-6 bg-[#131313] min-h-[400px] flex flex-col justify-between">
										<div className="flex justify-between items-center mb-6">
											<span className="text-xs font-medium text-white/50">Workflow Status</span>
											<span className="text-xs font-medium text-orange-500">Pending Review</span>
										</div>
										<div className="space-y-3 flex-grow flex flex-col justify-center max-w-sm mx-auto w-full">
											<div className="border border-white/10 p-3 rounded bg-[#0a0a0a] text-center text-xs text-white/70">
												Trigger: Webhook Inbound
											</div>
											<div className="flex justify-center"><div className="w-px h-3 bg-white/10"></div></div>
											<div className="border border-status-blue/30 bg-status-blue/5 p-3 rounded text-center text-xs text-status-blue font-medium">
												Agent reasoning over Knowledge Clusters
											</div>
											<div className="flex justify-center"><div className="w-px h-3 bg-white/10"></div></div>
											<div className="border border-white/10 p-3 rounded bg-[#0a0a0a] text-center text-xs text-white/70">
												Confidence check & validation
											</div>
											<div className="flex justify-center"><div className="w-px h-3 bg-white/10"></div></div>
											<div className="border border-orange-500/30 bg-orange-500/5 p-3 rounded text-center text-xs text-orange-500 font-bold">
												Draft account plan & route for CSM approval
											</div>
										</div>
										<div className="text-[10px] text-white/30 text-center mt-4">Automatic execution safe-guards enabled.</div>
									</div>
									<div className="w-full md:w-80 flex-shrink-0">
										<h3 className="font-headline-md text-3xl text-primary mb-4 leading-snug font-bold">Workflows that think before they run.</h3>
										<p className="font-body-md text-sm text-white/50 leading-relaxed">
											Triggers can consult scoped knowledge, choose an execution path, and request human verification before acting.
										</p>
									</div>
								</>
							)}

							{activeTab === "audit" && (
								<>
									<div className="flex-1 w-full border border-white/10 rounded-lg p-6 bg-[#131313] min-h-[400px] flex flex-col justify-between">
										<div className="flex justify-between items-center mb-6">
											<span className="text-xs font-medium text-white/50">Audit log feed</span>
											<span className="text-xs font-medium text-emerald-500">Live</span>
										</div>
										<div className="space-y-3 flex-grow flex flex-col justify-center text-xs">
											<div className="border-b border-white/5 pb-2 flex justify-between items-center">
												<div className="flex gap-2 items-center">
													<strong className="text-white bg-white/10 px-1.5 py-0.5 rounded text-[10px]">ADMIN</strong>
													<span className="text-white/70">Approved automation run</span>
												</div>
												<small className="text-white/40">2m ago</small>
											</div>
											<div className="border-b border-white/5 pb-2 flex justify-between items-center">
												<div className="flex gap-2 items-center">
													<strong className="text-status-blue bg-status-blue/10 px-1.5 py-0.5 rounded text-[10px]">AGENT</strong>
													<span className="text-white/70">Cited CS cluster source</span>
												</div>
												<small className="text-white/40">8m ago</small>
											</div>
											<div className="border-b border-white/5 pb-2 flex justify-between items-center">
												<div className="flex gap-2 items-center">
													<strong className="text-white bg-white/10 px-1.5 py-0.5 rounded text-[10px]">OWNER</strong>
													<span className="text-white/70">Updated RBAC role permissions</span>
												</div>
												<small className="text-white/40">1h ago</small>
											</div>
											<div className="border-b border-white/5 pb-2 flex justify-between items-center">
												<div className="flex gap-2 items-center">
													<strong className="text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded text-[10px]">SYSTEM</strong>
													<span className="text-white/70">Blocked unauthorized cross-cluster read</span>
												</div>
												<small className="text-white/40">4h ago</small>
											</div>
										</div>
										<div className="text-[10px] text-white/30 text-center mt-4">Immutable logs synced to system databases.</div>
									</div>
									<div className="w-full md:w-80 flex-shrink-0">
										<h3 className="font-headline-md text-3xl text-primary mb-4 leading-snug font-bold">Full governance visibility.</h3>
										<p className="font-body-md text-sm text-white/50 leading-relaxed">
											Audit logs, granular scoped roles, and approval trails make AI agent activities easier to trust and audit.
										</p>
									</div>
								</>
							)}
						</div>
					</div>
				</section>

				{/* ── INTEGRATIONS SECTION ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-12 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue border border-status-blue/20 px-4 py-1.5 rounded-full inline-block mb-stack-md">INTEGRATIONS</span>
						<h2 className="font-headline-md text-headline-md text-primary mb-4 font-bold tracking-tight">Plugs into the stack your team already runs.</h2>
						<p className="font-body-md text-body-md text-white/50">Connect knowledge sources in minutes, not months.</p>
					</div>
					<div className="max-w-4xl mx-auto">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">Slack</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">Notion</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">Google Drive</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">GitHub</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">HubSpot</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">Salesforce</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">Jira</span>
							</div>
							<div className="h-24 rounded-lg flex items-center justify-center border border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-colors duration-150">
								<span className="text-sm font-medium text-white/80">Confluence</span>
							</div>
						</div>
						<div className="text-center mt-8">
							<p className="text-sm font-medium text-white/60">REST API and webhooks for everything else.</p>
						</div>
					</div>
				</section>

				{/* ── REQUEST A DEMO SECTION ── */}
				<section className="w-full bg-[#111315] py-section-gap border-y border-white/[0.08] reveal" id="contact">
					<div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row gap-16 items-center">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-white/80 border border-white/20 px-3 py-1 rounded-full inline-block mb-stack-md">REQUEST A DEMO</span>
							<h2 className="font-headline-lg text-5xl md:text-6xl text-primary mb-stack-md font-bold tracking-tight leading-none">Your team's knowledge should not depend on one person being in the room.</h2>
							<p className="font-body-md text-body-md text-white/60 mb-stack-lg max-w-xl leading-relaxed">
								Nuerova gives teams a shared AI brain that persists, scales, and can be governed.
							</p>
							<div className="flex flex-wrap gap-3">
								<span className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">No lock-in</span>
								<span className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Data stays yours</span>
								<span className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Setup support included</span>
								<span className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Enterprise controls built in</span>
							</div>
						</div>

						{/* Demo Submission Card */}
						<div className="w-full md:w-[500px] bg-[#1a1c1e] border border-white/10 rounded-xl p-8">
							{demoSubmitted ? (
								<div className="flex flex-col items-center justify-center text-center py-12">
									<h3 className="text-2xl font-bold text-white mb-4">Request Staged!</h3>
									<p className="text-white/70 mb-0">
										{demoMessage || "We've recorded your demo request. Our team will reach out shortly."}
									</p>
								</div>
							) : (
								<form className="space-y-4" onSubmit={handleDemoSubmit}>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1">Name</label>
											<input 
												name="name" 
												type="text" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-[#2a2c2e] border-none rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none" 
											/>
										</div>
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1">Work email</label>
											<input 
												name="email" 
												type="email" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-[#2a2c2e] border-none rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none" 
											/>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1">Company</label>
											<input 
												name="company" 
												type="text" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-[#2a2c2e] border-none rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none" 
											/>
										</div>
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1">Team size</label>
											<select 
												name="team-size" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-[#2a2c2e] border-none rounded text-white/70 text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none"
											>
												<option value="">Select team size</option>
												<option value="5-25">5-25</option>
												<option value="26-50">26-50</option>
												<option value="51-200">51-200</option>
												<option value="201-500">201-500</option>
												<option value="500+">500+</option>
											</select>
										</div>
									</div>
									<div>
										<label className="block text-xs font-medium text-white/70 mb-1">Primary use case</label>
										<select 
											name="use-case" 
											required
											disabled={isDemoSubmitting}
											className="w-full bg-[#2a2c2e] border-none rounded text-white/70 text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none"
										>
											<option value="">Select use case</option>
											<option value="Operations">Operations</option>
											<option value="Customer Success">Customer Success</option>
											<option value="Engineering">Engineering</option>
											<option value="RevOps">RevOps</option>
											<option value="Other">Other</option>
										</select>
									</div>
									<div>
										<label className="block text-xs font-medium text-white/70 mb-1">What should Nuerova help with?</label>
										<textarea 
											name="message" 
											disabled={isDemoSubmitting}
											className="w-full bg-[#2a2c2e] border-none rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 h-24 resize-none outline-none"
										></textarea>
									</div>
									{demoError && (
										<p style={{ color: "#ff5b5b", fontSize: "14px", margin: "4px 0 0" }}>
											{demoError}
										</p>
									)}
									<button 
										type="submit"
										disabled={isDemoSubmitting}
										className="w-full bg-[#0066cc] text-white font-medium py-3 rounded hover:bg-[#0052a3] transition-colors mt-2"
									>
										{isDemoSubmitting ? "Requesting..." : "Request your demo"}
									</button>
									<p className="text-[10px] text-white/40 text-center mt-4">A human reviews every request. No pressure, no generic sales loop.</p>
								</form>
							)}
						</div>
					</div>
				</section>

				{/* ── EARLY ACCESS WAITLIST SECTION ── */}
				<section className="section cta-section bg-[#0a0a0a] border-t border-white/10 py-24 text-center reveal">
					<div className="container max-w-4xl mx-auto px-gutter">
						<h2 className="font-headline-md text-headline-md text-primary mb-4 font-bold tracking-tight">Be first when we open the gates.</h2>
						<p className="font-body-md text-white/50 mb-8 max-w-2xl mx-auto">Limited pilot with 50 teams. No credit card required.</p>
						{!waitlistSubmitted ? (
							<form className="cta-form flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={handleWaitlistSubmit}>
								<input 
									type="email" 
									placeholder="Work email" 
									required 
									value={waitlistEmail}
									onChange={(e) => setWaitlistEmail(e.target.value)}
									disabled={isWaitlistSubmitting}
									className="flex-grow bg-[#131313] border border-white/10 rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-3 px-4 outline-none"
								/>
								<button 
									type="submit" 
									disabled={isWaitlistSubmitting}
									className="font-button text-button bg-primary text-black px-6 py-3 rounded hover:opacity-90 transition-opacity duration-150 font-bold"
								>
									{isWaitlistSubmitting ? "Requesting..." : "Request Access →"}
								</button>
							</form>
						) : (
							<p className="font-body-md text-emerald-400 font-medium">You're on the list. We'll be in touch.</p>
						)}
						{waitlistError && (
							<p style={{ color: "#ff8b8b", fontSize: "14px", marginTop: "12px", marginBottom: 0 }}>
								{waitlistError}
							</p>
						)}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackEvent } from "@/lib/analytics";

export function HomePage() {
	useSEO({
		title: "Nuerova — AI Skills, Shared Knowledge & Automated Workflows for Enterprise Teams",
		description:
			"Nuerova gives teams ready-made and customizable AI skills, shared knowledge clusters that persist across the org, and automated workflows that reason before acting — with enterprise governance built in.",
		schemaOrg: [
			{
				"@type": "Organization",
				"name": "Nuerova",
				"url": "https://nuerova.xyz",
				"logo": "https://nuerova.xyz/brand-logo.png",
				"sameAs": [
					"https://twitter.com/nuerova",
					"https://github.com/nuerova",
					"https://linkedin.com/company/nuerova"
				],
				"description": "Enterprise intelligence platform centralizing knowledge into scoped memory clusters."
			},
			{
				"@type": "SoftwareApplication",
				"name": "Nuerova Platform",
				"applicationCategory": "BusinessApplication",
				"operatingSystem": "Web",
				"offers": {
					"@type": "Offer",
					"price": "0",
					"priceCurrency": "USD"
				}
			}
		]
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
	const [consoleTab, setConsoleTab] = useState<"ask" | "automate" | "clusters" | "skills">("ask");

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
			<style>{`
				@keyframes flowDown {
					0% { transform: translateY(-100%); }
					100% { transform: translateY(100%); }
				}
			`}</style>
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
								Introducing Clusters & Twins — AI with persistent team memory
							</span>
							<h1 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight hero-enter" style={{ animationDelay: '0.1s' }}>
								Your team's AI, built for{' '}
								<span className="whitespace-nowrap"><span className="hero-tw-text">{twText}</span><span className="hero-tw-cursor">|</span></span>
							</h1>
							<p className="font-body-lg text-body-lg text-white/50 mb-stack-lg max-w-xl hero-enter" style={{ animationDelay: '0.2s' }}>
								Every other AI tool starts from a blank slate. Nuerova gives your team persistent, scoped knowledge that agents inherit before every response — so the intelligence your team builds compounds instead of disappearing with the next tab close.
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
						<div className="flex-1 w-full md:mt-0 border border-white/10 rounded-xl bg-[#0f0f0f] overflow-hidden mt-8 hero-console-float h-[420px] flex flex-col" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
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
							<div className="flex flex-1 overflow-hidden">
								{/* Mini icon sidebar */}
								<div className="w-12 border-r border-white/10 flex flex-col items-center py-4 gap-4 bg-[#0a0a0a] flex-shrink-0 z-10 relative">
									<button onClick={() => setConsoleTab('ask')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${consoleTab === 'ask' ? 'bg-status-blue/20 border border-status-blue/30 text-status-blue shadow-[0_0_12px_rgba(59,130,246,0.3)]' : 'bg-transparent border border-transparent text-white/40 hover:bg-white/5 hover:text-white/80'}`} title="Agents">
										<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
									</button>
									<button onClick={() => setConsoleTab('automate')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${consoleTab === 'automate' ? 'bg-status-blue/20 border border-status-blue/30 text-status-blue shadow-[0_0_12px_rgba(59,130,246,0.3)]' : 'bg-transparent border border-transparent text-white/40 hover:bg-white/5 hover:text-white/80'}`} title="Automations">
										<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h3l2-4 2 8 2-4h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
									</button>
									<button onClick={() => setConsoleTab('skills')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${consoleTab === 'skills' ? 'bg-status-blue/20 border border-status-blue/30 text-status-blue shadow-[0_0_12px_rgba(59,130,246,0.3)]' : 'bg-transparent border border-transparent text-white/40 hover:bg-white/5 hover:text-white/80'}`} title="Skills">
										<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
									</button>
									<button onClick={() => setConsoleTab('clusters')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${consoleTab === 'clusters' ? 'bg-status-blue/20 border border-status-blue/30 text-status-blue shadow-[0_0_12px_rgba(59,130,246,0.3)]' : 'bg-transparent border border-transparent text-white/40 hover:bg-white/5 hover:text-white/80'}`} title="Memory Clusters">
										<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><ellipse cx="8" cy="5" rx="5" ry="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 5v6c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V5" stroke="currentColor" strokeWidth="1.5"/></svg>
									</button>
									<div className="flex-1"></div>
									<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-transparent border border-transparent text-white/40 hover:bg-white/5 hover:text-white/80 transition-all duration-200 mb-2 cursor-pointer" title="Settings">
										<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="5.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8h6M12 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
									</button>
								</div>

							{/* Chat area */}
							<div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden relative">

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
    							<div className="flex-1 bg-[#111111] relative overflow-hidden flex flex-col p-4 items-center justify-center animate-in fade-in duration-300 min-h-full">
									{/* Background dots pattern */}
									<div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
									
									<div className="relative z-10 flex flex-col items-center w-full max-w-[320px]">
										{/* Trigger Node */}
										<div className="w-full bg-[#1a1a1a] border border-orange-500/30 rounded-lg p-3 shadow-[0_4px_20px_rgba(249,115,22,0.1)] relative transition-all duration-300 hover:border-orange-500/50">
											<div className="flex items-center justify-between mb-1.5">
												<div className="flex items-center gap-2">
													<div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 8 8" fill="none"><path d="M4 1v3l2 1" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/><circle cx="4" cy="4" r="3" stroke="#f97316" strokeWidth="1"/></svg></div>
													<div className="text-xs font-semibold text-white">Webhook</div>
												</div>
												<span className="text-[9px] bg-white/10 text-white/60 px-1.5 py-0.5 rounded uppercase tracking-wide">Trigger</span>
											</div>
											<div className="text-[10px] text-white/40">Zendesk · Account health dropped</div>
											<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-orange-500/30 rounded-full z-10 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-orange-500/60 rounded-full animate-pulse"></div></div>
										</div>

										{/* Connecting Line */}
										<div className="w-0.5 h-6 bg-white/10 relative overflow-hidden">
											<div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-orange-500/80 to-status-blue/80 opacity-50" style={{ animation: 'flowDown 2s linear infinite' }}></div>
										</div>

										{/* Agent Node */}
										<div className="w-full bg-status-blue/[0.05] border border-status-blue/40 rounded-lg p-3 shadow-[0_0_24px_rgba(59,130,246,0.15)] relative transform hover:scale-[1.02] transition-transform cursor-pointer">
											<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-status-blue/40 rounded-full z-10"></div>
											<div className="flex items-center justify-between mb-2">
												<div className="flex items-center gap-2">
													<div className="w-5 h-5 rounded bg-status-blue/20 flex items-center justify-center"><span className="text-[10px] text-status-blue font-bold">N</span></div>
													<div className="text-xs font-semibold text-white">Triage Agent</div>
												</div>
												<span className="text-[9px] bg-status-blue/20 text-status-blue px-1.5 py-0.5 rounded uppercase tracking-wide">Reasoning</span>
											</div>
											<div className="text-[10px] text-white/40 mb-2">Evaluate severity against CS memory cluster</div>
											<div className="bg-black/40 border border-white/5 rounded p-2 flex flex-col gap-1.5">
												<div className="h-1 bg-status-blue/50 rounded w-full"></div>
												<div className="h-1 bg-status-blue/30 rounded w-3/4"></div>
												<div className="h-1 bg-status-blue/10 rounded w-1/2"></div>
											</div>
											<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-status-blue/40 rounded-full z-10 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-status-blue/60 rounded-full animate-pulse"></div></div>
										</div>

										{/* Split Connecting Line */}
										<div className="relative w-full h-8 flex justify-center">
											<div className="w-0.5 h-4 bg-white/10"></div>
											<div className="absolute top-4 left-[25%] right-[25%] h-0.5 bg-white/10"></div>
											<div className="absolute top-4 left-[25%] w-0.5 h-4 bg-white/10"></div>
											<div className="absolute top-4 right-[25%] w-0.5 h-4 bg-white/10"></div>
										</div>

										{/* Bottom Nodes */}
										<div className="flex justify-between w-full gap-4 relative -mt-0.5 px-2">
											{/* Action 1 */}
											<div className="flex-1 bg-[#1a1a1a] border border-emerald-500/30 rounded-lg p-2.5 relative shadow-[0_4px_20px_rgba(16,185,129,0.1)] transition-colors hover:border-emerald-500/50">
												<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-emerald-500/30 rounded-full z-10"></div>
												<div className="flex items-center gap-1.5 mb-1">
													<div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
													<div className="text-[10px] font-semibold text-white truncate">Salesforce</div>
												</div>
												<div className="text-[8px] text-white/40">Update health score</div>
											</div>
											{/* Action 2 */}
											<div className="flex-1 bg-[#1a1a1a] border border-purple-500/30 rounded-lg p-2.5 relative shadow-[0_4px_20px_rgba(168,85,247,0.1)] transition-colors hover:border-purple-500/50">
												<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-purple-500/30 rounded-full z-10"></div>
												<div className="flex items-center gap-1.5 mb-1">
													<div className="w-4 h-4 rounded bg-purple-500/20 flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 2h6M1 4h4M1 6h5" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
													<div className="text-[10px] font-semibold text-white truncate">Slack Alert</div>
												</div>
												<div className="text-[8px] text-white/40">Alert #cs-triage</div>
											</div>
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
  							{/* SKILLS TAB */}
  							{consoleTab === 'skills' && (
    							<div className="p-4 space-y-3">
									<div className="flex items-center justify-between mb-2">
										<div className="text-xs font-semibold text-white">Skill Registry</div>
										<div className="text-[9px] text-white/40">Governed Team Capabilities</div>
									</div>
									<div className="grid grid-cols-2 gap-2">
										<div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-2 hover:border-status-blue/30 transition-colors cursor-pointer">
											<div className="text-[10px] font-semibold text-white mb-1">Summarize Jira Epoch</div>
											<div className="text-[8px] text-white/40">Reads 50+ tickets, outputs markdown</div>
										</div>
										<div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-2 hover:border-status-blue/30 transition-colors cursor-pointer">
											<div className="text-[10px] font-semibold text-white mb-1">Extract Action Items</div>
											<div className="text-[8px] text-white/40">From Zoom or Gong transcripts</div>
										</div>
										<div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-2 hover:border-status-blue/30 transition-colors cursor-pointer">
											<div className="text-[10px] font-semibold text-white mb-1">Draft QBR Prep</div>
											<div className="text-[8px] text-white/40">Pulls usage data and support tickets</div>
										</div>
										<div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-2 hover:border-status-blue/30 transition-colors cursor-pointer">
											<div className="text-[10px] font-semibold text-white mb-1">Translate Policies</div>
											<div className="text-[8px] text-white/40">HR Cluster to multi-language</div>
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

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Before Nuerova */}
						<div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-red-500/30">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
							<h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
								<span className="w-8 h-8 rounded bg-red-500/20 text-red-400 flex items-center justify-center font-bold">✕</span>
								The Status Quo
							</h3>
							<ul className="space-y-6">
								<li className="flex gap-4">
									<div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></div>
									<div>
										<strong className="block text-white mb-1">Brain drain is constant</strong>
										<span className="text-sm text-white/50">When your best people exit, they take their unwritten playbooks and context with them.</span>
									</div>
								</li>
								<li className="flex gap-4">
									<div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></div>
									<div>
										<strong className="block text-white mb-1">Generic AI starts from zero</strong>
										<span className="text-sm text-white/50">Your team wastes hours re-explaining the same company context to chatbots every single day.</span>
									</div>
								</li>
								<li className="flex gap-4">
									<div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></div>
									<div>
										<strong className="block text-white mb-1">Automation is fragile</strong>
										<span className="text-sm text-white/50">Rigid if-this-then-that rules break on the first edge case, requiring constant human triage.</span>
									</div>
								</li>
							</ul>
						</div>

						{/* With Nuerova */}
						<div className="border border-status-blue/30 bg-status-blue/5 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-status-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-status-blue/50 to-transparent"></div>
							<h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
								<span className="w-8 h-8 rounded bg-status-blue/20 text-status-blue flex items-center justify-center font-bold">✓</span>
								With Nuerova
							</h3>
							<ul className="space-y-6">
								<li className="flex gap-4">
									<div className="w-1.5 h-1.5 rounded-full bg-status-blue/50 mt-2 flex-shrink-0"></div>
									<div>
										<strong className="block text-white mb-1">Knowledge compounds instead of walking out the door</strong>
										<span className="text-sm text-white/50">Every solved ticket, call, and decision your team contributes is indexed into a shared Cluster. What one person figured out last quarter is immediately available to everyone — and every agent — this quarter.</span>
									</div>
								</li>
								<li className="flex gap-4">
									<div className="w-1.5 h-1.5 rounded-full bg-status-blue/50 mt-2 flex-shrink-0"></div>
									<div>
										<strong className="block text-white mb-1">Agents answer from your team's context, not the internet</strong>
										<span className="text-sm text-white/50">No re-explaining. No blank slates. Agents inherit your team’s accumulated knowledge automatically — it’s the starting point, not the afterthought.</span>
									</div>
								</li>
								<li className="flex gap-4">
									<div className="w-1.5 h-1.5 rounded-full bg-status-blue/50 mt-2 flex-shrink-0"></div>
									<div>
										<strong className="block text-white mb-1">Workflows can reason</strong>
										<span className="text-sm text-white/50">Trigger AI agents that think through edge cases, ask for approval, and execute across your tools.</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ── HOW IT WORKS SECTION ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">HOW IT WORKS</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl font-bold tracking-tight">From scattered context to governed execution in five steps.</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
						{/* Connecting line for desktop */}
						<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
						
						<div className="border border-white/10 p-6 rounded-2xl bg-[#0a0a0a] relative z-10 transition-all duration-300 hover:border-status-blue/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] group">
							<div className="text-sm text-status-blue font-bold mb-4 bg-status-blue/10 w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-status-blue group-hover:text-white transition-colors duration-300">01</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Connect</h3>
							<p className="font-body-md text-xs text-white/50 leading-relaxed">Sync Notion, Slack, Drive, CRM, GitHub, and internal sources.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-2xl bg-[#0a0a0a] relative z-10 transition-all duration-300 hover:border-status-blue/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] group">
							<div className="text-sm text-status-blue font-bold mb-4 bg-status-blue/10 w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-status-blue group-hover:text-white transition-colors duration-300">02</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Scope</h3>
							<p className="font-body-md text-xs text-white/50 leading-relaxed">Scope memory by team, project, account, or organization.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-2xl bg-[#0a0a0a] relative z-10 transition-all duration-300 hover:border-status-blue/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] group">
							<div className="text-sm text-status-blue font-bold mb-4 bg-status-blue/10 w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-status-blue group-hover:text-white transition-colors duration-300">03</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Deploy</h3>
							<p className="font-body-md text-xs text-white/50 leading-relaxed">Agents inherit the right cluster context before responding.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-2xl bg-[#0a0a0a] relative z-10 transition-all duration-300 hover:border-status-blue/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] group">
							<div className="text-sm text-status-blue font-bold mb-4 bg-status-blue/10 w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-status-blue group-hover:text-white transition-colors duration-300">04</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Automate</h3>
							<p className="font-body-md text-xs text-white/50 leading-relaxed">Trigger workflows that reason, branch, act, and escalate.</p>
						</div>
						<div className="border border-white/10 p-6 rounded-2xl bg-[#0a0a0a] relative z-10 transition-all duration-300 hover:border-status-blue/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] group">
							<div className="text-sm text-status-blue font-bold mb-4 bg-status-blue/10 w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-status-blue group-hover:text-white transition-colors duration-300">05</div>
							<h3 className="font-headline-sm text-lg text-primary mb-2 font-semibold">Govern</h3>
							<p className="font-body-md text-xs text-white/50 leading-relaxed">Review RBAC, approvals, audit logs, and usage visibility.</p>
						</div>
					</div>
				</section>

				{/* ── PLATFORM CAPABILITIES SECTION (Bento Grid) ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">PLATFORM CAPABILITIES</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl mb-4 font-bold tracking-tight">A shared AI brain you can inspect, govern, and reuse.</h2>
						<p className="font-body-md text-body-md text-white/50">Everything your enterprise needs to scale knowledge securely.</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Card 1: Knowledge Clusters */}
						<div className="border border-white/10 rounded-2xl p-8 bg-[#0a0a0a] relative overflow-hidden group hover:border-status-blue/30 transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-status-blue/10 rounded-full blur-3xl group-hover:bg-status-blue/20 transition-all"></div>
							<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">Clusters &amp; Twins — What Makes Nuerova Different</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								A Cluster is a scoped, active knowledge pool your agents draw from before every response — not a search index, not a chat history. Create one per team, per product line, or per enterprise account as a Twin. The more your team contributes, the smarter every agent gets.
							</p>
						</div>

						{/* Card 2: Skill Registry */}
						<div className="border border-white/10 rounded-2xl p-8 bg-[#0a0a0a] relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
							<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="9" height="9" rx="2"/><rect x="13" y="2" width="9" height="9" rx="2"/><rect x="2" y="13" width="9" height="9" rx="2"/><rect x="13" y="13" width="9" height="9" rx="2"/></svg>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">Skills Your Team Actually Uses</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								Ready-made skills for research, writing, analysis, code review, and more — use them immediately, fork and reshape any to fit your workflow, or build new ones from scratch. Wire skills into automated workflows that run on a schedule without anyone asking.
							</p>
						</div>

						{/* Card 3: Automated Workflows */}
						<div className="border border-white/10 rounded-2xl p-8 bg-[#0a0a0a] relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
							<div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
							<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">Workflows That Reason, Not Just Execute</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								Build logic that consults your team's knowledge before acting. Triggers reason through edge cases, branch by outcome, request approvals when needed, and execute across your connected tools — without fragile if-then chains that break on the first exception.
							</p>
						</div>

						{/* Card 4: Enterprise Governance */}
						<div className="border border-white/10 rounded-2xl p-8 bg-[#0a0a0a] relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
							<div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
							<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">Governance That Procurement Expects</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								Every action is logged. Every agent is scoped. RBAC controls what AI can see and do. Approval flows, immutable audit trails, and per-cluster access boundaries give your compliance and security teams exactly the posture they need to say yes.
							</p>
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
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" alt="Slack" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">Slack</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="w-8 h-8 mb-2" style={{ filter: 'invert(1)' }} />
								<span className="text-sm font-medium text-white/80">Notion</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">GitHub</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">Jira</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" alt="Salesforce" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">Salesforce</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">Google Drive</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" alt="Confluence" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">Confluence</span>
							</div>
							<div className="h-24 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
								<img src="https://cdn.simpleicons.org/zendesk/038153" alt="Zendesk" className="w-8 h-8 mb-2" />
								<span className="text-sm font-medium text-white/80">Zendesk</span>
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
						<div className="w-full md:w-[500px] bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative">
							<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
							{demoSubmitted ? (
								<div className="flex flex-col items-center justify-center text-center py-12">
									<div className="w-16 h-16 bg-status-blue/20 text-status-blue rounded-full flex items-center justify-center mb-6">
										<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">Request Staged!</h3>
									<p className="text-white/70 mb-0">
										{demoMessage || "We've recorded your demo request. Our team will reach out shortly."}
									</p>
								</div>
							) : (
								<form className="space-y-4" onSubmit={handleDemoSubmit}>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1.5">Name</label>
											<input 
												name="name" 
												type="text" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-status-blue/50 focus:border-status-blue/50 py-2.5 px-3 outline-none transition-all shadow-inner" 
											/>
										</div>
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1.5">Work email</label>
											<input 
												name="email" 
												type="email" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-status-blue/50 focus:border-status-blue/50 py-2.5 px-3 outline-none transition-all shadow-inner" 
											/>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1.5">Company</label>
											<input 
												name="company" 
												type="text" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-status-blue/50 focus:border-status-blue/50 py-2.5 px-3 outline-none transition-all shadow-inner" 
											/>
										</div>
										<div>
											<label className="block text-xs font-medium text-white/70 mb-1.5">Team size</label>
											<select 
												name="team-size" 
												required
												disabled={isDemoSubmitting}
												className="w-full bg-black/40 border border-white/10 rounded-lg text-white/70 text-sm focus:ring-1 focus:ring-status-blue/50 focus:border-status-blue/50 py-2.5 px-3 outline-none transition-all shadow-inner"
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
										<label className="block text-xs font-medium text-white/70 mb-1.5">Primary use case</label>
										<select 
											name="use-case" 
											required
											disabled={isDemoSubmitting}
											className="w-full bg-black/40 border border-white/10 rounded-lg text-white/70 text-sm focus:ring-1 focus:ring-status-blue/50 focus:border-status-blue/50 py-2.5 px-3 outline-none transition-all shadow-inner"
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
										<label className="block text-xs font-medium text-white/70 mb-1.5">What should Nuerova help with?</label>
										<textarea 
											name="message" 
											disabled={isDemoSubmitting}
											className="w-full bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-status-blue/50 focus:border-status-blue/50 py-2.5 px-3 h-24 resize-none outline-none transition-all shadow-inner"
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
										className="w-full bg-gradient-to-r from-status-blue to-blue-600 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-status-blue/20 hover:-translate-y-0.5 transition-all mt-4 border border-white/10"
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
				<section className="section cta-section bg-[#050505] border-t border-white/10 py-24 text-center reveal relative overflow-hidden">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-status-blue/5 rounded-full blur-3xl pointer-events-none"></div>
					<div className="container max-w-4xl mx-auto px-gutter relative z-10">
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
									className="flex-grow bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-status-blue/50 py-3 px-4 outline-none shadow-inner"
								/>
								<button 
									type="submit" 
									disabled={isWaitlistSubmitting}
									className="font-button text-button bg-gradient-to-r from-status-blue to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-status-blue/20 hover:-translate-y-0.5 transition-all duration-300 font-bold border border-white/10"
								>
									{isWaitlistSubmitting ? "Requesting..." : "Request Access →"}
								</button>
							</form>
						) : (
							<p className="font-body-md text-status-blue font-medium bg-status-blue/10 border border-status-blue/20 py-3 px-6 rounded-lg inline-block">You're on the list. We'll be in touch.</p>
						)}
						{waitlistError && (
							<p style={{ color: "#ff5b5b", fontSize: "14px", marginTop: "12px", marginBottom: 0 }}>
								{waitlistError}
							</p>
						)}
					</div>
				</section>
			</main>

		</div>
	);
}

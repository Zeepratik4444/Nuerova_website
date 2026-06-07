import { SiSalesforce, SiHubspot, SiSlack, SiGooglesheets, SiGooglecalendar, SiGmail, SiZoho } from "react-icons/si";

export function Integrations() {
  const integrations = [
    { name: "Salesforce", icon: <SiSalesforce className="w-7 h-7 text-[#00A1E0]" />, plans: "Scale plan", planVariant: "border-amber-300 text-amber-600" },
    { name: "HubSpot", icon: <SiHubspot className="w-7 h-7 text-[#FF7A59]" />, plans: "Growth+", planVariant: "border-green-300 text-green-600" },
    { name: "Slack", icon: <SiSlack className="w-7 h-7 text-white" />, plans: "All plans", planVariant: "border-green-300 text-green-600" },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-7 h-7 text-[#34A853]" />, plans: "All plans", planVariant: "border-green-300 text-green-600" },
    { name: "Google Calendar", icon: <SiGooglecalendar className="w-7 h-7 text-[#4285F4]" />, plans: "All plans", planVariant: "border-green-300 text-green-600" },
    { 
      name: "Gmail / Zoho Mail", 
      icon: (
        <div className="flex items-center gap-2">
          <SiGmail className="w-7 h-7 text-[#EA4335]" />
          <span className="text-slate-500 font-light text-lg">/</span>
          <SiZoho className="w-7 h-7 text-white" />
        </div>
      ), 
      plans: "All plans", 
      planVariant: "border-green-300 text-green-600" 
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Syne', sans-serif"}}>
          Plugs into the tools your team already uses.
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
          Connect your CRM, email, and communication tools in minutes - not months. No ripping and replacing your existing stack.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {integrations.map(tool => (
            <div key={tool.name} className="px-5 py-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
              <div className="text-2xl mb-2">{tool.icon}</div>
              <div className="font-semibold text-white mb-1">{tool.name}</div>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${tool.planVariant} bg-transparent`}>
                {tool.plans}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-slate-400 text-sm">
          More integrations launching soon. <a href="#" className="text-blue-400 hover:underline">Request an integration →</a>
        </p>
      </div>
    </section>
  )
}

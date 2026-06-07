import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Network, Database } from "lucide-react";

export function PersonaCards() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for teams with context-heavy work.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make the operating layer smarter than any single person in it.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50/50 border-blue-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Network className="text-[#1275e2] h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Head of Operations</h3>
              <p className="text-blue-700 font-medium italic mb-4">
                "Coordination, handoffs, and tribal knowledge requests stop piling up."
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-2">
                <li className="flex gap-3 items-start">
                  <span className="text-[#1275e2] font-bold">✓</span>
                  <span>Automated workflows built on your team's real context</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#1275e2] font-bold">✓</span>
                  <span>Visual automation builder for reasoning-based branching</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#1275e2] font-bold">✓</span>
                  <span>Eliminate coordination overhead across tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50/50 border-emerald-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="text-emerald-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Success Leader</h3>
              <p className="text-emerald-700 font-medium italic mb-4">
                "Account memory stops living across six tools and three people's heads."
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-2">
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Every CSM walks into the call fully briefed</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Scoped memory clusters preserve historical notes and Slack threads</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Context-aware assistance with precise citations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-purple-50/50 border-purple-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-8">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-purple-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">VP Engineering / CTO</h3>
              <p className="text-purple-700 font-medium italic mb-4">
                "New AI tooling gets evaluated through compliance and controls."
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-2">
                <li className="flex gap-3 items-start">
                  <span className="text-purple-500 font-bold">✓</span>
                  <span>Enterprise controls and RBAC are built in from day one</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-purple-500 font-bold">✓</span>
                  <span>Org-scoped data isolation and permission boundaries</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-purple-500 font-bold">✓</span>
                  <span>Full governance visibility and auditable activity logs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

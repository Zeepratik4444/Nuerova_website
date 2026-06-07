# Original Nuerova Website Content (from main branch)

## PAGE: Home (index.html)

```html
    <main id="main">
      <section class="hero section" id="top">
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <div class="eyebrow">
              <span class="pulse-dot"></span>
              Enterprise AI platform built for teams, not individuals
            </div>
            <h1>Your team's intelligence should not live in someone's chat history.</h1>
            <p class="hero-subhead">
              Nuerova gives every team a <strong>shared AI brain</strong>, a reusable skill library,
              and an automation layer that reasons over your own institutional knowledge.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="contact/" data-track="hero_demo_click">Request Demo</a>
              <a class="button secondary" href="how-it-works/">See how it works</a>
            </div>
            <div class="trust-strip" aria-label="Enterprise trust signals">
              <span>RBAC and audit logs</span>
              <span>Org-scoped isolation</span>
              <span>SSO roadmap</span>
            </div>
          </div>

          <div class="hero-visual reveal" aria-label="Nuerova product preview">
            <div class="product-frame">
              <div class="window-bar">
                <span></span><span></span><span></span>
                <strong>Team Intelligence Console</strong>
              </div>
              <div class="console-grid">
                <aside class="console-panel">
                  <div class="panel-label">Clusters</div>
                  <div class="cluster-card active">
                    <span class="cluster-icon blue"></span>
                    <div>
                      <strong>CS Accounts</strong>
                      <small>42 sources synced</small>
                    </div>
                  </div>
                  <div class="cluster-card">
                    <span class="cluster-icon amber"></span>
                    <div>
                      <strong>Ops Playbooks</strong>
                      <small>18 skills published</small>
                    </div>
                  </div>
                  <div class="cluster-card">
                    <span class="cluster-icon green"></span>
                    <div>
                      <strong>Engineering</strong>
                      <small>RBAC enforced</small>
                    </div>
                  </div>
                </aside>

                <section class="agent-panel">
                  <div class="agent-question">Brief me on the Acme renewal risk.</div>
                  <div class="agent-response">
                    <div class="thinking-line"></div>
                    <p>
                      Risk is elevated. Usage dropped 22% after the API migration. Recommend a
                      technical success call and executive recap.
                    </p>
                    <div class="citations">
                      <span>Slack #acme</span>
                      <span>QBR notes</span>
                      <span>Jira API-118</span>
                    </div>
                  </div>
                </section>

                <aside class="automation-panel">
                  <div class="panel-label">Automation</div>
                  <div class="flow-step">Trigger: Renewal 45 days out</div>
                  <div class="flow-step reason">Reason over CS cluster</div>
                  <div class="flow-step">Draft account plan</div>
                  <div class="flow-step approve">Request manager approval</div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section problem-section">
        <div class="container">
          <div class="section-heading narrow reveal">
            <span class="kicker">The current reality</span>
            <h2>Teams are running on scattered context and manual heroics.</h2>
            <p>Every tool captures knowledge. None of it compounds.</p>
          </div>

          <div class="stats-grid reveal">
            <article>
              <strong>73%</strong>
              <span>of critical context gets trapped in private threads, docs, and inboxes.</span>
            </article>
            <article>
              <strong>40 hrs</strong>
              <span>lost each month re-sharing background that should already be known.</span>
            </article>
            <article>
              <strong>6 mo</strong>
              <span>of momentum can disappear when a senior operator leaves.</span>
            </article>
          </div>

          <div class="pain-grid reveal">
            <article class="pain-card red">
              <span class="card-icon">01</span>
              <h3>Brain drain every time someone leaves</h3>
              <p>When your best people exit, they take the playbooks with them. Nuerova makes that knowledge durable.</p>
            </article>
            <article class="pain-card amber">
              <span class="card-icon">02</span>
              <h3>Agents with no memory are expensive search bars</h3>
              <p>Generic AI tools start from zero every session. Nuerova agents inherit team context automatically.</p>
            </article>
            <article class="pain-card slate">
              <span class="card-icon">03</span>
              <h3>Automation that cannot think cannot scale</h3>
              <p>Rigid rules break on edge cases. Nuerova workflows reason before they act or escalate.</p>
            </article>
          </div>

          <p class="center-statement">You do not need more tools. You need one layer that connects what your team already knows.</p>
        </div>
      </section>

      <section class="section personas-section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Built for teams with context-heavy work</span>
            <h2>Make the operating layer smarter than any single person in it.</h2>
          </div>
          <div class="persona-grid reveal">
            <article>
              <span class="role-mark">Ops</span>
              <h3>Head of Operations</h3>
              <p>Coordination, handoffs, and tribal knowledge requests stop piling up on one person.</p>
              <strong>Automated workflows built on your team's real context.</strong>
            </article>
            <article>
              <span class="role-mark">CS</span>
              <h3>Customer Success Leader</h3>
              <p>Account memory stops living across six tools and three people's heads.</p>
              <strong>Every CSM walks into the call fully briefed.</strong>
            </article>
            <article>
              <span class="role-mark">Eng</span>
              <h3>VP Engineering / CTO</h3>
              <p>New AI tooling gets evaluated through compliance, isolation, and auditability.</p>
              <strong>Enterprise controls are built in from day one.</strong>
            </article>
          </div>
        </div>
      </section>

      <section class="section workflow-section" id="workflow">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">How it works</span>
            <h2>From scattered context to governed execution in five steps.</h2>
          </div>
          <div class="step-track reveal">
            <article>
              <span>01</span>
              <h3>Connect your stack</h3>
              <p>Sync Notion, Slack, Drive, CRM, GitHub, and internal sources.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Build clusters</h3>
              <p>Scope memory by team, project, account, or organization.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Deploy agents</h3>
              <p>Agents inherit the right cluster context before responding.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Automate work</h3>
              <p>Trigger workflows that reason, branch, act, and escalate.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Govern confidently</h3>
              <p>Review RBAC, approvals, audit logs, and usage visibility.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section product-section" id="features">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Platform glimpses</span>
            <h2>A shared AI brain you can inspect, govern, and reuse.</h2>
            <p>Product visuals designed around the surfaces enterprise buyers need to see.</p>
          </div>

          <div class="tabs-shell reveal">
            <div class="tab-list" role="tablist" aria-label="Product previews">
              <button class="tab-button active" type="button" role="tab" aria-selected="true" data-tab="clusters">Knowledge Clusters</button>
              <button class="tab-button" type="button" role="tab" aria-selected="false" data-tab="agents">Agent Workspace</button>
              <button class="tab-button" type="button" role="tab" aria-selected="false" data-tab="automation">Automation Builder</button>
              <button class="tab-button" type="button" role="tab" aria-selected="false" data-tab="audit">Admin and Audit</button>
            </div>

            <div class="tab-stage">
              <article class="tab-panel active" data-panel="clusters">
                <div class="mock-dashboard cluster-dashboard">
                  <div class="mock-header">
                    <span>Cluster health</span>
                    <strong>Org scoped</strong>
                  </div>
                  <div class="cluster-map">
                    <div class="node core">Nuerova</div>
                    <div class="node">CS</div>
                    <div class="node">Ops</div>
                    <div class="node">Eng</div>
                    <div class="node">RevOps</div>
                  </div>
                  <div class="mock-list">
                    <span>Permissions synced</span>
                    <span>124 citations this week</span>
                    <span>3 stale sources flagged</span>
                  </div>
                </div>
                <div class="tab-copy">
                  <h3>Every cluster scoped. Nothing bleeds across teams.</h3>
                  <p>Knowledge is organized by permission boundary, so agents only reason over the context they are allowed to use.</p>
                </div>
              </article>

              <article class="tab-panel" data-panel="agents">
                <div class="mock-dashboard chat-dashboard">
                  <div class="chat-row human">What changed since the last QBR?</div>
                  <div class="chat-row ai">Usage recovered after onboarding. Security review is the only open blocker.</div>
                  <div class="source-stack">
                    <span>Source: Gong recap</span>
                    <span>Source: Salesforce opportunity</span>
                  </div>
                </div>
                <div class="tab-copy">
                  <h3>Agents that know your context, not just your question.</h3>
                  <p>Responses cite cluster knowledge inline, making AI output reviewable instead of mysterious.</p>
                </div>
              </article>

              <article class="tab-panel" data-panel="automation">
                <div class="mock-dashboard automation-canvas">
                  <div class="canvas-block trigger">Webhook</div>
                  <div class="canvas-block reason">Agent reasoning</div>
                  <div class="canvas-block branch">Confidence check</div>
                  <div class="canvas-block action">Draft and route</div>
                </div>
                <div class="tab-copy">
                  <h3>Workflows that think before they run.</h3>
                  <p>Triggers can consult scoped knowledge, choose a path, and request human approval before taking action.</p>
                </div>
              </article>

              <article class="tab-panel" data-panel="audit">
                <div class="mock-dashboard audit-dashboard">
                  <div class="audit-line"><strong>Admin</strong><span>Approved automation run</span><small>2m ago</small></div>
                  <div class="audit-line"><strong>Agent</strong><span>Cited CS cluster source</span><small>8m ago</small></div>
                  <div class="audit-line"><strong>Owner</strong><span>Updated RBAC role</span><small>1h ago</small></div>
                  <div class="audit-line"><strong>System</strong><span>Blocked cross-cluster access</span><small>4h ago</small></div>
                </div>
                <div class="tab-copy">
                  <h3>Full governance visibility.</h3>
                  <p>Audit logs, scoped roles, and approval trails make AI activity easier to trust.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section feature-cards-section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Core capabilities</span>
            <h2>Everything enterprise teams need. Nothing that slows them down.</h2>
          </div>
          <div class="feature-grid reveal">
            <article>
              <span class="feature-icon memory"></span>
              <h3>Scoped Memory Clusters</h3>
              <p>Team knowledge that is searchable, permission-controlled, and always available to agents.</p>
            </article>
            <article>
              <span class="feature-icon automation"></span>
              <h3>Agent-Native Automations</h3>
              <p>Scheduled or triggered workflows that reason over shared context before acting.</p>
            </article>
            <article id="security">
              <span class="feature-icon security"></span>
              <h3>Enterprise Security Foundation</h3>
              <p>RBAC, audit logs, org scoping, data isolation, and a roadmap to SSO and SOC 2.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section integrations-section">
        <div class="container">
          <div class="section-heading light reveal">
            <span class="kicker">Integrations</span>
            <h2>Plugs into the stack your team already runs.</h2>
            <p>Connect knowledge sources in minutes, not months.</p>
          </div>
          <div class="integration-grid reveal" aria-label="Supported integrations">
            <span>Slack</span>
            <span>Notion</span>
            <span>Google Drive</span>
            <span>GitHub</span>
            <span>HubSpot</span>
            <span>Salesforce</span>
            <span>Jira</span>
            <span>Confluence</span>
          </div>
          <p class="api-note">REST API and webhooks for everything else.</p>
        </div>
      </section>

      <section class="section roi-section">
        <div class="container roi-grid">
          <div class="section-heading align-left reveal">
            <span class="kicker">ROI calculator</span>
            <h2>Quantify the cost of context loss.</h2>
            <p>Use your team's numbers to estimate how much high-friction knowledge work Nuerova can recover.</p>
          </div>

          <div class="calculator reveal" aria-label="ROI calculator">
            <label>
              <span>Team size</span>
              <output id="teamSizeOutput">50</output>
              <input id="teamSize" type="range" min="5" max="500" value="50" />
            </label>
            <label>
              <span>Hours lost per person each week</span>
              <output id="hoursOutput">3</output>
              <input id="hoursLost" type="range" min="1" max="12" value="3" />
            </label>
            <label>
              <span>Fully loaded hourly cost</span>
              <output id="costOutput">$85</output>
              <input id="hourlyCost" type="range" min="35" max="250" value="85" />
            </label>

            <div class="roi-results">
              <article>
                <span>Hours recovered / month</span>
                <strong id="hoursRecovered">387</strong>
              </article>
              <article>
                <span>Annual value recovered</span>
                <strong id="annualValue">$394,740</strong>
              </article>
              <article>
                <span>Knowledge continuity</span>
                <strong id="continuityScore">High</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section pricing-section" id="pricing">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Pricing</span>
            <h2>Start narrow. Scale into governed team intelligence.</h2>
          </div>
          <div class="billing-toggle reveal" role="group" aria-label="Billing period">
            <button class="active" type="button" data-billing="monthly">Monthly</button>
            <button type="button" data-billing="annual">Annual, save 20%</button>
          </div>
          <div class="pricing-grid reveal">
            <article class="price-card">
              <span class="plan-name">Starter</span>
              <strong><span data-price-starter>$49</span><small>/mo</small></strong>
              <p>Solo operators and micro-teams validating shared memory.</p>
              <ul>
                <li>Up to 3 users</li>
                <li>3 knowledge clusters</li>
                <li>5 automations</li>
                <li>Community support</li>
              </ul>
              <a class="button secondary full" href="contact/">Start a pilot</a>
            </article>
            <article class="price-card featured">
              <span class="popular-badge">Most popular</span>
              <span class="plan-name">Teams</span>
              <strong><span data-price-teams>$199</span><small>/mo</small></strong>
              <p>Teams of 5 to 50 building a shared intelligence layer.</p>
              <ul>
                <li>Unlimited clusters</li>
                <li>Unlimited agent sessions</li>
                <li>Skill registry</li>
                <li>RBAC and audit logs</li>
              </ul>
              <a class="button primary full" href="contact/">Request demo</a>
            </article>
            <article class="price-card">
              <span class="plan-name">Enterprise</span>
              <strong>Custom</strong>
              <p>Organizations that need governance, scale, SLAs, and deeper support.</p>
              <ul>
                <li>Unlimited workspaces</li>
                <li>Custom data retention</li>
                <li>SSO and MFA roadmap</li>
                <li>Dedicated support</li>
              </ul>
              <a class="button secondary full" href="contact/">Talk to sales</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section comparison-section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Competitive context</span>
            <h2>The team intelligence layer. Not another chatbot wrapper.</h2>
          </div>
          <div class="table-wrap reveal">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Nuerova</th>
                  <th>ChatGPT Teams</th>
                  <th>Copilot</th>
                  <th>Notion AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scoped team memory</td>
                  <td class="winner">Cluster-based</td>
                  <td>Per-user</td>
                  <td>M365-bound</td>
                  <td>Workspace-wide</td>
                </tr>
                <tr>
                  <td>Agent-native automation</td>
                  <td class="winner">Visual builder</td>
                  <td>No</td>
                  <td>Limited</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Reusable skill registry</td>
                  <td class="winner">Team-publishable</td>
                  <td>Limited</td>
                  <td>Complex setup</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>RBAC and audit logs</td>
                  <td class="winner">Built in</td>
                  <td>Limited</td>
                  <td>Available</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>Setup time</td>
                  <td class="winner">Days</td>
                  <td>Minutes</td>
                  <td>Months</td>
                  <td>Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="section testimonial-section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Early signal</span>
            <h2>Trusted by teams who outgrew generic AI tools.</h2>
          </div>
          <div class="testimonial-grid reveal">
            <figure>
              <blockquote>We lost two years of knowledge when our ops lead left. Nuerova is the first tool that would have prevented that.</blockquote>
              <figcaption><span>HO</span> Head of Operations, Series B SaaS</figcaption>
            </figure>
            <figure>
              <blockquote>Our CSMs used to brief themselves from six different tabs. Now every account starts from a shared cluster.</blockquote>
              <figcaption><span>CS</span> VP Customer Success, Fintech</figcaption>
            </figure>
            <figure>
              <blockquote>The audit log and RBAC were the first things InfoSec asked about. Having both in the product story changed the conversation.</blockquote>
              <figcaption><span>VE</span> VP Engineering, Enterprise Software</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="section insights-section" id="insights">
        <div class="container">
          <div class="section-heading reveal">
            <span class="kicker">Insights</span>
            <h2>Enterprise AI intelligence for teams who need it to work.</h2>
          </div>
          <div class="blog-grid reveal">
            <article>
              <span>Strategy</span>
              <h3>Why scoped team memory is the moat generic AI tools cannot copy</h3>
              <a href="blog/scoped-team-memory/">Read preview</a>
            </article>
            <article>
              <span>Product</span>
              <h3>From prompt library to skill registry: what enterprise AI actually needs</h3>
              <a href="blog/skill-registry/">Read preview</a>
            </article>
            <article>
              <span>Operations</span>
              <h3>Agent-native vs rule-based automation: why the difference matters</h3>
              <a href="blog/agent-native-automation/">Read preview</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="container contact-grid">
          <div class="contact-copy reveal">
            <span class="kicker">Request a demo</span>
            <h2>Your team's knowledge should not depend on one person being in the room.</h2>
            <p>Nuerova gives teams a shared AI brain that persists, scales, and can be governed.</p>
            <div class="contact-promises">
              <span>No lock-in</span>
              <span>Data stays yours</span>
              <span>Setup support included</span>
              <span>Enterprise controls built in</span>
            </div>
          </div>

          <form class="demo-form reveal" aria-label="Request a Nuerova demo" data-demo-form>
            <label>
              <span>Name</span>
              <input name="name" type="text" autocomplete="name" required />
            </label>
            <label>
              <span>Work email</span>
              <input name="email" type="email" autocomplete="email" required />
            </label>
            <label>
              <span>Company</span>
              <input name="company" type="text" autocomplete="organization" required />
            </label>
            <label>
              <span>Team size</span>
              <select name="team-size" required>
                <option value="">Select team size</option>
                <option>5-25</option>
                <option>26-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </label>
            <label class="full-field">
              <span>Primary use case</span>
              <select name="use-case" required>
                <option value="">Select use case</option>
                <option>Operations</option>
                <option>Customer Success</option>
                <option>Engineering</option>
                <option>RevOps</option>
                <option>Other</option>
              </select>
            </label>
            <label class="full-field">
              <span>What should Nuerova help with?</span>
              <textarea name="message" rows="4"></textarea>
            </label>
            <button class="button primary full full-field" type="submit">Request your demo</button>
            <p class="form-note" data-form-note>A human reviews every request. No pressure, no generic sales loop.</p>
          </form>
        </div>
      </section>
    </main>
```

## PAGE: Features (features/index.html)

```html
    <main id="main">
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <span class="kicker">Feature deep dive</span>
            <h1>Built for the 20% of capabilities that define 80% of team performance.</h1>
            <p>Every feature below supports the same promise: shared memory, reusable skills, governed action, and team context that compounds.</p>
          </div>
          <div class="page-visual reveal">
            <div class="mini-metric-grid">
              <span>Scoped clusters</span><span>Contextual agents</span><span>Reasoning workflows</span><span>Audit-ready controls</span>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="banner-card reveal">
            <span>Operations teams with repeated coordination overhead</span>
            <span>CS and RevOps teams that need durable account memory</span>
            <span>Engineering leaders who need controls without long rollouts</span>
          </div>
          <article class="deep-dive reveal">
            <div class="deep-copy">
              <span class="kicker">Knowledge infrastructure</span>
              <h2>Team memory that survives turnover, silos, and one-off chats.</h2>
              <p>Nuerova clusters scope knowledge by team, project, client, or org. Every agent operating inside a cluster inherits its context automatically.</p>
              <ul class="check-list">
                <li>Create clusters by team, department, or client</li>
                <li>Granular read, write, and contribute permissions</li>
                <li>Activity logs showing which knowledge an agent used</li>
                <li>Admin controls over retention and visibility</li>
              </ul>
            </div>
            <div class="deep-visual visual-stack">
              <div class="visual-row"><span class="cluster-icon blue"></span><strong>CS Accounts</strong><small>Shared</small></div>
              <div class="visual-row"><span class="cluster-icon amber"></span><strong>Ops Playbooks</strong><small>Approved</small></div>
              <div class="visual-row"><span class="cluster-icon green"></span><strong>Engineering</strong><small>Private</small></div>
            </div>
          </article>
          <article class="deep-dive reverse reveal">
            <div class="deep-copy">
              <span class="kicker">Intelligent assistance</span>
              <h2>Agents that know your context, not just your question.</h2>
              <p>Every Nuerova agent is spawned with the scoped knowledge of its cluster. No copy-paste. No re-explaining the project every session.</p>
              <ul class="check-list">
                <li>Context-aware responses backed by team memory</li>
                <li>Inline citations from cluster knowledge</li>
                <li>Human escalation when confidence is low</li>
                <li>Session history preserved per agent and cluster</li>
              </ul>
            </div>
            <div class="deep-visual chat-dashboard">
              <div class="chat-row human">What changed since the renewal review?</div>
              <div class="chat-row ai">Usage recovered. Security review remains the only blocker.</div>
              <div class="source-stack"><span>QBR notes</span><span>Slack thread</span></div>
            </div>
          </article>
          <article class="deep-dive reveal">
            <div class="deep-copy">
              <span class="kicker">Agent-native automation</span>
              <h2>Workflows that reason before they run.</h2>
              <p>Unlike rigid no-code tools, Nuerova automations include an agent reasoning step before execution or escalation.</p>
              <ul class="check-list">
                <li>Schedule, webhook, manual, and event triggers</li>
                <li>Scoped data-source selection</li>
                <li>Conditional paths and approval gates</li>
                <li>Run history, retries, and failure alerts</li>
              </ul>
            </div>
            <div class="deep-visual automation-canvas">
              <div class="canvas-block trigger">Trigger</div><div class="canvas-block reason">Reason</div><div class="canvas-block branch">Branch</div><div class="canvas-block action">Act</div>
            </div>
          </article>
          <article class="deep-dive reverse reveal">
            <div class="deep-copy">
              <span class="kicker">Reusable intelligence</span>
              <h2>Build once. Share across every team that needs it.</h2>
              <p>Skills package prompts, workflows, and tools for publication inside your organization. The library gets stronger as teams contribute.</p>
              <ul class="check-list">
                <li>Create personal or org-level skills</li>
                <li>Publish to team or org libraries</li>
                <li>Version control and change history</li>
                <li>Usage analytics per skill</li>
              </ul>
            </div>
            <div class="deep-visual visual-stack">
              <div class="visual-row"><span class="card-icon">V3</span><strong>Renewal Risk Brief</strong><small>Published</small></div>
              <div class="visual-row"><span class="card-icon">V1</span><strong>Incident Summary</strong><small>Draft</small></div>
              <div class="visual-row"><span class="card-icon">V2</span><strong>Handoff Plan</strong><small>Team</small></div>
            </div>
          </article>
          <article class="deep-dive reveal">
            <div class="deep-copy">
              <span class="kicker">Governance and trust</span>
              <h2>Enterprise controls from day one. Not bolted on later.</h2>
              <p>Nuerova was designed multi-tenant, scoped, and auditable from the first architectural decision.</p>
              <ul class="check-list">
                <li>Role-based access control for owners, admins, members, and viewers</li>
                <li>Org-level audit logs for agent and automation actions</li>
                <li>Data isolation between organizations and clusters</li>
                <li>Roadmap: SSO, MFA, and SOC 2 Type II</li>
              </ul>
            </div>
            <div class="deep-visual audit-dashboard">
              <div class="audit-line"><strong>Admin</strong><span>Updated role policy</span><small>2m ago</small></div>
              <div class="audit-line"><strong>System</strong><span>Blocked cross-cluster request</span><small>9m ago</small></div>
              <div class="audit-line"><strong>Agent</strong><span>Cited approved source</span><small>1h ago</small></div>
            </div>
          </article>
        </div>
      </section>
      <section class="section contact-section"><div class="container contact-grid"><div class="contact-copy reveal"><span class="kicker">Next step</span><h2>See Nuerova with your team's workflow.</h2><p>Bring one real context-heavy process. We will show how clusters, agents, and automations connect.</p></div><a class="button primary reveal" href="../contact/">Request a demo</a></div></section>
    </main>
```

## PAGE: How It Works (how-it-works/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">How it works</span><h1>Here is what happens after you connect your first knowledge source.</h1><p>Nuerova turns your team's scattered context into a governed intelligence layer in five steps.</p></div><div class="page-visual reveal"><div class="visual-stack"><div class="visual-row"><span class="card-icon">01</span><strong>Connect</strong><small>Sources</small></div><div class="visual-row"><span class="card-icon">03</span><strong>Deploy</strong><small>Agents</small></div><div class="visual-row"><span class="card-icon">05</span><strong>Govern</strong><small>Scale</small></div></div></div></div></section>
      <section class="section"><div class="container timeline">
        <article class="timeline-item reveal"><span class="timeline-number">01</span><div class="timeline-detail"><h2>Connect your knowledge sources</h2><p>Link Notion, Confluence, Google Drive, Slack, CRM records, GitHub, or any REST source. Nuerova ingests, chunks, and indexes content without manual tagging.</p><span class="detail-note">Setup: 1 to 2 days. Your sources stay authoritative.</span></div></article>
        <article class="timeline-item reveal"><span class="timeline-number">02</span><div class="timeline-detail"><h2>Create your first cluster</h2><p>A cluster is a scoped knowledge pool: a team, client account, project, or department. Add members, set permissions, and Nuerova routes queries through that context.</p><span class="detail-note">No cluster is visible outside its permission boundary.</span></div></article>
        <article class="timeline-item reveal"><span class="timeline-number">03</span><div class="timeline-detail"><h2>Deploy agents against your clusters</h2><p>Agents inside a cluster inherit its knowledge automatically. Ask a question and the agent reasons over your team's actual context, not generic training data.</p><span class="detail-note">Agents cite sources. Output is reviewable.</span></div></article>
        <article class="timeline-item reveal"><span class="timeline-number">04</span><div class="timeline-detail"><h2>Build automations on top of context</h2><p>Create workflows that trigger, reason over cluster knowledge, execute, and optionally wait for approval before taking action.</p><span class="detail-note">Every automation has a run log.</span></div></article>
        <article class="timeline-item reveal"><span class="timeline-number">05</span><div class="timeline-detail"><h2>Govern, observe, and scale</h2><p>The admin panel shows who used what, what agents did, and which automations ran. RBAC controls enforce boundaries and audit logs capture key actions.</p><span class="detail-note">Leaders get one source of truth.</span></div></article>
      </div></section>
      <section class="section contact-section"><div class="container contact-grid"><div class="contact-copy reveal"><span class="kicker">Live walkthrough</span><h2>Map this flow to one team process.</h2><p>A focused demo is the fastest way to see whether Nuerova fits your stack.</p></div><a class="button primary reveal" href="../contact/">Request a demo</a></div></section>
    </main>
```

## PAGE: Pricing (pricing/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">Pricing</span><h1>Transparent pricing for teams that need AI to work at the enterprise level.</h1><p>Start with one workspace. Expand into clusters, automations, skill publishing, and governance as your team grows.</p></div><div class="page-visual reveal"><div class="mini-metric-grid"><span>Starter: $49</span><span>Teams: $199</span><span>Enterprise: Custom</span><span>Annual saves 20%</span></div></div></div></section>
      <section class="section"><div class="container">
        <div class="billing-toggle reveal" role="group" aria-label="Billing period"><button class="active" type="button" data-billing="monthly">Monthly</button><button type="button" data-billing="annual">Annual, save 20%</button></div>
        <div class="pricing-grid reveal">
          <article class="price-card"><span class="plan-name">Starter</span><strong><span data-price-starter>$49</span><small>/mo</small></strong><p>Solo operators and micro-teams.</p><ul><li>1 workspace</li><li>Up to 3 users</li><li>3 knowledge clusters</li><li>10 agent sessions/day</li><li>5 automations</li><li>Community support</li></ul><a class="button secondary full" href="../contact/">Start a pilot</a></article>
          <article class="price-card featured"><span class="popular-badge">Most popular</span><span class="plan-name">Teams</span><strong><span data-price-teams>$199</span><small>/mo</small></strong><p>Teams of 5 to 50 building shared intelligence.</p><ul><li>Up to 25 users</li><li>Unlimited clusters</li><li>Unlimited agent sessions</li><li>Unlimited automations</li><li>Skill registry</li><li>RBAC and 30-day audit logs</li><li>Email support and onboarding call</li></ul><a class="button primary full" href="../contact/">Request demo</a></article>
          <article class="price-card"><span class="plan-name">Enterprise</span><strong>Custom</strong><p>Organizations that need governance, scale, and SLAs.</p><ul><li>Unlimited workspaces and users</li><li>Custom retention</li><li>SSO and MFA roadmap</li><li>90-day audit logs</li><li>Dedicated CSM</li><li>SLA and custom integrations</li></ul><a class="button secondary full" href="../contact/">Talk to sales</a></article>
        </div>
      </div></section>
      <section class="section product-section"><div class="container"><div class="section-heading reveal"><span class="kicker">Feature comparison</span><h2>What each plan unlocks.</h2></div><div class="table-wrap reveal"><table><thead><tr><th>Feature</th><th>Starter</th><th>Teams</th><th>Enterprise</th></tr></thead><tbody><tr><td>Knowledge clusters</td><td>3</td><td class="winner">Unlimited</td><td class="winner">Unlimited</td></tr><tr><td>Automations</td><td>5</td><td class="winner">Unlimited</td><td class="winner">Unlimited plus custom</td></tr><tr><td>Skill registry</td><td>Personal</td><td class="winner">Team publishing</td><td class="winner">Org governance</td></tr><tr><td>RBAC</td><td>Basic</td><td class="winner">3 roles</td><td class="winner">Custom roles</td></tr><tr><td>Audit logs</td><td>No</td><td>30 days</td><td class="winner">90 days plus export</td></tr><tr><td>Support</td><td>Community</td><td>Email</td><td class="winner">Dedicated CSM</td></tr></tbody></table></div></div></section>
      <section class="section"><div class="container"><div class="section-heading reveal"><span class="kicker">Pricing FAQ</span><h2>Common buying questions.</h2></div><div class="faq-list reveal"><details open><summary>Do agents use my data to train base models?</summary><p>No. Customer data is used to provide the product experience, not to train external base models.</p></details><details><summary>What happens to my data if I cancel?</summary><p>We support export and deletion workflows during offboarding.</p></details><details><summary>How long does setup take?</summary><p>Most teams can be live with an initial workspace and cluster within three days.</p></details><details><summary>Is Nuerova SOC 2 certified?</summary><p>Not yet. The security page documents the controls and roadmap.</p></details><details><summary>Can I self-host?</summary><p>Enterprise deployments can include architecture discussions for stricter data requirements.</p></details></div></div></section>
    </main>
```

## PAGE: Security (security/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">Security</span><h1>Security and governance designed for enterprise teams.</h1><p>Nuerova is built around scoped access, organization boundaries, auditability, and controls that make shared AI memory usable for real work.</p></div><div class="page-visual reveal"><div class="visual-stack"><div class="visual-row"><span class="feature-icon security"></span><strong>RBAC enforced</strong><small>Roles</small></div><div class="visual-row"><span class="feature-icon memory"></span><strong>Cluster isolation</strong><small>Scoped</small></div><div class="visual-row"><span class="feature-icon automation"></span><strong>Audit logged</strong><small>Traceable</small></div></div></div></div></section>
      <section class="section"><div class="container">
        <div class="trust-badges reveal"><span>ISO-aligned roadmap</span><span>Encryption in transit</span><span>RBAC enforced</span><span>Audit logged</span></div>
        <div class="security-grid reveal" style="margin-top: 18px;">
          <article class="security-block"><span class="kicker">Data architecture</span><h2>Org-level isolation and cluster boundaries.</h2><p>Knowledge is scoped by organization and cluster, with no cross-tenant data bleed. Sources remain authoritative, and agents operate inside explicit permission boundaries.</p></article>
          <article class="security-block"><span class="kicker">Access control</span><h2>Roles that match real teams.</h2><p>Owner, admin, member, and viewer roles define who can create clusters, publish skills, run automations, and inspect audit history.</p></article>
          <article class="security-block"><span class="kicker">Infrastructure</span><h2>Controls for production readiness.</h2><p>Planned controls include encryption at rest, TLS in transit, secure session handling, production-safe secrets, and environment-level isolation.</p></article>
          <article class="security-block"><span class="kicker">Roadmap</span><h2>Trust maturity without ambiguity.</h2><p>Roadmap items include SOC 2 Type II readiness, SSO through SAML or OIDC, MFA enforcement, DLP controls, and deeper audit export.</p></article>
        </div>
      </div></section>
      <section class="section product-section"><div class="container"><div class="section-heading reveal"><span class="kicker">Permission model</span><h2>Shared memory only works when boundaries are visible.</h2></div><div class="security-diagram reveal"><div class="mock-list"><span>Organization</span><span>Workspace</span><span>Cluster</span></div><div class="cluster-map"><div class="node core">RBAC</div><div class="node">Owner</div><div class="node">Admin</div><div class="node">Member</div><div class="node">Viewer</div></div></div></div></section>
    </main>
```

## PAGE: FAQ (faq/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">FAQ</span><h1>Clear answers for teams evaluating shared AI memory.</h1><p>Setup, product, security, data, pricing, and rollout questions in one place.</p></div><div class="page-visual reveal"><div class="mini-metric-grid"><span>Setup</span><span>Product</span><span>Security</span><span>Pricing</span></div></div></div></section>
      <section class="section"><div class="container">
        <div class="faq-group reveal"><h2>Setup and onboarding</h2><div class="faq-list"><details open><summary>How long does setup take?</summary><p>Most teams can connect initial sources and launch a first cluster within three days.</p></details><details><summary>Do I need an IT team to get started?</summary><p>No for a pilot. IT usually joins when security review, SSO, or deeper integrations are required.</p></details></div></div>
        <div class="faq-group reveal"><h2>Product</h2><div class="faq-list"><details><summary>What is the difference between a cluster and a workspace?</summary><p>A workspace is the broad environment. A cluster is a scoped memory pool inside it, usually tied to a team, account, project, or department.</p></details><details><summary>Can agents use data from multiple clusters at once?</summary><p>Only when permissions allow it. Cross-cluster reasoning should be explicit and auditable.</p></details><details><summary>What happens when an automation fails?</summary><p>Runs are logged, failures can alert owners, and approval gates can stop risky actions from running silently.</p></details></div></div>
        <div class="faq-group reveal"><h2>Security and data</h2><div class="faq-list"><details><summary>Does Nuerova train on my data?</summary><p>No. Customer data is not used to train external base models.</p></details><details><summary>Where is my data stored?</summary><p>Storage depends on deployment and customer requirements. The security page documents the architecture direction and controls.</p></details><details><summary>How do I export everything if I leave?</summary><p>Export and deletion workflows are part of responsible offboarding for paid teams.</p></details></div></div>
        <div class="faq-group reveal"><h2>Pricing and plans</h2><div class="faq-list"><details><summary>Can I upgrade mid-cycle?</summary><p>Yes. Teams can move from Starter to Teams or Enterprise as usage and governance needs grow.</p></details><details><summary>Is there a free trial?</summary><p>The preferred path is a focused pilot with a real workflow, because shared memory value is easiest to judge with real context.</p></details></div></div>
      </div></section>
    </main>
```

## PAGE: About (about/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">About</span><h1>Make teams smarter than any individual within them.</h1><p>Nuerova started from a simple frustration: the most valuable team knowledge usually lives in the places least prepared to preserve it.</p></div><div class="page-visual reveal"><div class="mini-metric-grid"><span>Trust first</span><span>Team memory</span><span>Reusable skills</span><span>Governed action</span></div></div></div></section>
      <section class="section"><div class="container"><div class="security-grid reveal"><article class="story-block"><span class="kicker">Founding story</span><h2>Institutional knowledge should not walk out the door.</h2><p>Teams repeat context, reconstruct decisions, and lose operating playbooks whenever work is trapped in individual chats or private workflows. Nuerova exists to make that context durable.</p></article><article class="story-block"><span class="kicker">Mission</span><h2>A shared intelligence layer for serious work.</h2><p>The goal is not another personal AI surface. It is a governed system where team memory, reusable skills, agents, and automations compound together.</p></article></div><div class="section-heading reveal" style="margin-top: 64px;"><span class="kicker">Values</span><h2>Built for trust first, performance second.</h2></div><div class="values-grid reveal"><article class="story-card"><h3>Context should be owned by the team</h3><p>Knowledge is most useful when it survives transitions and remains accessible to the right people.</p></article><article class="story-card"><h3>Automation needs judgment</h3><p>Workflows should reason, branch, and escalate instead of blindly chaining actions.</p></article><article class="story-card"><h3>Security is product design</h3><p>RBAC, audit logs, and scoped isolation are not late-stage enterprise checkboxes.</p></article><article class="story-card"><h3>Reusable intelligence compounds</h3><p>Skills should become governed assets, not scattered prompt snippets.</p></article></div></div></section>
    </main>
```

## PAGE: Terms (terms/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">Terms and privacy</span><h1>Plain-language operating principles for a product built on trust.</h1><p>This page is a launch-ready draft, not legal advice. Final terms should be reviewed by counsel before public commercial use.</p></div><div class="page-visual reveal"><div class="mini-metric-grid"><span>Data stays yours</span><span>No training on customer data</span><span>Export supported</span><span>Security roadmap</span></div></div></div></section>
      <section class="section"><div class="container terms-grid reveal"><article class="terms-block"><h2>Terms summary</h2><p>Nuerova provides team intelligence, shared memory, skill registry, and automation tools. Customers are responsible for authorized use, connected source permissions, and the accuracy of actions they approve.</p></article><article class="terms-block"><h2>Privacy summary</h2><p>Customer data is used to operate Nuerova and provide requested functionality. It is not used to train external base models. Access should remain scoped to authorized users and systems.</p></article><article class="terms-block"><h2>Data handling</h2><p>Data export, deletion, retention, and integration controls should be documented for each paid workspace. Enterprise customers can request stricter handling requirements.</p></article><article class="terms-block"><h2>Automation responsibility</h2><p>Automations should include approval gates for sensitive actions. Nuerova is designed to provide run logs and visibility so teams can inspect what happened.</p></article></div></section>
    </main>
```

## PAGE: Contact (contact/index.html)

```html
    <main id="main">
      <section class="section contact-section"><div class="container contact-grid"><div class="contact-copy reveal"><span class="kicker">Request a demo</span><h1>Your team's knowledge should not depend on one person being in the room.</h1><p>Tell us the workflow you want to improve. A human reviews every request and helps map the right pilot path.</p><ol class="contact-steps"><li>A human reviews your request the same day.</li><li>We schedule a focused 30-minute discovery call.</li><li>You get a customized sandbox or pilot plan.</li></ol></div><form class="demo-form reveal" aria-label="Request a Nuerova demo" data-demo-form><label><span>Name</span><input name="name" type="text" autocomplete="name" required /></label><label><span>Work email</span><input name="email" type="email" autocomplete="email" required /></label><label><span>Company</span><input name="company" type="text" autocomplete="organization" required /></label><label><span>Team size</span><select name="team-size" required><option value="">Select team size</option><option>5-25</option><option>26-50</option><option>51-200</option><option>201-500</option><option>500+</option></select></label><label class="full-field"><span>Primary use case</span><select name="use-case" required><option value="">Select use case</option><option>Operations</option><option>Customer Success</option><option>Engineering</option><option>RevOps</option><option>Other</option></select></label><label class="full-field"><span>What should Nuerova help with?</span><textarea name="message" rows="4"></textarea></label><button class="button primary full full-field" type="submit">Request your demo</button><p class="form-note" data-form-note>No sales pressure. Just showing the product around a real workflow.</p></form></div></section>
    </main>
```

## PAGE: Blog Index (blog/index.html)

```html
    <main id="main">
      <section class="page-hero"><div class="container"><div class="reveal"><span class="kicker">Insights</span><h1>Enterprise AI intelligence for teams who need it to work.</h1><p>Short, practical essays on shared memory, governed automations, and the operating layer that modern teams need.</p></div><div class="page-visual reveal"><div class="mini-metric-grid"><span>Team memory</span><span>Skill registry</span><span>Operations</span><span>Security</span></div></div></div></section>
      <section class="section"><div class="container blog-index-grid reveal">
        <article class="blog-card"><span>Strategy</span><h3>Why scoped team memory is the moat generic AI tools cannot copy</h3><p>Why per-user AI misses the team layer.</p><a href="scoped-team-memory/">Read article</a></article>
        <article class="blog-card"><span>Product</span><h3>From prompt library to skill registry</h3><p>How reusable intelligence becomes governed infrastructure.</p><a href="skill-registry/">Read article</a></article>
        <article class="blog-card"><span>Automation</span><h3>Agent-native vs rule-based automation</h3><p>Why workflows need reasoning before action.</p><a href="agent-native-automation/">Read article</a></article>
        <article class="blog-card"><span>Enterprise AI</span><h3>What enterprise AI teams actually need</h3><p>It is not more models. It is memory, permissions, and accountability.</p><a href="enterprise-ai-needs/">Read article</a></article>
        <article class="blog-card"><span>Knowledge ops</span><h3>How to build a knowledge cluster that survives employee turnover</h3><p>A practical cluster design checklist.</p><a href="knowledge-cluster-turnover/">Read article</a></article>
        <article class="blog-card"><span>Comparison</span><h3>Nuerova vs Microsoft Copilot: an honest comparison</h3><p>Where a team intelligence layer differs from a bundled copilot.</p><a href="copilot-alternative/">Read article</a></article>
        <article class="blog-card"><span>ROI</span><h3>The hidden cost of fragmented institutional knowledge</h3><p>Context loss is a real operating expense.</p><a href="fragmented-knowledge-cost/">Read article</a></article>
        <article class="blog-card"><span>Customer success</span><h3>How to automate CS operations without losing the human touch</h3><p>Automation should make judgment easier, not invisible.</p><a href="cs-automation-human-touch/">Read article</a></article>
        <article class="blog-card"><span>Readiness</span><h3>5 signs your team is ready for agent-native workflows</h3><p>Signals that automation can move beyond rules.</p><a href="agent-workflow-readiness/">Read article</a></article>
        <article class="blog-card"><span>Setup</span><h3>Nuerova setup guide: live in 72 hours</h3><p>A focused path from first source to first governed workflow.</p><a href="setup-guide-72-hours/">Read article</a></article>
      </div></section>
    </main>
```

## PAGE: Blog: agent-native-automation (blog/agent-native-automation/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Agent-Native vs Rule-Based Automation | Nuerova</title><meta name="description" content="Why agent-native automation matters for operations teams." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Automation</span><h1>Agent-native vs rule-based automation</h1><p>Rule-based automation is excellent when inputs are predictable. Real team operations are rarely that clean. Context changes, exceptions appear, and someone needs to decide what should happen next.</p><h2>Reason before action</h2><p>Agent-native automation adds a reasoning step between trigger and action. The workflow can consult scoped knowledge, evaluate confidence, branch, or ask a human to approve.</p><h2>Where it helps</h2><ul><li>Renewal risk triage.</li><li>Incident summaries.</li><li>Customer handoff preparation.</li><li>Weekly operating reviews.</li></ul><p>The goal is not blind autonomy. It is higher-quality execution with the right guardrails.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: agent-workflow-readiness (blog/agent-workflow-readiness/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>5 Signs Your Team Is Ready for Agent-Native Workflows | Nuerova</title><meta name="description" content="Five signs your team is ready for agent-native workflows." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Readiness</span><h1>5 signs your team is ready for agent-native workflows</h1><p>Agent-native workflows work best when a team has repeated processes, enough context to reason over, and enough trust requirements to justify governance.</p><h2>The five signs</h2><ul><li>Your team repeats the same context every week.</li><li>Workflows break when an edge case appears.</li><li>Managers review decisions before action.</li><li>Knowledge lives across more than three systems.</li><li>Auditability is already part of procurement.</li></ul><p>If those signs are familiar, the opportunity is not only automation. It is automation built on shared memory.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: copilot-alternative (blog/copilot-alternative/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Nuerova vs Microsoft Copilot | Nuerova</title><meta name="description" content="An honest comparison between Nuerova and Microsoft Copilot." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Comparison</span><h1>Nuerova vs Microsoft Copilot: an honest comparison</h1><p>Copilot is strongest when a company already lives deeply inside Microsoft 365. It can surface and assist across that ecosystem with major platform advantages.</p><h2>Where Nuerova differs</h2><p>Nuerova is positioned as a team intelligence layer across clusters, skills, and automations. It is less about a bundled office assistant and more about governed shared memory and agent-native execution.</p><h2>Use the right lens</h2><ul><li>Choose Copilot for broad M365 assistance.</li><li>Choose Nuerova for scoped team memory and reusable workflows.</li><li>Evaluate both through data boundaries and auditability.</li></ul><p>The core question is not which tool is bigger. It is which one matches the operating layer your team needs.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: cs-automation-human-touch (blog/cs-automation-human-touch/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Automate CS Without Losing the Human Touch | Nuerova</title><meta name="description" content="How customer success teams can automate work while preserving judgment." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Customer success</span><h1>How to automate CS operations without losing the human touch</h1><p>Customer success work is full of patterns, but it is not mechanical. Good automation should help CSMs prepare, prioritize, and follow through without hiding judgment.</p><h2>Use context before action</h2><p>A renewal workflow should look at account history, product usage, open risks, support notes, and stakeholder changes before drafting the next step.</p><h2>Keep humans in the loop</h2><ul><li>Auto-brief the CSM before calls.</li><li>Draft follow-ups for review.</li><li>Escalate low-confidence recommendations.</li><li>Log why an action was suggested.</li></ul><p>The best CS automation makes people more prepared, not less present.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: enterprise-ai-needs (blog/enterprise-ai-needs/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>What Enterprise AI Teams Actually Need | Nuerova</title><meta name="description" content="Enterprise AI needs memory, permissions, observability, and useful workflows." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Enterprise AI</span><h1>What enterprise AI teams actually need</h1><p>Most enterprise AI conversations start with model quality. That matters, but the operational blockers usually live elsewhere: data scope, permissions, observability, and repeatable workflows.</p><h2>Models are not the whole product</h2><p>A team needs to know what context the agent used, who allowed access, what action was taken, and how to repeat a useful capability safely.</p><h2>The practical checklist</h2><ul><li>Scoped memory by team or workflow.</li><li>RBAC and audit logs from the start.</li><li>Reusable skills instead of scattered prompts.</li><li>Automation runs that can be reviewed.</li></ul><p>Enterprise AI works when the operating system around the model is trustworthy.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: fragmented-knowledge-cost (blog/fragmented-knowledge-cost/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>The Hidden Cost of Fragmented Knowledge | Nuerova</title><meta name="description" content="The hidden operating cost of fragmented institutional knowledge." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">ROI</span><h1>The hidden cost of fragmented institutional knowledge</h1><p>Fragmented knowledge rarely appears as one big expense. It shows up as slower onboarding, repeated explanations, poor handoffs, rework, and avoidable escalations.</p><h2>Context loss compounds</h2><p>Every time a teammate asks for background that already exists somewhere, the team pays twice: once to find the information and again to rebuild confidence in it.</p><h2>What to measure</h2><ul><li>Hours spent re-sharing context.</li><li>Time to onboard a new team member.</li><li>Number of tools checked before a decision.</li><li>Escalations caused by missing account or project history.</li></ul><p>Shared memory turns context from an operating tax into reusable infrastructure.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: knowledge-cluster-turnover (blog/knowledge-cluster-turnover/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Knowledge Clusters That Survive Turnover | Nuerova</title><meta name="description" content="How to build knowledge clusters that survive employee turnover." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Knowledge ops</span><h1>How to build a knowledge cluster that survives employee turnover</h1><p>A useful cluster is not a dumping ground. It is a permissioned context boundary with clear purpose, clean sources, and ownership.</p><h2>Start with the workflow</h2><p>Pick a team process that already depends on repeated context: renewals, handoffs, weekly ops reviews, incident response, or onboarding.</p><h2>Cluster design checklist</h2><ul><li>Name the owner and reviewers.</li><li>Connect authoritative sources first.</li><li>Separate shared, private, and sensitive data.</li><li>Review stale sources on a schedule.</li></ul><p>Turnover hurts less when the team's working memory is captured before anyone leaves.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: scoped-team-memory (blog/scoped-team-memory/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Why Scoped Team Memory Is the Moat | Nuerova</title><meta name="description" content="Why scoped team memory is the moat generic AI tools cannot copy." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Strategy</span><h1>Why scoped team memory is the moat generic AI tools cannot copy</h1><p>Generic AI tools are useful, but they usually start from a personal session. That is a poor match for work that depends on team history, account context, implementation details, and decisions made months ago.</p><h2>The team layer is the missing layer</h2><p>Scoped memory changes AI from a clever interface into a shared operating asset. The agent is not just answering from the model. It is reasoning over the approved context that a team has already built.</p><h2>Scope is the trust mechanism</h2><p>Without scope, shared memory becomes risky. With clusters, teams can decide which knowledge belongs to operations, customer success, engineering, a client account, or the whole organization.</p><ul><li>Knowledge survives turnover.</li><li>Agents stop asking teams to repeat background.</li><li>Permissions remain visible and enforceable.</li></ul><p>That combination is hard for generic tools to copy because it is not only a feature. It is an architecture choice.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: setup-guide-72-hours (blog/setup-guide-72-hours/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Nuerova Setup Guide: Live in 72 Hours | Nuerova</title><meta name="description" content="A practical 72-hour setup guide for launching Nuerova." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Setup</span><h1>Nuerova setup guide: live in 72 hours</h1><p>A focused pilot does not require connecting everything. It requires connecting the right sources for one high-value workflow.</p><h2>Day 1: choose the workflow</h2><p>Pick a process with repeated context and clear value, such as renewal prep, incident review, or operations handoff.</p><h2>Day 2: build the first cluster</h2><p>Connect the authoritative sources, assign an owner, invite the right members, and set permission boundaries.</p><h2>Day 3: deploy and review</h2><p>Run the first agent workflow, inspect citations, review outputs, and decide which automation should come next.</p><p>Starting narrow creates confidence faster than trying to connect the whole company at once.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```

## PAGE: Blog: skill-registry (blog/skill-registry/index.html)

```html
<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>From Prompt Library to Skill Registry | Nuerova</title><meta name="description" content="What enterprise AI actually needs from a skill registry." /><link rel="icon" href="../../favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="../../styles.css" /></head><body><header class="site-header" data-header><nav class="nav-shell"><a class="brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="../../features/">Features</a><a href="../../how-it-works/">How It Works</a><a href="../../security/">Security</a><a href="../../pricing/">Pricing</a><a href="../../blog/">Blog</a><a class="mobile-demo-link" href="../../contact/">Request Demo</a></div><div class="nav-actions"><a class="button primary compact" href="../../contact/">Request Demo</a></div></nav></header><main class="section"><article class="container article-shell reveal"><span class="article-meta">Product</span><h1>From prompt library to skill registry</h1><p>Prompt libraries are useful until they become unowned snippets. Enterprise teams need reusable capabilities with visibility, permissions, version history, and usage analytics.</p><h2>Skills are governed capabilities</h2><p>A skill can package instructions, context rules, tools, and workflow behavior. When it is published to a team or organization, it becomes an asset others can reuse without recreating the work.</p><h2>Why this matters</h2><ul><li>Teams avoid duplicating expertise.</li><li>Admins can see which skills are active.</li><li>Versioning makes improvement safer.</li></ul><p>The registry is where intelligence compounds. Every approved skill makes the platform more valuable for the next team.</p></article></main><footer class="site-footer"><div class="container footer-grid"><a class="brand footer-brand" href="../../"><span class="brand-mark"><span></span></span><span>Nuerova</span></a><div><strong>Product</strong><a href="../../features/">Features</a><a href="../../pricing/">Pricing</a></div><div><strong>Trust</strong><a href="../../security/">Security</a><a href="../../contact/">Demo</a></div><p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p></div></footer><script src="../../app.js"></script></body></html>
```


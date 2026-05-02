import Image from "next/image";
import Link from "next/link";

export default function AccessIQCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-gray-900">
            Sakshee Durshettiwar
          </Link>
          <a
            href="mailto:saksheedurshettiwar@gmail.com"
            className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-16">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl text-gray-900">
            Cutting Access Risk by 67%<br />
            without the Security Jargon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Designing access governance for a global fintech so managers could own access decisions without needing a security degree.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={`/case-studies/AccessIQ/Hero Section/0${num}.png`}
                  alt={`AccessIQ Dashboard ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">What success looks like</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold mb-4 text-blue-600">67%</div>
              <p className="text-gray-600">
                reduction in stale access to cardholder data after first quarterly review cycle.
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4 text-blue-600">4X faster</div>
              <p className="text-gray-600">
                onboarding for new hires: from 5-day access chaos to same-day provisioning
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4 text-blue-600">100%</div>
              <p className="text-gray-600">
                audit evidence coverage with zero manual spreadsheet exports: for the first time
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The UX Gap</h2>
          <p className="text-gray-600 text-lg mb-12">
            What a manager actually sees when they try to approve access.
          </p>

          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 mb-6">
              Here's the core UX problem. Existing tools were built by security engineers, for security engineers, non-technical managers are handed this interface and asked to make a risk-based decision.
            </p>
            <blockquote className="border-l-2 border-blue-600 pl-6 py-4 text-gray-600 italic">
              "What is schema_admin? Is that bad? I'll just approve it so James isn't blocked."
            </blockquote>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">What Existing Tools Show vs What AccessIQ Shows</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">What existing tools show a manager</h3>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/case-studies/AccessIQ/What existing tools show a manager/What existing tools show a manager.png"
                  alt="Old Tool"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>What is schema_admin? Is that bad? I'll just approve it so James isn't blocked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>No plain-English explanation of what this actually does</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>No risk context. No suggestion. No compliance note.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>PERMANENT is the default, nobody defaults to time-limited</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">What AccessIQ shows instead</h3>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/case-studies/AccessIQ/What AccessIQ shows insteadWhat AccessIQ shows instead.png"
                  alt="New Tool"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Plain English: Full Dashboard + Data Export not scope:read:write:export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Risk explained in one sentence, in business language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>AI suggestion with a clear reason, manager can agree in one click</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Time-limited by default, 14 days not permanent</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Core Problems</h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl">
            Moments where everything goes wrong. Not edge cases. These happen daily at every global fintech, each one a UX failure, a process failure, and a compliance failure rolled into one.
          </p>

          <div className="space-y-16">
            <div className="max-w-3xl">
              <div className="text-sm text-gray-500 mb-2">01</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">New hires start wrong</h3>
              <p className="text-gray-600 mb-4">
                When someone joins a company, their manager needs to set up their access. There's no standard. The role definition lives in a document nobody reads. So managers copy permissions from a random colleague, or approve whatever list lands in their inbox.
              </p>
              <p className="text-gray-700">
                <span className="text-blue-600">The consequence:</span> A junior Cards Analyst gets full export access to cardholder data because their peer happened to have it.
              </p>
            </div>

            <div className="max-w-3xl">
              <div className="text-sm text-gray-500 mb-2">02</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Access accumulates and nobody notices</h3>
              <p className="text-gray-600 mb-4">
                Someone moves from the risk team to marketing. Their old access stays. Their new access gets added. Six months later they have permissions from two completely different jobs, and nobody flagged it because there was no system looking.
              </p>
              <p className="text-gray-700">
                <span className="text-blue-600">The consequence:</span> A former fraud analyst retains write access to the payments database six months after moving to marketing. Nobody flagged it. That's exactly the kind of over-privileged, forgotten account that turns a phishing email into a breach.
              </p>
            </div>

            <div className="max-w-3xl">
              <div className="text-sm text-gray-500 mb-2">03</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quarterly reviews are a tick-box exercise</h3>
              <p className="text-gray-600 mb-4">
                Regulations require companies to formally confirm who has access to sensitive data every 90 days. In practice, this means a security team exports data from six different tools into a spreadsheet and emails it to 40 managers with "please review column F by Friday."
              </p>
              <p className="text-gray-700">
                <span className="text-blue-600">The consequence:</span> Managers tick every box in three minutes to get it off their plate. The evidence looks complete. The auditor arrives and finds the gaps anyway. Three weeks of manual work, repeated every quarter.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Research</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            What I found when I looked at existing tools
          </p>
          <p className="text-gray-700 max-w-3xl">
            I looked at 12 platforms in this space, the big enterprise names and newer challengers. Every single one showed managers raw technical data and asked them to make a judgment call.
          </p>
          <p className="text-gray-700 max-w-3xl mt-4">
            None of them explained what the data meant. None suggested what the manager should do. None were designed for someone without a security background.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">The Three Gaps</h2>

          <div className="space-y-12 max-w-4xl">
            <div>
              <div className="text-sm text-gray-500 mb-2">Gap 01</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Language</h3>
              <p className="text-blue-600 mb-4">Raw permissions, no translation</p>
              <p className="text-gray-600">
                Managers see "scope:write:export" with no explanation of what it does or whether it's safe to approve.
              </p>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Gap 02</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Decision Support</h3>
              <p className="text-blue-600 mb-4">No guidance, just data</p>
              <p className="text-gray-600">
                Platforms show risk flags but never say what to do. Managers decide blind, every time.
              </p>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Gap 03</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Fintech Context</h3>
              <p className="text-blue-600 mb-4">No templates for regulated roles</p>
              <p className="text-gray-600">
                No platform ships ready-made bundles for roles like "EU Cards Analyst." Built from scratch, every time.
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-700 mt-16 max-w-3xl">
            The gap wasn't in the technology. It was in who the technology was talking to.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The People</h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl">
            Who's actually involved
          </p>
          <p className="text-gray-700 max-w-3xl mb-12">
            This isn't a technology problem. It's a people problem.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Manager</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Know well</div>
                  <p className="text-gray-700">Their team, their goals, who needs what to do their job.</p>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Don't know</div>
                  <p className="text-gray-700">"scope:write:export" — what any permission string means.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Employee</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Need</div>
                  <p className="text-gray-700">Quick access to tools so they can start work without waiting days.</p>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Instead</div>
                  <p className="text-gray-700">They request everything upfront to avoid going back and asking again.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Security Team</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Responsible for</div>
                  <p className="text-gray-700">Proving to auditors that only the right people can access sensitive data.</p>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Stuck with</div>
                  <p className="text-gray-700">Managers who approve everything and spreadsheets they stitch together manually.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 max-w-3xl mt-12">
            The problem isn't that managers are careless. It's that the tools they're given speak a language they were never taught.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <div className="max-w-3xl">
            <div className="text-sm text-gray-500 mb-4">North Star</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Can a non-technical manager make a confident decision in under 60 seconds?
            </h2>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The screens and the thinking behind each one</h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl">
            One question drove every screen.
          </p>

          <div className="space-y-24">
            <div>
              <div className="text-sm text-gray-500 mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Manager Dashboard</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    Managers had no visibility into their team's access health. They only found out something was wrong when security escalated it, or an auditor did.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    Most tools answer "how bad is it?" This one answers "what do I do right now?" Five KPIs replace the Slack messages, emails, and spreadsheet tabs managers were juggling every morning.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/case-studies/AccessIQ/Manager Dashboard/Manager Dashboard.png"
                  alt="Manager Dashboard"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  91% of managers had no consolidated view of their team's access health. The KPIs weren't pulled from a compliance checklist, they came from what managers were already trying to track themselves.
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Conflict Detection</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    When a conflict was flagged, tools showed a red badge and nothing else. Managers had no idea what it meant, so they approved it anyway and moved on.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    The consequence of approving comes before the buttons. Always. Showing the real-world risk in plain English, not just a colour, is what makes managers actually stop and think.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/case-studies/AccessIQ/Conflict Detection/Conflict Detection.png"
                  alt="Conflict Detection"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  Managers approved conflicts in other tools because warnings were visual noise with no meaning. Replacing the red badge with a one-line consequence was the change that turned ignored alerts into actual decisions.
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Approvals Queue</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    80–120 requests a month, shown as a flat list. Everything looked equally urgent, so managers rubber-stamped the rest just to clear their inbox.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    The queue is triaged before the manager sees it. Four numbers tell the shape of the work upfront: what needs judgment, what AI handles, what's blocked.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/case-studies/AccessIQ/Approvals Queue/Approvals Queue.png"
                  alt="Approvals Queue"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  Approval fatigue is the leading cause of over-provisioning in high-volume IAM environments. When everything looks the same priority, risky requests slip through alongside routine ones.
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">04</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">AI Recommendation</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    Managers received a permission string and two buttons, no context, no suggestion, no risk signal. With nothing to go on, 91% approved everything to avoid blocking their team.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    The AI recommendation leads at 97% confidence, in plain English, before any buttons appear. Managers confirm a recommendation, they don't interpret raw data.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/case-studies/AccessIQ/AI Recommendation/01.png"
                    alt="AI Recommendation 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/case-studies/AccessIQ/AI Recommendation/02.png"
                    alt="AI Recommendation 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  Adding the confidence score and plain-English reasoning was the single change that lifted AI suggestion adoption from 22% to 61% in testing.
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">05</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Access Catalogue</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    Employees had no way to see what tools existed or what they did. They messaged their manager, who guessed what to grant, so requests came in broad to avoid asking twice.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    One place. Every tool described in plain English: what you can do, what you can't, and how many peers in your role already have it.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/case-studies/AccessIQ/Access Catalogue/Access Catalogue.png"
                  alt="Access Catalogue"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  Showing peer data directly reduced over-broad requests. When employees saw colleagues only had read-only access, they stopped asking for admin, cutting review volume downstream.
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">06</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Extend Access</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    Employees had no self-service way to manage access. Everything went through the manager via Slack, and expired access was only discovered when they got locked out.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    Two decisions only: how long, and why. Current access is shown upfront so employees know what they already have before submitting a new request.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/case-studies/AccessIQ/Extend Access/01.png"
                    alt="Extend Access 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/case-studies/AccessIQ/Extend Access/02.png"
                    alt="Extend Access 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  The expiry warning inside the modal let employees extend access in under 60 seconds, eliminating the emergency Slack messages managers got every time someone was locked out.
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-4">07</div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Request Access</h3>

              <div className="max-w-3xl mb-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">The Problem</h4>
                  <p className="text-gray-700">
                    Requesting access meant messaging your manager, waiting, explaining, and hoping they approved the right thing. No standard process, no record, no way to track it.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">The Design Decision</h4>
                  <p className="text-gray-700">
                    Two questions. What you'll get is shown before you ask, no surprises post-approval. The justification field creates the audit trail automatically, no separate process needed.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/case-studies/AccessIQ/Request Access/01.png"
                    alt="Request Access 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/case-studies/AccessIQ/Request Access/02.png"
                    alt="Request Access 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl">
                <div className="text-sm text-blue-600 mb-2">Research insight</div>
                <p className="text-gray-700">
                  The "Why do you need this?" field turns a rubber-stamp approval into a documented decision. When managers see the reason, they make better calls. When auditors ask, the answer is already there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link
              href="/case-studies"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← All Case Studies
            </Link>
            <Link
              href="/case-studies/finco"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Next Project: Finco →
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            Copyright ©2026. All rights reserved Sakshee Durshettiwar
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/sakshee-durshettiwar-product-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/saksheedurshet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

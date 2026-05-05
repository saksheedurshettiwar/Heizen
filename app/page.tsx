"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "ecosystem", label: "Ecosystem Information Architecture" },
  { id: "data", label: "Data Relationship and Compliance Mapping" },
  { id: "interaction", label: "Interaction Design" },
  { id: "strategic", label: "Strategic Approach" },
  { id: "critical", label: "Critical Scenarios" },
];

export default function AccessIQCaseStudy() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabsRef = useRef<HTMLDivElement>(null);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabsRef.current) {
      const top = tabsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="w-full px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
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
        <section className="w-full px-6 md:px-12 lg:px-24 pt-16 pb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900">
            NexusForce Ecosystem Design
          </h1>
        </section>

        <section ref={tabsRef} className="w-full px-6 md:px-12 lg:px-24 pt-3 pb-3 sticky top-[64px] z-40 bg-white">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 pb-24">
          {activeTab === "overview" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
                <p className="text-gray-600 leading-relaxed">
                  A hospital posts a job through one system. A staffing agency submits candidates through another. A worker uploads compliance documents through a third. Nobody has visibility into whether these three things actually connect until something goes wrong. A mismatched compliance document. A vendor rate accidentally exposed to a client. A placement created without a checklist attached. These aren't UI problems. They're architecture problems. And they get more expensive the later you catch them.
                </p>
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
                <p className="text-gray-600 leading-relaxed">
                  In US healthcare staffing, a non-compliant placement is not a bad hire. It is a patient safety risk. MSP platforms handle millions in billing every month, and a vendor seeing a client's bill rate even once is a contractual breach. Most platforms patch these problems at the component level. A hidden field here, a disabled button there. NexusForce needed them solved at the architecture level, before a single screen was designed.
                </p>
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-2">The Actors</h2>
                <p className="text-gray-500 mb-12">Four actors. Four agendas. One platform.</p>
                <div className="grid grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="p-8 border-r border-gray-200">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">Hospital</p>
                        <p className="text-sm text-gray-400">Organisation Portal</p>
                      </div>
                      <div className="mt-8">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Does</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>● Post jobs</p>
                          <p>● Approve timesheets</p>
                          <p>● Track compliance</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-900">❌ What the agency earns per placement</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 border-r border-gray-200">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">Staffing Agency</p>
                        <p className="text-sm text-gray-400">Vendor Portal</p>
                      </div>
                      <div className="mt-8">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Does</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>● Submit candidates</p>
                          <p>● Browse open jobs</p>
                          <p>● Track placements</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-900">❌ What the hospital is charged per hour</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 border-r border-gray-200">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">Worker</p>
                        <p className="text-sm text-gray-400">Candidate Portal</p>
                      </div>
                      <div className="mt-8">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Does</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>● View placement details</p>
                          <p>● Upload compliance documents</p>
                          <p>● Submit timesheets</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-900">❌ Any rate or billing information</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">StaffLogic</p>
                        <p className="text-sm text-gray-400">Admin Portal</p>
                      </div>
                      <div className="mt-8">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Does</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>● Configure all portals</p>
                          <p>● Set MSP and SaaS fees</p>
                          <p>● Audit every action</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-900 font-medium">✅ Everything across all portals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="p-6 border border-gray-200 bg-gray-100 rounded-2xl">
                  <h2 className="text-2xl font-semibold mb-4">North Star</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Can a worker walk into a hospital on day one knowing every document is in order without anyone having to chase them?
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ecosystem" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Task 1: Ecosystem Information Architecture</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Identify and map the four distinct portals referenced in the system requirements. You must create a detailed Information Architecture (IA) for the entire ecosystem. Your IA must account for the following role-based access and visibility constraints:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 leading-relaxed mb-6">
                  <li><span className="font-medium text-gray-900">Organisation Portal:</span> Must support Client Executives, Hiring Managers (department-scoped), and Operations roles. Note that vendor rates are strictly hidden from all roles in this portal.</li>
                  <li><span className="font-medium text-gray-900">Vendor Portal:</span> Focuses on vendor-side management and Vendor Rates.</li>
                  <li><span className="font-medium text-gray-900">Candidate Portal:</span> A simplified interface for workers to view incentives and manage documents.</li>
                  <li><span className="font-medium text-gray-900">Admin Portal:</span> A high-level control center for &quot;Program&quot; roles (StaffLogic internal) to manage configurations and global MSP/SaaS fees.</li>
                </ul>
              </div>
              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-12">Ecosystem Architecture</h2>
                <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                  <Image
                    src="/Ecosystem/ecosystem-mock.png"
                    alt="Ecosystem architecture mock"
                    width={1440}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Task 2: Data Relationship & Compliance Mapping</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Map the relationship between Requisition Templates, the Document Wallet, and Compliance Checklists. You must logically architect how these three entities interact without further prompting. Your mapping should respect these core system rules:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 leading-relaxed mb-6">
                  <li><span className="font-medium text-gray-900">Snapshot Rule:</span> Job postings inherit template data at the moment of creation; subsequent edits to a template do not retroactively affect existing jobs.</li>
                  <li><span className="font-medium text-gray-900">Immutability Rule:</span> Edits to a checklist template have no effect on ongoing jobs.</li>
                  <li><span className="font-medium text-gray-900">The Union Rule:</span> A placement's compliance task list is the &quot;Union&quot; of the Candidate's Document Wallet items and the specific Requisition Checklist items.</li>
                </ul>
              </div>
              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-8">Who owns what</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Admin</h3>
                    <p className="text-gray-700 font-medium mb-1">Creates Compliance Checklist</p>
                    <p className="text-gray-500 text-sm">A governed list of documents every worker must submit before being placed against a job.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Org</h3>
                    <p className="text-gray-700 font-medium mb-1">Creates Requisition Template</p>
                    <p className="text-gray-500 text-sm">A structured job posting that defines the role, shift, rate, and compliance requirements.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Candidate</h3>
                    <p className="text-gray-700 font-medium mb-1">Owns Document Wallet</p>
                    <p className="text-gray-500 text-sm">A personal document repository submitted and compared against job requirements at placement.</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-12">
                <h2 className="text-2xl font-semibold mb-12">The relationship between Requisition Templates, the Document Wallet, and Compliance Checklists</h2>
                <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                  <Image
                    src="/Data/data-mock.png"
                    alt="Data relationship mock"
                    width={1440}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "interaction" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Task 3: Interaction Design (Organisation Portal)</h2>
                <p className="text-gray-600 leading-relaxed mb-12">
                  Design a five-screen flow within the Organisation Portal for Creating a Requisition Template. This is the mandatory starting point for all job creation. Your flow must include the following steps as defined in the technical specs:
                </p>
                <a
                  href="https://www.figma.com/proto/d3flG936CO8wKQd9woX1xe/NexusForce---Heizen?node-id=1-8674&viewport=-233%2C-2089%2C0.11&t=VOgqZIb0ghKQRt9c-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A8674&page-id=0%3A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#2E90FA] text-white rounded-[12px] text-sm font-medium hover:bg-[#1B76D8] transition-colors"
                >
                  View Prototype
                </a>
              </div>
              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>
              <div className="space-y-16">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Type Selection</h3>
                  <p className="text-gray-500 text-sm mb-8">Long-Term Order, Per Diem, Permanent, or Internal Flex Pool.</p>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Engagement type is the structural foundation of every requisition in NexusForce. Gloria selects Long-Term Order to initiate a 13-week contract workflow. This single selection determines which fields, compliance rules, and vendor submission behaviors are available in the steps ahead.
                    </p>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 1/step-1-1.png" alt="Step 1: Type Selection Mock 1" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 1/step-1-2.png" alt="Step 1: Type Selection Mock 2" width={1440} height={900} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Engagement type cannot be changed after activation. It gates the shift scheduler, compensation structure, and vendor submission rules. An incorrect selection requires the template to be deactivated, duplicated, and rebuilt from Step 1.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Details</h3>
                  <p className="text-gray-500 text-sm mb-8">Name, Occupation, Specialty, Location, Department, and multi-select Benefits.</p>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Occupation and specialty are not just descriptive fields. In NexusForce, they drive compliance checklist suggestions and determine which vendor pools are eligible to submit. Gloria configures the role details while the Vendor Facing Preview reflects exactly what agencies will see when the job goes live.
                    </p>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 2/step-2-01.png" alt="Step 2: Details Mock 1" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 2/step-2-02.png" alt="Step 2: Details Mock 2" width={1440} height={900} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Specialty is a dependent field. It resets when occupation changes. Location supports multi-select and candidates can be placed at any listed site. Benefits are pre-configured by Admin and are not freeform. The preview panel enforces rate isolation from this step forward with no bill rate, no internal notes are visible to vendors.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Shift & Schedule</h3>
                  <p className="text-gray-500 text-sm mb-8">Shift types and specific HH:MM time ranges.</p>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Shift configuration in NexusForce feeds directly into timesheet generation, overtime calculation, and placement cost estimation. Gloria defines the shift pattern and contract duration once. Every downstream operation references this data.
                    </p>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 3/step-3-01.png" alt="Step 3: Shift & Schedule Mock 1" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 3/step-3-02.png" alt="Step 3: Shift & Schedule Mock 2" width={1440} height={900} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Overnight shifts where end time precedes start time require cross-midnight duration calculation. An incorrect entry here propagates into payroll and invoicing across every placement created from this template. Contract duration set here is inherited by all jobs posted from this template and cannot be overridden at the job level without creating a new template.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Compensation</h3>
                  <p className="text-gray-500 text-sm mb-8">Bill Rates, Number of Positions, and optional Incentives.</p>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Bill rate and vendor rate are structurally separated in NexusForce. Gloria sets what her organisation pays per placement. What vendors earn is calculated independently and never surfaces in the Organisation Portal. Incentives are configured here and inherited by every job posted from this template.
                    </p>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 4/step-4-01.png" alt="Step 4: Compensation Mock 1" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 4/step-4-02.png" alt="Step 4: Compensation Mock 2" width={1440} height={900} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Overtime rate is auto-calculated based on the bill rate and is read-only. Vendor rate is calculated as Vendor Rate = (Bill Rate × Hours) − MSP Fees and is never exposed in the Organisation Portal across any role. Incentives are optional. Marking them as required would force every template to carry a bonus structure, which is incorrect system behavior.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Compliance & Submission Rules</h3>
                  <p className="text-gray-500 text-sm mb-8">Integration of saved checklists and approval workflow toggles.</p>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      The compliance checklist selected here is frozen at job creation per the Immutability Rule. Gloria attaches the ICU Nurse Compliance Pack, configures approval workflows, and sets vendor submission limits. Once activated, this template becomes the reusable foundation for every ICU Long-Term Order posted from her organisation.
                    </p>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 5/step-5-01.png" alt="Step 5: Compliance & Submission Mock 1" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 5/step-5-02.png" alt="Step 5: Compliance & Submission Mock 2" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 5/step-5-03.png" alt="Step 5: Compliance & Submission Mock 3" width={1440} height={900} className="w-full h-auto" />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image src="/Interaction Design/Step 5/step-5-04.png" alt="Step 5: Compliance & Submission Mock 4" width={1440} height={900} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Once Gloria activates this template, the checklist locks. Any edits made to it after this point have no effect on placements already in progress. At the placement stage, the system merges the checklist with the candidate's existing documents, duplicates are removed, and only documents with Approved status count as compliant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "strategic" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Task 4: Strategic Approach (The "One-Week" Challenge)</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  NexusForce needs to be ready for development quickly. In a separate document or slide, answer the following:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 leading-relaxed mb-6">
                  <li>How would you approach the design process if the deadline for the entire portal (IA, all modules, and high-fidelity screens) was strictly one week?</li>
                  <li>Detail your strategy for prioritisation, how you would handle "Non-Goals" (like external HR integrations or custom roles), and how you would ensure that "Non-Negotiable Automations" (like automatic placement creation upon offer acceptance) are clearly accounted for in the UI.</li>
                </ul>
              </div>
              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>

              {/* Q1 */}
              <div className="mb-32">
                <div className="flex items-start gap-8 md:gap-16 mb-16">
                  <span className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none tracking-tighter flex-shrink-0 -mt-4">01</span>
                  <div className="pt-6 md:pt-8 flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">How would you approach the design process if the deadline for the entire portal was strictly one week?</h3>
                  </div>
                </div>
                <div className="space-y-8">
                  <p className="text-lg text-gray-600 leading-relaxed">A one-week deadline does not compress the process. It forces a sequencing decision that most designers avoid: what does development need first to never be blocked, and what can be precisely specified instead of fully designed without slowing anything down.</p>
                  <p className="text-lg text-gray-600 leading-relaxed">The week splits into three phases.</p>
              <div className="grid grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden mt-12">
                <div className="p-8 border-r border-gray-200">
                  <p className="text-base font-semibold text-gray-900 mb-2">Foundation first</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed">IA, role permissions, and data rules locked in writing before any screen is opened. If these shift mid-week, every screen built on top of them gets rebuilt.</p>
                </div>
                <div className="p-8 border-r border-gray-200">
                  <p className="text-base font-semibold text-gray-900 mb-2">Critical path hi-fi</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed">The Requisition Template wizard is the entry point to everything. Designing it completely generates the component library as a byproduct. Dev starts building by end of Day 2 while design continues.</p>
                </div>
                <div className="p-8">
                  <p className="text-base font-semibold text-gray-900 mb-2">Assembly over redesign</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed">Vendor Portal shares 70% of Org Portal components. Candidate Portal is three screens. Admin Portal gets a precise annotated spec. Internal tooling does not need hi-fi polish, it needs accuracy.</p>
                </div>
              </div>
                </div>
              </div>

              {/* Q2 */}
              <div className="mb-32">
                <div className="flex items-start gap-8 md:gap-16 mb-16">
                  <span className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none tracking-tighter flex-shrink-0 -mt-4">02</span>
                  <div className="pt-6 md:pt-8 flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">Detail your strategy for prioritisation and how you would handle Non-Goals.</h3>
                  </div>
                </div>
                <div className="space-y-10">
                  <p className="text-lg text-gray-600 leading-relaxed">Prioritisation in a one-week sprint is not about what is important. Everything on the brief is important. It is about what blocks development if it is missing, and what can be added later without touching existing work.</p>
                  <p className="text-lg text-gray-600 leading-relaxed">Three tiers. One rule per tier.</p>
                  <div className="grid grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="p-8 border-r border-gray-200">
                      <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Ships hi-fi — no negotiation</p>
                      <p className="text-sm font-medium text-gray-700 mb-3">Wizard · Org Portal · Component library</p>
                      <p className="text-sm text-gray-600 leading-relaxed">The load-bearing decisions. If any of them are wrong or missing, development builds on an unstable foundation and every downstream module pays the cost.</p>
                    </div>
                    <div className="p-8 border-r border-gray-200">
                      <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Ships specified — fully development-ready</p>
                      <p className="text-sm font-medium text-gray-700 mb-3">Vendor · Candidate · Admin portals</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Precisely annotated and development-ready. Not every screen needs to be hi-fi for development to start building it correctly. Org Portal components do the heavy lifting.</p>
                    </div>
                    <div className="p-8">
                      <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Does not ship — and that is documented</p>
                      <p className="text-sm font-medium text-gray-700 mb-3">HR integrations · Custom roles · Reporting</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Out of scope for Phase 1. Each gets a stub in the navigation with a Phase 2 label. Absent now and added later means development touches navigation code twice. Stub once. Never revisit.</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-xl font-medium text-gray-900 leading-relaxed">Non-goals are not failures. They are decisions. The difference between running out of time and making a deliberate call is one document written before delivery.</p>
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div className="mb-24">
                <div className="flex items-start gap-8 md:gap-16 mb-16">
                  <span className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none tracking-tighter flex-shrink-0 -mt-4">03</span>
                  <div className="pt-6 md:pt-8 flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">How you would ensure that Non-Negotiable Automations are clearly accounted for in the UI.</h3>
                  </div>
                </div>
                <div className="space-y-10">
                  <p className="text-lg text-gray-600 leading-relaxed">Automations that fire without a human click are invisible by default. Invisible system actions create confusion, distrust, and support tickets. The design responsibility is to make every automation visible, traceable, and narrated in the UI at the exact moment it fires.</p>
                  <p className="text-lg text-gray-600 leading-relaxed">Three automations are accounted for. One ships in Phase 1. Two are designed now and built in Phase 2.</p>

                  <div className="grid grid-cols-1 gap-0 border border-gray-200 rounded-2xl overflow-hidden pt-8">
                    <div className="p-8 border-b border-gray-200">
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-base font-bold text-gray-900 uppercase tracking-wide">Phase 1</span>
                        <span className="text-xs text-gray-400 font-medium">ships now</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Trigger</p>
                          <p className="text-sm text-gray-900 mb-3">Candidate accepts an offer</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Action</p>
                          <p className="text-sm text-gray-900">Placement record created automatically</p>
                        </div>
                      </div>
                      <p className="text-[15px] text-gray-600 leading-relaxed">The UI narrates this in three places. A toast notification confirms the action in the moment. The placement list surfaces the new record with an AUTO badge. The audit log records SYSTEM as the actor with a timestamp and the trigger event.</p>
                    </div>
                    <div className="p-8">
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-base font-bold text-gray-900 uppercase tracking-wide">Phase 2</span>
                        <span className="text-xs text-gray-400 font-medium">designed now, built later</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Trigger</p>
                          <p className="text-sm text-gray-900 mb-3">Scheduled activation date arrives</p>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Action</p>
                          <p className="text-sm text-gray-900">Job moves from Scheduled to Active · Vendor notifications fire</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Trigger</p>
                          <p className="text-sm text-gray-900 mb-3">Document approved in candidate wallet</p>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Action</p>
                          <p className="text-sm text-gray-900">Matching compliance items marked Satisfied across all active placements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <p className="text-xl font-medium text-gray-900 leading-relaxed">The rule across all three: if the system does something without a human click, the UI must explain what happened, why it happened, and when. Silent automations are a design failure, not a development oversight.</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === "critical" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Regulation Changes at State Level</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  California mandates a new document requirement for ICU nurses. Admin needs to update the checklist but active placements are frozen per the Immutability Rule. This is a conflict between system design and legal obligation.
                </p>
                <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                  <Image
                    src="/Critical/Regulatory%20Override.png"
                    alt="Regulatory Override mock"
                    width={1440}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>

              <div className="w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bill Rate Negotiated After Job Is Live</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  ICU job posted at $250/hr. Vendors submit 3 candidates. Procurement renegotiates to $300/hr. No mechanism exists to update a live job's bill rate. Invoices will generate at the wrong rate.
                </p>
                <div className="space-y-8">
                  <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                    <Image
                      src="/Critical/Bill%20Rate%20Amendment%20-%2001.png"
                      alt="Bill Rate Amendment mock 1"
                      width={1440}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                    <Image
                      src="/Critical/Bill%20Rate%20Amendment%20-%2002.png"
                      alt="Bill Rate Amendment mock 2"
                      width={1440}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>

              <div className="w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same Template Used Across Fiscal Year Boundary</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Template created Dec 2025 with $10,000 signing bonus. Used to post jobs in Jan 2026 when tax rules change. Finance flags incorrect withholding 3 months later.
                </p>
                <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                  <Image
                    src="/Critical/Template%20Fiscal%20Year%20Review.png"
                    alt="Template Fiscal Year Review mock"
                    width={1440}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>

              <div className="w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Job Posted During a Hiring Freeze</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  James posts an ICU job. CFO approved a hiring freeze for Critical Care the same morning. NexusForce has no connection to budget approval systems. Job goes live. Candidate placed. Finance rejects it weeks later.
                </p>
                <div className="space-y-8">
                  <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                    <Image
                      src="/Critical/Hiring%20Freeze%20Confirmation%20-%2001.png"
                      alt="Hiring Freeze Confirmation mock 1"
                      width={1440}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                    <Image
                      src="/Critical/Hiring%20Freeze%20Confirmation%20-%2002.png"
                      alt="Hiring Freeze Confirmation mock 2"
                      width={1440}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

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
              <div className="relative w-full h-[600px] md:h-[800px] mb-24">
                <Image
                  src="/Ecosystem/Four Portal Overview.png"
                  alt="Four Portal Overview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-[600px] md:h-[800px] mb-0">
                <Image
                  src="/Ecosystem/Role-Based Access & Navigation (Module Visibility per Portal).png"
                  alt="Role-Based Access & Navigation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full mt-8 pt-8 border-t border-gray-200">
                <div className="text-sm text-gray-400 mb-3">Constraints</div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Vendor rates are never exposed in the Organisation Portal — absent, not hidden.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Navigation items with no access are removed entirely — not greyed, not locked.
                </p>
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
                    <p className="text-gray-700">Creates Compliance Checklist</p>
                    <p className="text-gray-500 mt-2 text-sm">(list of docs a worker must have for a job type)</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Org</h3>
                    <p className="text-gray-700">Creates Requisition Template</p>
                    <p className="text-gray-500 mt-2 text-sm">(job description — attaches a checklist to it)</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Candidate</h3>
                    <p className="text-gray-700">Owns Document Wallet</p>
                    <p className="text-gray-500 mt-2 text-sm">(their personal docs — BLS cert, license, etc.)</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-12 mb-12"></div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-12">The relationship between Requisition Templates, the Document Wallet, and Compliance Checklists</h2>
                <div className="space-y-0">
                  {/* Step 1: Admin */}
                  <div className="flex items-center gap-6 py-6 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-500">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Admin</span>
                        <span className="text-gray-300">creates</span>
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Compliance Checklist</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                        <ul className="text-sm text-gray-600 space-y-0.5">
                          <li>BLS Cert</li>
                          <li>Drug Screen</li>
                          <li>State License</li>
                        </ul>
                        <p className="text-xs text-gray-400 italic mt-2 md:mt-0 md:ml-auto">IMMUTABILITY RULE: edit this checklist later? ongoing placements = not affected</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Org */}
                  <div className="flex items-center gap-6 py-6 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-500">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Org</span>
                        <span className="text-gray-300">creates</span>
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Requisition Template</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                        <ul className="text-sm text-gray-600 space-y-0.5">
                          <li>ICU Nurse · Day Shift</li>
                          <li>$54/hr · SF Location</li>
                          <li>+ checklist attached</li>
                        </ul>
                        <p className="text-xs text-gray-400 italic mt-2 md:mt-0 md:ml-auto">SNAPSHOT RULE: edit this template later? existing jobs = not affected</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Job Posting */}
                  <div className="flex items-center gap-6 py-6 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-500">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Org posts</span>
                        <span className="text-gray-300">→</span>
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Job Posting</span>
                      </div>
                      <p className="text-sm text-gray-400 italic">(template + checklist both frozen here)</p>
                    </div>
                  </div>

                  {/* Step 4: Candidate */}
                  <div className="flex items-center gap-6 py-6 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-500">4</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Candidate</span>
                        <span className="text-gray-300">owns</span>
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Document Wallet</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                        <ul className="text-sm text-gray-600 space-y-0.5">
                          <li>BLS Cert ✓</li>
                          <li>Driver's License ✓</li>
                          <li>ACLS Cert ✓</li>
                        </ul>
                        <p className="text-xs text-gray-400 italic mt-2 md:mt-0 md:ml-auto">UNION RULE: wallet docs + job checklist combined into one list (dedup applied)</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Result */}
                  <div className="flex items-center gap-6 py-6">
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-white">5</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Result</span>
                        <span className="text-gray-300">→</span>
                        <span className="inline-block px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-medium">Placement Task List</span>
                      </div>
                      <div className="space-y-0.5 text-sm">
                        <p className="text-gray-600">BLS Cert — in wallet, approved</p>
                        <p className="text-gray-600">Driver's License — in wallet, approved</p>
                        <p className="text-gray-400">Drug Screen — required, not uploaded</p>
                        <p className="text-gray-400">State License — required, not uploaded</p>
                      </div>
                    </div>
                  </div>
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
                <div className="space-y-6">
                  <div className="p-6 bg-gray-100 rounded-2xl">
                    <p className="text-gray-600 leading-relaxed"><span className="font-medium text-gray-900">Step 1: Type Selection</span> (Long-Term Order, Per Diem, Permanent, or Internal Flex Pool).</p>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Engagement type is the structural foundation of every requisition in NexusForce. Gloria selects Long-Term Order to initiate a 13-week contract workflow. This single selection determines which fields, compliance rules, and vendor submission behaviors are available in the steps ahead.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 1/Step 1 - 1.png"
                        alt="Step 1: Type Selection Mock 1"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 1/Step 1 - 2.png"
                        alt="Step 1: Type Selection Mock 2"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Engagement type cannot be changed after activation. It gates the shift scheduler, compensation structure, and vendor submission rules. An incorrect selection requires the template to be deactivated, duplicated, and rebuilt from Step 1.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-100 rounded-2xl">
                    <p className="text-gray-600 leading-relaxed"><span className="font-medium text-gray-900">Step 2: Details</span> (Name, Occupation, Specialty, Location, Department, and multi-select Benefits).</p>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Occupation and specialty are not just descriptive fields. In NexusForce, they drive compliance checklist suggestions and determine which vendor pools are eligible to submit. Gloria configures the role details while the Vendor Facing Preview reflects exactly what agencies will see when the job goes live.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 2/Step 2 - 01.png"
                        alt="Step 2: Details Mock 1"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 2/Step 2 - 02.png"
                        alt="Step 2: Details Mock 2"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Specialty is a dependent field. It resets when occupation changes. Location supports multi-select and candidates can be placed at any listed site. Benefits are pre-configured by Admin and are not freeform. The preview panel enforces rate isolation from this step forward with no bill rate, no internal notes are visible to vendors.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-2xl">
                    <p className="text-gray-600 leading-relaxed"><span className="font-medium text-gray-900">Step 3: Shift & Schedule</span> (Shift types and specific HH:MM time ranges).</p>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Shift configuration in NexusForce feeds directly into timesheet generation, overtime calculation, and placement cost estimation. Gloria defines the shift pattern and contract duration once. Every downstream operation references this data.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 3/Step 3 - 01.png"
                        alt="Step 3: Shift & Schedule Mock 1"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 3/Step 3 - 02.png"
                        alt="Step 3: Shift & Schedule Mock 2"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Overnight shifts where end time precedes start time require cross-midnight duration calculation. An incorrect entry here propagates into payroll and invoicing across every placement created from this template. Contract duration set here is inherited by all jobs posted from this template and cannot be overridden at the job level without creating a new template.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-2xl">
                    <p className="text-gray-600 leading-relaxed"><span className="font-medium text-gray-900">Step 4: Compensation</span> (Bill Rates, Number of Positions, and optional Incentives).</p>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Bill rate and vendor rate are structurally separated in NexusForce. Gloria sets what her organisation pays per placement. What vendors earn is calculated independently and never surfaces in the Organisation Portal. Incentives are configured here and inherited by every job posted from this template.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 4/Step 4 - 01.png"
                        alt="Step 4: Compensation Mock 1"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 4/Step 4 - 02.png"
                        alt="Step 4: Compensation Mock 2"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Business logic</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      Overtime rate is auto-calculated based on the bill rate and is read-only. Vendor rate is calculated as Vendor Rate = (Bill Rate × Hours) − MSP Fees and is never exposed in the Organisation Portal across any role. Incentives are optional. Marking them as required would force every template to carry a bonus structure, which is incorrect system behavior.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-2xl">
                    <p className="text-gray-600 leading-relaxed"><span className="font-medium text-gray-900">Step 5: Compliance & Submission Rules</span> (Integration of saved checklists and approval workflow toggles).</p>
                  </div>
                  <div className="pl-6 pr-6 pt-4 pb-8 border-l-2 border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Context</p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      The compliance checklist selected here is frozen at job creation per the Immutability Rule. Gloria attaches the ICU Nurse Compliance Pack, configures approval workflows, and sets vendor submission limits. Once activated, this template becomes the reusable foundation for every ICU Long-Term Order posted from her organisation.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 5/Step 5 - 01.png"
                        alt="Step 5: Compliance & Submission Mock 1"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 5/Step 5 - 02.png"
                        alt="Step 5: Compliance & Submission Mock 2"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 5/Step 5 - 03.png"
                        alt="Step 5: Compliance & Submission Mock 3"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="relative w-full border border-gray-200 rounded-[12px] overflow-hidden">
                      <Image
                        src="/Interaction Design/Step 5/Step 5 - 04.png"
                        alt="Step 5: Compliance & Submission Mock 4"
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                      />
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
            <div className="pt-16">

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
                      <p className="text-[15px] text-gray-600 leading-relaxed">IA, role permissions, and data rules are locked in writing before any screen is opened. These are the decisions that cause full redesigns if they shift mid-week.</p>
                    </div>
                    <div className="p-8 border-r border-gray-200">
                      <p className="text-base font-semibold text-gray-900 mb-2">Critical path hi-fi</p>
                      <p className="text-[15px] text-gray-600 leading-relaxed">The Requisition Template wizard is the entry point to everything. Designing it completely generates the component library as a byproduct. Development starts building by end of Day 2 while design continues.</p>
                    </div>
                    <div className="p-8">
                      <p className="text-base font-semibold text-gray-900 mb-2">Assembly over redesign</p>
                      <p className="text-[15px] text-gray-600 leading-relaxed">Vendor Portal shares 70% of Org Portal components. Candidate Portal is three screens. Admin Portal is internal tooling — a precise annotated spec ships faster than rushed hi-fi.</p>
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
                  <div className="grid grid-cols-3 gap-0 border-t border-b border-gray-200 py-8">
                    <div className="pr-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Ships hi-fi</p>
                      <p className="text-sm text-gray-700 leading-snug">Wizard · Org Portal · Component library</p>
                    </div>
                    <div className="px-6 border-l border-gray-200">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Ships specified</p>
                      <p className="text-sm text-gray-700 leading-snug">Vendor · Candidate · Admin portals</p>
                    </div>
                    <div className="pl-6 border-l border-gray-200">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Does not ship</p>
                      <p className="text-sm text-gray-700 leading-snug">HR integrations · Custom roles · Reporting</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed">External HR integrations, custom role builder, full reporting, and invoice dispute handling are out of scope for Phase 1. Each gets a stub in the navigation with a Phase 2 label. Stubbing once costs 15 minutes and saves a future sprint.</p>
                  <div className="pt-4">
                    <p className="text-xl font-medium text-gray-900 leading-relaxed">Non-goals are not failures. They are decisions. Every non-goal is named, reasoned, and written into the handoff before delivery.</p>
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

                  <div className="space-y-10 pt-8">
                    <div>
                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-base font-bold text-gray-900 uppercase tracking-wide">Phase 1</span>
                        <span className="text-xs text-gray-400 font-medium">ships now</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-12 mb-6">
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Trigger</p>
                          <p className="text-gray-900">Candidate accepts an offer</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Action</p>
                          <p className="text-gray-900">Placement record created automatically</p>
                        </div>
                      </div>
                      <p className="text-[15px] text-gray-600 leading-relaxed">The UI narrates this in three places. A toast notification confirms the action in the moment. The placement list surfaces the new record with an AUTO badge. The audit log records SYSTEM as the actor with a timestamp and the trigger event.</p>
                    </div>

                    <div className="h-px bg-gray-200"></div>

                    <div>
                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-base font-bold text-gray-900 uppercase tracking-wide">Phase 2</span>
                        <span className="text-xs text-gray-400 font-medium">designed now, built later</span>
                      </div>
                      <div className="space-y-8 mb-6">
                        <div className="grid md:grid-cols-2 gap-12">
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Trigger</p>
                            <p className="text-gray-900">Scheduled activation date arrives</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Action</p>
                            <p className="text-gray-900">Job moves from Scheduled to Active · Vendor notifications fire</p>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Trigger</p>
                            <p className="text-gray-900">Document approved in candidate wallet</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Action</p>
                            <p className="text-gray-900">Matching compliance items marked Satisfied across all active placements</p>
                          </div>
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
        </section>
      </main>
    </div>
  );
}

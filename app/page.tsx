"use client";

import { useState } from "react";
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

        <section className="w-full px-6 md:px-12 lg:px-24 pb-8">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed">
                  Enterprise MSP platforms struggle with fragmented workforce management. NexusForce needed a unified ecosystem that connects compliance data, access controls, and workforce scheduling into one coherent platform.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={`/case-studies/AccessIQ/Hero Section/0${num}.png`}
                      alt={`NexusForce Dashboard ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">My Role</h2>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end product design: information architecture, compliance data mapping, interaction design, and strategic sprint planning. Delivered in a one-week intensive design sprint with stakeholder alignment at every milestone.
                </p>
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
            </div>
          )}

          {activeTab === "interaction" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Task 3: Interaction Design (Organisation Portal)</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design a five-screen flow within the Organisation Portal for Creating a Requisition Template. This is the mandatory starting point for all job creation. Your flow must include the following steps as defined in the technical specs:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 leading-relaxed mb-6">
                  <li><span className="font-medium text-gray-900">Step 1: Type Selection</span> (Long-Term Order, Per Diem, Permanent, or Internal Flex Pool).</li>
                  <li><span className="font-medium text-gray-900">Step 2: Details</span> (Name, Occupation, Specialty, Location, Department, and multi-select Benefits).</li>
                  <li><span className="font-medium text-gray-900">Step 3: Shift & Schedule</span> (Shift types and specific HH:MM time ranges).</li>
                  <li><span className="font-medium text-gray-900">Step 4: Compensation</span> (Bill Rates, Number of Positions, and optional Incentives).</li>
                  <li><span className="font-medium text-gray-900">Step 5: Compliance & Submission Rules</span> (Integration of saved checklists and approval workflow toggles).</li>
                </ul>
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
                  <li>Detail your strategy for prioritisation, how you would handle &quot;Non-Goals&quot; (like external HR integrations or custom roles).</li>
                  <li>How you would ensure that &quot;Non-Negotiable Automations&quot; (like automatic placement creation upon offer acceptance) are clearly accounted for in the UI.</li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

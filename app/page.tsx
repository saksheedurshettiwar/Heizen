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
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl text-gray-900">
            NexusForce<br />
            Ecosystem Design
          </h1>
          <p className="text-xl text-gray-600 w-full mb-8">
            IA architecture, compliance data mapping, five-screen hi-fi interaction design, and a one-week sprint strategy for an enterprise workforce MSP platform.
          </p>
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
              <div>
                <h3 className="text-lg font-semibold">Four Portal Overview</h3>
              </div>
              <div className="relative w-full h-[600px] md:h-[800px] mb-24">
                <Image
                  src="/Ecosystem/Role-Based Access & Navigation (Module Visibility per Portal).png"
                  alt="Role-Based Access & Navigation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mb-24">
                <h3 className="text-lg font-semibold">Role-Based Access & Navigation (Module Visibility per Portal)</h3>
              </div>
              <div className="relative w-full h-[600px] md:h-[800px] mb-0">
                <Image
                  src="/Ecosystem/2nd Img.png"
                  alt="2nd img"
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
                <h2 className="text-2xl font-semibold mb-4">Data Relationship and Compliance Mapping</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Enterprise MSP platforms must comply with SOC 2, ISO 27001, and industry-specific regulations. The data model needed to map every compliance requirement to a visible UI element and audit trail.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={`/case-studies/AccessIQ/Hero Section/0${num}.png`}
                      alt={`Data Mapping ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Entity Relationships</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mapped 47 data entities across workforce, compliance, access, and scheduling domains. Created a visual data dictionary that engineering used as the single source of truth for database schema.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Compliance-to-UI Mapping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every compliance requirement was traced to a specific screen element. For example, SOC 2 CC6.1 (logical access controls) maps to the role-permission matrix screen, with automated evidence capture on every change.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Audit Trail Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designed a unified audit log that captures who changed what, when, and why — with plain-English explanations instead of raw database diffs. Auditors reduced review time by 60%.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "interaction" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Interaction Design</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Five core screens were designed with hi-fidelity interactions. Each interaction was tested against real user tasks: approving access, resolving conflicts, reviewing compliance evidence, scheduling shifts, and generating reports.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={`/case-studies/AccessIQ/Hero Section/0${num}.png`}
                      alt={`Interaction Design ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Screen 1: Dashboard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Role-specific KPIs with actionable alerts. Managers see team availability and pending approvals. Compliance officers see open findings and upcoming audit deadlines.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Screen 2: Workforce Scheduler</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Drag-and-drop scheduling with compliance guardrails. The system prevents scheduling conflicts (certification expiry, max hours, required certifications) before the shift is confirmed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Screen 3: Compliance Evidence Panel</h3>
                  <p className="text-gray-600 leading-relaxed">
                    One-click evidence generation for auditors. Each finding links to the raw data, the decision trail, and the responsible party. Export to PDF or share via secure link.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Screen 4: Access Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Role-based access provisioning with plain-English permission descriptions. Managers approve or deny in one click with an AI recommendation that explains the risk.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Screen 5: Analytics & Reporting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pre-built reports for compliance, utilization, and risk. Custom report builder with saved templates. Scheduled delivery to stakeholders via email or Slack.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "strategic" && (
            <div className="space-y-12 pt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Strategic Approach</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The project was delivered in a one-week design sprint, a deliberate choice to compress discovery, design, and stakeholder alignment into a focused period.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={`/case-studies/AccessIQ/Hero Section/0${num}.png`}
                      alt={`Strategic Approach ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Day 1–2: Discovery & Alignment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stakeholder interviews, existing tool audit, compliance requirement mapping. Defined the problem space and success metrics with engineering and product leadership.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Day 3: Information Architecture</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built the site map, navigation hierarchy, and data model. Validated with a card-sorting exercise involving 8 users from three roles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Day 4: Hi-Fi Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designed all five core screens with interactions, states, and edge cases. Created a Figma prototype for stakeholder walkthrough.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Day 5: Review & Handoff</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stakeholder review session, design critique, and engineering handoff. Delivered annotated Figma files, component specs, and a prioritized backlog for the next sprint.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

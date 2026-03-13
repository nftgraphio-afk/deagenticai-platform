import React from 'react';
import { SegmentLandingTemplate } from '@/components/SegmentLandingTemplate';

export function CryptoEnterprises() {
  return (
    <SegmentLandingTemplate 
      hero={{
        headline: "Institutional-Grade AI Governance and Control",
        subheadline: "Enterprise-ready infrastructure for risk-aware agent execution and institutional MPC vaults.",
        ctaPrimary: "Request Private Demo",
        ctaSecondary: "Join Waitlist"
      }}
      problem={{
        title: "Enterprise AI Security Challenges",
        blocks: [
          { title: "Governance Deficit", desc: "Large organizations lack the internal controls for autonomous AI systems to interact with treasuries." },
          { title: "Compliance Misalignment", desc: "Automated agent actions can easily drift from corporate compliance and risk mandates." },
          { title: "Risk of Breach", desc: "Centralized agent API keys represent a multi-million dollar vulnerability for institutions." },
          { title: "Auditability Gap", desc: "Enterprises need verifiable proof that agent transactions strictly followed internal policy." }
        ]
      }}
      capabilities={{
        title: "Enterprise AI Control Plane",
        blocks: [
          { title: "Institutional MPC Vault", desc: "Distributed signing infrastructure that separates agent logic from key control." },
          { title: "AI Governance & Control", desc: "Centralized policy management for all your organization's autonomous agents." },
          { title: "Multi-sig Governance Overlays", desc: "Combine AI autonomy with traditional human-in-the-loop multi-sig for large transfers." },
          { title: "Risk Monitoring & Limits", desc: "Real-time monitoring and enforcement of corporate risk boundaries on all agent actions." }
        ]
      }}
      scenarios={{
        title: "Enterprise AI Use Cases",
        items: [
          { title: "Treasury Automation", desc: "Automate large-scale treasury operations with institutional-grade safety and auditing." },
          { title: "DAO Governance AI Advisors", desc: "Deploy AI agents to provide data-driven insights and execute governance votes based on DAO policy." },
          { title: "Automated Settlement Agents", desc: "High-volume, secure settlement and rebalancing between disparate institutional vaults." }
        ]
      }}
      strategicCTA={{
        title: "Scale your institutional AI operations.",
        buttonText: "Request Private Demo"
      }}
    />
  );
}

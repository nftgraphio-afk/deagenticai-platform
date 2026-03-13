import React from 'react';
import { SegmentLandingTemplate } from '@/components/SegmentLandingTemplate';

export function AIInfrastructureTeams() {
  return (
    <SegmentLandingTemplate 
      hero={{
        headline: "Control Infrastructure for Autonomous AI Systems",
        subheadline: "DeAgenticAI provides the deterministic control plane for AI agents to operate securely and autonomously in Web3 ecosystems.",
        ctaPrimary: "Request Architecture Call",
        ctaSecondary: "Join Early Access"
      }}
      problem={{
        title: "The Risks of Autonomous Agents",
        blocks: [
          { title: "Latency of Multisig", desc: "Traditional multisig wallets require manual human intervention, creating unacceptable latency for fast-moving AI agents." },
          { title: "Missing Policy Layers", desc: "Generic wallets lack the ability to enforce granular, context-aware policies on agent transaction intents." },
          { title: "Reasoning and Chain Gap", desc: "There is no secure bridge between an AI's model reasoning and the final on-chain execution." },
          { title: "Single Point of Failure", desc: "Standard private key management is either too centralized or too cumbersome for agentic workflows." }
        ]
      }}
      capabilities={{
        title: "Platform Capabilities for AI Teams",
        blocks: [
          { title: "Policy DSL for AI Constraints", desc: "Define sophisticated logic for agent spending, frequency, and transaction types in a human-readable DSL." },
          { title: "Deterministic Transaction Enforcement", desc: "Ensure every agent transaction strictly adheres to predefined safety and risk boundaries." },
          { title: "Delegated Execution Control", desc: "Granularly delegate signing authority to agents while maintaining absolute ownership and finality." },
          { title: "Audit Logs for Agent Reasoning", desc: "Maintain full transparency by linking agent reasoning traces with the resulting on-chain actions." }
        ]
      }}
      scenarios={{
        title: "AI Infrastructure Use Cases",
        items: [
          { title: "Autonomous Trading Agents", desc: "Deploy sophisticated trading strategies with hard-coded risk parameters enforced by our policy engine." },
          { title: "On-chain AI Treasuries", desc: "Allow AI agents to manage protocol treasuries with strictly enforced spending and investment limits." },
          { title: "Agent-Driven Ecosystem Growth", desc: "Enable agents to distribute grants or incentives based on verifiable ecosystem metrics." }
        ]
      }}
      strategicCTA={{
        title: "Architect the future of agentic finance.",
        buttonText: "Collaborate on Infrastructure"
      }}
    />
  );
}

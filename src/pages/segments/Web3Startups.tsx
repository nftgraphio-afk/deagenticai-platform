import React from 'react';
import { SegmentLandingTemplate } from '@/components/SegmentLandingTemplate';

export function Web3Startups() {
  return (
    <SegmentLandingTemplate 
      hero={{
        headline: "Scale Your AI Protocol with Built-in Security",
        subheadline: "Accelerate your go-to-market for AI agents with our plug-and-play wallet and policy infrastructure.",
        ctaPrimary: "Integrate Early",
        ctaSecondary: "Join Waitlist"
      }}
      problem={{
        title: "Web3 Startup Security Risks",
        blocks: [
          { title: "Long Go-to-Market", desc: "Building your own secure custody and policy layer for agents takes months of development and audit." },
          { title: "Custody Friction", desc: "Balancing user-controlled keys with automated agent execution often leads to security vulnerabilities." },
          { title: "Compliance Uncertainty", desc: "Regulating automated transactions without a clear policy framework is a major compliance risk." },
          { title: "Fragile Logic", desc: "On-chain policy enforcement is expensive and difficult to iterate for fast-moving startups." }
        ]
      }}
      capabilities={{
        title: "Web3 Startup Wallet Layer",
        blocks: [
          { title: "AI Wallet SDK", desc: "Easily integrate sophisticated AI-aware wallets into your frontend or backend." },
          { title: "Custodial/Non-custodial Toggle", desc: "Flexible architecture that allows for varying degrees of user and agent control." },
          { title: "Fast Integration APIs", desc: "Get your AI agents on-chain with our streamlined REST and SDK endpoints." },
          { title: "Built-in MPC Security", desc: "Leverage institutional-grade security without the overhead of building it yourself." }
        ]
      }}
      scenarios={{
        title: "Startup-Focused Use Cases",
        items: [
          { title: "AI Gaming Agents", desc: "Power autonomous in-game NPCs that can own assets, trade, and interact with the game economy." },
          { title: "NFT Minting Bots", desc: "Automate sophisticated minting or whitelist strategies based on real-time social or on-chain data." },
          { title: "Autonomous Social Accounts", desc: "Create AI agents that can manage their own on-chain identity and social presence." }
        ]
      }}
      strategicCTA={{
        title: "Ship faster with DeAgenticAI.",
        buttonText: "Integrate Early"
      }}
    />
  );
}

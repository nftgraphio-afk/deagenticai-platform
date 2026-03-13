import React from 'react';
import { EcosystemServiceLayout, EcosystemServiceProps } from '@/components/EcosystemServiceLayout';

const mpcWalletData: EcosystemServiceProps = {
  name: "MPC Wallet Infrastructure",
  oneSentenceExplanation: "Enterprise-grade distributed key management for autonomous agent wallets.",
  definition: "MPC Wallet Infrastructure is a decentralized custody solution that uses Multi-Party Computation to shard private keys across a distributed network of nodes. It ensures that autonomous AI agents can execute on-chain transactions without ever having access to a complete private key, eliminating single points of failure and unauthorized signature risks.",
  whyExists: {
    assumption: "Traditional wallets assume a single human owner who can safely manage a mnemonic or private key in a secure environment.",
    riskVector: "AI agents require high-frequency signing, making local key storage a massive attack surface for extraction and unauthorized execution.",
    lackCapability: "Standard wallets lack the ability to shard authority or enforce cryptographic constraints before a signature is even generated.",
    enforcementPoint: "By moving custody to a distributed MPC layer, enforcement can occur at the shard validation level rather than just the application layer."
  },
  howItWorks: {
    steps: {
      trigger: "Agent initiates a signing request via API or SDK.",
      evaluation: "The request is verified against pre-defined cryptographic policies.",
      authorization: "MPC nodes validate the request and authorize their specific key shards.",
      signature: "Nodes collaborate to generate a valid threshold signature (TSS).",
      audit: "The entire signing lifecycle is logged to an immutable audit trail."
    },
    explanation: "Our MPC infrastructure utilizes a (t, n) threshold signature scheme. When an agent requests a signature, the intent is first validated by our policy engine. Once cleared, a subset of distributed nodes (the threshold) perform a secure computation to produce a standard blockchain signature. At no point is the full private key reconstituted or exposed."
  },
  architecture: {
    components: [
      "Distributed Key Generation (DKG) Protocol",
      "Threshold Signature Scheme (TSS) Engine",
      "Node Orchestration Layer",
      "Cryptographic Shard Management",
      "Agent Signing SDK"
    ],
    trustModel: [
      "Authority is distributed across non-colluding node operators.",
      "No single node or the agent itself ever holds the complete private key.",
      "The system remains secure as long as the threshold of nodes is not compromised."
    ]
  },
  securityModel: {
    properties: [
      "Distributed Control: Key shards are never co-located.",
      "Zero-Knowledge Interaction: Nodes sign without seeing each other's shards.",
      "Policy-Gated Access: Signatures require pre-validation by the policy engine.",
      "Dynamic Refresh: Shards can be rotated without changing the public address."
    ]
  },
  comparison: [
    { feature: "Key Storage", traditional: "Single Seed / Mnemonic", service: "Distributed Shards" },
    { feature: "Recovery Model", traditional: "Mnemonic Recovery", service: "Social/Distributed Resharding" },
    { feature: "Attack Surface", traditional: "Single Point of Failure", service: "Distributed Multi-Node" },
    { feature: "Enforcement", traditional: "Application Layer Only", service: "Protocol Layer Cryptography" }
  ],
  useCases: [
    {
      name: "Autonomous DeFi Trading",
      problem: "Local keys can be stolen if the agent's server is compromised.",
      howEnables: "Agent uses MPC shards; server breach yields zero usable key material.",
      outcome: "Secure, high-frequency autonomous trading."
    },
    {
      name: "DAO Treasury Operations",
      problem: "Multi-sig overhead is too high for rapid AI-driven rebalancing.",
      howEnables: "MPC allows threshold signing at machine speed with DAO-enforced policies.",
      outcome: "Agile, secure treasury management."
    }
  ],
  integration: {
    model: "Available via our high-performance Signing SDK and REST API. Compatible with both cloud-hosted and self-hosted node configurations.",
    compatibility: ["Ethereum", "Solana", "L2s (Arbitrum, Optimism, Base)", "Polygon", "Cosmos"]
  },
  relatedContent: {
    guides: [
      { title: "What Is MPC?", link: "/guides/what-is-mpc", summary: "A deep dive into Multi-Party Computation and its role in modern cryptography." },
      { title: "Implementing Threshold Signatures", link: "/guides/threshold-signatures", summary: "A technical guide to implementing TSS in agentic workflows." }
    ],
    comparisons: [
      { title: "MPC vs Multisig", link: "/ecosystem/comparisons/mpc-vs-multisig" },
      { title: "Policy Wallet vs Smart Contract Wallet", link: "/ecosystem/comparisons/policy-vs-scw" }
    ],
    glossary: [
      { term: "MPC", link: "/glossary/mpc" },
      { term: "Threshold Signature", link: "/glossary/threshold-signature" },
      { term: "DKG", link: "/glossary/dkg" }
    ]
  },
  faq: [
    { q: "What is the DeAgenticAI Ecosystem?", a: "The DeAgenticAI Ecosystem is a decentralized control plane infrastructure designed for autonomous AI agents in Web3. It provides a modular framework combining distributed MPC custody, cryptographic policy enforcement, and MCP-native delegation to ensure secure, verifiable, and programmable agent operations." },
    { q: "How does MPC improve AI wallet security?", a: "Multi-Party Computation (MPC) enhances security by sharding private keys across multiple nodes. This ensures that no single entity or point of failure can access the full key, protecting autonomous agents from unauthorized signature attempts and external breaches." }
  ]
};

export function MPCWallet() {
  return <EcosystemServiceLayout {...mpcWalletData} />;
}

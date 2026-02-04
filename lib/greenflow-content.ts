import {
  ArrowRightLeft,
  Banknote,
  Blocks,
  CreditCard,
  Globe,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import type React from "react";

export type PartnerMark = {
  name: string;
  monogram: string;
};

export const partners: PartnerMark[] = [
  { name: "Northbeam", monogram: "NB" },
  { name: "AsterPay", monogram: "AP" },
  { name: "CloudMint", monogram: "CM" },
  { name: "Saffron Labs", monogram: "SL" },
  { name: "Riverline", monogram: "RL" },
  { name: "BrightLedger", monogram: "BL" },
];

export type ProductBlock = {
  id: "gateway" | "ibans" | "wallet";
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  accent: "mint" | "lime";
  mockupVariant: "gateway" | "ibans" | "wallet";
};

export const productBlocks: ProductBlock[] = [
  {
    id: "gateway",
    eyebrow: "Payment Gateway",
    title: "Accept payments with clean rails and clear settlement.",
    description:
      "Greenflow Gateway gives you a single integration for card payments, bank transfers, and local methods—then settles into the accounts you choose.",
    bullets: [
      "One API for checkout, payouts, and refunds",
      "Real-time status webhooks and reconciliation",
      "Risk controls designed for regulated businesses",
    ],
    accent: "lime",
    mockupVariant: "gateway",
  },
  {
    id: "ibans",
    eyebrow: "IBAN Services",
    title: "Open IBAN accounts for teams and customers.",
    description:
      "Issue dedicated IBANs in minutes and route incoming funds automatically. Great for marketplaces, payroll, and multi-entity finance operations.",
    bullets: [
      "Virtual IBANs with configurable routing",
      "Automated statements and account rules",
      "Built-in permissions for finance teams",
    ],
    accent: "mint",
    mockupVariant: "ibans",
  },
  {
    id: "wallet",
    eyebrow: "Digital Wallet",
    title: "Move value between fiat and digital assets—safely.",
    description:
      "A crypto-friendly wallet designed for treasury, on/off ramps, and controlled exposure—without the hype.",
    bullets: [
      "Transparent limits, approvals, and audit trails",
      "Managed address books and whitelisting",
      "Instant internal transfers across accounts",
    ],
    accent: "lime",
    mockupVariant: "wallet",
  },
];

export type Step = {
  title: string;
  description: string;
};

export const onboardingSteps: Step[] = [
  {
    title: "Sign up",
    description:
      "Create your workspace, add teammates, and choose the products you need.",
  },
  {
    title: "Verify identity",
    description:
      "Complete business and beneficial-owner checks with guided, secure flows.",
  },
  {
    title: "Start sending money",
    description:
      "Issue accounts and cards, fund balances, and move payments worldwide.",
  },
];

export type Solution = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const solutions: Solution[] = [
  {
    title: "IBAN accounts",
    description: "Dedicated IBANs with routing rules and statements.",
    icon: Banknote,
  },
  {
    title: "Card issuing",
    description: "Physical and virtual cards with fine-grained controls.",
    icon: CreditCard,
  },
  {
    title: "Fraud protection",
    description: "Risk checks that prioritize legitimate customers.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-border payments",
    description: "Send and receive across regions with predictable fees.",
    icon: Globe,
  },
  {
    title: "Digital assets",
    description: "Crypto-friendly rails with governance and approvals.",
    icon: Blocks,
  },
  {
    title: "E-wallet",
    description: "Balances, transfers, and payout orchestration in one place.",
    icon: Wallet,
  },
];

export type CountryChip = {
  label: string;
  color: string;
};

export const countryChips: CountryChip[] = [
  { label: "CA", color: "bg-emerald-100" },
  { label: "US", color: "bg-lime-100" },
  { label: "MX", color: "bg-emerald-50" },
  { label: "BR", color: "bg-lime-50" },
  { label: "GB", color: "bg-emerald-100" },
  { label: "IE", color: "bg-lime-100" },
  { label: "ES", color: "bg-emerald-50" },
  { label: "FR", color: "bg-lime-50" },
  { label: "DE", color: "bg-emerald-100" },
  { label: "NL", color: "bg-lime-100" },
  { label: "SE", color: "bg-emerald-50" },
  { label: "NO", color: "bg-lime-50" },
  { label: "PL", color: "bg-emerald-100" },
  { label: "RO", color: "bg-lime-100" },
  { label: "TR", color: "bg-emerald-50" },
  { label: "AE", color: "bg-lime-50" },
  { label: "ZA", color: "bg-emerald-100" },
  { label: "NG", color: "bg-lime-100" },
  { label: "IN", color: "bg-emerald-50" },
  { label: "SG", color: "bg-lime-50" },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Is Greenflow a regulated service?",
    answer:
      "Greenflow is built to support regulated operations with identity checks, audit trails, and configurable controls. Product availability depends on your country and use case.",
  },
  {
    question: "How fast can we get our first IBANs and cards?",
    answer:
      "Most teams can create a workspace instantly, then complete verification in days—not weeks. Once approved, issuing accounts and cards is a self-serve flow.",
  },
  {
    question: "Do you support cross-border payouts?",
    answer:
      "Yes. You can send payouts to bank accounts in multiple regions, track statuses in real time, and reconcile everything using references and exports.",
  },
  {
    question: "What makes the wallet crypto-friendly but enterprise-grade?",
    answer:
      "We focus on governance: approvals, whitelisting, limits, and reporting. The goal is controlled exposure—not speculative product design.",
  },
  {
    question: "Can we control permissions for finance and ops teams?",
    answer:
      "Yes. You can invite teammates and set role-based access, including who can view balances, initiate transfers, or manage cards.",
  },
  {
    question: "Do you provide webhooks and API access?",
    answer:
      "Greenflow is API-first. Webhooks cover payments, transfers, card events, and account updates. SDKs are optional—REST works great.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is transparent: you pay for the products you use (payments, accounts, cards) with volume tiers for growing teams. Talk to sales for a custom plan.",
  },
  {
    question: "Can we migrate from an existing provider?",
    answer:
      "Yes. We provide migration guidance for references, exports, and payout workflows so you can move without disrupting finance operations.",
  },
];

export const featureHighlight = {
  eyebrow: "Cross-border payments",
  title: "Send money worldwide with predictable routing.",
  description:
    "Move funds across currencies with clear fees, real-time tracking, and smart routing that favors reliability. Built for treasury and operations—without surprises.",
  points: [
    { label: "Fast delivery", value: "Minutes to next-day" },
    { label: "Coverage", value: "50+ countries" },
    { label: "Controls", value: "Limits, approvals, audit logs" },
  ],
  icon: ArrowRightLeft,
};


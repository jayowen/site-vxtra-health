export interface ResourceItem {
  title: string;
  description: string;
  audience: string;
  icon: "briefcase" | "handshake" | "stethoscope" | "users" | "book";
  available: boolean;
}

export const resources: ResourceItem[] = [
  {
    title: "The Smart CEO's Guide to Self-Insured Health Plans",
    description:
      "A plain-language walkthrough of how self-insurance works, what to look for in a plan, and how to evaluate whether Vxtra Health is the right fit for your company.",
    audience: "Employers",
    icon: "briefcase",
    available: false,
  },
  {
    title: "Broker Differentiation Guide: Stand Out with Vxtra Health",
    description:
      "How to position the Vxtra Health plan to your clients, overcome objections, and win business with a product no competitor can match.",
    audience: "Brokers",
    icon: "handshake",
    available: false,
  },
  {
    title: "Physician Network Overview",
    description:
      "How the Vxtra model works for independent physicians — direct employer relationships, no pre-authorizations, and fair compensation aligned with patient care.",
    audience: "Physicians",
    icon: "stethoscope",
    available: false,
  },
  {
    title: "Your Vxtra Health Benefits Guide",
    description:
      "A simple guide to your new health benefits: $0 copays, $0 deductibles, local doctors who know you, and how to use your care navigation service.",
    audience: "Employees",
    icon: "users",
    available: false,
  },
  {
    title: "Understanding Self-Insurance: What Every Leader Should Know",
    description:
      "An overview of self-insured health plans — how they work, why companies are switching, and how the physician-steward model changes the equation.",
    audience: "All Audiences",
    icon: "book",
    available: false,
  },
];

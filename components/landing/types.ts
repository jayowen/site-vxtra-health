export interface ProofBarItem {
  value: string;
  label: string;
  icon: "shield" | "dollar" | "map" | "heart" | "users" | "clock";
}

export interface ProblemCard {
  type: string;
  headline: string;
  body: string;
  icon: "users" | "heartPulse" | "briefcase" | "handshake";
}

export interface AuthorityCard {
  title: string;
  body: string;
  icon: "stethoscope" | "globe" | "clock" | "cpu" | "dollar" | "heart" | "shield" | "users";
}

export interface PlanStep {
  number: number;
  title: string;
  body: string;
}

export interface ComparisonRow {
  before: string;
  after: string;
}

export interface SuccessCard {
  title: string;
  subtitle: string;
  body: string;
  icon: "heart" | "stethoscope" | "briefcase" | "users" | "home";
}

export interface StakeItem {
  title: string;
  body: string;
}

export interface LandingPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    headline: string;
    headlineEmphasis: string;
    subhead: string;
    urgency?: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    heroImage?: string;
    heroImageAlt?: string;
    proofBar: ProofBarItem[];
  };
  problem: {
    sectionLabel: string;
    headline: string;
    cards: ProblemCard[];
  };
  guide: {
    sectionLabel: string;
    headline: string;
    quote: string;
    attribution: string;
    authorityCards: AuthorityCard[];
    videoTitle: string;
    videoBody: string;
  };
  plan: {
    sectionLabel: string;
    headline: string;
    steps: PlanStep[];
    ctaText: string;
    ctaHref: string;
  };
  showOurTown: boolean;
  comparison: {
    sectionLabel: string;
    headline: string;
    subhead: string;
    headerBefore: string;
    headerAfter: string;
    rows: ComparisonRow[];
  };
  success: {
    sectionLabel: string;
    headline: string;
    cards: SuccessCard[];
  };
  stakes: {
    sectionLabel: string;
    headline: string;
    items: StakeItem[];
    closing: string;
  };
  cta: {
    sectionLabel: string;
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
  };
}

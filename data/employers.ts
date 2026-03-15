import { LandingPageContent } from "@/components/landing/types";

export const employersContent: LandingPageContent = {
  meta: {
    title: "For Employers",
    description:
      "Vxtra Health gives self-insured middle market employers a physician-steward health plan with $0 copays, $0 deductibles, and transparent data — powered by AI-enabled technology. Now launching in Augusta & Gainesville, GA.",
  },
  hero: {
    label: "Now Launching in Augusta & Gainesville, GA",
    headline: "Health plan costs are crushing your business.",
    headlineEmphasis: "We built a way out.",
    subhead:
      "Vxtra Health is bringing a physician-steward health plan model exclusively to self-insured middle market employers in the Southeast, South, and Midwest — powered by AI-enabled technology, local physicians, and costs you can actually see and control.",
    urgency:
      "New federal transparency mandates mean the old way isn't just expensive — it's a liability. Vxtra keeps you compliant and ahead.",
    ctaPrimary: "Schedule a Call",
    ctaPrimaryHref: "mailto:info@vxtrahealth.com?subject=Schedule a Call — Employer",
    ctaSecondary: "See How It Works",
    ctaSecondaryHref: "#how-it-works",
    heroImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    heroImageAlt: "CEO reviewing health plan cost data at a modern office desk",
    proofBar: [
      { value: "30+ Years", label: "Physician-Steward Experience", icon: "shield" },
      { value: "$0 Copays & Deductibles", label: "For Every Member", icon: "dollar" },
      { value: "Southeast, South & Midwest", label: "Now Launching in Augusta & Gainesville", icon: "map" },
    ],
  },
  problem: {
    sectionLabel: "Why Health Plan Costs Keep Rising",
    headline:
      "You shouldn't have to choose between taking care of your people and protecting your bottom line.",
    cards: [
      {
        type: "For Employees",
        headline: "Healthcare is confusing and way too expensive",
        body: "Nobody should dread going to the doctor because they're afraid of what it'll cost. Small problems become expensive emergencies when people avoid care.",
        icon: "users",
      },
      {
        type: "For Physicians",
        headline: "Insurance companies have stripped physicians of their agency",
        body: "Pre-authorizations, denials, and administrative overhead stand between doctors and their patients. Physicians should practice medicine, not fight paperwork.",
        icon: "heartPulse",
      },
      {
        type: "For Employers",
        headline:
          "Most self-insured employers pay more every year for plans designed for insurance company profits",
        body: "Premiums rise 7-10% every year. At that rate, your healthcare spend doubles in a decade, and you're still getting the same legacy experience. New transparency mandates add regulatory risk on top of rising costs.",
        icon: "briefcase",
      },
      {
        type: "For Brokers",
        headline: "It's hard to stand out when every broker is selling the same plans",
        body: "60% of brokers are now owned by private equity that won't innovate. Independent brokers need a product the competition can't match.",
        icon: "handshake",
      },
    ],
  },
  guide: {
    sectionLabel: "30+ Years on Every Side of Healthcare",
    headline: "We've been on every side of this table.",
    quote:
      "We know what renewal season feels like. We know the frustration of watching insurance companies extract value while delivering less. We've lived it.",
    attribution: "Larry Hightower, Co-Founder & CEO",
    authorityCards: [
      {
        title: "Physician-Steward Design",
        body: "Physicians serve as stewards of every health plan — ensuring clinical decisions stay with the doctors who know their patients, not insurance executives chasing margins.",
        icon: "stethoscope",
      },
      {
        title: "The Our Town Methodology",
        body: "Our proprietary methodology organizes local employers and physicians to create operational and financial leverage across five key pillars: plan design, pharmacy, medical, reinsurance, and member orchestration. Together, you're better.",
        icon: "globe",
      },
      {
        title: "30+ Years of Operations",
        body: "Three decades of health plan operations: processing claims, building contracts, managing sales, and running the technical side of health plans.",
        icon: "clock",
      },
      {
        title: "Vxtra Care",
        body: "Personal care navigation for every employee. Our care orchestration team guides members through the system — scheduling, follow-ups, and advocacy so no one falls through the cracks.",
        icon: "heart",
      },
      {
        title: "Powered by JudyHealth",
        body: "Our AI-enabled technology platform processes medical and prescription claims together with transparent data visibility — the same caliber of technology Fortune 100 companies use.",
        icon: "cpu",
      },
    ],
    videoTitle: "Our Story: Coming Soon",
    videoBody:
      "A short video about why we started Vxtra Health and how we're changing healthcare for self-insured employers.",
  },
  plan: {
    sectionLabel: "How It Works",
    headline: "Three steps to a health plan that actually works.",
    steps: [
      {
        number: 1,
        title: "Schedule a Conversation",
        body: "Tell us what's not working with your current plan. We'll listen. No pitch, no pressure, just a real conversation about your challenges.",
      },
      {
        number: 2,
        title: "Get a Custom Plan Design",
        body: "Our physician-steward team designs a plan around your workforce: $0 copays, $0 deductibles, zero pre-authorization requirements.",
      },
      {
        number: 3,
        title: "Take Control of Your Health Plan",
        body: "Your costs stabilize with transparent data visibility. Your employees access benefits without barriers. Physicians focus on medicine, not insurance paperwork.",
      },
    ],
    ctaText: "Schedule Your Conversation",
    ctaHref: "mailto:info@vxtrahealth.com?subject=Schedule a Conversation — Employer",
  },
  showOurTown: true,
  comparison: {
    sectionLabel: "Traditional Plans vs. Vxtra Health",
    headline: "This is what \"better\" looks like.",
    subhead: "A side-by-side look at traditional plans versus the Vxtra Health approach.",
    headerBefore: "Traditional Plans",
    headerAfter: "Vxtra Health",
    rows: [
      { before: "Copays on every visit", after: "$0 copays" },
      { before: "High deductibles", after: "$0 deductibles" },
      { before: "Pre-authorization required", after: "No pre-authorization" },
      { before: "Months-old data", after: "Transparent data visibility" },
      { before: "Misaligned incentives", after: "Physician-aligned care" },
      { before: "7-10% annual increases", after: "Hundreds per employee per month in savings" },
      { before: "Employees avoid care", after: "Employees get care" },
      { before: "Compliance risk from new mandates", after: "Full federal transparency compliance" },
    ],
  },
  success: {
    sectionLabel: "Better for Everyone",
    headline: "What happens when healthcare works the way it should.",
    cards: [
      {
        title: "Employees",
        subtitle: "Be someone who actually uses their healthcare, without the stress",
        body: "$0 copays, $0 deductibles. A real relationship with their doctor. Care without dread.",
        icon: "heart",
      },
      {
        title: "Physicians",
        subtitle: "Practice medicine the way you always intended to",
        body: "Agency restored. Community-centered care. Independent practice in a community that knows your name.",
        icon: "stethoscope",
      },
      {
        title: "Employers",
        subtitle: "Be the reason your company finally has a health plan it can be proud of",
        body: "Predictable, lower costs with transparent data visibility. Employees who say \"my employer cares about me.\" Hero status to the board. Full compliance with new federal mandates.",
        icon: "briefcase",
      },
    ],
  },
  stakes: {
    sectionLabel: "The Cost of Waiting",
    headline: "The cost of doing nothing keeps going up.",
    items: [
      {
        title: "Premiums will keep rising",
        body: "At 7%+ annually, your healthcare spend doubles in a decade. The math doesn't get friendlier with time.",
      },
      {
        title: "Your best people will leave",
        body: "68% of employees say benefits are a top factor in staying. Subpar coverage drives top talent to competitors who invest in their people.",
      },
      {
        title: "Care quality will decline",
        body: "When employees avoid care due to cost, small problems become expensive emergencies. Prevention is always cheaper than crisis.",
      },
      {
        title: "New mandates create real liability",
        body: "Federal transparency in coverage regulations are now in effect. Employers who don't modernize their health plan practices face fines, audits, and regulatory exposure.",
      },
    ],
    closing:
      "Every year of inaction is another year of 1,600% stock appreciation for insurance companies, funded by your premiums.",
  },
  cta: {
    sectionLabel: "Take the First Step",
    headline: "Be the reason your company finally has a health plan it can be proud of.",
    body: "Vxtra Health is now launching in Augusta and Gainesville, Georgia — with plans to serve secondary markets across the Southeast, South, and Midwest. No pitch, no pressure, just an honest conversation about your challenges and whether Vxtra is the right fit.",
    ctaPrimary: "Schedule a Call",
    ctaPrimaryHref: "mailto:info@vxtrahealth.com?subject=Schedule a Call — Employer",
    ctaSecondary: "Download Our Overview",
    ctaSecondaryHref: "mailto:info@vxtrahealth.com?subject=Request Overview — Employer",
  },
};

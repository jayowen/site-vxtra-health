import { LandingPageContent } from "@/components/landing/types";

export const physiciansContent: LandingPageContent = {
  meta: {
    title: "For Physicians",
    description:
      "Vxtra Health puts physicians back in charge of patient care in Augusta and Gainesville, Georgia. No pre-authorizations, no insurance interference. Work directly with local employers, supported by Fortune 100 technology that handles claims and data so you can focus on medicine.",
  },
  hero: {
    label: "Now Launching in Augusta & Gainesville, GA",
    headline: "Insurance companies are practicing medicine for you.",
    headlineEmphasis: "We built a way out.",
    subhead:
      "Vxtra Health puts physicians, not insurance companies, back in charge of patient care. You work directly with local employers and their employees, supported by technology that handles the claims and data so you can focus on medicine.",
    ctaPrimary: "Join the Network",
    ctaPrimaryHref: "mailto:info@vxtrahealth.com?subject=Join the Network — Physician",
    ctaSecondary: "See How It Works",
    ctaSecondaryHref: "#how-it-works",
    heroImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    heroImageAlt: "Physician providing direct patient care without insurance barriers",
    proofBar: [
      { value: "30+ Years", label: "Physician-Led Experience", icon: "shield" },
      { value: "$0 Copays & Deductibles", label: "For Every Member", icon: "dollar" },
      { value: "Augusta & Gainesville", label: "Exclusive Launch Markets", icon: "map" },
    ],
  },
  problem: {
    sectionLabel: "The Problem",
    headline:
      "You didn't spend a decade in training to fight pre-authorization forms and get told how to treat your own patients by someone who's never seen them.",
    cards: [
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
        body: "Premiums rise 7-10% every year. The employers in your community deserve better, and so do the patients you treat.",
        icon: "briefcase",
      },
      {
        type: "For Brokers",
        headline: "It's hard to stand out when every broker is selling the same plans",
        body: "60% of brokers are now owned by private equity that won't innovate. The brokers bringing Vxtra to local employers are the ones creating real change.",
        icon: "handshake",
      },
    ],
  },
  guide: {
    sectionLabel: "Your Guide",
    headline: "We've been on every side of this table.",
    quote:
      "You didn't spend a decade in training to fight pre-auth forms. We know what it feels like when insurance companies stand between you and your patients. We built Vxtra to change that.",
    attribution: "Larry Hightower, Co-Founder & CEO",
    authorityCards: [
      {
        title: "30+ Years Physician-Led",
        body: "Founded and led by physicians who understand healthcare from the inside out, not insurance executives chasing margins.",
        icon: "stethoscope",
      },
      {
        title: "Powered by JudyHealth",
        body: "Our technology partner handles claims processing and data through the first platform to process medical and prescription claims together. The technology works so you don't have to fight it.",
        icon: "cpu",
      },
      {
        title: "30+ Years of Operations",
        body: "Three decades of health plan operations: processing claims, building contracts, managing sales, and running the technical side of health plans.",
        icon: "clock",
      },
      {
        title: "Physician-First Design",
        body: "Every plan feature starts with one question: does this let physicians practice medicine the way it should be practiced?",
        icon: "heart",
      },
    ],
    videoTitle: "Our Story: Coming Soon",
    videoBody:
      "A short video about why we started Vxtra Health and how we're putting physicians back in charge of patient care.",
  },
  plan: {
    sectionLabel: "The Plan",
    headline: "Three steps to practicing medicine your way.",
    steps: [
      {
        number: 1,
        title: "Join the Vxtra Network",
        body: "Connect with us to learn how the Vxtra model works and what it means for your practice. No corporate contracts, no loss of autonomy, just a conversation.",
      },
      {
        number: 2,
        title: "Work Directly with Local Employers",
        body: "You partner with self-insured employers in Augusta and Gainesville. Their employees become your patients. No pre-authorizations, no insurance interference, no call centers making clinical decisions.",
      },
      {
        number: 3,
        title: "Practice Medicine Your Way",
        body: "You make the clinical decisions. Your patients trust you, not a 1-800 number. And you run an independent practice in a community that knows your name.",
      },
    ],
    ctaText: "Join the Network",
    ctaHref: "mailto:info@vxtrahealth.com?subject=Join the Network — Physician",
  },
  showOurTown: true,
  comparison: {
    sectionLabel: "The Difference",
    headline: "This is what practicing medicine should look like.",
    subhead:
      "A side-by-side look at your current insurance experience versus practicing with Vxtra Health.",
    headerBefore: "Traditional Insurance",
    headerAfter: "Vxtra Health",
    rows: [
      { before: "Pre-authorization required for treatment", after: "No pre-authorization" },
      { before: "Insurance companies make clinical decisions", after: "You make clinical decisions" },
      {
        before: "Patients avoid care due to cost",
        after: "Patients access care with $0 copays and $0 deductibles",
      },
      { before: "Administrative overhead and denials", after: "Technology handles claims and data" },
      { before: "Hospital employment eroding independence", after: "Independent practice supported" },
      {
        before: "Patients assigned by network rules",
        after: "Patients choose you because their plan values local doctors",
      },
      {
        before: "Physician pay declining year over year",
        after: "Fair compensation aligned with patient care",
      },
    ],
  },
  success: {
    sectionLabel: "The Outcome",
    headline: "What happens when physicians lead healthcare again.",
    cards: [
      {
        title: "Physicians",
        subtitle: "Practice medicine the way you always intended to",
        body: "Agency restored. Community-centered care. Independent practice in a community that knows your name. You make the clinical decisions, and your patients trust you.",
        icon: "stethoscope",
      },
      {
        title: "Employers",
        subtitle: "Be the reason your company finally has a health plan it can be proud of",
        body: "Predictable, lower costs with transparent data visibility. Employees who say \"my employer cares about me.\" Hero status to the board.",
        icon: "briefcase",
      },
      {
        title: "Employees",
        subtitle: "Be someone who actually uses their healthcare, without the stress",
        body: "$0 copays, $0 deductibles. A real relationship with their doctor. Care without dread.",
        icon: "heart",
      },
    ],
  },
  stakes: {
    sectionLabel: "The Stakes",
    headline: "The cost of doing nothing keeps going up.",
    items: [
      {
        title: "More pre-authorizations, less autonomy",
        body: "Insurance companies are tightening controls every year. Every renewal cycle adds more administrative overhead and takes more clinical decision-making out of your hands.",
      },
      {
        title: "80% of hospital-employed physicians want out",
        body: "Hospital systems are buying up specialists and independent practices. Physician pay is down 33% since 2001. The window to maintain independence is narrowing.",
      },
      {
        title: "Your patients are avoiding care",
        body: "When patients dread the cost of a visit, small problems become expensive emergencies. The insurance system is failing the people you trained to help.",
      },
    ],
    closing:
      "Every year of inaction is another year of insurance companies standing between you and your patients.",
  },
  cta: {
    sectionLabel: "Take the First Step",
    headline: "Practice medicine the way you always intended to.",
    body: "Vxtra Health is launching exclusively in Augusta and Gainesville, Georgia. No corporate contracts, no loss of autonomy, just a conversation about how the Vxtra model works and whether it's the right fit for your practice.",
    ctaPrimary: "Join the Network",
    ctaPrimaryHref: "mailto:info@vxtrahealth.com?subject=Join the Network — Physician",
    ctaSecondary: "Download Our Overview",
    ctaSecondaryHref: "mailto:info@vxtrahealth.com?subject=Request Overview — Physician",
  },
};

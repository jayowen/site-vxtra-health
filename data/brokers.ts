import { LandingPageContent } from "@/components/landing/types";

export const brokersContent: LandingPageContent = {
  meta: {
    title: "For Brokers",
    description:
      "Vxtra Health gives independent brokers in Augusta and Gainesville, Georgia exclusive access to a physician-led health plan with $0 copays, $0 deductibles, and transparent data, powered by Fortune 100 technology. Differentiate your book of business with a product no competitor can match.",
  },
  hero: {
    label: "Now Launching in Augusta & Gainesville, GA",
    headline: "It's hard to differentiate yourself in the marketplace.",
    headlineEmphasis: "Everyone is selling the same thing.",
    subhead:
      "Vxtra Health gives you a transparent health plan backed by Fortune 100 technology that your competitors don't have access to. Offer self-insured employers a physician-led plan with $0 copays, $0 deductibles, and costs they can actually see and control.",
    ctaPrimary: "Schedule a Call",
    ctaPrimaryHref: "mailto:info@vxtrahealth.com?subject=Schedule a Call — Broker",
    ctaSecondary: "See How It Works",
    ctaSecondaryHref: "#how-it-works",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    heroImageAlt: "Benefits broker meeting with employer clients to discuss plan options",
    proofBar: [
      { value: "30+ Years", label: "Physician-Led Experience", icon: "shield" },
      { value: "$0 Copays & Deductibles", label: "For Every Member", icon: "dollar" },
      { value: "Augusta & Gainesville", label: "Exclusive Launch Markets", icon: "map" },
    ],
  },
  problem: {
    sectionLabel: "The Problem",
    headline:
      "It's exhausting trying to stand out when you're selling the same solutions as every other broker in town.",
    cards: [
      {
        type: "For Brokers",
        headline: "It's hard to stand out when every broker is selling the same plans",
        body: "60% of brokers are now owned by private equity that won't innovate. Independent brokers need a product the competition can't match.",
        icon: "handshake",
      },
      {
        type: "For Employers",
        headline:
          "Most self-insured employers pay more every year for plans designed for insurance company profits",
        body: "Premiums rise 7-10% every year. At that rate, your clients' healthcare spend doubles in a decade, and they're still getting the same legacy experience.",
        icon: "briefcase",
      },
      {
        type: "For Physicians",
        headline: "Insurance companies have stripped physicians of their agency",
        body: "Pre-authorizations, denials, and administrative overhead stand between doctors and their patients. Physicians should practice medicine, not fight paperwork.",
        icon: "heartPulse",
      },
    ],
  },
  guide: {
    sectionLabel: "Your Guide",
    headline: "We've been on every side of this table.",
    quote:
      "It's exhausting trying to stand out with the same solutions as every other broker in town. We've lived that frustration. We built something different.",
    attribution: "Larry Hightower, Co-Founder & CEO",
    authorityCards: [
      {
        title: "30+ Years Physician-Led",
        body: "Founded and led by physicians who understand healthcare from the inside out, not insurance executives chasing margins.",
        icon: "stethoscope",
      },
      {
        title: "Powered by JudyHealth",
        body: "Our technology partner gives your clients access to the first platform to process medical and prescription claims together. Transparent data visibility instead of waiting months for their own reports.",
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
      "A short video about why we started Vxtra Health and how we're giving brokers a product the competition can't match.",
  },
  plan: {
    sectionLabel: "The Plan",
    headline: "Three steps to a product no competitor can match.",
    steps: [
      {
        number: 1,
        title: "Have a Conversation",
        body: "Tell us about your book of business and what your clients are dealing with. No pitch, no pressure, just a real conversation about what you need to win.",
      },
      {
        number: 2,
        title: "Get Exclusive Plan Access",
        body: "Vxtra Health is launching exclusively in Augusta and Gainesville. You get access to a physician-led plan backed by Fortune 100 technology that no other broker in your market can offer.",
      },
      {
        number: 3,
        title: "Retain and Win New Clients",
        body: "Your existing business is protected with a better product. New employers come to you because you're the broker with the plan that actually works.",
      },
    ],
    ctaText: "Schedule Your Conversation",
    ctaHref: "mailto:info@vxtrahealth.com?subject=Schedule a Conversation — Broker",
  },
  showOurTown: true,
  comparison: {
    sectionLabel: "The Difference",
    headline: "This is what you can offer that nobody else can.",
    subhead:
      "A side-by-side look at what you're selling today versus what you could be selling with Vxtra Health.",
    headerBefore: "What You're Selling Today",
    headerAfter: "What You Sell with Vxtra",
    rows: [
      { before: "Same networks as every competitor", after: "Exclusive plan access in your market" },
      { before: "Copays on every visit", after: "$0 copays for your clients' employees" },
      { before: "High deductibles", after: "$0 deductibles" },
      { before: "Pre-authorization required", after: "No pre-authorization" },
      { before: "Months-old data for your clients", after: "Transparent data visibility" },
      { before: "7-10% annual increases", after: "Hundreds per employee per month in savings" },
      { before: "Clients who shop every renewal", after: "Clients who stay because the plan works" },
    ],
  },
  success: {
    sectionLabel: "The Outcome",
    headline: "What happens when you offer something nobody else can.",
    cards: [
      {
        title: "Brokers",
        subtitle: "Be the broker who brings something nobody else can offer",
        body: "A product no competitor can match. Existing business secured. New business pipeline full. An improved experience for everyone your clients employ.",
        icon: "briefcase",
      },
      {
        title: "Employers",
        subtitle: "Be the reason your company finally has a health plan it can be proud of",
        body: "Your clients get predictable, lower costs with transparent data visibility. Their employees say \"my employer cares about me.\" Hero status to the board.",
        icon: "users",
      },
      {
        title: "Physicians",
        subtitle: "Practice medicine the way you always intended to",
        body: "Agency restored. Community-centered care. Independent practice in a community that knows your name.",
        icon: "stethoscope",
      },
    ],
  },
  stakes: {
    sectionLabel: "The Stakes",
    headline: "The cost of waiting keeps going up.",
    items: [
      {
        title: "You could lose clients",
        body: "When another broker brings Vxtra to your clients first, you're the one explaining why you didn't. Independent brokers who don't differentiate lose business to those who do.",
      },
      {
        title: "Revenue stagnates with limited differentiation",
        body: "60% of brokers are now owned by private equity. If you're selling the same plans as everyone else, you're competing on relationship alone. That's not a strategy.",
      },
      {
        title: "Another agency could share Vxtra first",
        body: "Vxtra is launching exclusively in Augusta and Gainesville. The broker who brings it to the market first wins. The one who waits loses the advantage.",
      },
    ],
    closing:
      "Every year of inaction is another year of selling the same plans as every other broker in town while your clients pay more for less.",
  },
  cta: {
    sectionLabel: "Take the First Step",
    headline: "Be the broker who brings something nobody else can offer.",
    body: "Vxtra Health is launching exclusively in Augusta and Gainesville, Georgia. No pitch, no pressure, just an honest conversation about your book of business and whether Vxtra is the right fit for your clients.",
    ctaPrimary: "Schedule a Call",
    ctaPrimaryHref: "mailto:info@vxtrahealth.com?subject=Schedule a Call — Broker",
    ctaSecondary: "Download Our Overview",
    ctaSecondaryHref: "mailto:info@vxtrahealth.com?subject=Request Overview — Broker",
  },
};

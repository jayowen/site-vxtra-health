import { LandingPageContent } from "@/components/landing/types";

export const employeesContent: LandingPageContent = {
  meta: {
    title: "For Employees",
    description:
      "Your employer partnered with Vxtra Health to give you $0 copays, $0 deductibles, and care from local physicians in Augusta and Gainesville, Georgia who actually know you. No pre-authorization, no insurance runaround, and no dreading the bill.",
  },
  hero: {
    label: "Your Employer Has Partnered with Vxtra Health",
    headline: "Healthcare is confusing and way too expensive.",
    headlineEmphasis: "Your employer found a better way.",
    subhead:
      "Your employer has partnered with Vxtra Health to connect you with local physicians who actually know you, with lower out-of-pocket costs and none of the insurance runaround. $0 copays, $0 deductibles, and care from doctors who treat you like a person, not a claim number.",
    ctaPrimary: "See the Benefits",
    ctaPrimaryHref: "#how-it-works",
    ctaSecondary: "See How It Works",
    ctaSecondaryHref: "#how-it-works",
    heroImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    heroImageAlt: "Doctor caring for a patient with a personal, friendly approach",
    proofBar: [
      { value: "$0 Copays", label: "On Every Visit", icon: "dollar" },
      { value: "$0 Deductibles", label: "For Every Member", icon: "heart" },
      { value: "Local Physicians", label: "Who Actually Know You", icon: "users" },
    ],
  },
  problem: {
    sectionLabel: "The Problem",
    headline:
      "Nobody should dread going to the doctor because they're afraid of what it'll cost.",
    cards: [
      {
        type: "For Employees",
        headline: "Healthcare is confusing and way too expensive",
        body: "You put off appointments because you're worried about the bill. You avoid care because deductibles are too high. And when you do go, you feel like a number, not a person.",
        icon: "users",
      },
      {
        type: "For Employers",
        headline:
          "Most self-insured employers pay more every year for plans designed for insurance company profits",
        body: "Your employer sees it too. Premiums rise every year, and the experience gets worse for everyone. That's why they partnered with Vxtra Health.",
        icon: "briefcase",
      },
      {
        type: "For Physicians",
        headline: "Insurance companies have stripped physicians of their agency",
        body: "Your doctor wants to focus on you, not paperwork. Pre-authorizations, denials, and administrative overhead stand between physicians and the care they want to give you.",
        icon: "heartPulse",
      },
    ],
  },
  guide: {
    sectionLabel: "Your Guide",
    headline: "We built this for you.",
    quote:
      "Nobody should dread going to the doctor because they're afraid of what it'll cost. We know that fear. We built Vxtra to take it away.",
    attribution: "Larry Hightower, Co-Founder & CEO",
    authorityCards: [
      {
        title: "$0 Copays, $0 Deductibles",
        body: "Every visit, every time. No surprise bills, no fine print. You see your doctor and you don't worry about the cost.",
        icon: "dollar",
      },
      {
        title: "Physicians Who Know You",
        body: "Your care comes from local doctors in your community who treat you like a person, not a claim number. You call your doctor, you get an appointment.",
        icon: "heart",
      },
      {
        title: "Powered by Fortune 100 Technology",
        body: "The same technology used by the largest companies in the country now works for you. Your claims are processed faster and your care is coordinated, not fragmented.",
        icon: "cpu",
      },
      {
        title: "No Pre-Authorization",
        body: "No waiting for an insurance company to approve the care your doctor already recommended. Your doctor makes the decisions, not a call center.",
        icon: "shield",
      },
    ],
    videoTitle: "Your Benefits: Coming Soon",
    videoBody: "A short video about how Vxtra Health works for you and your family.",
  },
  plan: {
    sectionLabel: "How It Works",
    headline: "Three steps to care without the stress.",
    steps: [
      {
        number: 1,
        title: "Ask Your Employer About Vxtra Health",
        body: "Your employer has partnered with Vxtra Health to give you a better healthcare experience. Ask your HR team how to enroll and what's covered.",
      },
      {
        number: 2,
        title: "Use Your Benefits Without Barriers",
        body: "$0 copays. $0 deductibles. No pre-authorization. You call your doctor, you get an appointment, and you get the care you need.",
      },
      {
        number: 3,
        title: "Get the Care You Need",
        body: "A real relationship with a local physician who knows you. Care without dread. And you don't worry about opening the bill.",
      },
    ],
    ctaText: "See the Benefits",
    ctaHref: "#how-it-works",
  },
  showOurTown: false,
  comparison: {
    sectionLabel: "The Difference",
    headline: "This is what your healthcare looks like now.",
    subhead: "A side-by-side look at what you had before versus what you get with Vxtra Health.",
    headerBefore: "Your Old Plan",
    headerAfter: "Vxtra Health",
    rows: [
      { before: "Copays on every visit", after: "$0 copays" },
      { before: "High deductibles before coverage kicks in", after: "$0 deductibles" },
      { before: "Pre-authorization required", after: "No pre-authorization" },
      { before: "Dread opening the bill", after: "No surprise bills" },
      { before: "Random doctors who don't know you", after: "Local physicians who know your name" },
      { before: "Call center for questions", after: "Care navigation from a real person" },
      { before: "Avoid care because of cost", after: "Get the care you need, when you need it" },
    ],
  },
  success: {
    sectionLabel: "The Outcome",
    headline: "What happens when you can actually use your healthcare.",
    cards: [
      {
        title: "Your Health",
        subtitle: "Be someone who actually uses their healthcare, without the stress",
        body: "$0 copays, $0 deductibles. You call your doctor, you get an appointment, you get the care you need, and you don't dread opening the bill.",
        icon: "heart",
      },
      {
        title: "Your Doctor",
        subtitle: "A real relationship with a physician who knows you",
        body: "Your doctor focuses on you, not paperwork. No pre-authorizations standing between you and the care you need. A physician in your community who treats you like a person.",
        icon: "stethoscope",
      },
      {
        title: "Your Family",
        subtitle: "Peace of mind for the people who matter most",
        body: "Your family gets the same benefits. $0 copays, $0 deductibles, and care from local doctors who know them by name.",
        icon: "home",
      },
    ],
  },
  stakes: {
    sectionLabel: "The Stakes",
    headline: "Avoiding care doesn't make the problem go away.",
    items: [
      {
        title: "Small problems become emergencies",
        body: "When you skip appointments because of cost, minor issues turn into major ones. Prevention is always less expensive and less painful than crisis.",
      },
      {
        title: "You dread every bill",
        body: "The anxiety of not knowing what a visit will cost keeps you from getting the care you need. You shouldn't have to choose between your health and your wallet.",
      },
      {
        title: "You lose the relationship with your doctor",
        body: "Insurance networks shuffle you between physicians who don't know your history. You deserve a doctor who knows you, not one who's reading your chart for the first time.",
      },
    ],
    closing:
      "Your employer chose Vxtra Health so you don't have to make these tradeoffs. $0 copays, $0 deductibles, and local doctors who know your name.",
  },
  cta: {
    sectionLabel: "Take the First Step",
    headline: "Be someone who actually uses their healthcare, without the stress.",
    body: "Your employer has partnered with Vxtra Health to give you a better healthcare experience in Augusta and Gainesville, Georgia. Ask your HR team how to get started.",
    ctaPrimary: "See the Benefits",
    ctaPrimaryHref: "#how-it-works",
    ctaSecondary: "Talk to Your HR Team",
    ctaSecondaryHref: "mailto:info@vxtrahealth.com?subject=Employee Benefits Question",
  },
};

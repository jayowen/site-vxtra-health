import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership | Vxtra Health",
  description:
    "Meet the leadership team behind Vxtra Health — decades of healthcare experience as operators, advisors, and trusted partners who genuinely care about employers and communities.",
  alternates: { canonical: "/about/leadership" },
};

const leadershipJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leadership | Vxtra Health",
  description:
    "Meet the leadership team behind Vxtra Health — decades of healthcare experience as operators, advisors, and trusted partners.",
  url: "https://vxtrahealth.com/about/leadership",
  mainEntity: {
    "@type": "Organization",
    name: "Vxtra Health",
    url: "https://vxtrahealth.com",
    member: [
      {
        "@type": "Person",
        name: "Larry Hightower",
        jobTitle: "Co-Founder & CEO",
      },
      {
        "@type": "Person",
        name: "Sandra Mitchell",
        jobTitle: "VP, Operations",
      },
      {
        "@type": "Person",
        name: "Andrew Chen",
        jobTitle: "VP, Claims & Contracts",
      },
      {
        "@type": "Person",
        name: "Dr. Maria Santos",
        jobTitle: "Chief Medical Officer",
      },
      {
        "@type": "Person",
        name: "James Thornton",
        jobTitle: "VP, Employer Solutions",
      },
      {
        "@type": "Person",
        name: "Rachel Owens",
        jobTitle: "VP, Community Partnerships",
      },
    ],
  },
};

const leaders = [
  {
    name: "Larry Hightower",
    role: "Co-Founder & CEO",
    photo: "/larry-hightower.jpeg",
    alt: "Larry Hightower, Co-Founder and CEO",
    bio: "With 40+ years spanning healthcare operations, insurance, and business growth, Larry has built and scaled companies across the industry. He\u2019s sold businesses at 22x and 15x earnings, grown a urology practice from 30 to 100 physicians, and spent decades watching the system fail the people it was supposed to protect. Vxtra Health is his answer \u2014 a company built by operators, for employers and communities.",
  },
  {
    name: "Sandra Mitchell",
    role: "VP, Operations",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    alt: "Sandra Mitchell, VP of Operations",
    bio: "Sandra brings 30+ years of health plan processing and operations experience to Vxtra Health. She\u2019s managed claims adjudication, provider networks, and member services for plans of every size. She knows exactly where the current system breaks down \u2014 and more importantly, how to build one that actually works for employers and their employees.",
  },
  {
    name: "Andrew Chen",
    role: "VP, Claims & Contracts",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    alt: "Andrew Chen, VP of Claims and Contracts",
    bio: "Andrew has spent his career on the inside of health plan contracting, claims processing, and provider negotiations. With deep expertise in stop-loss, reinsurance, and TPA operations, he understands every lever that drives cost in a self-funded plan. At Vxtra, he ensures every contract is structured to benefit the employer \u2014 not the insurance company.",
  },
  {
    name: "Dr. Maria Santos",
    role: "Chief Medical Officer",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80",
    alt: "Dr. Maria Santos, Chief Medical Officer",
    bio: "A practicing physician and healthcare policy advisor with over 20 years of clinical and administrative experience, Dr. Santos leads Vxtra\u2019s clinical strategy. She\u2019s been on every side of the table \u2014 treating patients, negotiating with payers, and advising hospital systems. Her mission is to make sure physician-led care isn\u2019t just a talking point, but the foundation of every Vxtra plan.",
  },
  {
    name: "James Thornton",
    role: "VP, Employer Solutions",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: "James Thornton, VP of Employer Solutions",
    bio: "James has spent 25 years helping mid-market employers navigate the complexity of self-funded health plans. He\u2019s worked as a broker, a benefits consultant, and an in-house benefits director \u2014 so he understands the pain from every angle. At Vxtra, he leads the team that helps employers transition to a model that actually saves money and improves outcomes.",
  },
  {
    name: "Rachel Owens",
    role: "VP, Community Partnerships",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    alt: "Rachel Owens, VP of Community Partnerships",
    bio: "Rachel has dedicated her career to building healthcare access in secondary and rural markets across the Southeast and Midwest. With 15+ years in community health initiatives and provider network development, she ensures Vxtra\u2019s Our Town methodology isn\u2019t just a framework \u2014 it\u2019s a living partnership with the physicians and communities that make it work.",
  },
];

export default function LeadershipPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipJsonLd) }}
      />

      <section className="inner-hero" aria-label="Leadership">
        <div className="inner-hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Vxtra Health leadership team collaborating"
            fill
            sizes="100vw"
            priority
          />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/about">About</a>
            <span aria-hidden="true">/</span>
            <span>Leadership</span>
          </nav>
          <h1>Operators who&rsquo;ve been in your shoes.</h1>
          <p className="inner-hero-sub">
            Our leadership team brings decades of experience from every corner of
            healthcare &mdash; running plans, managing claims, treating patients, and
            building the kind of company we wish existed when we were on your side
            of the table.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Leadership Team">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Trusted advisors. Experienced operators.</h2>
            <p className="section-subtitle section-subtitle-centered">
              Every member of our leadership team has spent years inside the healthcare
              system &mdash; and every one of them is here because they believe it can be better.
            </p>
          </div>

          <div className="leadership-grid">
            {leaders.map((leader) => (
              <div className="leadership-card reveal" key={leader.name}>
                <div className="leadership-photo-wrap">
                  <Image
                    src={leader.photo}
                    alt={leader.alt}
                    width={160}
                    height={160}
                    className="leadership-photo"
                  />
                </div>
                <h3>{leader.name}</h3>
                <p className="leadership-role">{leader.role}</p>
                <p className="leadership-bio">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section leadership-values" aria-label="Our Values">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">We actually care about outcomes.</h2>
            <p className="section-subtitle section-subtitle-centered">
              That&rsquo;s not a tagline &mdash; it&rsquo;s the reason every person on this
              page left comfortable careers to build something that puts employers
              and communities first.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

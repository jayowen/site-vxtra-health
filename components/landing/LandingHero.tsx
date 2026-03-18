import Image from "next/image";
import Link from "next/link";
import { ProofBarItem } from "./types";

function ProofIcon({ icon }: { icon: ProofBarItem["icon"] }) {
  const icons: Record<ProofBarItem["icon"], JSX.Element> = {
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
    dollar: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    map: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  };
  return (
    <div className="proof-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">{icons[icon]}</svg>
    </div>
  );
}

interface LandingHeroProps {
  label: string;
  headline: string;
  headlineEmphasis: string;
  subhead: string;
  urgency?: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  proofBar: ProofBarItem[];
  heroImage?: string;
  heroImageAlt?: string;
}

export default function LandingHero({
  label,
  headline,
  headlineEmphasis,
  subhead,
  urgency,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
  proofBar,
  heroImage,
  heroImageAlt,
}: LandingHeroProps) {
  return (
    <section className="inner-hero" aria-label="Hero">
      {heroImage && (
        <div className="inner-hero-bg">
          <Image
            src={heroImage}
            alt={heroImageAlt || ""}
            fill
            sizes="100vw"
            priority
          />
          <div className="inner-hero-overlay" />
        </div>
      )}
      <div className="container inner-hero-content">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{label}</span>
        </nav>
        <h1>
          {headline} <em>{headlineEmphasis}</em>
        </h1>
        <p className="inner-hero-sub">{subhead}</p>
        {urgency && <p className="inner-hero-urgency">{urgency}</p>}
        <div className="inner-hero-actions">
          <a href={ctaPrimaryHref} className="btn btn-coral btn-lg">
            {ctaPrimary}
          </a>
          <a href={ctaSecondaryHref} className="btn btn-white-outline btn-lg">
            {ctaSecondary}
          </a>
        </div>
      </div>
      <div className="inner-hero-proof">
        <div className="proof-bar-inner">
          {proofBar.map((item, i) => (
            <div className="proof-item" key={i}>
              <ProofIcon icon={item.icon} />
              <div className="proof-text">
                <span className="proof-value">{item.value}</span>
                <span className="proof-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

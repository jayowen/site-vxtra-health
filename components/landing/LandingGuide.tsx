import { AuthorityCard } from "./types";

function AuthorityIcon({ icon }: { icon: AuthorityCard["icon"] }) {
  const icons: Record<AuthorityCard["icon"], JSX.Element> = {
    stethoscope: <><path d="M4.8 2.62a2 2 0 0 1 1.4-.6h.01a2 2 0 0 1 1.4.58L12 7l4.4-4.4a2 2 0 0 1 1.4-.58h.01a2 2 0 0 1 1.4.6" /><path d="M18 13v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3" /><circle cx="18" cy="18" r="2" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></>,
    dollar: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
  };
  return (
    <div className="authority-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">{icons[icon]}</svg>
    </div>
  );
}

interface LandingGuideProps {
  sectionLabel: string;
  headline: string;
  quote: string;
  attribution: string;
  authorityCards: AuthorityCard[];
  videoTitle: string;
  videoBody: string;
}

export default function LandingGuide({
  sectionLabel,
  headline,
  quote,
  attribution,
  authorityCards,
  videoTitle,
  videoBody,
}: LandingGuideProps) {
  return (
    <section className="section guide" id="our-story" aria-label="Your Guide">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{headline}</h2>
        </div>
        <div className="guide-quote reveal">
          <div className="guide-photo-placeholder">
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Photo Coming Soon</span>
          </div>
          <div>
            <blockquote>&ldquo;{quote}&rdquo;</blockquote>
            <cite>{attribution}</cite>
          </div>
        </div>
        <div className="authority-grid">
          {authorityCards.map((card, i) => (
            <div className="authority-card reveal" key={i}>
              <AuthorityIcon icon={card.icon} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="video-placeholder reveal">
          <div className="video-placeholder-inner">
            <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" stroke="var(--mid-gray)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="var(--mid-gray)" stroke="none" />
            </svg>
            <h3>{videoTitle}</h3>
            <p>{videoBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

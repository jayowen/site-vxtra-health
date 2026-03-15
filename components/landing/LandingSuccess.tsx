import Image from "next/image";
import { SuccessCard } from "./types";

function SuccessIcon({ icon }: { icon: SuccessCard["icon"] }) {
  const icons: Record<SuccessCard["icon"], JSX.Element> = {
    heart: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></>,
    stethoscope: <><path d="M4.8 2.62a2 2 0 0 1 1.4-.6h.01a2 2 0 0 1 1.4.58L12 7l4.4-4.4a2 2 0 0 1 1.4-.58h.01a2 2 0 0 1 1.4.6" /><path d="M18 13v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a4 4 0 0 0-8 0v2" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  };
  return (
    <div className="success-card-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">{icons[icon]}</svg>
    </div>
  );
}

const cardImages: Record<string, { src: string; alt: string }> = {
  Employees: { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", alt: "Patient receiving care from a local physician" },
  Physicians: { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", alt: "Physician making clinical decisions independently" },
  Employers: { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", alt: "Leadership team reviewing transparent health plan data" },
  Brokers: { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", alt: "Broker presenting a differentiated plan to clients" },
  "Your Health": { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Person staying active and healthy" },
  "Your Doctor": { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", alt: "Doctor providing personal care" },
  "Your Family": { src: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&q=80", alt: "Happy family spending time together" },
};

interface LandingSuccessProps {
  sectionLabel: string;
  headline: string;
  cards: SuccessCard[];
}

export default function LandingSuccess({ sectionLabel, headline, cards }: LandingSuccessProps) {
  return (
    <section className="section success" aria-label="Success Outcomes">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{headline}</h2>
        </div>
        <div className="success-grid">
          {cards.map((card, i) => {
            const img = cardImages[card.title] || Object.values(cardImages)[i];
            return (
              <div className="success-card reveal" key={i}>
                <div className="success-card-photo-wrapper">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={180}
                    className="success-card-photo"
                  />
                </div>
                <div className="success-card-body">
                  <SuccessIcon icon={card.icon} />
                  <h3>{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  <p>{card.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

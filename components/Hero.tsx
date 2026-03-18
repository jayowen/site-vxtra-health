"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slides = carousel.querySelectorAll<HTMLElement>("[data-slide]");
    let current = 0;

    const start = () => {
      intervalRef.current = setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }, 4000);
    };

    start();

    const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    const resume = () => { pause(); start(); };

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);
    carousel.addEventListener("focusin", pause);
    carousel.addEventListener("focusout", resume);

    return () => {
      pause();
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
      carousel.removeEventListener("focusin", pause);
      carousel.removeEventListener("focusout", resume);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero" aria-label="Vxtra Health introduction">
      <div className="hero-bg-shape" />
      <div className="hero-accent-dot" />
      <div className="hero-accent-dot" />
      <div className="hero-accent-dot" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-label">
            <span />
            Now Launching in Augusta &amp; Gainesville, GA
          </div>
          <h1>
            Your health plan costs are crushing your business.
            <br />
            <em>We built a&nbsp;way&nbsp;out.</em>
          </h1>
          <p className="hero-sub">
            A physician-steward health plan for self-insured employers in the{" "}
            <strong>Southeast, South, and Midwest</strong> &mdash; AI-enabled technology,
            local physicians, and <strong>costs you can actually see and control.</strong>
          </p>
          <p className="hero-urgency">
            New transparency mandates mean the old way isn&rsquo;t just expensive &mdash;
            it&rsquo;s a liability.
          </p>
          <div className="hero-actions">
            <button className="btn btn-coral btn-lg" onClick={() => scrollTo("schedule")}>
              Schedule a Call
            </button>
            <button
              className="btn btn-teal-outline btn-lg hero-btn-outline"
              onClick={() => scrollTo("how-it-works")}
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrapper">
            <div className="hero-carousel" id="heroCarousel" ref={carouselRef}>
              <div data-slide className="hero-slide active">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Self-insured employer executive reviewing health plan cost data at their desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
              </div>
              <div data-slide className="hero-slide">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Local physician steward providing direct patient care without insurance barriers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
              <div data-slide className="hero-slide">
                <Image
                  src="https://images.unsplash.com/photo-1753354868616-544973e405c9?w=800&q=80"
                  alt="Employees collaborating in a workplace with affordable health benefits"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="proof-bar" role="complementary" aria-label="Key benefits">
        <div className="proof-bar-inner">
          <div className="proof-item">
            <div className="proof-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="proof-text">
              <span className="proof-value">30+ Years</span>
              <span className="proof-label">Physician-Steward Experience</span>
            </div>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="proof-text">
              <span className="proof-value">$0 Copays &amp; Deductibles</span>
              <span className="proof-label">For Every Member</span>
            </div>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="proof-text">
              <span className="proof-value">Southeast, South &amp; Midwest</span>
              <span className="proof-label">Now Launching Across the Region</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

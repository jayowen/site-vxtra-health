"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <Image
              src="/vxtrahealth-logo.png"
              alt="Vxtra Health"
              width={180}
              height={72}
              priority
              style={{ height: "72px", width: "auto" }}
            />
          </a>
          <ul className="nav-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#our-town-model">Our Town</a></li>
            <li><a href="#who-we-help">Who We Help</a></li>
            <li><a href="#our-story">Our Story</a></li>
          </ul>
          <div className="nav-actions">
            <button className="nav-btn-outline" onClick={() => scrollTo("how-it-works")}>
              See How It Works
            </button>
            <button className="nav-btn-solid" onClick={() => scrollTo("schedule")}>
              Schedule a Call
            </button>
          </div>
          <button className="nav-toggle" aria-label="Open menu" onClick={toggleMobile}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <a href="#how-it-works" onClick={() => scrollTo("how-it-works")}>How It Works</a>
        <a href="#our-town-model" onClick={() => scrollTo("our-town-model")}>Our Town</a>
        <a href="#who-we-help" onClick={() => scrollTo("who-we-help")}>Who We Help</a>
        <a href="#our-story" onClick={() => scrollTo("our-story")}>Our Story</a>
        <div className="mobile-menu-actions">
          <button className="btn btn-teal-outline" onClick={() => scrollTo("how-it-works")}>
            See How It Works
          </button>
          <button className="btn btn-coral" onClick={() => scrollTo("schedule")}>
            Schedule a Call
          </button>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMobile();
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Vxtra Health home">
            <Image
              src="/vxtrahealth-logo.png"
              alt="Vxtra Health logo"
              width={180}
              height={72}
              priority
              className="nav-logo-img"
            />
          </Link>
          <ul className="nav-links">
            <li>
              {isHome ? (
                <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }}>
                  How It Works
                </a>
              ) : (
                <Link href="/#how-it-works">How It Works</Link>
              )}
            </li>
            <li>
              {isHome ? (
                <a href="#our-town-model" onClick={(e) => { e.preventDefault(); scrollTo("our-town-model"); }}>
                  Our Town
                </a>
              ) : (
                <Link href="/#our-town-model">Our Town</Link>
              )}
            </li>
            <li
              className="nav-dropdown"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className={`nav-dropdown-trigger${
                  ["/employers", "/brokers", "/physicians", "/employees"].includes(pathname) ? " active" : ""
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((o) => !o)}
              >
                Who We Help
                <svg viewBox="0 0 12 8" width="10" height="7" aria-hidden="true" className={dropdownOpen ? "chevron-up" : ""}>
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`nav-dropdown-menu${dropdownOpen ? " open" : ""}`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link href="/employers" className={isActive("/employers") ? "active" : ""} onClick={() => setDropdownOpen(false)}>Employers</Link>
                <Link href="/brokers" className={isActive("/brokers") ? "active" : ""} onClick={() => setDropdownOpen(false)}>Brokers</Link>
                <Link href="/physicians" className={isActive("/physicians") ? "active" : ""} onClick={() => setDropdownOpen(false)}>Physicians</Link>
                <Link href="/employees" className={isActive("/employees") ? "active" : ""} onClick={() => setDropdownOpen(false)}>Employees</Link>
              </div>
            </li>
            <li><Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link></li>
            <li><Link href="/resources" className={isActive("/resources") ? "active" : ""}>Resources</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/contact" className="nav-btn-solid">
              Schedule a Call
            </Link>
          </div>
          <button className="nav-toggle" aria-label="Open menu" onClick={toggleMobile}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} role="dialog" aria-label="Mobile navigation menu">
        {isHome ? (
          <a href="#how-it-works" onClick={() => scrollTo("how-it-works")}>How It Works</a>
        ) : (
          <Link href="/#how-it-works" onClick={closeMobile}>How It Works</Link>
        )}
        {isHome ? (
          <a href="#our-town-model" onClick={() => scrollTo("our-town-model")}>Our Town</a>
        ) : (
          <Link href="/#our-town-model" onClick={closeMobile}>Our Town</Link>
        )}
        <span className="mobile-menu-label">Who We Help</span>
        <Link href="/employers" onClick={closeMobile} className="mobile-submenu-link">Employers</Link>
        <Link href="/brokers" onClick={closeMobile} className="mobile-submenu-link">Brokers</Link>
        <Link href="/physicians" onClick={closeMobile} className="mobile-submenu-link">Physicians</Link>
        <Link href="/employees" onClick={closeMobile} className="mobile-submenu-link">Employees</Link>
        <Link href="/about" onClick={closeMobile}>About</Link>
        <Link href="/resources" onClick={closeMobile}>Resources</Link>
        <div className="mobile-menu-actions">
          <Link href="/contact" className="btn btn-coral" onClick={closeMobile}>
            Schedule a Call
          </Link>
        </div>
      </div>
    </>
  );
}

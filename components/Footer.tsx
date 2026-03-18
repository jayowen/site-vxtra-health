import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/vxtrahealth-logo.png"
              alt="Vxtra Health logo"
              width={120}
              height={32}
              className="footer-logo-img"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="footer-tagline">
              Physician-steward health plans for self-insured employers. Now
              launching in Augusta &amp; Gainesville, GA.
            </p>
            <p className="footer-address">
              2700 Cumberland Parkway
              <br />
              Suite 140
              <br />
              Atlanta, GA 30339
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#our-town-model">Our Town Model</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Who We Help</h4>
            <ul>
              <li><Link href="/employers">Employers</Link></li>
              <li><Link href="/brokers">Brokers</Link></li>
              <li><Link href="/physicians">Physicians</Link></li>
              <li><Link href="/employees">Employees</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link href="/contact">Schedule a Call</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><a href="mailto:info@vxtrahealth.com">info@vxtrahealth.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span suppressHydrationWarning>&copy; {new Date().getFullYear()} Vxtra Health. All rights reserved.</span>
          <span>
            <Link href="/privacy" style={{ color: "inherit" }}>Privacy Policy</Link>
            {" | "}
            <Link href="/terms" style={{ color: "inherit" }}>Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";

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
              style={{ height: "32px", width: "auto" }}
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
              <li><a href="#our-story">Our Story</a></li>
              <li><a href="#our-town-model">Our Town Model</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Learn More</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#who-we-help">Who We Help</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#schedule">Schedule a Call</a></li>
              <li><a href="mailto:info@vxtrahealth.com">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Vxtra Health. All rights reserved.</span>
          <span>Privacy Policy &nbsp;|&nbsp; Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

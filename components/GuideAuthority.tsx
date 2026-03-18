import Image from "next/image";

export default function GuideAuthority() {
  return (
    <section className="section guide" id="our-story" aria-label="Our story and authority">
      <div className="container">
        <div className="reveal">
          <span className="section-label">30+ Years on Every Side of Healthcare</span>
          <h2 className="section-title">We&rsquo;ve been on every side of this table.</h2>
        </div>

        <div className="guide-quote reveal">
          <div className="guide-photo">
            <Image
              src="/larry-hightower.jpeg"
              alt="Larry Hightower, Co-Founder and CEO of Vxtra Health"
              width={160}
              height={160}
              className="guide-photo-img"
            />
          </div>
          <div>
            <blockquote>
              &ldquo;We know what renewal season feels like. We know the frustration of
              watching insurance companies extract value while delivering less.
              We&rsquo;ve lived it.&rdquo;
            </blockquote>
            <cite>Larry Hightower, Co-Founder &amp; CEO</cite>
          </div>
        </div>

        <div className="authority-grid">
          <div className="authority-card reveal">
            <div className="authority-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <h3>Physician-Steward Design</h3>
              <p>
                Clinical decisions stay with the doctors who know their patients &mdash; not
                insurance executives chasing quarterly margins.
              </p>
            </div>
          </div>
          <div className="authority-card reveal">
            <div className="authority-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3>The Our Town Methodology</h3>
              <p>
                Local employers and physicians organized for leverage across five pillars:
                plan, pharmacy, medical, reinsurance, and member orchestration.
              </p>
            </div>
          </div>
          <div className="authority-card reveal">
            <div className="authority-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3>Three Decades of Operations</h3>
              <p>
                From processing claims to building provider contracts &mdash; we&rsquo;ve run
                the technical side of health plans at every scale.
              </p>
            </div>
          </div>
          <div className="authority-card reveal">
            <div className="authority-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div>
              <h3>Powered by JudyHealth</h3>
              <p>
                AI-enabled platform processing medical and prescription claims together
                &mdash; Fortune&nbsp;100 technology, available to the middle market.
              </p>
            </div>
          </div>
        </div>

        <div className="video-placeholder reveal">
          <div className="video-placeholder-inner">
            <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
              <polygon
                points="5 3 19 12 5 21 5 3"
                fill="rgba(34,186,180,0.8)"
                stroke="none"
              />
            </svg>
            <h3>Our Story: Coming Soon</h3>
            <p>
              Why we started Vxtra Health and how we&rsquo;re changing healthcare for
              employers who deserve better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

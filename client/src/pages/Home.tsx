/**
 * Quiet Momentum: a trust-first editorial experience with warm paper surfaces,
 * ink-blue information hierarchy, and authentic Dorja product screens as evidence.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  FileCheck2,
  Landmark,
  Menu,
  MessageSquareText,
  ScanLine,
  ShieldCheck,
  X,
} from "lucide-react";

const logo = "/manus-storage/dorja-logo_8a9dbfb8.png";
const orbitMark = "/manus-storage/dorja-orbit-mark_3d024bc2.png";
const screens = {
  welcome: "/manus-storage/2_2d7998e7.jpg",
  listing: "/manus-storage/3_33393013.png",
  records: "/manus-storage/5_88df73d1.jpg",
};

const features = [
  {
    number: "01",
    icon: Landmark,
    name: "Verified listings",
    description:
      "Verify Khatian, Mutation, RAJUK plans, and supporting records before a property receives its trust signal.",
  },
  {
    number: "02",
    icon: ScanLine,
    name: "See the space first",
    description:
      "Create 360° property views with a phone’s camera and gyroscope—no specialised 360° hardware required.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    name: "A safer viewing path",
    description:
      "SafeView QR passes help protect exact addresses, verify the visit, and support emergency-contact workflows.",
  },
  {
    number: "04",
    icon: FileCheck2,
    name: "A handover that holds up",
    description:
      "The Handover Passport captures promises, documents, milestones, and sign-off in one traceable record.",
  },
];

const journey = [
  ["01", "Discover", "Browse properties with essential context, not just surface-level listings."],
  ["02", "Verify", "Review documentation, seller verification, and the information behind the listing."],
  ["03", "Visit safely", "Use a verified SafeView pass before sharing the detail of a physical visit."],
  ["04", "Handover", "Keep each promise and document clear from the listing to the keys."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Dorja home" onClick={closeMenu}>
          <img src={logo} alt="Dorja logo" />
          <span className="brand-name">DORJA</span>
          <span className="brand-subtitle">Property Trust Platform</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#why-dorja">Why Dorja</a>
          <a href="#features">Trust system</a>
          <a href="#experience">App experience</a>
          <a href="#journey">How it works</a>
        </nav>

        <a className="header-cta" href="#experience">
          Explore the app <ArrowUpRightIcon />
        </a>

        <button
          className="menu-trigger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#why-dorja" onClick={closeMenu}>Why Dorja</a>
            <a href="#features" onClick={closeMenu}>Trust system</a>
            <a href="#experience" onClick={closeMenu}>App experience</a>
            <a href="#journey" onClick={closeMenu}>How it works</a>
            <a className="mobile-nav-cta" href="#experience" onClick={closeMenu}>Explore Dorja <ArrowRight size={17} /></a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <img
            className="hero-art"
            src="/manus-storage/dorja-hero-editorial_57886383.jpg"
            alt="Abstract layered doorway artwork in Dorja brand colors"
          />
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy reveal-one">
            <div className="eyebrow"><span className="eyebrow-dot" /> Bangladesh’s property trust platform</div>
            <h1 id="hero-heading">Trust is built<br />into every <em>door.</em></h1>
            <p>
              Dorja brings verified records, safer visits, immersive property views, and a clear digital handover into one considered Android experience.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#why-dorja">See what Dorja solves <ArrowDownRight size={19} /></a>
              <a className="text-action" href="#experience">View app screens <ArrowRight size={17} /></a>
            </div>
          </div>

          <div className="hero-product reveal-two">
            <div className="product-tag"><BadgeCheck size={14} /> Built for Bangladesh</div>
            <div className="hero-phone-frame">
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />
              <img src={screens.welcome} alt="Dorja mobile app sign-in screen" />
            </div>
            <div className="hero-caption"><span>01 / TRUST, MADE VISIBLE</span><span>ANDROID APP</span></div>
          </div>

          <div className="hero-side-note reveal-three">
            <span className="vertical-line" />
            <p>Every listing should give people a clearer, safer way forward.</p>
          </div>
        </section>

        <section className="trust-strip" aria-label="Dorja’s key principles">
          <p><BadgeCheck size={18} /> Verified people &amp; properties</p>
          <p><ScanLine size={18} /> 360° space exploration</p>
          <p><ShieldCheck size={18} /> Safer viewing workflows</p>
          <p><FileCheck2 size={18} /> Traceable handover records</p>
        </section>

        <section className="problem-section section-pad" id="why-dorja" aria-labelledby="problem-heading">
          <div className="section-rail"><span>01</span><span>THE TRUST GAP</span></div>
          <div className="problem-intro">
            <p className="section-kicker">Property should not begin with uncertainty</p>
            <h2 id="problem-heading">Beyond a listing.<br />A more accountable path.</h2>
          </div>
          <div className="problem-content">
            <p className="large-copy">Dorja is designed to replace fragmented calls, uncertain visits, and paper trails with a connected property experience built around proof.</p>
            <p className="body-copy">Whether someone is browsing, listing, visiting, or preparing for handover, Dorja places the essential information and trust signals in the same calm, straightforward flow.</p>
            <a href="#features" className="inline-link">Meet the trust system <ChevronRight size={18} /></a>
          </div>
          <div className="door-mark" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section className="features-section section-pad" id="features" aria-labelledby="features-heading">
          <div className="feature-heading-wrap">
            <div className="section-rail"><span>02</span><span>THE SYSTEM</span></div>
            <div>
              <p className="section-kicker light-kicker">Designed around proof</p>
              <h2 id="features-heading">Confidence, <em>layer by layer.</em></h2>
            </div>
          </div>
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.number}>
                  <div className="feature-top"><span>{feature.number}</span><Icon size={27} strokeWidth={1.5} /></div>
                  <h3>{feature.name}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-rule" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-heading">
          <div className="section-rail"><span>03</span><span>INSIDE THE APP</span></div>
          <div className="experience-heading">
            <p className="section-kicker">A more intentional property workflow</p>
            <h2 id="experience-heading">All the important<br />details, <em>in context.</em></h2>
          </div>

          <div className="experience-stage">
            <img className="feature-art" src="/manus-storage/dorja-feature-collage_641a547d.jpg" alt="Abstract doorway collage in Dorja brand colors" />
            <div className="app-shot shot-listing"><img src={screens.listing} alt="Dorja app create new listing screen" /></div>
            <div className="app-shot shot-records"><img src={screens.records} alt="Dorja app legal document verification screen" /></div>
            <div className="stage-label label-one"><span>LISTING</span><i /></div>
            <div className="stage-label label-two"><i /><span>VERIFICATION</span></div>
            <p className="stage-copy">From protected addresses to legal documents, the experience makes the information behind a property easier to understand and act on.</p>
          </div>
        </section>

        <section className="journey-section section-pad" id="journey" aria-labelledby="journey-heading">
          <div className="journey-lead">
            <div className="section-rail"><span>04</span><span>THE JOURNEY</span></div>
            <p className="section-kicker">From search to keys</p>
            <h2 id="journey-heading">One journey.<br /><em>Fewer blind spots.</em></h2>
            <div className="journey-collage"><img src="/manus-storage/dorja-detail-surface_67e5a921.jpg" alt="Textured abstract Dorja brand surface" /></div>
          </div>
          <div className="journey-list">
            {journey.map(([number, title, description]) => (
              <article className="journey-item" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowRight size={20} className="journey-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-heading">
          <div className="closing-door" aria-hidden="true"><div /><div /><span /></div>
          <div className="closing-copy">
            <img src={orbitMark} alt="Dorja doorway symbol" />
            <p className="section-kicker">Property trust, made more human</p>
            <h2 id="closing-heading">A door should open<br />with <em>confidence.</em></h2>
            <a href="#top" className="button-light">Back to top <ArrowRight size={19} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={logo} alt="Dorja logo" /><span>DORJA</span></div>
        <p>Because every door should be trustworthy.</p>
        <p className="creator-credit">Created by <strong>Samin Yeasar</strong></p>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={16} className="arrow-up-right" />;
}

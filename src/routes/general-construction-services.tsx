import { createFileRoute } from "@tanstack/react-router";
import { buildPageHead } from "../lib/seo";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Building2,
  Landmark,
  GraduationCap,
  Bus,
  Users,
  HardHat,
  Calendar,
  Star,
  BadgeCheck,
  Hammer,
  ClipboardList,
  Layers,
  Scale,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Requested images from src/assets/gallery/
import generalConstructionImg from "../assets/gallery/General-Construction.png";
import facilityUpgradesImg from "../assets/gallery/Renovation-and-Facility-Upgrades.png";
import siteFramingImg from "../assets/gallery/425f8991daa4983b80659cdb66ceb253.jpg";
import projectPlanningImg from "../assets/gallery/Depositphotos_11106229_l-2015.jpg";

export const Route = createFileRoute("/general-construction-services")({
  head: buildPageHead({
    title: "General Construction Services | Commercial & Public Infrastructure DFW",
    description:
      "ARSS Construction delivers public sector & commercial general construction across Dallas-Fort Worth: municipal centers, schools, structural framing, and turnkey builds.",
    path: "/general-construction-services",
    keywords: [
      "general construction services Dallas",
      "commercial general contractor Texas",
      "public sector construction DFW",
      "structural framing contractor Dallas",
      "turnkey commercial construction",
      "government facility construction Texas",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "General Construction Services", url: "/general-construction-services" },
    ],
  }),
  component: GeneralConstructionServicesPage,
});

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function GeneralConstructionServicesPage() {
  const constructionReviews = [
    {
      author: "Marcus Vance",
      initials: "MV",
      avatarColor: "#0284c7",
      location: "Fort Worth, TX",
      role: "Municipal Project Director",
      title: "Exemplary management on our civic center expansion",
      quote:
        "ARSS Construction delivered our public municipal facility upgrade two weeks ahead of schedule. Their command of structural framing, MEP coordination, and code compliance saved our department hundreds of hours and kept the project strictly within budget.",
    },
    {
      author: "Evelyn Ross",
      initials: "ER",
      avatarColor: "#059669",
      location: "Plano, TX",
      role: "School District Facilities Overseer",
      title: "Unmatched safety protocols and craftsmanship",
      quote:
        "Managing building projects in active educational environments demands rigorous safety protocols and seamless communication. ARSS excelled on every level. The masonry, drywall, and finish-out work were flawless.",
    },
    {
      author: "Kenneth Sterling",
      initials: "KS",
      avatarColor: "#d97706",
      location: "Dallas, TX",
      role: "Commercial Developer",
      title: "The standard for Texas commercial construction",
      quote:
        "From blueprint estimation to final certificate of occupancy, ARSS is our go-to contractor. They do not cut corners, their superintendents are always on-site, and their commitment to sustainable, durable construction is evident in every square foot.",
    },
  ];

  const civicSectors = [
    {
      icon: GraduationCap,
      title: "Schools & Educational Facilities",
      desc: "Modern, safe, and ADA-compliant classrooms, science laboratories, administrative offices, and athletic complexes built to support future generations.",
    },
    {
      icon: Landmark,
      title: "Government & Civic Buildings",
      desc: "Secure, durable municipal halls, administrative centers, courthouses, and fire stations engineered for daily civic operation and long-term resilience.",
    },
    {
      icon: Bus,
      title: "Transportation & Transit Hubs",
      desc: "Heavy-traffic transit stations, passenger shelters, park-and-ride structures, and logistics facilities designed for high-density pedestrian flow.",
    },
    {
      icon: Users,
      title: "Community Centers & Public Spaces",
      desc: "Multi-purpose gathering spaces, recreation pavilions, senior wellness facilities, and civic event halls that strengthen Texas neighborhoods.",
    },
  ];

  return (
    <div className="arss-exact-page general-construction-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="gc-hero-section">
        <div
          className="gc-hero-bg"
          style={{ backgroundImage: `url(${generalConstructionImg})` }}
          aria-hidden="true"
        />
        <div className="gc-hero-overlay" aria-hidden="true" />

        <div className="gc-hero-container">
          {/* Breadcrumb */}
          <nav className="gc-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="gc-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="gc-breadcrumb-sep" />
            <span className="gc-breadcrumb-current">General Construction Services</span>
          </nav>

          <div className="gc-hero-kicker">
            <span className="gc-hero-kicker-dot" />
            <span>COMMERCIAL &amp; PUBLIC SECTOR CONTRACTING</span>
          </div>

          <h1 className="gc-hero-title">General Construction Services</h1>
          <p className="gc-hero-subtitle">
            Building the Foundations of Progress for Our Communities. Turnkey commercial construction, public infrastructure, and institutional facilities engineered to endure.
          </p>

          <div className="gc-hero-meta-strip">
            <div className="gc-hm-item">
              <Building2 size={15} className="gc-hm-icon" />
              <span>Turnkey Public &amp; Commercial Builds</span>
            </div>
            <div className="gc-hm-sep" />
            <div className="gc-hm-item">
              <ShieldCheck size={15} className="gc-hm-icon" />
              <span>Licensed, Bonded &amp; Insured in Texas</span>
            </div>
            <div className="gc-hm-sep" />
            <div className="gc-hm-item">
              <MapPin size={15} className="gc-hm-icon" />
              <span>Dallas Headquarters • Serving Texas &amp; Beyond</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Building the Foundations of Progress for Our Communities */}
      <section className="gc-story-section">
        <div className="gc-container">
          <div className="gc-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="gc-story-content">
              <div className="gc-section-kicker">
                <span className="gc-kicker-dot" />
                <span>EXCELLENCE IN EVERY STRUCTURE</span>
              </div>

              <h2 className="gc-story-heading">
                Building the Foundations of Progress for Our Communities.
              </h2>

              <div className="gc-story-text">
                <p>
                  At <strong>ARSS Construction</strong>, we excel in delivering exceptional general construction services for public sector projects, focusing on creating infrastructure that serves the community effectively. Our expertise encompasses a wide range of projects, including schools, government buildings, transportation hubs, and community centers. From concept to completion, we manage every stage of the construction process with meticulous attention to detail, ensuring each project is completed on time, within budget, and adheres to the highest standards of quality.
                </p>
                <p>
                  Our experienced team combines innovative design strategies with cutting-edge construction techniques to deliver durable structures that meet the specific needs of the public sector. We are committed to sustainable practices and prioritize safety and efficiency at every stage of the project. Whether constructing a new facility or upgrading infrastructure, we aim to exceed expectations and contribute positively to the community. At ARSS Construction, we don’t just build structures; we build trust and lasting impact.
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="gc-story-actions">
                <a href="/request-inspection" className="gc-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="gc-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="gc-guarantee-row">
                <div className="gc-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Schools &amp; Learning Centers</span>
                </div>
                <div className="gc-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Government &amp; Civic Buildings</span>
                </div>
                <div className="gc-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Transit &amp; Logistics Hubs</span>
                </div>
                <div className="gc-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Sustainable &amp; Safe Execution</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring General-Construction.png */}
            <div className="gc-story-media">
              <div className="gc-media-frame">
                <img
                  src={generalConstructionImg}
                  alt="Commercial general construction, multi-story structural framing by ARSS Construction"
                  className="gc-media-img"
                />
                <div className="gc-media-overlay" />

                <div className="gc-floating-badge">
                  <HardHat size={26} className="gc-fb-icon" />
                  <div>
                    <span className="gc-fb-number">100% Code Compliant</span>
                    <span className="gc-fb-label">Texas Commercial &amp; Civic Standard</span>
                  </div>
                </div>

                <div className="gc-corner-badge">
                  <span>General Contractor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Building Excellence for Public Sector Projects */}
      <section className="gc-pillars-section">
        <div className="gc-container">
          <div className="gc-section-header">
            <div className="gc-section-kicker">
              <span className="gc-kicker-dot" />
              <span>OUR THREE CORE PILLARS</span>
            </div>
            <h2 className="gc-section-title">
              Building Excellence for Public Sector Projects
            </h2>
            <p className="gc-section-lead-text">
              We approach every civic build with uncompromising precision, transparent cost engineering, and proven field management. Our three foundational pillars guarantee projects that stand the test of time.
            </p>
          </div>

          {/* 3 Pillars Cards matching the user's specific items */}
          <div className="gc-pillars-grid">
            {/* Pillar 1: Comprehensive Project Management */}
            <div className="gc-pillar-card">
              <div className="gc-pillar-img-wrap">
                <img
                  src={siteFramingImg}
                  alt="Comprehensive Project Management by ARSS Construction"
                  className="gc-pillar-img"
                />
                <div className="gc-pillar-num-badge">01</div>
              </div>
              <div className="gc-pillar-body">
                <div className="gc-pillar-icon-box">
                  <ClipboardList size={22} />
                </div>
                <h3 className="gc-pillar-title">Comprehensive Project Management</h3>
                <p className="gc-pillar-desc">
                  From planning and design to construction and delivery, we handle every stage of public sector projects with precision and efficiency.
                </p>
                <div className="gc-pillar-features">
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Architectural &amp; Engineering Coordination</span>
                  </div>
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Permit Expediting &amp; Municipal Compliance</span>
                  </div>
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Subcontractor Oversight &amp; Site Safety</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Quality and Durability */}
            <div className="gc-pillar-card">
              <div className="gc-pillar-img-wrap">
                <img
                  src={generalConstructionImg}
                  alt="Quality and Durability in Commercial Construction"
                  className="gc-pillar-img"
                />
                <div className="gc-pillar-num-badge">02</div>
              </div>
              <div className="gc-pillar-body">
                <div className="gc-pillar-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="gc-pillar-title">Quality and Durability</h3>
                <p className="gc-pillar-desc">
                  We prioritize craftsmanship and adherence to industry standards, ensuring long-lasting structures that meet community needs.
                </p>
                <div className="gc-pillar-features">
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Heavy-Gauge Commercial Materials</span>
                  </div>
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Rigorous Multi-Point Quality Inspections</span>
                  </div>
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Engineered for Generational Longevity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Timely and Budget-Friendly Solutions */}
            <div className="gc-pillar-card">
              <div className="gc-pillar-img-wrap">
                <img
                  src={facilityUpgradesImg}
                  alt="Timely and Budget-Friendly Solutions by ARSS Construction"
                  className="gc-pillar-img"
                />
                <div className="gc-pillar-num-badge">03</div>
              </div>
              <div className="gc-pillar-body">
                <div className="gc-pillar-icon-box">
                  <Scale size={22} />
                </div>
                <h3 className="gc-pillar-title">Timely and Budget-Friendly Solutions</h3>
                <p className="gc-pillar-desc">
                  Our experienced team delivers projects on schedule and within budget without compromising quality.
                </p>
                <div className="gc-pillar-features">
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Transparent Value Engineering</span>
                  </div>
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Critical-Path Milestone Scheduling</span>
                  </div>
                  <div className="gc-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Cost Certainty &amp; Zero Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Public Sector Focus Areas */}
      <section className="gc-sectors-section">
        <div className="gc-container">
          <div className="gc-section-header">
            <div className="gc-section-kicker">
              <span className="gc-kicker-dot" />
              <span>SPECIALIZED INFRASTRUCTURE</span>
            </div>
            <h2 className="gc-section-title">
              Infrastructure Built for Public Impact
            </h2>
            <p className="gc-section-lead-text">
              We bring proven commercial construction expertise to public sector stakeholders across Texas, delivering spaces that inspire and protect our communities.
            </p>
          </div>

          <div className="gc-sectors-grid">
            {civicSectors.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <div key={idx} className="gc-sector-card">
                  <div className="gc-sector-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <h3 className="gc-sector-title">{sector.title}</h3>
                  <p className="gc-sector-desc">{sector.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.5 Pre-Construction & Structural Evaluation Showcase */}
      <section className="gc-eval-section">
        <div className="gc-container">
          <div className="gc-eval-card">
            <div className="gc-eval-img-col">
              <img
                src={projectPlanningImg}
                alt="Pre-construction structural evaluation and inspection by ARSS Construction"
                className="gc-eval-img"
              />
              <div className="gc-eval-img-overlay" />
              <div className="gc-eval-badge">
                <ShieldCheck size={16} />
                <span>Structural Risk Mitigation</span>
              </div>
            </div>
            <div className="gc-eval-text-col">
              <div className="gc-section-kicker">
                <span className="gc-kicker-dot" />
                <span>PRE-CONSTRUCTION ASSURANCE</span>
              </div>
              <h3 className="gc-eval-heading">
                Comprehensive Site Evaluation &amp; Structural Feasibility
              </h3>
              <p className="gc-eval-desc">
                Before commencing major public or commercial construction, ARSS conducts extensive site diagnostics, existing structure assessments, and environmental feasibility reviews. We identify load-bearing compromises, evaluate perimeter risks, and establish zero-surprise schedules.
              </p>
              <div className="gc-eval-bullets">
                <div className="gc-eb-item">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Subsurface &amp; Foundation Integrity Auditing</span>
                </div>
                <div className="gc-eb-item">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Existing Facility Code &amp; ADA Compliance Reviews</span>
                </div>
                <div className="gc-eb-item">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Pre-Bid Cost Modeling &amp; Value Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews & Testimonials */}
      <section className="gc-reviews-section">
        <div className="gc-container">
          <div className="gc-section-header">
            <div className="gc-section-kicker">
              <span className="gc-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="gc-section-title">
              What Project Leaders Say About ARSS
            </h2>
            <div className="gc-google-badge">
              <GoogleIcon size={20} />
              <div className="gc-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="gc-gb-score">5.0 Star Rated on Google</span>
              <span className="gc-gb-verified">• Verified Texas Commercial Partner</span>
            </div>
          </div>

          <div className="gc-reviews-grid">
            {constructionReviews.map((rev, idx) => (
              <div key={idx} className="gc-review-card">
                <div className="gc-rc-header">
                  <div
                    className="gc-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="gc-rc-author-info">
                    <div className="gc-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="gc-rc-author-meta">{rev.role}</div>
                    <div className="gc-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="gc-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="gc-rc-title">"{rev.title}"</h4>
                <p className="gc-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exact User Callout: Need Help? */}
      <section className="gc-help-section">
        <div className="gc-container">
          <div className="gc-help-card">
            <div className="gc-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="gc-help-info">
                <div className="gc-section-kicker gc-help-kicker">
                  <span className="gc-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="gc-help-title">Need Help?</h3>
                <p className="gc-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="gc-help-contacts">
                  {/* Phone Block */}
                  <div className="gc-contact-block">
                    <div className="gc-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="gc-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="gc-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="gc-contact-block">
                    <div className="gc-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="gc-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="gc-cb-val"
                      >
                        support@arssconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="gc-help-actions">
                  <a href="/request-inspection" className="gc-btn-quote">
                    <Calendar size={17} />
                    <span>Request Public Sector Proposal</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="gc-help-sidebar">
                <div className="gc-dispatch-card">
                  <div className="gc-dc-head">
                    <div className="gc-dc-badge">
                      <span className="gc-dc-pulse" />
                      <span>Commercial Estimating Team Ready</span>
                    </div>
                  </div>
                  <h4 className="gc-dc-title">General Construction Headquarters</h4>
                  <p className="gc-dc-text">
                    Direct access to our commercial estimators, master carpenters, and project managers across North Texas.
                  </p>

                  <div className="gc-dc-details">
                    <div className="gc-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Dallas, Texas • Serving All 50 States</span>
                    </div>
                    <div className="gc-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Office: Mon–Fri 8AM–6PM | Sat 8AM–12PM</span>
                    </div>
                    <div className="gc-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Fully Bonded, Insured &amp; OSHA Compliant</span>
                    </div>
                  </div>

                  <a href="/contact" className="gc-dc-btn">
                    <span>Contact Headquarters</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}

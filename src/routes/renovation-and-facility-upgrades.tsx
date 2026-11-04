import { createFileRoute } from "@tanstack/react-router";
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
  Layers,
  Zap,
  Leaf,
  Calendar,
  Star,
  BadgeCheck,
  Hammer,
  Sliders,
  Maximize2,
  ShieldAlert,
  Flame,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Requested images from src/assets/gallery/
import heroLivingImg from "../assets/gallery/Fireplace-Sofas-Living-Room-Beams-High-Ceiling-Mid-Century-House-Lincoln-Massachusetts.jpg";
import bestHomeImg from "../assets/gallery/BEST-HOME-IMPROVEMENT-IDEAS-FOR-2022.jpg";
import remodelingDizainImg from "../assets/gallery/1678008072_en-idei-club-p-home-remodeling-dizain-28.jpg";
import planRenovationImg from "../assets/gallery/1679431385_en-idei-club-p-plan-renovation-dizain-krasivo-50.jpg";
import siteInteriorImg from "../assets/gallery/425f8991daa4983b80659cdb66ceb253.jpg";
import luxuryBasementImg from "../assets/gallery/bigstock-Basement-in-luxury-home-with-b-18131438-2048x1365-1.jpg";

export const Route = createFileRoute("/renovation-and-facility-upgrades")({
  component: RenovationAndFacilityUpgradesPage,
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

function RenovationAndFacilityUpgradesPage() {
  const upgradeReviews = [
    {
      author: "Robert Sterling",
      initials: "RS",
      avatarColor: "#0284c7",
      location: "Dallas, TX",
      role: "Public Facilities Director",
      title: "Completed comprehensive HVAC & interior overhaul without shutting down",
      quote:
        "Renovating an active municipal facility while keeping administrative offices open to the public was our biggest concern. ARSS established airtight dust barriers, managed quiet work windows, and delivered a modern, energy-efficient building with zero public disruption.",
    },
    {
      author: "Jennifer Campbell",
      initials: "JC",
      avatarColor: "#059669",
      location: "Richardson, TX",
      role: "School District Capital Projects Head",
      title: "Brought 30-year-old classrooms into the 21st century",
      quote:
        "ARSS transformed outdated library and classroom spaces into state-of-the-art interactive learning centers. Their attention to lighting, acoustics, and durable millwork exceeded every stakeholder expectation. On time, on budget.",
    },
    {
      author: "Thomas Gallagher",
      initials: "TG",
      avatarColor: "#d97706",
      location: "Fort Worth, TX",
      role: "Community Center Administrator",
      title: "Exceptional craftsmanship and genuine community commitment",
      quote:
        "The ARSS crew treated our community pavilion and recreation center as if it were their own neighborhood. Their customized layout solutions and ADA accessibility upgrades have revitalized how our residents use the space daily.",
    },
  ];

  const upgradeFocusAreas = [
    {
      icon: Building2,
      title: "Schools & Educational Facilities",
      desc: "Transforming aging classrooms, libraries, auditoriums, and laboratories into modern, tech-enabled spaces engineered for interactive learning and student well-being.",
    },
    {
      icon: Zap,
      title: "Government & Municipal Offices",
      desc: "Reconfiguring civic administration spaces, council chambers, and public service counters for enhanced security, digital infrastructure, and streamlined citizen access.",
    },
    {
      icon: Leaf,
      title: "Energy & Systems Retrofitting",
      desc: "Upgrading legacy HVAC units, modernizing commercial electrical grids, and installing high-performance LED automation to substantially lower operational utility costs.",
    },
    {
      icon: Sparkles,
      title: "Community Centers & Public Venues",
      desc: "Revitalizing gathering halls, senior centers, youth athletic complexes, and public restrooms with heavy-duty, ADA-compliant, and aesthetically inspiring finishes.",
    },
  ];

  return (
    <div className="arss-exact-page rfu-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="rfu-hero-section">
        <div
          className="rfu-hero-bg"
          style={{ backgroundImage: `url(${heroLivingImg})` }}
          aria-hidden="true"
        />
        <div className="rfu-hero-overlay" aria-hidden="true" />

        <div className="rfu-hero-container">
          {/* Breadcrumb */}
          <nav className="rfu-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="rfu-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="rfu-breadcrumb-sep" />
            <span className="rfu-breadcrumb-current">Renovation and Facility Upgrades</span>
          </nav>

          <div className="rfu-hero-kicker">
            <span className="rfu-hero-kicker-dot" />
            <span>CIVIC, COMMERCIAL &amp; INSTITUTIONAL UPGRADES</span>
          </div>

          <h1 className="rfu-hero-title">Renovation and Facility Upgrades</h1>
          <p className="rfu-hero-subtitle">
            Transforming Public Spaces to Meet Modern Needs. Turnkey modern interior overhauls, building systems modernization, and energy-efficient retrofits.
          </p>

          <div className="rfu-hero-meta-strip">
            <div className="rfu-hm-item">
              <Sparkles size={15} className="rfu-hm-icon" />
              <span>Modernization &amp; Building Systems</span>
            </div>
            <div className="rfu-hm-sep" />
            <div className="rfu-hm-item">
              <ShieldCheck size={15} className="rfu-hm-icon" />
              <span>Zero-Downtime Phased Construction</span>
            </div>
            <div className="rfu-hm-sep" />
            <div className="rfu-hm-item">
              <MapPin size={15} className="rfu-hm-icon" />
              <span>Dallas Headquarters • Serving All Texas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Transforming Public Spaces to Meet Modern Needs */}
      <section className="rfu-story-section">
        <div className="rfu-container">
          <div className="rfu-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="rfu-story-content">
              <div className="rfu-section-kicker">
                <span className="rfu-kicker-dot" />
                <span>EXCELLENCE IN FACILITY MODERNIZATION</span>
              </div>

              <h2 className="rfu-story-heading">
                Transforming Public Spaces to Meet Modern Needs.
              </h2>

              <div className="rfu-story-text">
                <p>
                  <strong>ARSS Construction</strong> provides top-tier renovation and facility upgrade services for public sector projects, aiming to enhance functionality, safety, and visual appeal. Our team specializes in modernizing interiors, upgrading outdated systems, and improving energy efficiency in facilities such as schools, government offices, and community centers.
                </p>
                <p>
                  We work closely with stakeholders to identify the needs of the community, ensuring the upgraded facility aligns with their goals and objectives. From small-scale refurbishments to large-scale renovations, our experienced professionals bring creative solutions and exceptional craftsmanship to every project. We minimize disruptions during construction, enabling facilities to continue serving the public while undergoing improvements.
                </p>
                <p>
                  Our approach combines advanced technologies with environmentally friendly practices to deliver long-lasting results. Whether it’s adding modern amenities, addressing structural issues, or enhancing accessibility, we aim to transform facilities into spaces that inspire and serve communities better. With ARSS Construction, your renovation project is in the hands of a team that values quality, efficiency, and community impact.
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="rfu-story-actions">
                <a href="/request-inspection" className="rfu-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="rfu-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="rfu-guarantee-row">
                <div className="rfu-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Energy &amp; MEP System Upgrades</span>
                </div>
                <div className="rfu-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>ADA Accessibility &amp; Code Compliance</span>
                </div>
                <div className="rfu-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Zero-Downtime Phased Construction</span>
                </div>
                <div className="rfu-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Sustainable &amp; Eco-Friendly Materials</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring BEST-HOME-IMPROVEMENT-IDEAS-FOR-2022.jpg */}
            <div className="rfu-story-media">
              <div className="rfu-media-frame">
                <img
                  src={bestHomeImg}
                  alt="Modern interior facility renovation and architectural upgrade by ARSS Construction"
                  className="rfu-media-img"
                />
                <div className="rfu-media-overlay" />

                <div className="rfu-floating-badge">
                  <Sliders size={26} className="rfu-fb-icon" />
                  <div>
                    <span className="rfu-fb-number">Continuous Facility Operation</span>
                    <span className="rfu-fb-label">Phased Work Windows &amp; Clean Dust Control</span>
                  </div>
                </div>

                <div className="rfu-corner-badge">
                  <span>Turnkey Renovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Transforming Existing Facilities for Better Communities */}
      <section className="rfu-pillars-section">
        <div className="rfu-container">
          <div className="rfu-section-header">
            <div className="rfu-section-kicker">
              <span className="rfu-kicker-dot" />
              <span>PROVEN COMMUNITY IMPACT</span>
            </div>
            <h2 className="rfu-section-title">
              Transforming Existing Facilities for Better Communities :
            </h2>
            <p className="rfu-section-lead-text">
              We understand that public facilities carry ongoing civic responsibilities. Our modernization process is built around speed, elegance, and zero disruptions to daily public operations.
            </p>
          </div>

          {/* 3 Core Value Cards matching user's specific points */}
          <div className="rfu-pillars-grid">
            {/* Pillar 1: Modernization and Enhancements */}
            <div className="rfu-pillar-card">
              <div className="rfu-pillar-img-wrap">
                <img
                  src={remodelingDizainImg}
                  alt="Modernization and Enhancements by ARSS Construction"
                  className="rfu-pillar-img"
                />
                <div className="rfu-pillar-num-badge">01</div>
              </div>
              <div className="rfu-pillar-body">
                <div className="rfu-pillar-icon-box">
                  <Sparkles size={22} />
                </div>
                <h3 className="rfu-pillar-title">Modernization and Enhancements</h3>
                <p className="rfu-pillar-desc">
                  We upgrade interiors, building systems, and energy efficiency to meet current standards and improve functionality.
                </p>
                <div className="rfu-pillar-features">
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Architectural Interior Reconfigurations</span>
                  </div>
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Commercial HVAC &amp; Lighting Modernization</span>
                  </div>
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Heavy-Duty High-Traffic Surface Finishes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Customized Solutions */}
            <div className="rfu-pillar-card">
              <div className="rfu-pillar-img-wrap">
                <img
                  src={planRenovationImg}
                  alt="Customized Renovation Solutions for Texas Public Projects"
                  className="rfu-pillar-img"
                />
                <div className="rfu-pillar-num-badge">02</div>
              </div>
              <div className="rfu-pillar-body">
                <div className="rfu-pillar-icon-box">
                  <Layers size={22} />
                </div>
                <h3 className="rfu-pillar-title">Customized Solutions</h3>
                <p className="rfu-pillar-desc">
                  Each project is tailored to meet the unique needs of stakeholders and the community.
                </p>
                <div className="rfu-pillar-features">
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Collaborative Stakeholder Alignment</span>
                  </div>
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Flexible Multi-Use Room Configurations</span>
                  </div>
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Full ADA Universal Accessibility Compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Minimal Disruption */}
            <div className="rfu-pillar-card">
              <div className="rfu-pillar-img-wrap">
                <img
                  src={siteInteriorImg}
                  alt="Minimal Disruption Facility Upgrades by ARSS Construction"
                  className="rfu-pillar-img"
                />
                <div className="rfu-pillar-num-badge">03</div>
              </div>
              <div className="rfu-pillar-body">
                <div className="rfu-pillar-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="rfu-pillar-title">Minimal Disruption</h3>
                <p className="rfu-pillar-desc">
                  Our team ensures facilities remain operational during renovations, focusing on efficiency and smooth transitions.
                </p>
                <div className="rfu-pillar-features">
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Phased Scheduling &amp; Off-Hours Execution</span>
                  </div>
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>HEPA Air Scrubbing &amp; Rigid Dust Containment</span>
                  </div>
                  <div className="rfu-pf-item">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    <span>Safe Public Corridors &amp; Temporary Partitions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Luxury Space Modernization Spotlight featuring bigstock-Basement-in-luxury-home */}
      <section className="rfu-spotlight-section">
        <div className="rfu-container">
          <div className="rfu-spotlight-card">
            <div className="rfu-spotlight-img-col">
              <img
                src={luxuryBasementImg}
                alt="High-end architectural finishes, custom millwork, and luxury facility spaces by ARSS Construction"
                className="rfu-spotlight-img"
              />
              <div className="rfu-spotlight-img-overlay" />
              <div className="rfu-spotlight-badge">
                <Sparkles size={16} />
                <span>Master Craftsmanship &amp; Finish-Out</span>
              </div>
            </div>
            <div className="rfu-spotlight-text-col">
              <div className="rfu-section-kicker">
                <span className="rfu-kicker-dot" />
                <span>PREMIER FINISH-OUT EXCELLENCE</span>
              </div>
              <h3 className="rfu-spotlight-heading">
                Comprehensive Architectural Millwork &amp; Premium Finishes
              </h3>
              <p className="rfu-spotlight-desc">
                From luxury commercial executive suites and public council chambers to high-traffic community spaces, ARSS combines durable commercial materials with elegant artisanal detail. We revitalize interior layouts with custom cabinetry, acoustic ceiling treatments, integrated LED accenting, and resilient luxury flooring.
              </p>
              <div className="rfu-spotlight-bullets">
                <div className="rfu-sb-item">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Custom Architectural Millwork, Moldings &amp; Cabinetry</span>
                </div>
                <div className="rfu-sb-item">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Acoustic Wall Panels &amp; Integrated Sound Dampening</span>
                </div>
                <div className="rfu-sb-item">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>High-Traffic Commercial Flooring (LVT, Terrazzo, Ceramic)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Facility Focus Sectors */}
      <section className="rfu-sectors-section">
        <div className="rfu-container">
          <div className="rfu-section-header">
            <div className="rfu-section-kicker">
              <span className="rfu-kicker-dot" />
              <span>KEY SECTOR EXPERTISE</span>
            </div>
            <h2 className="rfu-section-title">
              Facilities We Modernize Across Texas
            </h2>
            <p className="rfu-section-lead-text">
              Public and commercial facilities require specialized knowledge of safety codes, energy efficiency regulations, and ADA accessibility guidelines.
            </p>
          </div>

          <div className="rfu-sectors-grid">
            {upgradeFocusAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div key={idx} className="rfu-sector-card">
                  <div className="rfu-sector-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <h3 className="rfu-sector-title">{area.title}</h3>
                  <p className="rfu-sector-desc">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Verified Client Reviews & Testimonials */}
      <section className="rfu-reviews-section">
        <div className="rfu-container">
          <div className="rfu-section-header">
            <div className="rfu-section-kicker">
              <span className="rfu-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="rfu-section-title">
              Proven Results Across Texas Municipalities
            </h2>
            <div className="rfu-google-badge">
              <GoogleIcon size={20} />
              <div className="rfu-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="rfu-gb-score">5.0 Star Rated on Google</span>
              <span className="rfu-gb-verified">• Verified Texas Commercial Partner</span>
            </div>
          </div>

          <div className="rfu-reviews-grid">
            {upgradeReviews.map((rev, idx) => (
              <div key={idx} className="rfu-review-card">
                <div className="rfu-rc-header">
                  <div
                    className="rfu-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="rfu-rc-author-info">
                    <div className="rfu-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="rfu-rc-author-meta">{rev.role}</div>
                    <div className="rfu-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="rfu-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="rfu-rc-title">"{rev.title}"</h4>
                <p className="rfu-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Exact User Callout: Need Help? */}
      <section className="rfu-help-section">
        <div className="rfu-container">
          <div className="rfu-help-card">
            <div className="rfu-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="rfu-help-info">
                <div className="rfu-section-kicker rfu-help-kicker">
                  <span className="rfu-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="rfu-help-title">Need Help?</h3>
                <p className="rfu-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="rfu-help-contacts">
                  {/* Phone Block */}
                  <div className="rfu-contact-block">
                    <div className="rfu-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="rfu-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="rfu-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="rfu-contact-block">
                    <div className="rfu-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="rfu-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="rfu-cb-val"
                      >
                        support@arssconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rfu-help-actions">
                  <a href="/request-inspection" className="rfu-btn-quote">
                    <Calendar size={17} />
                    <span>Request Facility Upgrade Consultation</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="rfu-help-sidebar">
                <div className="rfu-dispatch-card">
                  <div className="rfu-dc-head">
                    <div className="rfu-dc-badge">
                      <span className="rfu-dc-pulse" />
                      <span>Renovation Specialists Available</span>
                    </div>
                  </div>
                  <h4 className="rfu-dc-title">Facility Upgrades Division</h4>
                  <p className="rfu-dc-text">
                    Schedule a confidential walk-through with our commercial project managers for municipal, educational, or commercial facilities.
                  </p>

                  <div className="rfu-dc-details">
                    <div className="rfu-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Dallas, Texas • Serving All 50 States</span>
                    </div>
                    <div className="rfu-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Office: Mon–Fri 8AM–6PM | Sat 8AM–12PM</span>
                    </div>
                    <div className="rfu-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Zero-Downtime Phased Construction Protocols</span>
                    </div>
                  </div>

                  <a href="/contact" className="rfu-dc-btn">
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


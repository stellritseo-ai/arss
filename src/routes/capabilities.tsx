import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  Palette,
  Layers,
  Building2,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Home,
  Users,
  Award,
  PhoneCall,
  BadgeCheck,
  FileText,
  Briefcase,
  Hotel,
  Compass,
  ArrowRight,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

import gal4Img from "../assets/gal4.jpg";
import hero1Img from "../assets/hero1.png";
import hero2Img from "../assets/hero2.png";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const coreCompetencies = [
    {
      title: "Drywall Installation and Finishing",
      desc: "Expert installation of drywall, including taping, mudding, and sanding to achieve a smooth, flawless finish.",
      icon: Layers,
      badge: "Precision Trade",
      scope: [
        "Light gauge & structural metal stud framing",
        "Expert taping, mudding & level 4/5 smooth finishing",
        "Acoustical suspended ceiling grid systems",
        "Fire-rated shaft-wall & acoustic partition assemblies",
      ],
    },
    {
      title: "Painting Services",
      desc: "Professional interior and exterior painting services, using high-quality materials and techniques to ensure a durable and aesthetically pleasing result.",
      icon: Palette,
      badge: "Commercial Coatings",
      scope: [
        "High-performance commercial interior & exterior coatings",
        "Specialized texture matching & knockdown finishes",
        "Commercial wall coverings & vinyl applications",
        "Low-VOC architectural paints & surface primers",
      ],
    },
    {
      title: "Interior Finish-Out",
      desc: "Comprehensive interior finish-out services, including flooring, ceilings, millwork, and custom finishes to create functional and visually appealing spaces.",
      icon: Building2,
      badge: "Turnkey Scope",
      scope: [
        "Architectural millwork, custom trim & door hanging",
        "Commercial luxury vinyl tile (LVT), carpet & tile flooring",
        "Drop ceiling, acoustic clouds & lighting coordination",
        "Turnkey tenant improvements (TI) & modern space buildouts",
      ],
    },
  ];

  const differentiators = [
    {
      title: "Experienced Team",
      desc: "Our team consists of highly skilled professionals with extensive experience in commercial construction projects.",
      icon: Users,
      tag: "Vetted Tradesmen",
    },
    {
      title: "Quality Assurance",
      desc: "We adhere to strict quality control measures to ensure that every project meets the highest standards of workmanship.",
      icon: ShieldCheck,
      tag: "Rigorous QA / QC",
    },
    {
      title: "Customer-Centric Approach",
      desc: "We prioritize our clients and work closely with them to deliver customized solutions that exceed expectations.",
      icon: Award,
      tag: "Client-First Culture",
    },
    {
      title: "Timely Delivery",
      desc: "We understand the importance of deadlines and are committed to completing projects on time and within budget.",
      icon: Clock,
      tag: "Schedule Driven",
    },
  ];

  const pastProjects = [
    {
      name: "Conservatory",
      location: "The Woodlands, TX",
      headline: "Tower and Dome Reconstruction",
      category: "Senior Living & Architectural Rebuild",
      badge: "Texas Landmark",
      scopeItems: [
        "5’x5’x3ft concrete footings",
        "Wood framing",
        "Soffit and Fascia",
        "Pour concrete patio level 2, 3 and attic space",
        "Set new trusses and roof deck",
      ],
    },
    {
      name: "Crowne Plaza",
      location: "Seattle, WA",
      headline: "27 Guest Suites, 12 Mechanical Closets, 12 Elevator Lobbies & Corridors",
      category: "Full Hospitality Modernization",
      badge: "Multi-Floor Renovation",
      scopeItems: [
        "Insulation",
        "Drywall",
        "Texture",
        "Wall Cover",
        "Lighting",
        "Paint",
        "Content manipulation",
      ],
    },
    {
      name: "Hyatt",
      location: "Lexington, KY",
      headline: "72 Guest Suites",
      category: "Comprehensive Hotel Interior Finish-Out",
      badge: "Flagship Hospitality",
      scopeItems: [
        "Insulation",
        "Drywall",
        "Texture",
        "Wall Cover",
        "Lighting",
        "Paint",
        "Content manipulation",
      ],
    },
  ];

  const marketSectors = [
    "Hotels & Hospitality",
    "Assisted Living Facilities",
    "Office Buildings",
    "Healthcare Facilities",
    "Retail & Commercial Spaces",
  ];

  return (
    <div className="arss-exact-page cap-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="cap-hero-section">
        <div
          className="cap-hero-bg"
          style={{ backgroundImage: `url(${hero1Img})` }}
          aria-hidden="true"
        />
        <div className="cap-hero-overlay" aria-hidden="true" />

        <div className="cap-hero-container">
          {/* Breadcrumb */}
          <nav className="cap-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="cap-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="cap-breadcrumb-sep" />
            <span className="cap-breadcrumb-current">Capabilities</span>
          </nav>

          <div className="cap-hero-kicker">
            <span className="cap-hero-kicker-dot" />
            <span>COMMERCIAL CONSTRUCTION &amp; FINISH-OUT EXCELLENCE</span>
          </div>

          <h1 className="cap-hero-title">Capabilities Statement</h1>
          <p className="cap-hero-subtitle">
            Commercial insulation, precision drywall, architectural painting, custom millwork, and comprehensive interior finish-out services across Texas and nationwide.
          </p>

          <div className="cap-hero-meta-strip">
            <div className="cap-hm-item">
              <MapPin size={15} className="cap-hm-icon" />
              <span>Headquarters: Dallas, Texas</span>
            </div>
            <div className="cap-hm-sep" />
            <div className="cap-hm-item">
              <Briefcase size={15} className="cap-hm-icon" />
              <span>Commercial &amp; Multi-State Projects</span>
            </div>
            <div className="cap-hm-sep" />
            <div className="cap-hm-item">
              <BadgeCheck size={15} className="cap-hm-icon" />
              <span>Licensed, Bonded &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Overview Section */}
      <section className="cap-overview-section">
        <div className="cap-container">
          <div className="cap-overview-grid">
            {/* Left Narrative */}
            <div className="cap-overview-content">
              <div className="cap-section-kicker">
                <span className="cap-kicker-dot" />
                <span>COMPANY OVERVIEW</span>
              </div>

              <h2 className="cap-overview-heading">
                ARSS Construction Services
              </h2>

              <p className="cap-overview-lead">
                <strong>ARSS Construction Services</strong> is a leading commercial construction company based in Dallas Texas, specializing in insulation, drywall, painting, millwork, and interior finish-out work. With a commitment to excellence and a proven track record, we deliver high-quality construction services tailored to meet the unique needs of our clients.
              </p>

              {/* Scope highlights pills */}
              <div className="cap-scope-pills">
                <div className="cap-scope-pill">
                  <CheckCircle2 size={16} />
                  <span>Commercial Insulation</span>
                </div>
                <div className="cap-scope-pill">
                  <CheckCircle2 size={16} />
                  <span>Drywall &amp; Finishing</span>
                </div>
                <div className="cap-scope-pill">
                  <CheckCircle2 size={16} />
                  <span>Architectural Painting</span>
                </div>
                <div className="cap-scope-pill">
                  <CheckCircle2 size={16} />
                  <span>Custom Millwork</span>
                </div>
                <div className="cap-scope-pill">
                  <CheckCircle2 size={16} />
                  <span>Interior Finish-Out</span>
                </div>
              </div>

              {/* Fast Fact Box */}
              <div className="cap-overview-badge-box">
                <div className="cap-obb-item">
                  <span className="cap-obb-title">Dallas, Texas</span>
                  <span className="cap-obb-sub">Operational Headquarters</span>
                </div>
                <div className="cap-obb-line" />
                <div className="cap-obb-item">
                  <span className="cap-obb-title">Multi-State</span>
                  <span className="cap-obb-sub">Project Mobilization Capacity</span>
                </div>
                <div className="cap-obb-line" />
                <div className="cap-obb-item">
                  <span className="cap-obb-title">Turnkey</span>
                  <span className="cap-obb-sub">From Substructure to Punch List</span>
                </div>
              </div>
            </div>

            {/* Right Media Card featuring gal4.jpg */}
            <div className="cap-overview-media">
              <div className="cap-media-frame">
                <img
                  src={gal4Img}
                  alt="ARSS Construction commercial drywall and architectural finish-out"
                  className="cap-media-img"
                />
                <div className="cap-media-overlay" />

                <div className="cap-media-floating-badge">
                  <ShieldCheck size={22} className="cap-mfb-icon" />
                  <div>
                    <span className="cap-mfb-title">Commercial Precision</span>
                    <span className="cap-mfb-sub">Strict Code &amp; Architectural Compliance</span>
                  </div>
                </div>

                <div className="cap-media-corner-badge">
                  <span>Dallas-Fort Worth &amp; Beyond</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Competencies Section */}
      <section className="cap-competencies-section">
        <div className="cap-container">
          <div className="cap-section-header">
            <div className="cap-section-kicker">
              <span className="cap-kicker-dot" />
              <span>SPECIALIZED COMMERCIAL TRADES</span>
            </div>
            <h2 className="cap-section-title">Core Competencies</h2>
            <p className="cap-section-subtitle">
              Engineered craftsmanship, strict adherence to architectural specifications, and flawless execution across all commercial building phases.
            </p>
          </div>

          <div className="cap-competencies-grid">
            {coreCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={comp.title} className="cap-comp-card">
                  <div className="cap-comp-card-head">
                    <div className="cap-comp-icon-box">
                      <Icon size={24} />
                    </div>
                    <span className="cap-comp-badge">{comp.badge}</span>
                  </div>

                  <h3 className="cap-comp-title">{comp.title}</h3>
                  <p className="cap-comp-desc">{comp.desc}</p>

                  <div className="cap-comp-scope-list">
                    <span className="cap-comp-scope-label">Key Capabilities:</span>
                    <ul>
                      {comp.scope.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={14} className="cap-comp-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="cap-comp-foot">
                    <span className="cap-comp-index">0{idx + 1}</span>
                    <span className="cap-comp-tag">Commercial Grade</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase Ribbon featuring hero2.png */}
          <div className="cap-showcase-ribbon">
            <div className="cap-ribbon-grid">
              <div className="cap-ribbon-img-wrap">
                <img
                  src={hero2Img}
                  alt="Commercial interior finish-out in progress by ARSS Construction"
                  className="cap-ribbon-img"
                />
              </div>
              <div className="cap-ribbon-content">
                <div className="cap-ribbon-kicker">
                  <Compass size={16} />
                  <span>SEAMLESS WORKFLOW</span>
                </div>
                <h3 className="cap-ribbon-title">
                  Turnkey Coordination from Raw Structure to Handover
                </h3>
                <p className="cap-ribbon-desc">
                  We integrate directly with general contractors, architects, and facilities directors to optimize sequencing, prevent trade conflicts, and guarantee on-schedule completion.
                </p>
                <div className="cap-ribbon-chips">
                  <span className="cap-ribbon-chip">Jobsite Safety Compliance</span>
                  <span className="cap-ribbon-chip">Direct Superintendent Oversight</span>
                  <span className="cap-ribbon-chip">Clean Punch-List Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Differentiators Section */}
      <section className="cap-diff-section">
        <div className="cap-container">
          <div className="cap-section-header">
            <div className="cap-section-kicker">
              <span className="cap-kicker-dot" />
              <span>THE ARSS ADVANTAGE</span>
            </div>
            <h2 className="cap-section-title">Key Differentiators</h2>
            <p className="cap-section-subtitle">
              What sets ARSS Construction Services apart on mission-critical commercial and institutional projects.
            </p>
          </div>

          <div className="cap-diff-grid">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div key={diff.title} className="cap-diff-card">
                  <div className="cap-diff-top">
                    <div className="cap-diff-icon-box">
                      <Icon size={24} />
                    </div>
                    <span className="cap-diff-tag">{diff.tag}</span>
                  </div>
                  <h3 className="cap-diff-title">{diff.title}</h3>
                  <p className="cap-diff-desc">{diff.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Past Performance & Project Reference Section */}
      <section className="cap-performance-section">
        <div className="cap-container">
          <div className="cap-section-header">
            <div className="cap-section-kicker">
              <span className="cap-kicker-dot" />
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="cap-section-title">Past Performance</h2>
            <p className="cap-section-subtitle">
              Successfully completed numerous commercial construction projects across Texas and other US states, including Assisted living, Hotels, office buildings, retail spaces, and healthcare facilities. Consistently received positive feedback from clients for our attention to detail, professionalism, and quality of work.
            </p>

            {/* Market Sector Badges */}
            <div className="cap-sectors-wrap">
              <span className="cap-sectors-label">Sectors Served:</span>
              <div className="cap-sectors-pills">
                {marketSectors.map((sector) => (
                  <span key={sector} className="cap-sector-pill">
                    <Hotel size={13} className="cap-sector-icon" />
                    <span>{sector}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="cap-projects-intro-bar">
            <FileText size={16} />
            <span>We have listed a few projects for reference below:</span>
          </div>

          <div className="cap-projects-grid">
            {pastProjects.map((project, idx) => (
              <div key={project.name + idx} className="cap-project-card">
                <div className="cap-pc-top">
                  <span className="cap-pc-badge">{project.badge}</span>
                  <div className="cap-pc-loc">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="cap-pc-main">
                  <h3 className="cap-pc-title">{project.name}</h3>
                  <span className="cap-pc-cat">{project.category}</span>
                  <h4 className="cap-pc-headline">{project.headline}</h4>
                </div>

                <div className="cap-pc-divider" />

                <div className="cap-pc-scope">
                  <span className="cap-pc-scope-title">Scope of Work:</span>
                  <ul className="cap-pc-scope-list">
                    {project.scopeItems.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={13} className="cap-pc-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cap-pc-footer">
                  <span className="cap-pc-status">
                    <span className="cap-pc-status-dot" />
                    <span>Successfully Completed</span>
                  </span>
                  <span className="cap-pc-ref">Reference #{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Capabilities Statement Call to Action */}
      <section className="cap-cta-section">
        <div className="cap-container">
          <div className="cap-cta-card">
            <div className="cap-cta-grid">
              <div className="cap-cta-main">
                <div className="cap-cta-kicker">
                  <span className="cap-cta-kicker-dot" />
                  <span>COMMERCIAL BIDDING &amp; SUBCONTRACTING</span>
                </div>
                <h2 className="cap-cta-title">
                  Ready to Partner with ARSS Construction?
                </h2>
                <p className="cap-cta-desc">
                  Contact our estimating team today for subcontractor bids, project consultations, or our comprehensive capabilities package. We are equipped to mobilize across Texas and select nationwide locations.
                </p>

                <div className="cap-cta-actions">
                  <a href="tel:4693605805" className="cap-cta-btn cap-cta-phone">
                    <PhoneCall size={18} />
                    <div>
                      <span className="cap-btn-sub">Direct Project Line</span>
                      <span className="cap-btn-val">(469) 360-5805</span>
                    </div>
                  </a>

                  <a href="mailto:support@arssconstruction.com" className="cap-cta-btn cap-cta-email">
                    <Mail size={18} />
                    <div>
                      <span className="cap-btn-sub">Email Estimating Team</span>
                      <span className="cap-btn-val">support@arssconstruction.com</span>
                    </div>
                  </a>

                  <a href="/#contact" className="cap-cta-btn cap-cta-quote">
                    <span>Request Free Proposal</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="cap-cta-side">
                <div className="cap-cta-office-card">
                  <div className="cap-coc-head">
                    <MapPin size={20} className="cap-coc-icon" />
                    <div>
                      <h4 className="cap-coc-title">Headquarters</h4>
                      <p className="cap-coc-sub">Dallas, Texas</p>
                    </div>
                  </div>
                  <p className="cap-coc-body">
                    Serving commercial general contractors, facility directors, and property managers throughout North Texas and nationwide.
                  </p>
                  <div className="cap-coc-badges">
                    <span className="cap-coc-badge">Licensed &amp; Bonded</span>
                    <span className="cap-coc-badge">Commercial Insured</span>
                    <span className="cap-coc-badge">OSHA Compliant</span>
                  </div>
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

export default CapabilitiesPage;


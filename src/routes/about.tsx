import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  Palette,
  Layers,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Home,
  Sparkles,
  PhoneCall,
  BadgeCheck,
  FileCheck2,
  MessageSquare,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import renovationImg from "../assets/renovation.jpg";
import constructionImg from "../assets/construction.jpg";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "100% Satisfaction Guarantee",
      desc: "We stand behind every build, renovation, and restoration with an uncompromising commitment to your complete peace of mind and satisfaction.",
      icon: CheckCircle2,
      badge: "Our Guarantee",
      isPrimary: true,
    },
    {
      title: "Wide Range of Finishes",
      desc: "From custom luxury millwork and spa-inspired tiling to turnkey commercial finishes, we bring diverse architectural styles to life.",
      icon: Palette,
      badge: "Custom Design",
    },
    {
      title: "High-Quality Materials",
      desc: "We source commercial-grade supplies and premium architectural materials engineered to endure North Texas weather and daily wear.",
      icon: Layers,
      badge: "Premium Grade",
    },
    {
      title: "Licensed & Insured Pro",
      desc: "Fully bonded, licensed, and insured in Texas, strictly adhering to municipal building codes, OSHA standards, and safety best practices.",
      icon: BadgeCheck,
      badge: "Verified Pro",
    },
    {
      title: "5-Star Google Reviews",
      desc: "Top-rated by hundreds of homeowners and business property managers across Dallas-Fort Worth for transparent pricing and reliability.",
      icon: Star,
      badge: "5.0 Rating",
      isStar: true,
    },
  ];

  return (
    <div className="arss-exact-page about-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="about-hero-section">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="about-hero-overlay" aria-hidden="true" />

        <div className="about-hero-container">
          {/* Breadcrumb */}
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="about-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="about-breadcrumb-sep" />
            <span className="about-breadcrumb-current">About</span>
          </nav>

          <div className="about-hero-kicker">
            <span className="about-hero-kicker-dot" />
            <span>TEXAS LICENSED &amp; INSURED GENERAL CONTRACTOR</span>
          </div>

          <h1 className="about-hero-title">About ARSS Construction</h1>
          <p className="about-hero-subtitle">
            Dedicated craftsmanship, proven restoration expertise, and turnkey remodeling solutions for residential and commercial properties throughout Dallas-Fort Worth.
          </p>
        </div>
      </section>

      {/* 2. Welcome to ARSS Construction - Main Story Section */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="about-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="about-story-content">
              <div className="about-story-kicker">
                <span className="about-story-kicker-dot" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="about-story-heading">
                Welcome to ARSS Construction
              </h2>

              <div className="about-story-text">
                <p>
                  At <strong>ARSS Construction</strong>, we stand out as your trusted partner in restoration and renovation. With years of experience and a commitment to excellence, we bring a unique blend of expertise, craftsmanship, and personalized service to every project. Our dedicated team understands the emotional and financial investment you’ve made in your property, and we treat it with the utmost care.
                </p>
                <p>
                  From water and fire damage restoration to remodeling and renovations, we approach each task with precision and a passion for perfection. With ARSS Construction, you can expect timely, reliable, and top-quality solutions tailored to your specific needs. Choose us for a seamless, stress-free experience and watch your vision come to life.
                </p>
              </div>

              {/* Three Quality Pillars */}
              <div className="about-pillars-row">
                <div className="about-pillar-pill">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>Precision &amp; Perfection</span>
                </div>
                <div className="about-pillar-pill">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>Personalized Service</span>
                </div>
                <div className="about-pillar-pill">
                  <Sparkles size={16} className="text-amber-600" />
                  <span>Seamless, Stress-Free</span>
                </div>
              </div>

              {/* Company Info Fast Badge */}
              <div className="about-company-strip">
                <div className="about-cs-item">
                  <span className="about-cs-label">Company</span>
                  <span className="about-cs-val">ARSS Construction</span>
                </div>
                <div className="about-cs-divider" />
                <div className="about-cs-item">
                  <span className="about-cs-label">Direct Hotline</span>
                  <a href="tel:4693605805" className="about-cs-link">
                    (469) 360-5805
                  </a>
                </div>
                <div className="about-cs-divider" />
                <div className="about-cs-item">
                  <span className="about-cs-label">Email</span>
                  <a href="mailto:support@arssconstruction.com" className="about-cs-link">
                    support@arssconstruction.com
                  </a>
                </div>
                <div className="about-cs-divider" />
                <div className="about-cs-item">
                  <span className="about-cs-label">Headquarters</span>
                  <span className="about-cs-val">Dallas, Texas</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase & Snapshot Card */}
            <div className="about-story-media">
              <div className="about-media-card">
                <img
                  src={renovationImg}
                  alt="ARSS Construction luxury residential craftsmanship"
                  className="about-media-image"
                />
                <div className="about-media-overlay" />

                {/* Floating Experience Badge */}
                <div className="about-floating-badge">
                  <div className="about-fb-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="about-fb-number">15+ Years</span>
                    <span className="about-fb-label">Texas Craftsmanship</span>
                  </div>
                </div>

                {/* Floating Fast Facts Badge */}
                <div className="about-floating-badge-secondary">
                  <div className="about-fbs-dot" />
                  <span>Active 24/7 DFW Response</span>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="about-quick-contact-card">
                <div className="about-qcc-header">
                  <div>
                    <h3 className="about-qcc-title">ARSS Construction</h3>
                    <p className="about-qcc-sub">Dallas-Fort Worth Metroplex</p>
                  </div>
                  <div className="about-qcc-status">
                    <span className="about-qcc-dot" />
                    <span>Open 24/7</span>
                  </div>
                </div>

                <div className="about-qcc-rows">
                  <div className="about-qcc-row">
                    <MapPin size={16} className="about-qcc-icon" />
                    <span><strong>Address:</strong> Dallas, Texas (Serving all DFW)</span>
                  </div>
                  <div className="about-qcc-row">
                    <Phone size={16} className="about-qcc-icon" />
                    <span>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:4693605805" className="about-qcc-link">
                        (469) 360-5805
                      </a>
                    </span>
                  </div>
                  <div className="about-qcc-row">
                    <Mail size={16} className="about-qcc-icon" />
                    <span>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:support@arssconstruction.com" className="about-qcc-link">
                        support@arssconstruction.com
                      </a>
                    </span>
                  </div>
                </div>

                <a href="tel:4693605805" className="about-qcc-btn">
                  <Phone size={15} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Values & Capabilities Section */}
      <section className="about-values-section" id="capabilities">
        <div className="about-container">
          <div className="about-values-header">
            <div className="about-values-kicker">
              <span className="about-values-kicker-dot" />
              <span>THE ARSS COMMITMENT</span>
            </div>
            <h2 className="about-values-title">Our Values</h2>
            <p className="about-values-subtitle">
              Every project we undertake is built upon these uncompromised standards of excellence, safety, and client dedication.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className={`about-value-card${val.isPrimary ? " is-primary" : ""}`}
                >
                  <div className="about-vc-top">
                    <div className="about-vc-icon-wrap">
                      <Icon size={24} />
                    </div>
                    <span className="about-vc-badge">{val.badge}</span>
                  </div>

                  <h3 className="about-vc-title">{val.title}</h3>
                  <p className="about-vc-desc">{val.desc}</p>

                  <div className="about-vc-foot">
                    <span className="about-vc-step">0{idx + 1}</span>
                    <span className="about-vc-check">
                      <CheckCircle2 size={15} />
                      <span>Standard</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Need Help? Callout & Contact Section */}
      <section className="about-help-section">
        <div className="about-container">
          <div className="about-help-card">
            <div className="about-help-grid">
              {/* Left Column: Heading and info */}
              <div className="about-help-main">
                <div className="about-help-kicker">
                  <span className="about-help-kicker-dot" />
                  <span>GET IN TOUCH</span>
                </div>

                <h2 className="about-help-title">Need Help?</h2>
                <p className="about-help-desc">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="about-help-actions">
                  <a
                    href="tel:4693605805"
                    className="about-help-phone-btn"
                    aria-label="Call (469) 360-5805"
                  >
                    <PhoneCall size={18} />
                    <div className="about-hpb-text">
                      <span className="about-hpb-label">Give us a call</span>
                      <span className="about-hpb-number">(469) 360-5805</span>
                    </div>
                  </a>

                  <a
                    href="mailto:support@arssconstruction.com"
                    className="about-help-email-btn"
                    aria-label="Email support@arssconstruction.com"
                  >
                    <Mail size={18} />
                    <div className="about-hpb-text">
                      <span className="about-hpb-label">Leave a message</span>
                      <span className="about-hpb-number">support@arssconstruction.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Location & Guarantee Box */}
              <div className="about-help-side">
                <div className="about-side-box">
                  <div className="about-side-icon-box">
                    <MapPin size={22} />
                  </div>
                  <h3 className="about-side-title">Dallas, Texas</h3>
                  <p className="about-side-desc">
                    Serving Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, and all surrounding North Texas communities.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Dallas,+Texas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-side-map-btn"
                  >
                    <span>View Coverage Map</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="about-side-hours">
                  <div className="about-sh-item">
                    <Clock size={16} className="text-amber-500" />
                    <span><strong>Emergency Service:</strong> 24/7 Round the Clock</span>
                  </div>
                  <div className="about-sh-item">
                    <ShieldCheck size={16} className="text-green-500" />
                    <span><strong>Free On-Site Evaluations</strong> Available</span>
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

export default AboutPage;

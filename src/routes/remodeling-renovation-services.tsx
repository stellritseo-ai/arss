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
  Bath,
  ChefHat,
  Home as HomeIcon,
  Palette,
  Star,
  BadgeCheck,
  Calendar,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

import gal3Img from "../assets/gal3.jpg";
import gal5Img from "../assets/gal5.jpg";
import gal6Img from "../assets/gal6.jpg";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/remodeling-renovation-services")({
  component: RemodelingRenovationServicesPage,
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

function RemodelingRenovationServicesPage() {
  const remodelingReviews = [
    {
      author: "Joy Daniels",
      initials: "JD",
      avatarColor: "#7c3aed",
      location: "Preston Hollow, Dallas TX",
      role: "Verified Client • Local Guide",
      title: "Master tile, framing, and custom cabinetry",
      quote:
        "Friendly, professional, and very thorough. Had a few questions about custom layouts and they answered every one. The crew delivered top-tier tile, framing, and custom cabinetry. If you are looking for premier kitchen and bath remodeling, ARSS is the real deal.",
    },
    {
      author: "Elena & Marcus Vance",
      initials: "MV",
      avatarColor: "#d97706",
      location: "Plano, TX",
      role: "Verified Homeowner",
      title: "Our complete whole-home renovation was flawless",
      quote:
        "We hired ARSS for a full-home architectural transformation. The open concept living space and custom kitchen work exceeded our expectations. The attention to detail and daily jobsite cleanliness was exceptional.",
    },
    {
      author: "Henrik T. Andersen",
      initials: "HA",
      avatarColor: "#0d9488",
      location: "Highland Park, Dallas TX",
      role: "Verified Client • Local Guide",
      title: "Kitchen and living area look better than day one",
      quote:
        "Honest, prompt, and exceptional craftsmanship. ARSS completely renewed our kitchen and living space. No hidden fees or surprises, and the superintendent was on-site every day ensuring total perfection.",
    },
  ];

  return (
    <div className="arss-exact-page rem-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="rem-hero-section">
        <div
          className="rem-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="rem-hero-overlay" aria-hidden="true" />

        <div className="rem-hero-container">
          {/* Breadcrumb */}
          <nav className="rem-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="rem-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="rem-breadcrumb-sep" />
            <span className="rem-breadcrumb-current">
              Remodeling &amp; Renovation Services
            </span>
          </nav>

          <div className="rem-hero-kicker">
            <span className="rem-hero-kicker-dot" />
            <span>TEXAS MASTER HOME SOLUTIONS &amp; ARCHITECTURAL REMODELING</span>
          </div>

          <h1 className="rem-hero-title">
            Remodeling &amp; Renovation Services
          </h1>
          <p className="rem-hero-subtitle">
            Transforming Your Dreams Into Reality With Our Best Home Solutions. From custom luxury kitchens and spa-inspired bathrooms to complete home transformations across North Texas.
          </p>

          <div className="rem-hero-meta-strip">
            <div className="rem-hm-item">
              <Sparkles size={15} className="rem-hm-icon" />
              <span>Turnkey Home Transformations</span>
            </div>
            <div className="rem-hm-sep" />
            <div className="rem-hm-item">
              <ShieldCheck size={15} className="rem-hm-icon" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="rem-hm-sep" />
            <div className="rem-hm-item">
              <MapPin size={15} className="rem-hm-icon" />
              <span>Dallas, Texas Headquarters</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Transforming Your Dreams Into Reality */}
      <section className="rem-story-section">
        <div className="rem-container">
          <div className="rem-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="rem-story-content">
              <div className="rem-section-kicker">
                <span className="rem-kicker-dot" />
                <span>EXPERT HOME CRAFTSMANSHIP</span>
              </div>

              <h2 className="rem-story-heading">
                Transforming Your Dreams Into Reality With Our Best Home Solutions
              </h2>

              <div className="rem-story-text">
                <p>
                  At <strong>ARSS Construction</strong>, we understand that your home is your sanctuary, and we take pride in helping you make it even more beautiful and functional. Whether you want to freshen up just one room or spruce up your entire home, our team of experts is here to make your ideas come to life.
                </p>
                <p>
                  We offer various remodeling and renovation services, from kitchen and bathroom makeovers to complete home transformations. Our experienced designers and artisans work closely with you to create a custom plan that suits your style, needs, and budget. We use only the highest quality materials and the latest industry techniques to ensure lasting results that you’ll love.
                </p>
                <p>
                  When you choose ARSS Construction, you’re choosing a partner dedicated to delivering expert craftsmanship, timely project completion, and exceptional customer service. Your satisfaction comes first, and we promise to go above and beyond to make sure you’re delighted at every stage. Transform your living space with ARSS Construction today. Contact us for a consultation, and let’s bring your dream home to life!
                </p>
              </div>

              {/* Action Button: Book Now */}
              <div className="rem-story-actions">
                <a href="/request-inspection" className="rem-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="rem-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Three Quality Guarantee Pills */}
              <div className="rem-guarantee-row">
                <div className="rem-guarantee-pill">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>Custom Architectural Plans</span>
                </div>
                <div className="rem-guarantee-pill">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>Premium Grade Materials</span>
                </div>
                <div className="rem-guarantee-pill">
                  <CheckCircle2 size={16} className="text-amber-600" />
                  <span>On-Time Completion</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring gal6.jpg */}
            <div className="rem-story-media">
              <div className="rem-media-frame">
                <img
                  src={gal6Img}
                  alt="Architectural open concept living room with high ceilings and custom beams by ARSS Construction"
                  className="rem-media-img"
                />
                <div className="rem-media-overlay" />

                <div className="rem-floating-badge">
                  <ShieldCheck size={24} className="rem-fb-icon" />
                  <div>
                    <span className="rem-fb-number">15+ Years</span>
                    <span className="rem-fb-label">Texas Master Remodeling</span>
                  </div>
                </div>

                <div className="rem-corner-badge">
                  <span>Turnkey Transformations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Second Narrative: Bringing Back The Beauty Of Your Property! (Kitchen & Bath Details) */}
      <section className="rem-craft-section">
        <div className="rem-container">
          <div className="rem-section-header">
            <div className="rem-section-kicker">
              <span className="rem-kicker-dot" />
              <span>CUSTOM KITCHEN &amp; BATHROOM SOLUTIONS</span>
            </div>
            <h2 className="rem-section-title">
              Bringing Back The Beauty Of Your Property!
            </h2>
            <p className="rem-section-subtitle">
              We assure you that you are in the right place if you are looking for a bathroom upgrade or premier kitchen remodel.
            </p>
          </div>

          <div className="rem-features-grid">
            {/* Feature 1: Bathroom Remodeling */}
            <div className="rem-feature-card">
              <div className="rem-fc-img-box">
                <img
                  src={gal3Img}
                  alt="Spa-inspired master bathroom renovation by ARSS Construction"
                  className="rem-fc-img"
                />
                <div className="rem-fc-badge">
                  <Bath size={14} />
                  <span>Bathroom Upgrades</span>
                </div>
              </div>
              <div className="rem-fc-body">
                <h3 className="rem-fc-title">Luxury Bathroom Upgrades</h3>
                <p className="rem-fc-text">
                  We assure you that you are in the right place if you are looking for a bathroom upgrade. Our expert bathroom remodeling contractor ensures that every job is done accurately to ensure a smooth renovation process. When we interact with our clients, we take their ideas, goals, and financial constraints into account. Our talented workers can precisely renovate your outdated bathroom to create an elegant, practical, and cozy space.
                </p>
                <ul className="rem-fc-list">
                  <li>
                    <CheckCircle2 size={14} className="rem-fc-check" />
                    <span>Curbless walk-in showers &amp; custom tile surround</span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} className="rem-fc-check" />
                    <span>Dual floating vanities &amp; modern quartz countertops</span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} className="rem-fc-check" />
                    <span>Freestanding soaking tubs &amp; designer fixtures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2: Kitchen Remodeling */}
            <div className="rem-feature-card">
              <div className="rem-fc-img-box">
                <img
                  src={gal5Img}
                  alt="Chef kitchen remodeling and custom island installation by ARSS Construction"
                  className="rem-fc-img"
                />
                <div className="rem-fc-badge rem-fc-badge-amber">
                  <ChefHat size={14} />
                  <span>Kitchen Transformations</span>
                </div>
              </div>
              <div className="rem-fc-body">
                <h3 className="rem-fc-title">Premier Kitchen Remodeling</h3>
                <p className="rem-fc-text">
                  For the people who are looking for premier kitchen remodeling and renovation companies, we got you. You can get a brand-new kitchen plan designed by our professionals. Our crew replaces the old countertops, installs new cabinets, and updates the appliances. If you want to update and redesign your kitchen, consider hiring our team for your kitchen remodeling services.
                </p>
                <ul className="rem-fc-list">
                  <li>
                    <CheckCircle2 size={14} className="rem-fc-check" />
                    <span>Waterfall quartz &amp; granite island installations</span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} className="rem-fc-check" />
                    <span>Custom soft-close cabinetry &amp; functional pantries</span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} className="rem-fc-check" />
                    <span>Under-cabinet LED lighting &amp; appliance reconfiguration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Block */}
      <section className="rem-testimonials-section">
        <div className="rem-container">
          <div className="rem-section-header">
            <div className="rem-section-kicker">
              <span className="rem-kicker-dot" />
              <span>CLIENT SATISFACTION</span>
            </div>
            <h2 className="rem-section-title">What Our Homeowners Say</h2>
            <p className="rem-section-subtitle">
              Read verified reviews from North Texas property owners who trusted ARSS Construction with their home remodeling projects.
            </p>
          </div>

          <div className="rem-testimonials-grid">
            {remodelingReviews.map((rev) => (
              <div key={rev.author} className="rem-test-card">
                <div className="rem-tc-top">
                  <div className="rem-tc-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="rem-star-filled" />
                    ))}
                  </div>
                  <div className="rem-tc-badge">
                    <GoogleIcon size={13} />
                    <span>Google Verified</span>
                  </div>
                </div>

                <h3 className="rem-tc-title">“{rev.title}”</h3>
                <p className="rem-tc-quote">{rev.quote}</p>

                <div className="rem-tc-divider" />

                <div className="rem-tc-author-row">
                  <div
                    className="rem-tc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="rem-tc-author-info">
                    <div className="rem-tc-name-row">
                      <span className="rem-tc-name">{rev.author}</span>
                      <BadgeCheck size={14} className="rem-tc-check" />
                    </div>
                    <span className="rem-tc-loc">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Need Help? Callout Block (Exact User Content) */}
      <section className="rem-help-section">
        <div className="rem-container">
          <div className="rem-help-card">
            <div className="rem-help-grid">
              {/* Left Column: Heading, description, and user action buttons */}
              <div className="rem-help-main">
                <div className="rem-help-kicker">
                  <span className="rem-help-kicker-dot" />
                  <span>GET IN TOUCH</span>
                </div>

                <h2 className="rem-help-title">Need Help?</h2>
                <p className="rem-help-desc">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="rem-help-actions">
                  <a
                    href="tel:4693605805"
                    className="rem-help-phone-btn"
                    aria-label="Call (469) 360-5805"
                  >
                    <PhoneCall size={18} />
                    <div className="rem-hpb-text">
                      <span className="rem-hpb-label">Give us a call</span>
                      <span className="rem-hpb-number">(469) 360-5805</span>
                    </div>
                  </a>

                  <a
                    href="mailto:info@arss-construction.com"
                    className="rem-help-email-btn"
                    aria-label="Email info@arss-construction.com"
                  >
                    <Mail size={18} />
                    <div className="rem-hpb-text">
                      <span className="rem-hpb-label">Leave a message</span>
                      <span className="rem-hpb-number">
                        info@arss-construction.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Location & Guarantee Box */}
              <div className="rem-help-side">
                <div className="rem-side-box">
                  <div className="rem-side-icon-box">
                    <MapPin size={22} />
                  </div>
                  <h3 className="rem-side-title">Dallas, Texas</h3>
                  <p className="rem-side-desc">
                    Serving Dallas, Fort Worth, Plano, Frisco, Highland Park, Preston Hollow, and all surrounding North Texas communities.
                  </p>
                  <a
                    href="/request-inspection"
                    className="rem-side-book-btn"
                  >
                    <span>Schedule Free On-Site Consultation</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="rem-side-hours">
                  <div className="rem-sh-item">
                    <Clock size={16} className="text-amber-500" />
                    <span><strong>Operating Hours:</strong> Mon-Fri 8am-6pm • Sat-Sun 8am-12pm</span>
                  </div>
                  <div className="rem-sh-item">
                    <ShieldCheck size={16} className="text-green-500" />
                    <span><strong>100% Satisfaction Guarantee</strong> On All Labor</span>
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

export default RemodelingRenovationServicesPage;


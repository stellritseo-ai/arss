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
  Flame,
  FileText,
  Wrench,
  Zap,
  Star,
  BadgeCheck,
  Calendar,
  AlertTriangle,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

import fireHeroImg from "../assets/gallery/fire.jpg";
import fireRestorationImg from "../assets/gallery/fire-damage-restoration-services.jpg";
import fireInspectImg from "../assets/gallery/Depositphotos_11106229_l-2015.jpg";
import fireCleanupImg from "../assets/gallery/iStock-1133151524-1-1536x1024-1.jpg";
import fireSplashImg from "../assets/gallery/splash.jpg";
import fireExtinguisherImg from "../assets/gallery/What-You-Need-to-Know-About-Water-Fire-Extinguishers-500x383@2x.jpg";

export const Route = createFileRoute("/fire-damage-services")({
  component: FireDamageServicesPage,
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

function FireDamageServicesPage() {
  const fireReviews = [
    {
      author: "David Sterling",
      initials: "DS",
      avatarColor: "#059669",
      location: "Downtown Dallas, TX",
      role: "Commercial Property Manager",
      title: "On-site in 45 minutes and delivered on schedule",
      quote:
        "When our commercial executive suite suffered smoke and fire damage, ARSS was on site in 45 minutes. They coordinated metal studs, fire-rated drywall, paint, and ceiling grid work flawlessly while keeping the rest of our tenant wing operating safely.",
    },
    {
      author: "Andrew Robinson",
      initials: "AR",
      avatarColor: "#ea580c",
      location: "Arlington, TX",
      role: "Verified Client",
      title: "Stop looking and just call ARSS Construction",
      quote:
        "If you need emergency fire restoration in Dallas-Fort Worth, stop looking and just call ARSS Construction. The project manager came out immediately, documented everything for our insurance adjuster, and rebuilt our framing with perfection.",
    },
    {
      author: "Henrik T. Andersen",
      initials: "HA",
      avatarColor: "#0d9488",
      location: "Highland Park, Dallas TX",
      role: "Verified Homeowner • Local Guide",
      title: "Prompt, honest, and exceptional restoration",
      quote:
        "Honest, prompt, and exceptional craftsmanship. ARSS restored our property after soot and water damage and it looks better than the day we bought the house. No hidden fees or surprises.",
    },
  ];

  return (
    <div className="arss-exact-page fire-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="fire-hero-section">
        <div
          className="fire-hero-bg"
          style={{ backgroundImage: `url(${fireHeroImg})` }}
          aria-hidden="true"
        />
        <div className="fire-hero-overlay" aria-hidden="true" />

        <div className="fire-hero-container">
          {/* Breadcrumb */}
          <nav className="fire-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="fire-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="fire-breadcrumb-sep" />
            <span className="fire-breadcrumb-current">Fire Damage Services</span>
          </nav>

          <div className="fire-hero-kicker">
            <span className="fire-hero-kicker-dot" />
            <span>TEXAS 24/7 RAPID EMERGENCY RESTORATION</span>
          </div>

          <h1 className="fire-hero-title">Fire Damage Services</h1>
          <p className="fire-hero-subtitle">
            Get The Expert Fire Damage Restoration Services in TX. When disaster strikes and fire wreaks havoc on your property, we understand the urgency of restoring your space to its former glory.
          </p>

          <div className="fire-hero-meta-strip">
            <div className="fire-hm-item">
              <Clock size={15} className="fire-hm-icon" />
              <span>&lt; 60-Minute Emergency Arrival</span>
            </div>
            <div className="fire-hm-sep" />
            <div className="fire-hm-item">
              <ShieldCheck size={15} className="fire-hm-icon" />
              <span>Direct Insurance Claim Assistance</span>
            </div>
            <div className="fire-hm-sep" />
            <div className="fire-hm-item">
              <MapPin size={15} className="fire-hm-icon" />
              <span>Dallas Headquarters • Serving All Texas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Get The Expert Fire Damage Restoration Services in TX */}
      <section className="fire-story-section">
        <div className="fire-container">
          <div className="fire-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="fire-story-content">
              <div className="fire-section-kicker">
                <span className="fire-kicker-dot" />
                <span>RAPID DISASTER RECOVERY</span>
              </div>

              <h2 className="fire-story-heading">
                Get The Expert Fire Damage Restoration Services in TX
              </h2>

              <div className="fire-story-text">
                <p>
                  When disaster strikes and fire wreaks havoc on your property, we understand the urgency of restoring your space to its former glory. With years of expertise in fire damage restoration, we are committed to providing prompt, reliable, and comprehensive services to help you rebuild and recover. Our skilled team of professionals is equipped with the latest technology and techniques to assess the damage, remove debris, and restore your property to its pre-fire condition.
                </p>
                <p>
                  At <strong>ARSS Construction</strong>, we prioritize safety, efficiency, and quality craftsmanship. We work closely with you and your insurance company to ensure a seamless and hassle-free restoration process. Our dedication to customer satisfaction has made us a trusted choice in fire damage repair. Whether residential or commercial, our mission is to bring hope and renewal to your life by turning devastation into restoration. Choose ARSS Construction for peace of mind during challenging times. Contact us today, and let us help you rebuild your future.
                </p>
                <p>
                  We immediately start removing waste and residue from the affected area. Our team of professionals uses the latest instruments and methods to restore your property to its previous look. Our qualified experts restore burned furniture, fix damaged areas of your space, and replace and repair the plumbing and electrical systems. Being a professional fire damage repair company our focus is to provide our clients the best service possible.
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="fire-story-actions">
                <a href="/request-inspection" className="fire-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="fire-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="fire-guarantee-row">
                <div className="fire-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Debris &amp; Residue Removal</span>
                </div>
                <div className="fire-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Structural &amp; Framing Repair</span>
                </div>
                <div className="fire-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Plumbing &amp; Electrical Rebuild</span>
                </div>
                <div className="fire-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Direct Insurance Documentation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring fire-damage-restoration-services.jpg */}
            <div className="fire-story-media">
              <div className="fire-media-frame">
                <img
                  src={fireRestorationImg}
                  alt="Professional fire damage mitigation and structural rebuild by ARSS Construction"
                  className="fire-media-img"
                />
                <div className="fire-media-overlay" />

                <div className="fire-floating-badge">
                  <Clock size={24} className="fire-fb-icon" />
                  <div>
                    <span className="fire-fb-number">24/7 Rapid Response</span>
                    <span className="fire-fb-label">On-Site in &lt; 60 Minutes</span>
                  </div>
                </div>

                <div className="fire-corner-badge">
                  <span>Emergency Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Hire The Exceptional Restoration Team! */}
      <section className="fire-team-section">
        <div className="fire-container">
          <div className="fire-section-header">
            <div className="fire-section-kicker">
              <span className="fire-kicker-dot" />
              <span>PRECISION PROTOCOLS &amp; INSURANCE DOCUMENTATION</span>
            </div>
            <h2 className="fire-section-title">
              Hire The Exceptional Restoration Team!
            </h2>
            <p className="fire-section-lead-text">
              In case of fire damage, our Expert fire damage cleanup contractor conducts a thorough inspection to evaluate the affected area. The extent of fire damage and the cause of the fire are noted down throughout the assessment. We immediately start removing waste and residue from the affected area. Our team of professionals uses the latest instruments and methods to restore your property to its previous look. Our qualified experts restore burned furniture, fix damaged areas of your space, and replace and repair the plumbing and electrical systems. Being a professional fire damage repair company our focus is to provide our clients the best service possible. To assist our customer in claiming their insurance, the entire procedure is documented. Our restoration plan also includes providing an in-depth knowledge of fire prevention once the restoration is completed. We advise our clients to keep a check on all of the fire sources and possible leaks. Contact our experts in case of fire-related emergencies in Texas.
            </p>
          </div>

          {/* 4 Feature Visual Cards using requested images */}
          <div className="fire-cards-grid">
            {/* Card 1: Depositphotos_11106229_l-2015.jpg */}
            <div className="fire-card-item">
              <div className="fire-ci-img-wrap">
                <img
                  src={fireInspectImg}
                  alt="Thorough inspection of fire and structural damage"
                  className="fire-ci-img"
                />
                <div className="fire-ci-badge">
                  <span>Phase 01</span>
                </div>
              </div>
              <div className="fire-ci-body">
                <h3 className="fire-ci-title">Thorough Inspection &amp; Damage Evaluation</h3>
                <p className="fire-ci-desc">
                  Our certified restoration contractors conduct comprehensive laser and structural assessments to map the extent of damage and document everything for your insurance claim.
                </p>
                <div className="fire-ci-check-item">
                  <CheckCircle2 size={15} />
                  <span>Cause &amp; origin structural verification</span>
                </div>
              </div>
            </div>

            {/* Card 2: iStock-1133151524-1-1536x1024-1.jpg */}
            <div className="fire-card-item">
              <div className="fire-ci-img-wrap">
                <img
                  src={fireCleanupImg}
                  alt="Soot removal and fire cleanup crew in action"
                  className="fire-ci-img"
                />
                <div className="fire-ci-badge fire-ci-badge-amber">
                  <span>Phase 02</span>
                </div>
              </div>
              <div className="fire-ci-body">
                <h3 className="fire-ci-title">Waste, Residue &amp; Soot Removal</h3>
                <p className="fire-ci-desc">
                  We immediately start removing charred debris, corrosive soot, and smoke residue using industrial HEPA air scrubbers and thermal fogging technologies.
                </p>
                <div className="fire-ci-check-item">
                  <CheckCircle2 size={15} />
                  <span>Odor neutralization &amp; decontamination</span>
                </div>
              </div>
            </div>

            {/* Card 3: splash.jpg */}
            <div className="fire-card-item">
              <div className="fire-ci-img-wrap">
                <img
                  src={fireSplashImg}
                  alt="Water extraction following firefighting efforts"
                  className="fire-ci-img"
                />
                <div className="fire-ci-badge fire-ci-badge-blue">
                  <span>Phase 03</span>
                </div>
              </div>
              <div className="fire-ci-body">
                <h3 className="fire-ci-title">Firefighting Water Extraction &amp; Drying</h3>
                <p className="fire-ci-desc">
                  Extinguishing fires leaves massive water pools. We deploy commercial submersible pumps and desiccant dehumidifiers to prevent mold and rot.
                </p>
                <div className="fire-ci-check-item">
                  <CheckCircle2 size={15} />
                  <span>Rapid structural drying &amp; moisture checks</span>
                </div>
              </div>
            </div>

            {/* Card 4: What-You-Need-to-Know-About-Water-Fire-Extinguishers-500x383@2x.jpg */}
            <div className="fire-card-item">
              <div className="fire-ci-img-wrap">
                <img
                  src={fireExtinguisherImg}
                  alt="Fire prevention education and safety inspection"
                  className="fire-ci-img"
                />
                <div className="fire-ci-badge fire-ci-badge-green">
                  <span>Phase 04</span>
                </div>
              </div>
              <div className="fire-ci-body">
                <h3 className="fire-ci-title">Reconstruction &amp; Fire Prevention</h3>
                <p className="fire-ci-desc">
                  Full structural rebuild including plumbing, electrical, and finish-out, paired with customized fire prevention guidance and leak inspection for complete safety.
                </p>
                <div className="fire-ci-check-item">
                  <CheckCircle2 size={15} />
                  <span>100% Code-compliant turnkey handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Block */}
      <section className="fire-testimonials-section">
        <div className="fire-container">
          <div className="fire-section-header">
            <div className="fire-section-kicker">
              <span className="fire-kicker-dot" />
              <span>PROVEN DISASTER RECOVERY</span>
            </div>
            <h2 className="fire-section-title">Verified Restoration Testimonials</h2>
            <p className="fire-section-subtitle">
              Read how ARSS Construction turned devastation into renewal for Texas property managers and homeowners.
            </p>
          </div>

          <div className="fire-testimonials-grid">
            {fireReviews.map((rev) => (
              <div key={rev.author} className="fire-test-card">
                <div className="fire-tc-top">
                  <div className="fire-tc-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fire-star-filled" />
                    ))}
                  </div>
                  <div className="fire-tc-badge">
                    <GoogleIcon size={13} />
                    <span>Google Verified</span>
                  </div>
                </div>

                <h3 className="fire-tc-title">“{rev.title}”</h3>
                <p className="fire-tc-quote">{rev.quote}</p>

                <div className="fire-tc-divider" />

                <div className="fire-tc-author-row">
                  <div
                    className="fire-tc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="fire-tc-author-info">
                    <div className="fire-tc-name-row">
                      <span className="fire-tc-name">{rev.author}</span>
                      <BadgeCheck size={14} className="fire-tc-check" />
                    </div>
                    <span className="fire-tc-loc">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Need Help? Callout Block (Exact User Layout) */}
      <section className="fire-help-section">
        <div className="fire-container">
          <div className="fire-help-card">
            <div className="fire-help-grid">
              {/* Left Column: Heading, description, and user action buttons */}
              <div className="fire-help-main">
                <div className="fire-help-kicker">
                  <span className="fire-help-kicker-dot" />
                  <span>GET IN TOUCH</span>
                </div>

                <h2 className="fire-help-title">Need Help?</h2>
                <p className="fire-help-desc">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="fire-help-actions">
                  <a
                    href="tel:4693605805"
                    className="fire-help-phone-btn"
                    aria-label="Call (469) 360-5805"
                  >
                    <PhoneCall size={18} />
                    <div className="fire-hpb-text">
                      <span className="fire-hpb-label">Give us a call</span>
                      <span className="fire-hpb-number">(469) 360-5805</span>
                    </div>
                  </a>

                  <a
                    href="mailto:support@arssconstruction.com"
                    className="fire-help-email-btn"
                    aria-label="Email support@arssconstruction.com"
                  >
                    <Mail size={18} />
                    <div className="fire-hpb-text">
                      <span className="fire-hpb-label">Leave a message</span>
                      <span className="fire-hpb-number">
                        support@arssconstruction.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Location & Guarantee Box */}
              <div className="fire-help-side">
                <div className="fire-side-box">
                  <div className="fire-side-icon-box">
                    <MapPin size={22} />
                  </div>
                  <h3 className="fire-side-title">Dallas, Texas</h3>
                  <p className="fire-side-desc">
                    Active 24/7 emergency dispatch servicing Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, and all surrounding North Texas communities.
                  </p>
                  <a
                    href="/request-inspection"
                    className="fire-side-book-btn"
                  >
                    <span>Request Emergency On-Site Dispatch</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="fire-side-hours">
                  <div className="fire-sh-item">
                    <Clock size={16} className="text-amber-500" />
                    <span><strong>Emergency Response:</strong> 24 Hours / 365 Days</span>
                  </div>
                  <div className="fire-sh-item">
                    <ShieldCheck size={16} className="text-green-500" />
                    <span><strong>Insurance Assistance:</strong> Direct Adjuster Coordination</span>
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

export default FireDamageServicesPage;


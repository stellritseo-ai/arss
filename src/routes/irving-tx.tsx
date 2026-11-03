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
  Droplets,
  Hammer,
  Layers,
  Calendar,
  Star,
  BadgeCheck,
  Compass,
  AlertTriangle,
  Biohazard,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Gallery images from src/assets/gallery/
import heroLivingImg from "../assets/gallery/Fireplace-Sofas-Living-Room-Beams-High-Ceiling-Mid-Century-House-Lincoln-Massachusetts.jpg";
import portfolioShowcaseImg from "../assets/gallery/portfolio-5-1.jpg";
import waterSplashImg from "../assets/gallery/splash.jpg";
import fireRepairImg from "../assets/gallery/fire-damage-restoration-services.jpg";
import moldServicesImg from "../assets/gallery/black-Mold-services.jpg";
import kitchenRemodelImg from "../assets/gallery/1678008072_en-idei-club-p-home-remodeling-dizain-28.jpg";

export const Route = createFileRoute("/irving-tx")({
  component: IrvingTxPage,
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

function IrvingTxPage() {
  const irvingReviews = [
    {
      author: "Samantha Wright",
      initials: "SW",
      avatarColor: "#0284c7",
      location: "Las Colinas, Irving TX",
      role: "Verified Homeowner",
      title: "Saved our luxury townhome after a plumbing pipe burst",
      quote:
        "When our second-floor plumbing failed while we were away, water had soaked the ceilings and hardwood floors. ARSS arrived at our Las Colinas home within 35 minutes, set up commercial dehumidifiers, and rebuilt our ceilings and custom kitchen flawlessly. Unbelievable response time!",
    },
    {
      author: "Derrick Chen",
      initials: "DC",
      avatarColor: "#059669",
      location: "Valley Ranch, Irving TX",
      role: "Homeowner",
      title: "Complete master bath and kitchen overhaul with zero stress",
      quote:
        "ARSS transformed our 1990s Valley Ranch home into an open-concept dream space. From quartz waterfall countertops to the custom frameless glass shower, every detail is stunning. They handled all permits, scheduling, and stayed right on budget.",
    },
    {
      author: "Patrick O'Connor",
      initials: "PO",
      avatarColor: "#d97706",
      location: "Heritage District, Irving TX",
      role: "Commercial Property Manager",
      title: "The standard for emergency restoration in Central DFW",
      quote:
        "As a facility manager overseeing executive suites near DFW Airport, ARSS is our first call for water leaks and structural repairs. Honest estimates, seamless insurance documentation, and elite craftsmanship.",
    },
  ];

  const irvingNeighborhoods = [
    { name: "Las Colinas Urban Center & Lake Carolyn", zip: "75038 / 75039" },
    { name: "Valley Ranch & Campion Trail", zip: "75063" },
    { name: "Historic Heritage District & Downtown", zip: "75060" },
    { name: "Irving Arts Center & Hospital District", zip: "75062" },
    { name: "DFW International Airport Corridor", zip: "75261 / 75063" },
    { name: "South Irving & Bear Creek", zip: "75060 / 75061" },
  ];

  return (
    <div className="arss-exact-page irving-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="irv-hero-section">
        <div
          className="irv-hero-bg"
          style={{ backgroundImage: `url(${heroLivingImg})` }}
          aria-hidden="true"
        />
        <div className="irv-hero-overlay" aria-hidden="true" />

        <div className="irv-hero-container">
          {/* Breadcrumb */}
          <nav className="irv-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="irv-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="irv-breadcrumb-sep" />
            <span className="irv-breadcrumb-current">
              Water and Fire Damage Repair &amp; Home Remodeling in Irving TX
            </span>
          </nav>

          <div className="irv-hero-kicker">
            <span className="irv-hero-kicker-dot" />
            <span>IRVING, TX • LAS COLINAS &amp; DFW AIRPORT CORRIDOR</span>
          </div>

          <h1 className="irv-hero-title">
            Water &amp; Fire Damage Repair &amp; Home Remodeling in Irving TX
          </h1>
          <p className="irv-hero-subtitle">
            Best Home Remodeling and Renovation in Irving TX. Turn your house into your dream home with Texas's trusted restoration specialists and turnkey renovation contractors.
          </p>

          <div className="irv-hero-meta-strip">
            <div className="irv-hm-item">
              <Clock size={15} className="irv-hm-icon" />
              <span>&lt; 45-Minute Emergency Response in Irving</span>
            </div>
            <div className="irv-hm-sep" />
            <div className="irv-hm-item">
              <ShieldCheck size={15} className="irv-hm-icon" />
              <span>Licensed, Bonded &amp; Insured Texas Pro</span>
            </div>
            <div className="irv-hm-sep" />
            <div className="irv-hm-item">
              <MapPin size={15} className="irv-hm-icon" />
              <span>Serving Las Colinas, Valley Ranch &amp; All Irving</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Best Home Remodeling and Renovation in Irving TX */}
      <section className="irv-story-section">
        <div className="irv-container">
          <div className="irv-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="irv-story-content">
              <div className="irv-section-kicker">
                <span className="irv-kicker-dot" />
                <span>LOCAL IRVING EXPERTISE &amp; RESTORATION</span>
              </div>

              <h2 className="irv-story-heading">
                Best Home Remodeling and Renovation in Irving TX
              </h2>
              <div className="irv-story-subheading">
                Turn your house into your dream home!
              </div>

              <div className="irv-story-text">
                <p>
                  When you observe water stains, sagging or bulging walls, and a musty or moldy smell, then these are the indications that your home has water damage. You must take care of this issue as soon as possible or the situation can get worse and cause severe structural damage to your home. We provide our customers with the best water damage repair services in Plano TX. Our team will inspect your property completely to find out all the hidden and visible damage and will take care of it with effectiveness. Give us a call and our team will get you started without any further delay!
                </p>
                <p>
                  The restoration process is a bit difficult. At <strong>ARSS Construction</strong>, we understand that you love your property. You have created tons of memories in that space, and you would want it to be back in its original shape and form. This is why you need to rely on our best water and fire damage restoration contractor in Irving, TX. We know all the tricks that are needed to give you your original property back.
                </p>
                <p>
                  Deciding whether or not you want to remodel and renovate your home is a big decision. There are many reasons that you may want to go for but it all comes down to two things; the functional needs or to improve the aesthetics of your space. On the functional side, professional home remodeling services in Irving TX are necessary to address different issues. Outdated plumbing, electrical systems, or an aging HVAC system can all pose safety risks and lead to higher utility bills. Remodeling your home is necessary to ensure safety and efficiency. Safety hazards like cracked foundations, damaged roofs, or faulty wiring should be addressed immediately through renovations to create a secure living environment.
                </p>
                <p>
                  Beyond functionality, trusted residential &amp; commercial restoration experts can help you in improving the curb appeal of your space. Are your kitchen cabinets falling apart? Or do you think that your bathroom needs to be more modern and aesthetically pleasing? Renovating your space can give a new life to it making it more comfortable and stylish.
                </p>
                <p>
                  Our expert home renovation contractor in Irving TX can help you redesign the property with enhanced functionality and beauty. We are familiar with all the latest and ongoing trends so you can relax and let us do our magic. Renovation projects involve various aspects from plumbing to structural design. We have the knowledge to tackle all of this accurately.
                </p>
                <p>
                  We will guide you through the whole process, from initial planning and design to material selection and project completion. Our experienced staff will manage the project schedule, coordinate with subcontractors, and ensure everything stays on track, saving you valuable time and stress. When you’re choosing us for renovation in Irving, TX, expect us to deliver high-quality results that can exceed your expectations. We guarantee you that our finished end results will be enchanting, and glamorous, and will last for years to come.
                </p>
                <p>
                  Our premier home remodeling and renovation company can significantly increase the value of your home making it a charm whenever you decide to sell it in the future. Give us a quick call right away!
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="irv-story-actions">
                <a href="/request-inspection" className="irv-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="irv-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="irv-guarantee-row">
                <div className="irv-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Rapid Water &amp; Fire Mitigation</span>
                </div>
                <div className="irv-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Custom Kitchen &amp; Bath Remodels</span>
                </div>
                <div className="irv-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Structural &amp; Safety Code Repairs</span>
                </div>
                <div className="irv-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Dedicated Irving Project Manager</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring portfolioShowcaseImg */}
            <div className="irv-story-media">
              <div className="irv-media-frame">
                <img
                  src={portfolioShowcaseImg}
                  alt="Luxury home remodeling, kitchen and master suite renovation in Irving TX by ARSS Construction"
                  className="irv-media-img"
                />
                <div className="irv-media-overlay" />

                <div className="irv-floating-badge">
                  <Sparkles size={26} className="irv-fb-icon" />
                  <div>
                    <span className="irv-fb-number">Complete Property Transformation</span>
                    <span className="irv-fb-label">High-Value, Glamorous &amp; Long-Lasting</span>
                  </div>
                </div>

                <div className="irv-corner-badge">
                  <span>Irving, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Irving Services Grid */}
      <section className="irv-services-section">
        <div className="irv-container">
          <div className="irv-section-header">
            <div className="irv-section-kicker">
              <span className="irv-kicker-dot" />
              <span>FULL-SPECTRUM PROPERTY SOLUTIONS</span>
            </div>
            <h2 className="irv-section-title">
              Complete Restoration &amp; Remodeling in Irving, TX
            </h2>
            <p className="irv-section-lead-text">
              From emergency water and fire recovery to luxury interior remodeling, ARSS is Irving’s single-source contractor for safety, value, and lasting beauty.
            </p>
          </div>

          <div className="irv-cards-grid">
            {/* Card 1: Emergency Water Damage Restoration */}
            <div className="irv-service-card">
              <div className="irv-card-img-wrap">
                <img
                  src={waterSplashImg}
                  alt="Emergency Water Damage Restoration Services in Irving TX"
                  className="irv-card-img"
                />
                <div className="irv-card-tag irv-tag-blue">
                  <Droplets size={13} />
                  <span>24/7 Water Extraction</span>
                </div>
              </div>
              <div className="irv-card-body">
                <h3 className="irv-card-title">Water Damage Repair</h3>
                <p className="irv-card-desc">
                  Thorough inspection for visible and hidden water damage, rapid structural drying, and drywall/flooring reconstruction across Irving properties.
                </p>
                <ul className="irv-card-bullets">
                  <li>Thermal infrared moisture mapping</li>
                  <li>Industrial dehumidification &amp; water extraction</li>
                  <li>Direct insurance billing assistance</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Fire & Smoke Damage Restoration */}
            <div className="irv-service-card">
              <div className="irv-card-img-wrap">
                <img
                  src={fireRepairImg}
                  alt="Fire Damage Restoration Services in Irving TX"
                  className="irv-card-img"
                />
                <div className="irv-card-tag irv-tag-orange">
                  <Flame size={13} />
                  <span>Soot &amp; Smoke Rebuild</span>
                </div>
              </div>
              <div className="irv-card-body">
                <h3 className="irv-card-title">Fire Damage Repair</h3>
                <p className="irv-card-desc">
                  Comprehensive fire damage recovery, toxic residue scrub-down, smoke odor elimination, and structural framing repairs to return your space to original shape.
                </p>
                <ul className="irv-card-bullets">
                  <li>Debris removal &amp; air purification</li>
                  <li>Structural carpentry &amp; electrical rewiring</li>
                  <li>Complete insurance documentation</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Mold Remediation & Structural Safety */}
            <div className="irv-service-card">
              <div className="irv-card-img-wrap">
                <img
                  src={moldServicesImg}
                  alt="Toxic Mold Remediation Services in Irving TX"
                  className="irv-card-img"
                />
                <div className="irv-card-tag irv-tag-green">
                  <Biohazard size={13} />
                  <span>Certified Remediation</span>
                </div>
              </div>
              <div className="irv-card-body">
                <h3 className="irv-card-title">Mold Remediation &amp; Safety</h3>
                <p className="irv-card-desc">
                  Musty odors and hidden wall spores are remediated with containment barriers and antimicrobial sterilization, protecting family health and building integrity.
                </p>
                <ul className="irv-card-bullets">
                  <li>HEPA air filtration &amp; negative pressure</li>
                  <li>Antimicrobial deep cleaning &amp; sanitization</li>
                  <li>Drywall, insulation &amp; vapor barrier rebuild</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Custom Kitchen & Home Remodeling */}
            <div className="irv-service-card">
              <div className="irv-card-img-wrap">
                <img
                  src={kitchenRemodelImg}
                  alt="Custom Kitchen and Home Remodeling in Irving TX"
                  className="irv-card-img"
                />
                <div className="irv-card-tag irv-tag-amber">
                  <Hammer size={13} />
                  <span>Dream Remodel</span>
                </div>
              </div>
              <div className="irv-card-body">
                <h3 className="irv-card-title">Kitchen &amp; Home Remodel</h3>
                <p className="irv-card-desc">
                  Redesign your kitchen, bathrooms, and living spaces with modern elegance and enhanced functionality. We handle plumbing, custom cabinetry, quartz, and luxury flooring.
                </p>
                <ul className="irv-card-bullets">
                  <li>Open-concept layout conversions</li>
                  <li>Custom millwork, cabinets &amp; modern islands</li>
                  <li>Substantially boosts home market resale value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Irving Neighborhoods & Coverage */}
      <section className="irv-coverage-section">
        <div className="irv-container">
          <div className="irv-coverage-card">
            <div className="irv-coverage-content">
              <div className="irv-section-kicker">
                <span className="irv-kicker-dot" />
                <span>LOCAL DFW COVERAGE</span>
              </div>
              <h2 className="irv-coverage-title">
                Serving All Irving, Las Colinas &amp; DFW Corridor
              </h2>
              <p className="irv-coverage-desc">
                Our rapid-response restoration units and remodeling teams are stationed across Irving for rapid, reliable service.
              </p>

              <div className="irv-hoods-grid">
                {irvingNeighborhoods.map((hood, idx) => (
                  <div key={idx} className="irv-hood-item">
                    <Compass size={16} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <span className="irv-hood-name">{hood.name}</span>
                      <span className="irv-hood-zip">({hood.zip})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="irv-coverage-stat-col">
              <div className="irv-stat-box">
                <span className="irv-sb-num">&lt; 45 min</span>
                <span className="irv-sb-label">Irving Emergency Response</span>
              </div>
              <div className="irv-stat-box">
                <span className="irv-sb-num">100%</span>
                <span className="irv-sb-label">Satisfaction Guarantee</span>
              </div>
              <div className="irv-stat-box">
                <span className="irv-sb-num">15+ Yrs</span>
                <span className="irv-sb-label">Texas Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews & Testimonials */}
      <section className="irv-reviews-section">
        <div className="irv-container">
          <div className="irv-section-header">
            <div className="irv-section-kicker">
              <span className="irv-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="irv-section-title">
              What Irving Clients Say About ARSS
            </h2>
            <div className="irv-google-badge">
              <GoogleIcon size={20} />
              <div className="irv-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="irv-gb-score">5.0 Star Rated on Google</span>
              <span className="irv-gb-verified">• Verified Irving, TX Client Reviews</span>
            </div>
          </div>

          <div className="irv-reviews-grid">
            {irvingReviews.map((rev, idx) => (
              <div key={idx} className="irv-review-card">
                <div className="irv-rc-header">
                  <div
                    className="irv-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="irv-rc-author-info">
                    <div className="irv-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="irv-rc-author-meta">{rev.role}</div>
                    <div className="irv-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="irv-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="irv-rc-title">"{rev.title}"</h4>
                <p className="irv-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exact User Callout: Need Help? */}
      <section className="irv-help-section">
        <div className="irv-container">
          <div className="irv-help-card">
            <div className="irv-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="irv-help-info">
                <div className="irv-section-kicker irv-help-kicker">
                  <span className="irv-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="irv-help-title">Need Help?</h3>
                <p className="irv-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="irv-help-contacts">
                  {/* Phone Block */}
                  <div className="irv-contact-block">
                    <div className="irv-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="irv-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="irv-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="irv-contact-block">
                    <div className="irv-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:info@arss-construction.com"
                        className="irv-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:info@arss-construction.com"
                        className="irv-cb-val"
                      >
                        info@arss-construction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="irv-help-actions">
                  <a href="/request-inspection" className="irv-btn-quote">
                    <Calendar size={17} />
                    <span>Get Free Irving Estimate</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="irv-help-sidebar">
                <div className="irv-dispatch-card">
                  <div className="irv-dc-head">
                    <div className="irv-dc-badge">
                      <span className="irv-dc-pulse" />
                      <span>Irving &amp; Las Colinas Dispatch Ready</span>
                    </div>
                  </div>
                  <h4 className="irv-dc-title">Irving, TX Service Hub</h4>
                  <p className="irv-dc-text">
                    Local mobile units stationed for rapid 24/7 disaster recovery and complimentary residential &amp; commercial remodeling consultations.
                  </p>

                  <div className="irv-dc-details">
                    <div className="irv-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Irving &amp; Las Colinas, TX • Dallas County</span>
                    </div>
                    <div className="irv-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Emergency Dispatch: 24/7/365</span>
                    </div>
                    <div className="irv-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Fully Bonded, Insured &amp; Texas Regulated</span>
                    </div>
                  </div>

                  <a href="/contact" className="irv-dc-btn">
                    <span>Contact Irving Office</span>
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


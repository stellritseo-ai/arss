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
  Wrench,
  Palette,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Gallery images from src/assets/gallery/
import heroLivingImg from "../assets/gallery/1679431385_en-idei-club-p-plan-renovation-dizain-krasivo-50.jpg";
import luxuryBasementImg from "../assets/gallery/bigstock-Basement-in-luxury-home-with-b-18131438-2048x1365-1.jpg";
import waterSplashImg from "../assets/gallery/splash.jpg";
import fireRepairImg from "../assets/gallery/fire-damage-restoration-services.jpg";
import kitchenRemodelImg from "../assets/gallery/1678008072_en-idei-club-p-home-remodeling-dizain-28.jpg";
import exteriorRemodelImg from "../assets/gallery/BEST-HOME-IMPROVEMENT-IDEAS-FOR-2022.jpg";

export const Route = createFileRoute("/frisco-tx")({
  component: FriscoTxPage,
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

function FriscoTxPage() {
  const friscoReviews = [
    {
      author: "Harrison Blake",
      initials: "HB",
      avatarColor: "#0284c7",
      location: "Stonebriar, Frisco TX",
      role: "Verified Homeowner",
      title: "Transformed our estate kitchen & basement bar flawlessly",
      quote:
        "We wanted a complete modern overhaul of our kitchen and basement entertainment area in Stonebriar. ARSS exceeded all our expectations. The custom millwork, quartz finishes, and lighting are truly magical. Delivered on schedule and within budget!",
    },
    {
      author: "Madeline Vance",
      initials: "MV",
      avatarColor: "#059669",
      location: "Newman Village, Frisco TX",
      role: "Homeowner",
      title: "Flawless emergency water damage mitigation in Frisco",
      quote:
        "When an upstairs plumbing failure poured through our living room ceiling, ARSS had their emergency crew at our home in 35 minutes. They dried the structure with zero mold, repaired our drywall and custom molding, and worked smoothly with our insurance.",
    },
    {
      author: "Justin Reed",
      initials: "JR",
      avatarColor: "#d97706",
      location: "Phillips Creek Ranch, Frisco TX",
      role: "Homeowner & Architect",
      title: "Ardent passion for excellence and commitment to detail",
      quote:
        "As someone with high architectural standards, I can say ARSS Construction is in a league of their own in North Texas. Their remodelers took our design preferences and executed every detail with surgical accuracy. Highest recommendation!",
    },
  ];

  const friscoNeighborhoods = [
    { name: "Stonebriar & The Country Club", zip: "75034" },
    { name: "Newman Village & Starwood", zip: "75033 / 75034" },
    { name: "Phillips Creek Ranch & Lawler Park", zip: "75034 / 75035" },
    { name: "The Star & Frisco Square District", zip: "75034" },
    { name: "Chapel Creek & Richwoods", zip: "75035" },
    { name: "Frisco Lakes & PGA Frisco District", zip: "75036" },
  ];

  return (
    <div className="arss-exact-page frisco-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="frs-hero-section">
        <div
          className="frs-hero-bg"
          style={{ backgroundImage: `url(${heroLivingImg})` }}
          aria-hidden="true"
        />
        <div className="frs-hero-overlay" aria-hidden="true" />

        <div className="frs-hero-container">
          {/* Breadcrumb */}
          <nav className="frs-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="frs-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="frs-breadcrumb-sep" />
            <span className="frs-breadcrumb-current">
              The Most Seasoned Water And Fire Damage Repair Company in Frisco TX
            </span>
          </nav>

          <div className="frs-hero-kicker">
            <span className="frs-hero-kicker-dot" />
            <span>FRISCO, TX • COLLIN &amp; DENTON COUNTIES</span>
          </div>

          <h1 className="frs-hero-title">
            The Most Seasoned Water And Fire Damage Repair Company in Frisco TX
          </h1>
          <p className="frs-hero-subtitle">
            Premier Home Remodeling and Renovations Company in Frisco TX. Delivering cutting-edge tools, bespoke craftsmanship, and seasoned restoration to create the home of your dreams.
          </p>

          <div className="frs-hero-meta-strip">
            <div className="frs-hm-item">
              <Clock size={15} className="frs-hm-icon" />
              <span>&lt; 45-Minute Emergency Response in Frisco</span>
            </div>
            <div className="frs-hm-sep" />
            <div className="frs-hm-item">
              <ShieldCheck size={15} className="frs-hm-icon" />
              <span>Licensed, Bonded &amp; Insured Texas Pro</span>
            </div>
            <div className="frs-hm-sep" />
            <div className="frs-hm-item">
              <MapPin size={15} className="frs-hm-icon" />
              <span>Serving Stonebriar, Newman Village &amp; All Frisco</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Premier Home Remodeling and Renovations Company in Frisco TX */}
      <section className="frs-story-section">
        <div className="frs-container">
          <div className="frs-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="frs-story-content">
              <div className="frs-section-kicker">
                <span className="frs-kicker-dot" />
                <span>PREMIER FRISCO CRAFTSMANSHIP</span>
              </div>

              <h2 className="frs-story-heading">
                Premier Home Remodeling and Renovations Company in Frisco TX
              </h2>
              <div className="frs-story-subheading">
                Turn your vision of a voguish place into reality.
              </div>

              <div className="frs-story-text">
                <p>
                  After hiring our <strong>Premier Home Remodeling and Renovations Company</strong>, you will be able to put your mind at ease knowing that your home is in professional and magical hands. For your project, we will use cutting-edge tools and equipment to turn your vision of a voguish place into reality. With our workmanship, we will help you create the home of your dreams.
                </p>
                <p>
                  Our mission is to provide the latest design with the finest solutions to maintain your house goals within your budget. On the premises of Frisco TX, we have made our mark in a flash with our ardent passion for excellence and commitment to detail. From your kitchen and bathroom to your basement and exterior, we will remodel each and every part with care and precision.
                </p>
                <p>
                  We will create a detailed plan that will be in compliance with your specific requirements and unique preferences. According to your budget, we will provide you with the most affordable prices without compromising the quality of our services. We will go the extra mile to provide you with an unparalleled remodeling experience.
                </p>
                <p>
                  Our expert remodelers are ready to customize your space to your desired imagination. To book your slots, give us a ring now!
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="frs-story-actions">
                <a href="/request-inspection" className="frs-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="frs-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="frs-guarantee-row">
                <div className="frs-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Cutting-Edge Tools &amp; Equipment</span>
                </div>
                <div className="frs-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Kitchen, Bath, Basement &amp; Exterior</span>
                </div>
                <div className="frs-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Detailed Architectural Custom Plans</span>
                </div>
                <div className="frs-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Unparalleled Remodeling Experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring luxuryBasementImg */}
            <div className="frs-story-media">
              <div className="frs-media-frame">
                <img
                  src={luxuryBasementImg}
                  alt="Premier home remodeling, custom basement and luxury living space in Frisco TX by ARSS Construction"
                  className="frs-media-img"
                />
                <div className="frs-media-overlay" />

                <div className="frs-floating-badge">
                  <Sparkles size={26} className="frs-fb-icon" />
                  <div>
                    <span className="frs-fb-number">Bespoke Estate Remodeling</span>
                    <span className="frs-fb-label">Magical Hands &amp; Cutting-Edge Execution</span>
                  </div>
                </div>

                <div className="frs-corner-badge">
                  <span>Frisco, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Frisco Services Grid */}
      <section className="frs-services-section">
        <div className="frs-container">
          <div className="frs-section-header">
            <div className="frs-section-kicker">
              <span className="frs-kicker-dot" />
              <span>THE MOST SEASONED CONTRACTORS</span>
            </div>
            <h2 className="frs-section-title">
              Complete Restoration &amp; Remodeling in Frisco, TX
            </h2>
            <p className="frs-section-lead-text">
              From emergency water and fire remediation to high-end kitchens, bathrooms, basements, and exteriors, we serve Frisco with passion and precision.
            </p>
          </div>

          <div className="frs-cards-grid">
            {/* Card 1: Seasoned Water Damage Repair */}
            <div className="frs-service-card">
              <div className="frs-card-img-wrap">
                <img
                  src={waterSplashImg}
                  alt="Seasoned Water Damage Repair in Frisco TX"
                  className="frs-card-img"
                />
                <div className="frs-card-tag frs-tag-blue">
                  <Droplets size={13} />
                  <span>24/7 Rapid Extraction</span>
                </div>
              </div>
              <div className="frs-card-body">
                <h3 className="frs-card-title">Water Damage Repair</h3>
                <p className="frs-card-desc">
                  Seasoned water damage mitigation using high-powered thermal imaging, industrial dehumidifiers, and rapid moisture extraction to safeguard your Frisco estate.
                </p>
                <ul className="frs-card-bullets">
                  <li>Thermal infrared leak &amp; moisture detection</li>
                  <li>Structural hardwood &amp; subfloor drying</li>
                  <li>Direct insurance billing &amp; documentation</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Precision Fire Damage Restoration */}
            <div className="frs-service-card">
              <div className="frs-card-img-wrap">
                <img
                  src={fireRepairImg}
                  alt="Fire and Smoke Damage Repair in Frisco TX"
                  className="frs-card-img"
                />
                <div className="frs-card-tag frs-tag-orange">
                  <Flame size={13} />
                  <span>Soot &amp; Odor Elimination</span>
                </div>
              </div>
              <div className="frs-card-body">
                <h3 className="frs-card-title">Fire Damage Repair</h3>
                <p className="frs-card-desc">
                  Comprehensive fire and smoke recovery, structural timber rebuilding, toxic soot washdown, and deep odor neutralization to return your space to perfection.
                </p>
                <ul className="frs-card-bullets">
                  <li>Structural framing repair &amp; sheetrocking</li>
                  <li>Thermal fogging &amp; odor neutralization</li>
                  <li>Complete insurance claim handling</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Designer Kitchen & Bathroom Remodeling */}
            <div className="frs-service-card">
              <div className="frs-card-img-wrap">
                <img
                  src={kitchenRemodelImg}
                  alt="Kitchen and bathroom remodeling in Frisco TX"
                  className="frs-card-img"
                />
                <div className="frs-card-tag frs-tag-amber">
                  <Hammer size={13} />
                  <span>Luxury Interior</span>
                </div>
              </div>
              <div className="frs-card-body">
                <h3 className="frs-card-title">Kitchen &amp; Bath Remodel</h3>
                <p className="frs-card-desc">
                  Turn your kitchen and bathrooms into voguish, functional masterpieces. We design and install custom cabinetry, marble and quartz surfaces, and spa walk-in showers.
                </p>
                <ul className="frs-card-bullets">
                  <li>Custom cabinetry &amp; oversized islands</li>
                  <li>Frameless glass spa showers &amp; soaking tubs</li>
                  <li>3D architectural renderings &amp; planning</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Basement & Exterior Remodeling */}
            <div className="frs-service-card">
              <div className="frs-card-img-wrap">
                <img
                  src={exteriorRemodelImg}
                  alt="Basement and exterior remodeling in Frisco TX"
                  className="frs-card-img"
                />
                <div className="frs-card-tag frs-tag-navy">
                  <Sparkles size={13} />
                  <span>Bespoke Exterior</span>
                </div>
              </div>
              <div className="frs-card-body">
                <h3 className="frs-card-title">Basement &amp; Exterior</h3>
                <p className="frs-card-desc">
                  From custom entertainment basements and wine cellars to luxury covered patios and modern exterior facade makeovers, we customize your space to your desired imagination.
                </p>
                <ul className="frs-card-bullets">
                  <li>Entertainment rooms, wet bars &amp; home theaters</li>
                  <li>Outdoor kitchens, pergolas &amp; patios</li>
                  <li>Exterior masonry, siding &amp; custom trim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frisco Neighborhoods & Coverage */}
      <section className="frs-coverage-section">
        <div className="frs-container">
          <div className="frs-coverage-card">
            <div className="frs-coverage-content">
              <div className="frs-section-kicker">
                <span className="frs-kicker-dot" />
                <span>LOCAL DFW COVERAGE</span>
              </div>
              <h2 className="frs-coverage-title">
                Serving All Frisco &amp; North Collin County
              </h2>
              <p className="frs-coverage-desc">
                Stationed throughout Frisco for rapid-response disaster remediation and bespoke luxury remodeling consultations.
              </p>

              <div className="frs-hoods-grid">
                {friscoNeighborhoods.map((hood, idx) => (
                  <div key={idx} className="frs-hood-item">
                    <Compass size={16} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <span className="frs-hood-name">{hood.name}</span>
                      <span className="frs-hood-zip">({hood.zip})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="frs-coverage-stat-col">
              <div className="frs-stat-box">
                <span className="frs-sb-num">&lt; 45 min</span>
                <span className="frs-sb-label">Frisco Emergency Response</span>
              </div>
              <div className="frs-stat-box">
                <span className="frs-sb-num">100%</span>
                <span className="frs-sb-label">Satisfaction Guarantee</span>
              </div>
              <div className="frs-stat-box">
                <span className="frs-sb-num">15+ Yrs</span>
                <span className="frs-sb-label">Texas Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews & Testimonials */}
      <section className="frs-reviews-section">
        <div className="frs-container">
          <div className="frs-section-header">
            <div className="frs-section-kicker">
              <span className="frs-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="frs-section-title">
              What Frisco Homeowners Say About ARSS
            </h2>
            <div className="frs-google-badge">
              <GoogleIcon size={20} />
              <div className="frs-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="frs-gb-score">5.0 Star Rated on Google</span>
              <span className="frs-gb-verified">• Verified Frisco, TX Client Reviews</span>
            </div>
          </div>

          <div className="frs-reviews-grid">
            {friscoReviews.map((rev, idx) => (
              <div key={idx} className="frs-review-card">
                <div className="frs-rc-header">
                  <div
                    className="frs-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="frs-rc-author-info">
                    <div className="frs-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="frs-rc-author-meta">{rev.role}</div>
                    <div className="frs-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="frs-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="frs-rc-title">"{rev.title}"</h4>
                <p className="frs-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exact User Callout: Need Help? */}
      <section className="frs-help-section">
        <div className="frs-container">
          <div className="frs-help-card">
            <div className="frs-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="frs-help-info">
                <div className="frs-section-kicker frs-help-kicker">
                  <span className="frs-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="frs-help-title">Need Help?</h3>
                <p className="frs-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="frs-help-contacts">
                  {/* Phone Block */}
                  <div className="frs-contact-block">
                    <div className="frs-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="frs-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="frs-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="frs-contact-block">
                    <div className="frs-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="frs-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="frs-cb-val"
                      >
                        support@arssconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="frs-help-actions">
                  <a href="/request-inspection" className="frs-btn-quote">
                    <Calendar size={17} />
                    <span>Get Free Frisco Estimate</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="frs-help-sidebar">
                <div className="frs-dispatch-card">
                  <div className="frs-dc-head">
                    <div className="frs-dc-badge">
                      <span className="frs-dc-pulse" />
                      <span>Frisco Dispatch Ready</span>
                    </div>
                  </div>
                  <h4 className="frs-dc-title">Frisco, TX Service Hub</h4>
                  <p className="frs-dc-text">
                    Dedicated mobile units stationed for rapid 24/7 water and fire damage recovery and bespoke remodeling consultations.
                  </p>

                  <div className="frs-dc-details">
                    <div className="frs-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Frisco, TX • Collin &amp; Denton Counties</span>
                    </div>
                    <div className="frs-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Emergency Dispatch: 24/7/365</span>
                    </div>
                    <div className="frs-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Fully Bonded, Insured &amp; Texas Regulated</span>
                    </div>
                  </div>

                  <a href="/contact" className="frs-dc-btn">
                    <span>Contact Frisco Office</span>
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


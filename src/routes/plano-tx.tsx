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
  HeartHandshake,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Gallery images from src/assets/gallery/
import heroLivingImg from "../assets/gallery/portfolio-5-1.jpg";
import storyShowcaseImg from "../assets/gallery/425f8991daa4983b80659cdb66ceb253.jpg";
import waterSplashImg from "../assets/gallery/splash.jpg";
import fireRepairImg from "../assets/gallery/fire-damage-restoration-services.jpg";
import kitchenRemodelImg from "../assets/gallery/1678008072_en-idei-club-p-home-remodeling-dizain-28.jpg";
import livingRemodelImg from "../assets/gallery/Fireplace-Sofas-Living-Room-Beams-High-Ceiling-Mid-Century-House-Lincoln-Massachusetts.jpg";

export const Route = createFileRoute("/plano-tx")({
  component: PlanoTxPage,
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

function PlanoTxPage() {
  const planoReviews = [
    {
      author: "Edward Sterling",
      initials: "ES",
      avatarColor: "#0284c7",
      location: "Willow Bend, Plano TX",
      role: "Verified Homeowner",
      title: "Immediate emergency arrival and exceptional restoration",
      quote:
        "When our hot water heater burst in Willow Bend, water was seeping through multiple rooms. ARSS was at our door in 30 minutes with thermal imaging cameras and commercial air movers. They saved our hardwood floors and completely sanitized the property. Flawless execution!",
    },
    {
      author: "Katherine Ross",
      initials: "KR",
      avatarColor: "#059669",
      location: "Legacy West, Plano TX",
      role: "Homeowner & Executive",
      title: "Our 25-year-old home is now an architectural dream",
      quote:
        "We wanted to turn our older Plano home into our dream home through a complete kitchen and living remodel. ARSS assigned an expert project manager who handled every guideline, permit, and subcontractor schedule without any delays. The finished curb appeal and interior look majestic.",
    },
    {
      author: "David McKinney",
      initials: "DM",
      avatarColor: "#d97706",
      location: "Kings Ridge, Plano TX",
      role: "Commercial & Residential Client",
      title: "On time, on budget, and always communicating",
      quote:
        "ARSS restored smoke and fire damage for one of our properties and then remodeled our primary residence. Their team keeps you updated constantly so you're always on the same page. The most reliable contractor in North Texas.",
    },
  ];

  const planoNeighborhoods = [
    { name: "Legacy West & The Shops at Legacy", zip: "75024" },
    { name: "Willow Bend & Gleneagles Country Club", zip: "75093" },
    { name: "Downtown Plano Historic Arts District", zip: "75074" },
    { name: "Kings Ridge & Deerfield", zip: "75024 / 75025" },
    { name: "Prestonwood & Lakeside on Preston", zip: "75093" },
    { name: "West Plano & Windhaven Parkway", zip: "75093 / 75024" },
  ];

  return (
    <div className="arss-exact-page plano-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="pln-hero-section">
        <div
          className="pln-hero-bg"
          style={{ backgroundImage: `url(${heroLivingImg})` }}
          aria-hidden="true"
        />
        <div className="pln-hero-overlay" aria-hidden="true" />

        <div className="pln-hero-container">
          {/* Breadcrumb */}
          <nav className="pln-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="pln-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="pln-breadcrumb-sep" />
            <span className="pln-breadcrumb-current">
              Water and Fire Damage Repair Company in Plano TX
            </span>
          </nav>

          <div className="pln-hero-kicker">
            <span className="pln-hero-kicker-dot" />
            <span>PLANO, TX • COLLIN COUNTY &amp; NORTH DFW METROPLEX</span>
          </div>

          <h1 className="pln-hero-title">
            Water and Fire Damage Repair Company in Plano TX
          </h1>
          <p className="pln-hero-subtitle">
            Turn your existing house into your dream home with Plano's premier water &amp; fire restoration contractors and full-service residential remodeling specialists.
          </p>

          <div className="pln-hero-meta-strip">
            <div className="pln-hm-item">
              <Clock size={15} className="pln-hm-icon" />
              <span>&lt; 40-Minute Emergency Response in Plano</span>
            </div>
            <div className="pln-hm-sep" />
            <div className="pln-hm-item">
              <ShieldCheck size={15} className="pln-hm-icon" />
              <span>Licensed, Bonded &amp; Insured Texas Pro</span>
            </div>
            <div className="pln-hm-sep" />
            <div className="pln-hm-item">
              <MapPin size={15} className="pln-hm-icon" />
              <span>Serving Willow Bend, Legacy West &amp; All Plano</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Water and Fire Damage Repair Company in Plano TX */}
      <section className="pln-story-section">
        <div className="pln-container">
          <div className="pln-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="pln-story-content">
              <div className="pln-section-kicker">
                <span className="pln-kicker-dot" />
                <span>LOCAL PLANO EXPERTISE</span>
              </div>

              <h2 className="pln-story-heading">
                Water and Fire Damage Repair Company in Plano TX
              </h2>
              <div className="pln-story-subheading">
                Turn your existing house into your dream home!
              </div>

              <div className="pln-story-text">
                <p>
                  When you observe water stains, sagging or bulging walls, and a musty or moldy smell, then these are the indications that your home has water damage. You must take care of this issue as soon as possible or the situation can get worse and cause severe structural damage to your home. We provide our customers with the best water damage repair services in Plano TX. Our team will inspect your property completely to find out all the hidden and visible damage and will take care of it with effectiveness. Give us a call and our team will get you started without any further delay!
                </p>
                <p>
                  Restoring water damage can be a very complex job, but if you hire professionals you can make the process quicker and easier. They can use their skills to give your property its original condition back and can help in saving time and money. If you are looking for such services, then look no further as we have got your back. We are a professional water damage restoration company that can take care of all your needs. Our team will repair the damage, and then clean and sanitize your property completely, so you can have a safe, comfortable, and healthy environment. Contact us!
                </p>
                <p>
                  Many people want to buy their dream home but can’t afford it. But, you can now turn your existing one into your dream one by simple remodeling. You must hire professionals to get the desired results and also they can help you save time and money. We provide our customers with the most professional home remodeling services, so you can have what you need. Whether you need to redesign your complete home or specific areas, we can make it all happen with precision and effectiveness. Contact us and our team will provide you with easy and effective solutions for all your problems!
                </p>
                <p>
                  Renovating your home can be a very time-consuming process, and we know in this fast-paced world everyone can’t spare time for these projects. But, you don’t need to worry as we offer the services of an expert home renovation contractor, who can manage the project for you. We make sure that you get the results that you expect and that’s why we strictly follow all your guidelines. We keep you updated with the progress so you are on the same page with us. Our team finishes the project on time so you don’t have to face any inconvenience. Give us a call!
                </p>
                <p>
                  Beyond functionality, trusted residential &amp; commercial restoration experts can help you in improving the curb appeal of your space. Are your kitchen cabinets falling apart? Or do you think that your bathroom needs to be more modern and aesthetically pleasing? Renovating your space can give a new life to it making it more comfortable and stylish.
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="pln-story-actions">
                <a href="/request-inspection" className="pln-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="pln-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="pln-guarantee-row">
                <div className="pln-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Rapid Water &amp; Structural Drying</span>
                </div>
                <div className="pln-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Full Cleaning &amp; Sanitization</span>
                </div>
                <div className="pln-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Affordable Dream Home Remodeling</span>
                </div>
                <div className="pln-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Dedicated Plano Project Manager</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring storyShowcaseImg */}
            <div className="pln-story-media">
              <div className="pln-media-frame">
                <img
                  src={storyShowcaseImg}
                  alt="High quality home remodeling and architectural staircase renovation in Plano TX by ARSS Construction"
                  className="pln-media-img"
                />
                <div className="pln-media-overlay" />

                <div className="pln-floating-badge">
                  <Sparkles size={26} className="pln-fb-icon" />
                  <div>
                    <span className="pln-fb-number">Turnkey Home Transformation</span>
                    <span className="pln-fb-label">On-Time, On-Budget &amp; Complete Sanitization</span>
                  </div>
                </div>

                <div className="pln-corner-badge">
                  <span>Plano, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Plano Services Grid */}
      <section className="pln-services-section">
        <div className="pln-container">
          <div className="pln-section-header">
            <div className="pln-section-kicker">
              <span className="pln-kicker-dot" />
              <span>FULL-SPECTRUM PROPERTY SOLUTIONS</span>
            </div>
            <h2 className="pln-section-title">
              Complete Restoration &amp; Remodeling in Plano, TX
            </h2>
            <p className="pln-section-lead-text">
              From emergency water, fire, and structural mitigation to luxury kitchen, bathroom, and full-house remodels, ARSS delivers peace of mind across Collin County.
            </p>
          </div>

          <div className="pln-cards-grid">
            {/* Card 1: Emergency Water Damage Restoration */}
            <div className="pln-service-card">
              <div className="pln-card-img-wrap">
                <img
                  src={waterSplashImg}
                  alt="Emergency Water Damage Restoration Services in Plano TX"
                  className="pln-card-img"
                />
                <div className="pln-card-tag pln-tag-blue">
                  <Droplets size={13} />
                  <span>24/7 Rapid Extraction</span>
                </div>
              </div>
              <div className="pln-card-body">
                <h3 className="pln-card-title">Water Damage Repair</h3>
                <p className="pln-card-desc">
                  Thorough inspection for hidden and visible moisture, industrial dehumidification, structural wall drying, and complete property sanitization.
                </p>
                <ul className="pln-card-bullets">
                  <li>Thermal infrared moisture mapping</li>
                  <li>Industrial sanitization &amp; mold prevention</li>
                  <li>Direct insurance billing assistance</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Precision Fire Damage Restoration */}
            <div className="pln-service-card">
              <div className="pln-card-img-wrap">
                <img
                  src={fireRepairImg}
                  alt="Fire Damage Restoration Services in Plano TX"
                  className="pln-card-img"
                />
                <div className="pln-card-tag pln-tag-orange">
                  <Flame size={13} />
                  <span>Soot &amp; Odor Removal</span>
                </div>
              </div>
              <div className="pln-card-body">
                <h3 className="pln-card-title">Fire Damage Repair</h3>
                <p className="pln-card-desc">
                  Rapid soot removal, toxic residue neutralization, structural carpentry, and electrical repairs to return your space to its original form and beauty.
                </p>
                <ul className="pln-card-bullets">
                  <li>Debris removal &amp; air purification</li>
                  <li>Structural timber &amp; sheetrock rebuilding</li>
                  <li>Comprehensive insurance documentation</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Designer Kitchen & Bathroom Remodeling */}
            <div className="pln-service-card">
              <div className="pln-card-img-wrap">
                <img
                  src={kitchenRemodelImg}
                  alt="Kitchen and bathroom remodeling in Plano TX"
                  className="pln-card-img"
                />
                <div className="pln-card-tag pln-tag-amber">
                  <Hammer size={13} />
                  <span>Custom Design</span>
                </div>
              </div>
              <div className="pln-card-body">
                <h3 className="pln-card-title">Kitchen &amp; Bath Remodel</h3>
                <p className="pln-card-desc">
                  Upgrade failing cabinets, outdated plumbing, and worn surfaces with custom modern cabinetry, quartz countertops, and luxurious walk-in spa showers.
                </p>
                <ul className="pln-card-bullets">
                  <li>Custom cabinetry &amp; oversized islands</li>
                  <li>Walk-in frameless glass spa showers</li>
                  <li>Complete plumbing &amp; fixture upgrades</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Whole-Home Renovation & Living Spaces */}
            <div className="pln-service-card">
              <div className="pln-card-img-wrap">
                <img
                  src={livingRemodelImg}
                  alt="Whole home remodeling and living room upgrades in Plano TX"
                  className="pln-card-img"
                />
                <div className="pln-card-tag pln-tag-navy">
                  <Sparkles size={13} />
                  <span>Dream Living</span>
                </div>
              </div>
              <div className="pln-card-body">
                <h3 className="pln-card-title">Whole-Home Renovation</h3>
                <p className="pln-card-desc">
                  Whether redesigning complete interiors or expanding living areas, our expert renovation contractors guide you from planning to flawless finish.
                </p>
                <ul className="pln-card-bullets">
                  <li>Open-concept floor plan conversions</li>
                  <li>Custom millwork, fireplace &amp; ceiling beams</li>
                  <li>Significantly boosts market resale curb appeal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Plano Neighborhoods & Coverage */}
      <section className="pln-coverage-section">
        <div className="pln-container">
          <div className="pln-coverage-card">
            <div className="pln-coverage-content">
              <div className="pln-section-kicker">
                <span className="pln-kicker-dot" />
                <span>LOCAL DFW COVERAGE</span>
              </div>
              <h2 className="pln-coverage-title">
                Serving All Plano &amp; Surrounding Collin County
              </h2>
              <p className="pln-coverage-desc">
                Our rapid emergency units and residential renovation teams are stationed across Plano for prompt, reliable service.
              </p>

              <div className="pln-hoods-grid">
                {planoNeighborhoods.map((hood, idx) => (
                  <div key={idx} className="pln-hood-item">
                    <Compass size={16} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <span className="pln-hood-name">{hood.name}</span>
                      <span className="pln-hood-zip">({hood.zip})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pln-coverage-stat-col">
              <div className="pln-stat-box">
                <span className="pln-sb-num">&lt; 40 min</span>
                <span className="pln-sb-label">Plano Emergency Response</span>
              </div>
              <div className="pln-stat-box">
                <span className="pln-sb-num">100%</span>
                <span className="pln-sb-label">Satisfaction Guarantee</span>
              </div>
              <div className="pln-stat-box">
                <span className="pln-sb-num">15+ Yrs</span>
                <span className="pln-sb-label">Texas Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews & Testimonials */}
      <section className="pln-reviews-section">
        <div className="pln-container">
          <div className="pln-section-header">
            <div className="pln-section-kicker">
              <span className="pln-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="pln-section-title">
              What Plano Homeowners Say About ARSS
            </h2>
            <div className="pln-google-badge">
              <GoogleIcon size={20} />
              <div className="pln-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="pln-gb-score">5.0 Star Rated on Google</span>
              <span className="pln-gb-verified">• Verified Plano, TX Client Reviews</span>
            </div>
          </div>

          <div className="pln-reviews-grid">
            {planoReviews.map((rev, idx) => (
              <div key={idx} className="pln-review-card">
                <div className="pln-rc-header">
                  <div
                    className="pln-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="pln-rc-author-info">
                    <div className="pln-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="pln-rc-author-meta">{rev.role}</div>
                    <div className="pln-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="pln-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="pln-rc-title">"{rev.title}"</h4>
                <p className="pln-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exact User Callout: Need Help? */}
      <section className="pln-help-section">
        <div className="pln-container">
          <div className="pln-help-card">
            <div className="pln-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="pln-help-info">
                <div className="pln-section-kicker pln-help-kicker">
                  <span className="pln-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="pln-help-title">Need Help?</h3>
                <p className="pln-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="pln-help-contacts">
                  {/* Phone Block */}
                  <div className="pln-contact-block">
                    <div className="pln-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="pln-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="pln-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="pln-contact-block">
                    <div className="pln-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:info@arss-construction.com"
                        className="pln-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:info@arss-construction.com"
                        className="pln-cb-val"
                      >
                        info@arss-construction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pln-help-actions">
                  <a href="/request-inspection" className="pln-btn-quote">
                    <Calendar size={17} />
                    <span>Get Free Plano Estimate</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="pln-help-sidebar">
                <div className="pln-dispatch-card">
                  <div className="pln-dc-head">
                    <div className="pln-dc-badge">
                      <span className="pln-dc-pulse" />
                      <span>Plano Dispatch Ready</span>
                    </div>
                  </div>
                  <h4 className="pln-dc-title">Plano, TX Service Hub</h4>
                  <p className="pln-dc-text">
                    Dedicated mobile restoration units and project managers stationed for rapid water/fire mitigation and complete home renovations.
                  </p>

                  <div className="pln-dc-details">
                    <div className="pln-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Plano, TX • Collin County</span>
                    </div>
                    <div className="pln-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Emergency Dispatch: 24/7/365</span>
                    </div>
                    <div className="pln-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Fully Bonded, Insured &amp; Texas Regulated</span>
                    </div>
                  </div>

                  <a href="/contact" className="pln-dc-btn">
                    <span>Contact Plano Office</span>
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


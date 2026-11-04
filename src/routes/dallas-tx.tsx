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
  Bath,
  ChefHat,
  Building2,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Gallery images from src/assets/gallery/
import heroLivingImg from "../assets/gallery/BEST-HOME-IMPROVEMENT-IDEAS-FOR-2022.jpg";
import storyShowcaseImg from "../assets/gallery/portfolio-5-1.jpg";
import waterSplashImg from "../assets/gallery/splash.jpg";
import fireRepairImg from "../assets/gallery/fire-damage-restoration-services.jpg";
import kitchenRemodelImg from "../assets/gallery/1678008072_en-idei-club-p-home-remodeling-dizain-28.jpg";
import bathRemodelImg from "../assets/gallery/1679431385_en-idei-club-p-plan-renovation-dizain-krasivo-50.jpg";

export const Route = createFileRoute("/dallas-tx")({
  component: DallasTxPage,
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

function DallasTxPage() {
  const dallasReviews = [
    {
      author: "Julian Sterling",
      initials: "JS",
      avatarColor: "#0284c7",
      location: "Highland Park, Dallas TX",
      role: "Verified Homeowner",
      title: "Saved our historic estate after major pipe flood",
      quote:
        "When an upstairs pipe ruptured in our Highland Park home, ARSS had their emergency flood extraction crew on site in 25 minutes. They protected our antique millwork, removed the standing water, and completely restored the drywall and plaster with invisible seams.",
    },
    {
      author: "Victoria Montgomery",
      initials: "VM",
      avatarColor: "#059669",
      location: "Preston Hollow, Dallas TX",
      role: "Homeowner",
      title: "A dream kitchen and luxury bathroom transformation",
      quote:
        "ARSS transformed our entire kitchen and primary bathroom into a modern masterpiece. The custom cabinets, quartz waterfall island, and walk-in shower are breathtaking. They were clean, respectful, and delivered exactly on schedule.",
    },
    {
      author: "Carlos Gutierrez",
      initials: "CG",
      avatarColor: "#d97706",
      location: "Uptown Dallas, TX",
      role: "Commercial Property Manager",
      title: "Our trusted single-source restoration contractor in Dallas",
      quote:
        "We manage multi-family executive complexes in Uptown and Downtown Dallas. ARSS handles both our emergency restoration calls and tenant finish-outs. They work directly with insurance adjusters and always deliver flawless craftsmanship.",
    },
  ];

  const dallasNeighborhoods = [
    { name: "Downtown Dallas & Uptown", zip: "75201 / 75202 / 75204" },
    { name: "Highland Park & University Park (Park Cities)", zip: "75205 / 75225" },
    { name: "Preston Hollow & North Dallas", zip: "75220 / 75229 / 75230" },
    { name: "Lakewood & White Rock Lake", zip: "75214 / 75218" },
    { name: "Bishop Arts District & Oak Cliff", zip: "75208" },
    { name: "Design District & Medical District", zip: "75207 / 75235" },
  ];

  return (
    <div className="arss-exact-page dallas-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="dal-hero-section">
        <div
          className="dal-hero-bg"
          style={{ backgroundImage: `url(${heroLivingImg})` }}
          aria-hidden="true"
        />
        <div className="dal-hero-overlay" aria-hidden="true" />

        <div className="dal-hero-container">
          {/* Breadcrumb */}
          <nav className="dal-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="dal-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="dal-breadcrumb-sep" />
            <span className="dal-breadcrumb-current">
              Restore your peace with the best water &amp; fire damage repair contractor in Dallas TX
            </span>
          </nav>

          <div className="dal-hero-kicker">
            <span className="dal-hero-kicker-dot" />
            <span>DALLAS, TX • CENTRAL HEADQUARTERS &amp; DFW METROPLEX</span>
          </div>

          <h1 className="dal-hero-title">
            Restore your peace with the best water &amp; fire damage repair contractor in Dallas TX
          </h1>
          <p className="dal-hero-subtitle">
            Experience the Best Home Remodeling and Renovation. ARSS Construction is Dallas's premier 24/7 disaster recovery and turnkey residential &amp; commercial general contractor.
          </p>

          <div className="dal-hero-meta-strip">
            <div className="dal-hm-item">
              <Clock size={15} className="dal-hm-icon" />
              <span>&lt; 30-Minute Emergency Dispatch from Dallas HQ</span>
            </div>
            <div className="dal-hm-sep" />
            <div className="dal-hm-item">
              <ShieldCheck size={15} className="dal-hm-icon" />
              <span>Licensed, Bonded &amp; Insured Texas Pro</span>
            </div>
            <div className="dal-hm-sep" />
            <div className="dal-hm-item">
              <MapPin size={15} className="dal-hm-icon" />
              <span>Serving Park Cities, Uptown, Preston Hollow &amp; All Dallas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Experience the Best Home Remodeling and Renovation */}
      <section className="dal-story-section">
        <div className="dal-container">
          <div className="dal-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="dal-story-content">
              <div className="dal-section-kicker">
                <span className="dal-kicker-dot" />
                <span>CENTRAL HEADQUARTERS EXCELLENCE</span>
              </div>

              <h2 className="dal-story-heading">
                Experience the Best Home Remodeling and Renovation
              </h2>
              <div className="dal-story-subheading">
                Restore your peace with the best water &amp; fire damage repair contractor in Dallas TX
              </div>

              <div className="dal-story-text">
                <p>
                  Water and fire are natural calamities that can happen anywhere, anytime, and to anyone. The main goal is to stop this damage and repair the aftermath with greatness. <strong>ARSS Construction</strong> is the Best Water and fire damage restoration Contractor in Dallas TX with expertise and vast experience. As a leading damage repair company, we start our repair process after clearing the site from water. We make sure the area is safe and secure from any further potential threats.
                </p>
                <p>
                  Whether you face issues in the water system like leaking pipes, or floods, we always have a solution for you. Our Expert water damage repair services are specifically designed to meet the extent of damage that happened to you. You can avail of a custom plan as per your needs. We make the right process to treat the flooded water and remove it from your property. Our expert can dry all the furniture and property from further danger.
                </p>
                <p>
                  Homes are the place for your comfort and they should be very peaceful. Any disruptions and unwanted incidents can cause great discomfort for you. For restoring this peace we offer the best home remodeling and renovation services in Dallas TX. We are transforming lives with our hard work. Your house becomes our responsibility the moment you contact us. We treat every project with personalized care and process. We compel you to bring your vision into reality.
                </p>
                <p>
                  Our Professional Home Remodeling Services in Dallas TX can be used to transform your entire kitchen. You can choose a favorite theme to apply and we will make sure to blend it perfectly. Whether you need to replace floor tiles or add a new appliance in your kitchen, our experts are ready to help you in the best way possible. They take care of all the electrical, plumbing, and construction work. We can change a small item or renovate the whole kitchen for you. You can suggest your ideas and we will implement them in the best way.
                </p>
                <p>
                  Our professionals diligently remodel any type of bathroom whether it is classic, contemporary, or modern style. There are so many choices for upgrading your bathroom to the finest condition. From top-class toiletries to modern showers, you can choose whatever you want and we will implement them in the right manner.
                </p>
                <p>
                  Whether you want remodeling for your house or your business, we have <strong>Trusted Residential &amp; Commercial Restoration Experts</strong> who can fully transform your property. We use the right blend of tools, techniques, and materials that upgrade your place into the real vision of your dreams. Our services are available at very affordable prices so that when you spend a lot on remodeling accessories you can get ease from spending little on services. You are always welcome to look throughout the process and make sure the right projectile towards successful remodeling. Don’t look any further, hire us as your Premier Home Remodeling and Renovations Company today.
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="dal-story-actions">
                <a href="/request-inspection" className="dal-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="dal-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="dal-guarantee-row">
                <div className="dal-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>24/7 Rapid Water &amp; Fire Dispatch</span>
                </div>
                <div className="dal-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Custom Kitchen &amp; Bath Remodels</span>
                </div>
                <div className="dal-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Residential &amp; Commercial Pro</span>
                </div>
                <div className="dal-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Personalized Care &amp; Affordable Rates</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring storyShowcaseImg */}
            <div className="dal-story-media">
              <div className="dal-media-frame">
                <img
                  src={storyShowcaseImg}
                  alt="High quality home remodeling, water and fire restoration in Dallas TX by ARSS Construction"
                  className="dal-media-img"
                />
                <div className="dal-media-overlay" />

                <div className="dal-floating-badge">
                  <Sparkles size={26} className="dal-fb-icon" />
                  <div>
                    <span className="dal-fb-number">Dallas Central Headquarters</span>
                    <span className="dal-fb-label">Restore Your Peace with Trusted Excellence</span>
                  </div>
                </div>

                <div className="dal-corner-badge">
                  <span>Dallas, TX HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Dallas Services Grid */}
      <section className="dal-services-section">
        <div className="dal-container">
          <div className="dal-section-header">
            <div className="dal-section-kicker">
              <span className="dal-kicker-dot" />
              <span>FULL-SPECTRUM PROPERTY SOLUTIONS</span>
            </div>
            <h2 className="dal-section-title">
              Complete Restoration &amp; Remodeling in Dallas, TX
            </h2>
            <p className="dal-section-lead-text">
              From emergency flooded water extraction and soot scrub-down to dream kitchen and bath transformations, ARSS brings peace of mind to homeowners and businesses.
            </p>
          </div>

          <div className="dal-cards-grid">
            {/* Card 1: Emergency Water Damage Restoration */}
            <div className="dal-service-card">
              <div className="dal-card-img-wrap">
                <img
                  src={waterSplashImg}
                  alt="Emergency Water Damage Repair Services in Dallas TX"
                  className="dal-card-img"
                />
                <div className="dal-card-tag dal-tag-blue">
                  <Droplets size={13} />
                  <span>24/7 Flood Extraction</span>
                </div>
              </div>
              <div className="dal-card-body">
                <h3 className="dal-card-title">Water Damage Repair</h3>
                <p className="dal-card-desc">
                  Rapid removal of standing water, moisture treatment, furniture drying, and structural sanitization to protect your Dallas property from further danger.
                </p>
                <ul className="dal-card-bullets">
                  <li>Burst pipes &amp; water flood extraction</li>
                  <li>Structural drying &amp; moisture mapping</li>
                  <li>Direct insurance claim billing assistance</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Precision Fire Damage Restoration */}
            <div className="dal-service-card">
              <div className="dal-card-img-wrap">
                <img
                  src={fireRepairImg}
                  alt="Fire Damage Restoration Services in Dallas TX"
                  className="dal-card-img"
                />
                <div className="dal-card-tag dal-tag-orange">
                  <Flame size={13} />
                  <span>Soot &amp; Odor Rebuild</span>
                </div>
              </div>
              <div className="dal-card-body">
                <h3 className="dal-card-title">Fire Damage Repair</h3>
                <p className="dal-card-desc">
                  Clearing debris and residue, repairing burned furniture and structural areas, replacing plumbing and electrical, and deodorizing toxic smoke smells.
                </p>
                <ul className="dal-card-bullets">
                  <li>Soot washdown &amp; thermal deodorization</li>
                  <li>Structural timber &amp; drywall replacement</li>
                  <li>Complete insurance documentation support</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Custom Kitchen Remodeling */}
            <div className="dal-service-card">
              <div className="dal-card-img-wrap">
                <img
                  src={kitchenRemodelImg}
                  alt="Kitchen remodeling and renovation in Dallas TX"
                  className="dal-card-img"
                />
                <div className="dal-card-tag dal-tag-amber">
                  <ChefHat size={13} />
                  <span>Theme &amp; Blend</span>
                </div>
              </div>
              <div className="dal-card-body">
                <h3 className="dal-card-title">Kitchen Remodeling</h3>
                <p className="dal-card-desc">
                  Transform your entire kitchen with your favorite theme. We replace floor tiles, add appliances, install custom cabinets, and manage electrical and plumbing.
                </p>
                <ul className="dal-card-bullets">
                  <li>Custom cabinetry &amp; oversized islands</li>
                  <li>Tile flooring, backsplash &amp; countertop upgrades</li>
                  <li>Turnkey MEP &amp; appliance installation</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Bathroom & Whole-Property Renovation */}
            <div className="dal-service-card">
              <div className="dal-card-img-wrap">
                <img
                  src={bathRemodelImg}
                  alt="Bathroom remodeling and property renovation in Dallas TX"
                  className="dal-card-img"
                />
                <div className="dal-card-tag dal-tag-navy">
                  <Bath size={13} />
                  <span>Classic to Modern</span>
                </div>
              </div>
              <div className="dal-card-body">
                <h3 className="dal-card-title">Bathroom &amp; Property Remodel</h3>
                <p className="dal-card-desc">
                  Classic, contemporary, or modern bathroom renovations with top-class toiletries and modern showers. Residential &amp; commercial property overhauls.
                </p>
                <ul className="dal-card-bullets">
                  <li>Walk-in spa showers &amp; designer vanities</li>
                  <li>Commercial &amp; residential space transformations</li>
                  <li>Affordable pricing with luxury materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dallas Neighborhoods & Coverage */}
      <section className="dal-coverage-section">
        <div className="dal-container">
          <div className="dal-coverage-card">
            <div className="dal-coverage-content">
              <div className="dal-section-kicker">
                <span className="dal-kicker-dot" />
                <span>LOCAL DALLAS COVERAGE</span>
              </div>
              <h2 className="dal-coverage-title">
                Serving All Dallas &amp; Surrounding DFW Metroplex
              </h2>
              <p className="dal-coverage-desc">
                Dispatched directly from our Dallas headquarters for immediate emergency response and scheduled design consultations.
              </p>

              <div className="dal-hoods-grid">
                {dallasNeighborhoods.map((hood, idx) => (
                  <div key={idx} className="dal-hood-item">
                    <Compass size={16} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <span className="dal-hood-name">{hood.name}</span>
                      <span className="dal-hood-zip">({hood.zip})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dal-coverage-stat-col">
              <div className="dal-stat-box">
                <span className="dal-sb-num">&lt; 30 min</span>
                <span className="dal-sb-label">Dallas HQ Emergency Dispatch</span>
              </div>
              <div className="dal-stat-box">
                <span className="dal-sb-num">100%</span>
                <span className="dal-sb-label">Satisfaction Guarantee</span>
              </div>
              <div className="dal-stat-box">
                <span className="dal-sb-num">15+ Yrs</span>
                <span className="dal-sb-label">Texas Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews & Testimonials */}
      <section className="dal-reviews-section">
        <div className="dal-container">
          <div className="dal-section-header">
            <div className="dal-section-kicker">
              <span className="dal-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="dal-section-title">
              What Dallas Homeowners Say About ARSS
            </h2>
            <div className="dal-google-badge">
              <GoogleIcon size={20} />
              <div className="dal-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="dal-gb-score">5.0 Star Rated on Google</span>
              <span className="dal-gb-verified">• Verified Dallas, TX Client Reviews</span>
            </div>
          </div>

          <div className="dal-reviews-grid">
            {dallasReviews.map((rev, idx) => (
              <div key={idx} className="dal-review-card">
                <div className="dal-rc-header">
                  <div
                    className="dal-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="dal-rc-author-info">
                    <div className="dal-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="dal-rc-author-meta">{rev.role}</div>
                    <div className="dal-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="dal-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="dal-rc-title">"{rev.title}"</h4>
                <p className="dal-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exact User Callout: Need Help? */}
      <section className="dal-help-section">
        <div className="dal-container">
          <div className="dal-help-card">
            <div className="dal-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="dal-help-info">
                <div className="dal-section-kicker dal-help-kicker">
                  <span className="dal-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="dal-help-title">Need Help?</h3>
                <p className="dal-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="dal-help-contacts">
                  {/* Phone Block */}
                  <div className="dal-contact-block">
                    <div className="dal-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="dal-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="dal-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="dal-contact-block">
                    <div className="dal-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="dal-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="dal-cb-val"
                      >
                        support@arssconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="dal-help-actions">
                  <a href="/request-inspection" className="dal-btn-quote">
                    <Calendar size={17} />
                    <span>Get Free Dallas Estimate</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="dal-help-sidebar">
                <div className="dal-dispatch-card">
                  <div className="dal-dc-head">
                    <div className="dal-dc-badge">
                      <span className="dal-dc-pulse" />
                      <span>Dallas HQ Ready 24/7</span>
                    </div>
                  </div>
                  <h4 className="dal-dc-title">Dallas Headquarters</h4>
                  <p className="dal-dc-text">
                    Central operational base with mobile emergency flood units, fire reconstruction specialists, and residential design project managers.
                  </p>

                  <div className="dal-dc-details">
                    <div className="dal-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Dallas, Texas • Serving All 50 States</span>
                    </div>
                    <div className="dal-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Emergency Dispatch: 24/7/365</span>
                    </div>
                    <div className="dal-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Fully Bonded, Insured &amp; Texas Regulated</span>
                    </div>
                  </div>

                  <a href="/contact" className="dal-dc-btn">
                    <span>Contact Dallas Headquarters</span>
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


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
  HeartHandshake,
  Compass,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

// Gallery images from src/assets/gallery/
import heroBgImg from "../assets/gallery/BEST-HOME-IMPROVEMENT-IDEAS-FOR-2022.jpg";
import waterSplashImg from "../assets/gallery/splash.jpg";
import fireRepairImg from "../assets/gallery/fire-damage-restoration-services.jpg";
import homeRemodelImg from "../assets/gallery/1678008072_en-idei-club-p-home-remodeling-dizain-28.jpg";
import luxuryLivingImg from "../assets/gallery/bigstock-Basement-in-luxury-home-with-b-18131438-2048x1365-1.jpg";
import designPlanImg from "../assets/gallery/1679431385_en-idei-club-p-plan-renovation-dizain-krasivo-50.jpg";

export const Route = createFileRoute("/arlington-tx")({
  component: ArlingtonTxPage,
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

function ArlingtonTxPage() {
  const arlingtonReviews = [
    {
      author: "Brandon Miller",
      initials: "BM",
      avatarColor: "#0284c7",
      location: "North Arlington, TX • Near Viridian",
      role: "Verified Homeowner",
      title: "Transformed our flooded first floor into a showpiece",
      quote:
        "When a burst pipe ruined our kitchen and flooring in North Arlington, ARSS took charge from day one. They handled water extraction, communicated directly with our insurance adjuster, and completed a breathtaking kitchen remodel within budget. True professionals!",
    },
    {
      author: "Cynthia Alvarez",
      initials: "CA",
      avatarColor: "#059669",
      location: "South Arlington, TX",
      role: "Homeowner",
      title: "Our dream master suite came to life without any stress",
      quote:
        "We wanted to remodel our outdated master bathroom and walk-in closet but were terrified of endless delays. ARSS assigned a dedicated project manager who showed up every morning, kept the job spotless, and finished 4 days early. We love our new space!",
    },
    {
      author: "Gregory Hayes",
      initials: "GH",
      avatarColor: "#d97706",
      location: "Downtown Arlington, TX",
      role: "Commercial Property Manager",
      title: "Prompt fire and smoke remediation in Arlington",
      quote:
        "ARSS arrived in 40 minutes after an electrical kitchen fire. They cleared the soot, eliminated the odor completely, and re-sheetrocked and painted with perfection. They are our trusted contractor across Tarrant County.",
    },
  ];

  const arlingtonNeighborhoods = [
    { name: "North Arlington & Viridian", zip: "76006 / 76012" },
    { name: "Downtown Arlington & UTA", zip: "76010 / 76019" },
    { name: "Entertainment District (AT&T Stadium)", zip: "76011" },
    { name: "South Arlington & Mansfield Border", zip: "76001 / 76002" },
    { name: "Lake Arlington & West Arlington", zip: "76013 / 76016" },
    { name: "Pantego & Dalworthington Gardens", zip: "76013 / 76017" },
  ];

  return (
    <div className="arss-exact-page arlington-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="arl-hero-section">
        <div
          className="arl-hero-bg"
          style={{ backgroundImage: `url(${heroBgImg})` }}
          aria-hidden="true"
        />
        <div className="arl-hero-overlay" aria-hidden="true" />

        <div className="arl-hero-container">
          {/* Breadcrumb matching user request: Water and Fire Damage Repair Services In Arlington TX */}
          <nav className="arl-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="arl-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="arl-breadcrumb-sep" />
            <span className="arl-breadcrumb-current">
              Water and Fire Damage Repair Services In Arlington TX
            </span>
          </nav>

          <div className="arl-hero-kicker">
            <span className="arl-hero-kicker-dot" />
            <span>ARLINGTON, TX • TARRANT COUNTY &amp; DFW METROPLEX</span>
          </div>

          <h1 className="arl-hero-title">
            Water and Fire Damage Repair Services In Arlington TX
          </h1>
          <p className="arl-hero-subtitle">
            Best Home Remodeling and Renovation in Arlington TX. Turn your house into your dream home with top-rated emergency restoration and custom remodeling contractors.
          </p>

          <div className="arl-hero-meta-strip">
            <div className="arl-hm-item">
              <Clock size={15} className="arl-hm-icon" />
              <span>&lt; 60-Minute Emergency Dispatch in Arlington</span>
            </div>
            <div className="arl-hm-sep" />
            <div className="arl-hm-item">
              <ShieldCheck size={15} className="arl-hm-icon" />
              <span>Licensed, Bonded &amp; Insured Texas Pro</span>
            </div>
            <div className="arl-hm-sep" />
            <div className="arl-hm-item">
              <MapPin size={15} className="arl-hm-icon" />
              <span>Serving All Arlington Neighborhoods</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative: Best Home Remodeling and Renovation in Arlington TX */}
      <section className="arl-story-section">
        <div className="arl-container">
          <div className="arl-story-grid">
            {/* Left Column: Narrative Content */}
            <div className="arl-story-content">
              <div className="arl-section-kicker">
                <span className="arl-kicker-dot" />
                <span>LOCAL ARLINGTON EXPERTISE</span>
              </div>

              <h2 className="arl-story-heading">
                Best Home Remodeling and Renovation in Arlington TX
              </h2>
              <div className="arl-story-subheading">
                Turn your house into your dream home!
              </div>

              <div className="arl-story-text">
                <p>
                  Everyone has their different ideas of a dream home but not everyone can afford it. But, you can now turn your existing one into your dream home with simple and affordable remodeling. If you require someone who can assist you in this case, then you have come to the right place. We provide you with the best home remodeling and renovation services in Arlington TX, so you can enhance your property. Give us a call and our team will get you started today!
                </p>
                <p>
                  You can save your time and money by getting professionals for your property makeover. This can also provide you with durable and pleasing results. If you are looking for such individuals for your work, then no worries as we have got your back. We have designed professional home remodeling services for you so you can make your home look more appealing while staying within the budget. Our skilled team uses relevant equipment to give perfect outcomes. Let’s chat to find out more about our services!
                </p>
                <p>
                  Remodeling your home can be a time-consuming process, and in this fast-paced world, everyone can’t spare time. We understand that you want to make your home look nicer but at the same time, you are too busy to do it. We have a solution to this problem. We offer the services of an expert home renovation contractor so you don’t have to worry about managing your project. We will follow all your guidelines and timelines so you get the desired outcome at the desired time.
                </p>
                <p>
                  <strong>ARSS Construction in Arlington, TX</strong>, is the premier home remodeling and renovations company that can give you the best results. Whether you want to make your space look more attractive, want to add more functionalities, or make it more spacious, we can make it all happen at the most reasonable prices. We listen to your needs and budget and propose you a perfect design that satisfies you completely. Our skilled team is all set to provide you with a comfortable living space.
                </p>
              </div>

              {/* Action Buttons: Book Now */}
              <div className="arl-story-actions">
                <a href="/request-inspection" className="arl-btn-book">
                  <Calendar size={17} />
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:4693605805" className="arl-btn-phone">
                  <PhoneCall size={17} />
                  <span>Call (469) 360-5805</span>
                </a>
              </div>

              {/* Four Quality Guarantee Pills */}
              <div className="arl-guarantee-row">
                <div className="arl-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Affordable Dream Home Makeovers</span>
                </div>
                <div className="arl-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Water &amp; Fire Damage Emergency Pros</span>
                </div>
                <div className="arl-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>On-Time &amp; Within-Budget Timeline</span>
                </div>
                <div className="arl-guarantee-pill">
                  <CheckCircle2 size={15} className="text-amber-500" />
                  <span>Dedicated Arlington Project Lead</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase featuring homeRemodelImg */}
            <div className="arl-story-media">
              <div className="arl-media-frame">
                <img
                  src={homeRemodelImg}
                  alt="High quality home remodeling and interior renovation in Arlington TX by ARSS Construction"
                  className="arl-media-img"
                />
                <div className="arl-media-overlay" />

                <div className="arl-floating-badge">
                  <Sparkles size={26} className="arl-fb-icon" />
                  <div>
                    <span className="arl-fb-number">Turnkey Home Transformation</span>
                    <span className="arl-fb-label">Affordable, Durable &amp; Stress-Free</span>
                  </div>
                </div>

                <div className="arl-corner-badge">
                  <span>Arlington, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Arlington Services Grid (Water & Fire + Remodeling) */}
      <section className="arl-services-section">
        <div className="arl-container">
          <div className="arl-section-header">
            <div className="arl-section-kicker">
              <span className="arl-kicker-dot" />
              <span>FULL-SPECTRUM RESTORATION &amp; REMODELING</span>
            </div>
            <h2 className="arl-section-title">
              Complete Property Solutions in Arlington, TX
            </h2>
            <p className="arl-section-lead-text">
              From emergency disaster recovery after storms, leaks, and fires to luxury kitchen, bath, and whole-house renovations, ARSS is Arlington’s trusted single-source contractor.
            </p>
          </div>

          <div className="arl-cards-grid">
            {/* Card 1: Emergency Water Damage Restoration */}
            <div className="arl-service-card">
              <div className="arl-card-img-wrap">
                <img
                  src={waterSplashImg}
                  alt="Emergency Water Damage Repair Services in Arlington TX"
                  className="arl-card-img"
                />
                <div className="arl-card-tag arl-tag-blue">
                  <Droplets size={13} />
                  <span>24/7 Water Extraction</span>
                </div>
              </div>
              <div className="arl-card-body">
                <h3 className="arl-card-title">Water Damage Repair</h3>
                <p className="arl-card-desc">
                  Rapid extraction, structural drying, and moisture thermal imaging across Arlington properties. We halt mold growth and rebuild framing, drywall, and floors.
                </p>
                <ul className="arl-card-bullets">
                  <li>Burst pipes &amp; water heater leak mitigation</li>
                  <li>Industrial dehumidification &amp; drying</li>
                  <li>Direct insurance billing assistance</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Fire & Smoke Damage Restoration */}
            <div className="arl-service-card">
              <div className="arl-card-img-wrap">
                <img
                  src={fireRepairImg}
                  alt="Fire Damage Restoration Services in Arlington TX"
                  className="arl-card-img"
                />
                <div className="arl-card-tag arl-tag-orange">
                  <Flame size={13} />
                  <span>Soot &amp; Smoke Rebuild</span>
                </div>
              </div>
              <div className="arl-card-body">
                <h3 className="arl-card-title">Fire Damage Repair</h3>
                <p className="arl-card-desc">
                  Thorough fire damage assessment, toxic soot removal, odor neutralization, and complete structural carpentry to return your property to pre-loss condition.
                </p>
                <ul className="arl-card-bullets">
                  <li>Soot and smoke residue scrub-down</li>
                  <li>Structural carpentry &amp; electrical rewiring</li>
                  <li>Complete insurance claim documentation</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Kitchen & Bath Remodeling */}
            <div className="arl-service-card">
              <div className="arl-card-img-wrap">
                <img
                  src={designPlanImg}
                  alt="Kitchen and bathroom remodeling in Arlington TX"
                  className="arl-card-img"
                />
                <div className="arl-card-tag arl-tag-amber">
                  <Hammer size={13} />
                  <span>Custom Design</span>
                </div>
              </div>
              <div className="arl-card-body">
                <h3 className="arl-card-title">Kitchen &amp; Bath Remodeling</h3>
                <p className="arl-card-desc">
                  Turn your kitchen and bathrooms into elegant, highly functional sanctuaries. We install custom cabinetry, quartz countertops, frameless glass showers, and designer tile.
                </p>
                <ul className="arl-card-bullets">
                  <li>Open-concept kitchen conversions</li>
                  <li>Walk-in spa showers &amp; soaking tubs</li>
                  <li>3D architectural layout planning</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Whole-Home Renovation & Living Spaces */}
            <div className="arl-service-card">
              <div className="arl-card-img-wrap">
                <img
                  src={luxuryLivingImg}
                  alt="Whole home remodeling and room additions in Arlington TX"
                  className="arl-card-img"
                />
                <div className="arl-card-tag arl-tag-navy">
                  <Sparkles size={13} />
                  <span>Dream Home</span>
                </div>
              </div>
              <div className="arl-card-body">
                <h3 className="arl-card-title">Whole-Home Renovation</h3>
                <p className="arl-card-desc">
                  Whether creating an open floor plan, adding extra square footage, or revitalizing a mid-century home, our artisans craft spaces tailored to your family's lifestyle.
                </p>
                <ul className="arl-card-bullets">
                  <li>Room additions &amp; wall reconfiguration</li>
                  <li>Custom millwork, trim &amp; interior finishes</li>
                  <li>Energy-efficient windows &amp; insulation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Arlington Service Area Coverage */}
      <section className="arl-coverage-section">
        <div className="arl-container">
          <div className="arl-coverage-card">
            <div className="arl-coverage-content">
              <div className="arl-section-kicker">
                <span className="arl-kicker-dot" />
                <span>LOCAL DFW COVERAGE</span>
              </div>
              <h2 className="arl-coverage-title">
                Serving All Arlington &amp; Surrounding Tarrant County
              </h2>
              <p className="arl-coverage-desc">
                Our mobile restoration units and renovation crews are stationed throughout Arlington for fast, dependable service.
              </p>

              <div className="arl-hoods-grid">
                {arlingtonNeighborhoods.map((hood, idx) => (
                  <div key={idx} className="arl-hood-item">
                    <Compass size={16} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <span className="arl-hood-name">{hood.name}</span>
                      <span className="arl-hood-zip">({hood.zip})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="arl-coverage-stat-col">
              <div className="arl-stat-box">
                <span className="arl-sb-num">&lt; 60 min</span>
                <span className="arl-sb-label">Arlington Emergency Response</span>
              </div>
              <div className="arl-stat-box">
                <span className="arl-sb-num">100%</span>
                <span className="arl-sb-label">Satisfaction Guarantee</span>
              </div>
              <div className="arl-stat-box">
                <span className="arl-sb-num">15+ Yrs</span>
                <span className="arl-sb-label">Texas Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews & Testimonials */}
      <section className="arl-reviews-section">
        <div className="arl-container">
          <div className="arl-section-header">
            <div className="arl-section-kicker">
              <span className="arl-kicker-dot" />
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            <h2 className="arl-section-title">
              What Arlington Homeowners Say About ARSS
            </h2>
            <div className="arl-google-badge">
              <GoogleIcon size={20} />
              <div className="arl-gb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="arl-gb-score">5.0 Star Rated on Google</span>
              <span className="arl-gb-verified">• Verified Arlington, TX Client Reviews</span>
            </div>
          </div>

          <div className="arl-reviews-grid">
            {arlingtonReviews.map((rev, idx) => (
              <div key={idx} className="arl-review-card">
                <div className="arl-rc-header">
                  <div
                    className="arl-rc-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.initials}
                  </div>
                  <div className="arl-rc-author-info">
                    <div className="arl-rc-author-name">
                      {rev.author}
                      <BadgeCheck size={14} className="text-sky-500 inline ml-1" />
                    </div>
                    <div className="arl-rc-author-meta">{rev.role}</div>
                    <div className="arl-rc-author-loc">{rev.location}</div>
                  </div>
                </div>

                <div className="arl-rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="arl-rc-title">"{rev.title}"</h4>
                <p className="arl-rc-quote">"{rev.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exact User Callout: Need Help? */}
      <section className="arl-help-section">
        <div className="arl-container">
          <div className="arl-help-card">
            <div className="arl-help-grid">
              {/* Left Column: Verbatim Help Info */}
              <div className="arl-help-info">
                <div className="arl-section-kicker arl-help-kicker">
                  <span className="arl-kicker-dot" />
                  <span>GET IN TOUCH WITH OUR TEAM</span>
                </div>

                <h3 className="arl-help-title">Need Help?</h3>
                <p className="arl-help-text">
                  Give us a call/text or fill out our instant quote form to get in contact with us, we will respond as soon as we can.
                </p>

                <div className="arl-help-contacts">
                  {/* Phone Block */}
                  <div className="arl-contact-block">
                    <div className="arl-cb-icon-wrap">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <div className="arl-cb-label">Give us a call</div>
                      <a href="tel:4693605805" className="arl-cb-val">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  {/* Mail Block */}
                  <div className="arl-contact-block">
                    <div className="arl-cb-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="arl-cb-mail-link"
                      >
                        Leave a message
                      </a>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="arl-cb-val"
                      >
                        support@arssconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="arl-help-actions">
                  <a href="/request-inspection" className="arl-btn-quote">
                    <Calendar size={17} />
                    <span>Get Free Arlington Estimate</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch & Texas Coverage */}
              <div className="arl-help-sidebar">
                <div className="arl-dispatch-card">
                  <div className="arl-dc-head">
                    <div className="arl-dc-badge">
                      <span className="arl-dc-pulse" />
                      <span>Arlington Dispatch Ready</span>
                    </div>
                  </div>
                  <h4 className="arl-dc-title">Arlington, TX Service Hub</h4>
                  <p className="arl-dc-text">
                    Local mobile units stationed for rapid 24/7 disaster mitigation and complimentary remodeling consultations.
                  </p>

                  <div className="arl-dc-details">
                    <div className="arl-dcd-item">
                      <MapPin size={16} className="text-amber-500" />
                      <span>Arlington, TX • Tarrant County</span>
                    </div>
                    <div className="arl-dcd-item">
                      <Clock size={16} className="text-amber-500" />
                      <span>Emergency Dispatch: 24/7/365</span>
                    </div>
                    <div className="arl-dcd-item">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span>Fully Bonded, Insured &amp; Texas Regulated</span>
                    </div>
                  </div>

                  <a href="/contact" className="arl-dc-btn">
                    <span>Contact Arlington Office</span>
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


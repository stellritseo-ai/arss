import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { buildPageHead } from "../lib/seo";
import {
  Star,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Home,
  ChevronRight,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  MessageSquareQuote,
  ThumbsUp,
  Building2,
  Sparkles,
  Clock,
  Award,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/reviews")({
  head: buildPageHead({
    title: "Client Testimonials & Google Reviews | ARSS Construction",
    description:
      "Read real 5-star Google reviews from Dallas-Fort Worth homeowners, facility managers, and business owners who trust ARSS Construction for remodeling and restoration.",
    path: "/reviews",
    keywords: [
      "ARSS construction reviews",
      "Dallas contractor ratings",
      "home remodeling testimonials DFW",
      "restoration company reviews Texas",
      "5 star general contractor Dallas",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Client Reviews", url: "/reviews" },
    ],
  }),
  component: ReviewsPage,
});

function GoogleIcon({ size = 18 }: { size?: number }) {
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

interface Testimonial {
  id: string;
  author: string;
  initials: string;
  avatarColor: string;
  role: string;
  location: string;
  category: "all" | "remodeling" | "commercial" | "restoration";
  categoryLabel: string;
  date: string;
  stars: number;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    author: "Henrik T. Andersen",
    initials: "HA",
    avatarColor: "#0d9488",
    role: "Verified Homeowner • Local Guide",
    location: "Highland Park, Dallas TX",
    category: "restoration",
    categoryLabel: "Water Damage Restoration",
    date: "2 months ago",
    stars: 5,
    title: "Honest, prompt, and exceptional craftsmanship",
    quote:
      "ARSS restored our kitchen and lower living areas after severe water damage from an upstairs leak. The finished result looks better than the day we bought the house! No hidden fees, no surprises, and the superintendent was on-site every single day.",
  },
  {
    id: "rev-2",
    author: "David Sterling",
    initials: "DS",
    avatarColor: "#059669",
    role: "Commercial Property Manager",
    location: "Downtown Dallas, TX",
    category: "commercial",
    categoryLabel: "Commercial Finish-Out",
    date: "2 weeks ago",
    stars: 5,
    title: "On-site in 45 minutes and delivered on schedule",
    quote:
      "When our commercial executive suite suffered smoke damage, ARSS was on site in 45 minutes. They coordinated metal studs, fire-rated drywall, paint, and ceiling grid work flawlessly while keeping the rest of our tenant wing operating safely.",
  },
  {
    id: "rev-3",
    author: "Joy Daniels",
    initials: "JD",
    avatarColor: "#7c3aed",
    role: "Verified Client • Local Guide",
    location: "Preston Hollow, Dallas TX",
    category: "remodeling",
    categoryLabel: "Luxury Kitchen & Bath",
    date: "3 weeks ago",
    stars: 5,
    title: "Master tile, custom framing, and cabinet installation",
    quote:
      "Friendly, professional, and very thorough. We had dozens of questions about custom layout options and load-bearing wall removal. The ARSS crew delivered top-tier tile, framing, custom cabinetry, and flawless paint. Highly recommended!",
  },
  {
    id: "rev-4",
    author: "Chris Watson",
    initials: "CW",
    avatarColor: "#dc2626",
    role: "Real Estate Developer • Local Guide",
    location: "Frisco, TX",
    category: "commercial",
    categoryLabel: "Commercial Construction",
    date: "1 month ago",
    stars: 5,
    title: "Fair upfront pricing with verified trade excellence",
    quote:
      "Very knowledgeable, gave fair upfront pricing, and was prompt throughout the entire job. As an investor who has managed multiple builds across Texas, I can attest that ARSS Construction ranks among the top general contractors in North Texas.",
  },
  {
    id: "rev-5",
    author: "Elena & Marcus Vance",
    initials: "MV",
    avatarColor: "#d97706",
    role: "Verified Homeowners",
    location: "Plano, TX",
    category: "remodeling",
    categoryLabel: "Full Architectural Remodel",
    date: "4 months ago",
    stars: 5,
    title: "Complete whole-home renovation exceeded expectations",
    quote:
      "We hired ARSS for a full-home architectural transformation including opening up the living room, structural beam reinforcement, and a spa-inspired master retreat. The level of craftsmanship and cleanliness was remarkable.",
  },
  {
    id: "rev-6",
    author: "Andrew Robinson",
    initials: "AR",
    avatarColor: "#ea580c",
    role: "Verified Client",
    location: "Arlington, TX",
    category: "restoration",
    categoryLabel: "Emergency Disaster Mitigation",
    date: "3 days ago",
    stars: 5,
    title: "Stop looking and just call ARSS Construction",
    quote:
      "If you need construction or emergency restoration in Dallas-Fort Worth, stop looking and just call ARSS Construction. The project manager dispatched immediately, handled our structural drying, and rebuilt the framing with perfection.",
  },
  {
    id: "rev-7",
    author: "Robert Hernandez",
    initials: "RH",
    avatarColor: "#475569",
    role: "Municipal Facilities Administrator",
    location: "Irving, TX",
    category: "commercial",
    categoryLabel: "Facility Renovation",
    date: "2 months ago",
    stars: 5,
    title: "Completed facility overhaul without disrupting daily operations",
    quote:
      "Their crew completed a full interior overhaul and ADA compliance modernization while keeping our administrative building fully open. Organized, clean, courteous, and strictly compliant with Texas commercial building codes.",
  },
  {
    id: "rev-8",
    author: "Lance Vincent",
    initials: "LV",
    avatarColor: "#2563eb",
    role: "Verified Homeowner",
    location: "Fort Worth, TX",
    category: "remodeling",
    categoryLabel: "Custom Millwork & Interior",
    date: "2 months ago",
    stars: 5,
    title: "Explained material upgrades with transparent pricing",
    quote:
      "Very knowledgeable & gave upfront pricing. No surprises. Explained recommendations for upgrades to builder-grade materials on our home. The new finish is magnificent & jobsite cleanliness was top notch every afternoon.",
  },
  {
    id: "rev-9",
    author: "Brooke Young",
    initials: "BY",
    avatarColor: "#9333ea",
    role: "Commercial Tenant • Local Guide",
    location: "Dallas, TX",
    category: "commercial",
    categoryLabel: "Tenant Improvement Buildout",
    date: "1 month ago",
    stars: 5,
    title: "They did what they said and completed on time",
    quote:
      "This was an amazing experience working with ARSS Construction. They did what they said, pointed me in the right direction for cost-effective architectural finishes, and completed our tenant remodel flawlessly before opening day.",
  },
];

function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "remodeling" | "commercial" | "restoration"
  >("all");

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonials
      : testimonials.filter((item) => item.category === selectedCategory);

  return (
    <div className="arss-exact-page rev-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="rev-hero-section">
        <div
          className="rev-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="rev-hero-overlay" aria-hidden="true" />

        <div className="rev-hero-container">
          {/* Breadcrumb */}
          <nav className="rev-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="rev-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="rev-breadcrumb-sep" />
            <span className="rev-breadcrumb-current">Reviews</span>
          </nav>

          <div className="rev-hero-kicker">
            <span className="rev-hero-kicker-dot" />
            <span>5-STAR GOOGLE VERIFIED REVIEWS &amp; TESTIMONIALS</span>
          </div>

          <h1 className="rev-hero-title">Client Reviews &amp; Testimonials</h1>
          <p className="rev-hero-subtitle">
            Read real, unfiltered feedback from North Texas homeowners, commercial property managers, and facility directors who rely on ARSS Construction for excellence, integrity, and timely delivery.
          </p>

          <div className="rev-hero-meta-strip">
            <div className="rev-hm-item">
              <Star size={15} className="rev-hm-star" />
              <span>5.0 Average Google Rating</span>
            </div>
            <div className="rev-hm-sep" />
            <div className="rev-hm-item">
              <ShieldCheck size={15} className="rev-hm-icon" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="rev-hm-sep" />
            <div className="rev-hm-item">
              <BadgeCheck size={15} className="rev-hm-icon" />
              <span>Verified Texas Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rating Scorecard & Trust Metric Bar */}
      <section className="rev-scorecard-section">
        <div className="rev-container">
          <div className="rev-scorecard-card">
            {/* Left Big Score Box */}
            <div className="rev-score-hero">
              <div className="rev-score-num-wrap">
                <span className="rev-score-num">5.0</span>
                <div className="rev-score-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="rev-star-filled" />
                  ))}
                </div>
              </div>
              <div className="rev-score-google">
                <GoogleIcon size={20} />
                <span>Google Verified Customer Reviews</span>
              </div>
              <p className="rev-score-desc">
                Based on verified feedback from homeowners, general contractors, and corporate facility directors across Texas.
              </p>
            </div>

            {/* Middle Key Metrics */}
            <div className="rev-score-metrics">
              <div className="rev-metric-item">
                <div className="rev-metric-top">
                  <ThumbsUp size={18} className="rev-metric-icon" />
                  <span className="rev-metric-val">100%</span>
                </div>
                <span className="rev-metric-label">Client Recommendation</span>
              </div>

              <div className="rev-metric-item">
                <div className="rev-metric-top">
                  <Clock size={18} className="rev-metric-icon" />
                  <span className="rev-metric-val">&lt; 60 Min</span>
                </div>
                <span className="rev-metric-label">Emergency Response Time</span>
              </div>

              <div className="rev-metric-item">
                <div className="rev-metric-top">
                  <Award size={18} className="rev-metric-icon" />
                  <span className="rev-metric-val">15+ Yrs</span>
                </div>
                <span className="rev-metric-label">Texas Craftsmanship</span>
              </div>

              <div className="rev-metric-item">
                <div className="rev-metric-top">
                  <ShieldCheck size={18} className="rev-metric-icon" />
                  <span className="rev-metric-val">Licensed</span>
                </div>
                <span className="rev-metric-label">Bonded &amp; Insured Pro</span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="rev-score-action">
              <div className="rev-sa-box">
                <h3 className="rev-sa-title">Worked with Us?</h3>
                <p className="rev-sa-sub">
                  We value your honest feedback and pride ourselves on continuous improvement.
                </p>
                <a
                  href="https://maps.google.com/?q=ARSS+Construction+Dallas+Texas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rev-google-btn"
                >
                  <GoogleIcon size={16} />
                  <span>Review Us on Google</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Reviews List with Filtering */}
      <section className="rev-list-section">
        <div className="rev-container">
          <div className="rev-list-header">
            <div>
              <div className="rev-section-kicker">
                <span className="rev-kicker-dot" />
                <span>AUTHENTIC EXPERIENCES</span>
              </div>
              <h2 className="rev-list-title">What Our Clients Say</h2>
              <p className="rev-list-subtitle">
                Explore unfiltered testimonials from residential remodelings, turnkey commercial finish-outs, and 24/7 disaster mitigation projects.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="rev-filter-tabs">
              <button
                type="button"
                className={`rev-filter-btn${selectedCategory === "all" ? " is-active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All Reviews ({testimonials.length})
              </button>
              <button
                type="button"
                className={`rev-filter-btn${selectedCategory === "remodeling" ? " is-active" : ""}`}
                onClick={() => setSelectedCategory("remodeling")}
              >
                Residential Remodeling
              </button>
              <button
                type="button"
                className={`rev-filter-btn${selectedCategory === "commercial" ? " is-active" : ""}`}
                onClick={() => setSelectedCategory("commercial")}
              >
                Commercial Finish-Out
              </button>
              <button
                type="button"
                className={`rev-filter-btn${selectedCategory === "restoration" ? " is-active" : ""}`}
                onClick={() => setSelectedCategory("restoration")}
              >
                Disaster Restoration
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="rev-grid">
            {filteredTestimonials.map((item) => (
              <div key={item.id} className="rev-card">
                {/* Top Row: Stars and Google Badge */}
                <div className="rev-card-top">
                  <div className="rev-card-stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={16} className="rev-star-filled" />
                    ))}
                  </div>

                  <div className="rev-card-gbadge">
                    <GoogleIcon size={13} />
                    <span>Google Verified</span>
                  </div>
                </div>

                {/* Review Title & Quote */}
                <h3 className="rev-card-title">“{item.title}”</h3>
                <p className="rev-card-quote">{item.quote}</p>

                {/* Project Tag & Location */}
                <div className="rev-card-tags">
                  <span className="rev-card-category-tag">
                    {item.categoryLabel}
                  </span>
                  <div className="rev-card-loc">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="rev-card-divider" />

                {/* Reviewer Meta Footer */}
                <div className="rev-card-author-row">
                  <div
                    className="rev-card-avatar"
                    style={{ backgroundColor: item.avatarColor }}
                  >
                    {item.initials}
                  </div>
                  <div className="rev-card-author-info">
                    <div className="rev-card-name-row">
                      <span className="rev-card-name">{item.author}</span>
                      <BadgeCheck size={15} className="rev-card-check" />
                    </div>
                    <div className="rev-card-meta-line">
                      <span>{item.role}</span>
                      <span className="rev-card-meta-sep">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The ARSS Quality Guarantees Banner */}
      <section className="rev-standards-section">
        <div className="rev-container">
          <div className="rev-standards-card">
            <div className="rev-standards-header">
              <div className="rev-standards-kicker">
                <ShieldCheck size={16} />
                <span>OUR CLIENT PLEDGE</span>
              </div>
              <h3 className="rev-standards-title">
                The Standards Behind Every 5-Star Review
              </h3>
              <p className="rev-standards-sub">
                We believe exceptional construction is built on transparent communication, uncompromised safety, and meticulous finishing.
              </p>
            </div>

            <div className="rev-standards-grid">
              <div className="rev-standard-box">
                <div className="rev-sb-num">01</div>
                <h4 className="rev-sb-title">Transparent Quotes</h4>
                <p className="rev-sb-desc">
                  Detailed material and labor breakdowns with zero unexpected change orders or hidden surcharges.
                </p>
              </div>

              <div className="rev-standard-box">
                <div className="rev-sb-num">02</div>
                <h4 className="rev-sb-title">Direct PM Supervision</h4>
                <p className="rev-sb-desc">
                  Dedicated project managers on-site ensuring daily jobsite cleanliness, trade sequencing, and code compliance.
                </p>
              </div>

              <div className="rev-standard-box">
                <div className="rev-sb-num">03</div>
                <h4 className="rev-sb-title">100% Workmanship Warranty</h4>
                <p className="rev-sb-desc">
                  Full post-completion walk-through, detailed punch-list sign-off, and solid guarantee on all labor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section - Matching Capabilities & Gallery */}
      <section className="rev-cta-section">
        <div className="rev-container">
          <div className="rev-cta-card">
            <div className="rev-cta-grid">
              <div className="rev-cta-main">
                <div className="rev-cta-kicker">
                  <span className="rev-cta-kicker-dot" />
                  <span>START YOUR PROJECT TODAY</span>
                </div>
                <h2 className="rev-cta-title">
                  Ready to Experience 5-Star Construction Excellence?
                </h2>
                <p className="rev-cta-desc">
                  Join hundreds of satisfied Texas homeowners and commercial facility managers. Contact our Dallas estimating team today for free inspections, transparent bids, and rapid emergency dispatch.
                </p>

                <div className="rev-cta-actions">
                  <a href="tel:4693605805" className="rev-cta-btn rev-cta-phone">
                    <PhoneCall size={18} />
                    <div>
                      <span className="rev-btn-sub">Direct Project Line</span>
                      <span className="rev-btn-val">(469) 360-5805</span>
                    </div>
                  </a>

                  <a href="mailto:support@arssconstruction.com" className="rev-cta-btn rev-cta-email">
                    <Mail size={18} />
                    <div>
                      <span className="rev-btn-sub">Email Estimating Team</span>
                      <span className="rev-btn-val">support@arssconstruction.com</span>
                    </div>
                  </a>

                  <a href="/#contact" className="rev-cta-btn rev-cta-quote">
                    <span>Request Free Proposal</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="rev-cta-side">
                <div className="rev-cta-office-card">
                  <div className="rev-coc-head">
                    <MapPin size={20} className="rev-coc-icon" />
                    <div>
                      <h4 className="rev-coc-title">Dallas Headquarters</h4>
                      <p className="rev-coc-sub">Serving All North Texas</p>
                    </div>
                  </div>
                  <p className="rev-coc-body">
                    24/7 emergency disaster response, luxury residential remodeling, and commercial tenant improvements across DFW.
                  </p>
                  <div className="rev-coc-badges">
                    <span className="rev-coc-badge">5.0 Star Rating</span>
                    <span className="rev-coc-badge">Texas Licensed &amp; Insured</span>
                    <span className="rev-coc-badge">Free On-Site Quotes</span>
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

export default ReviewsPage;


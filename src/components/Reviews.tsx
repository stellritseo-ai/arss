import { Star, BadgeCheck, ExternalLink } from "lucide-react";

interface Review {
  id: string;
  author: string;
  initials: string;
  avatarColor: string;
  meta: string;
  quote: string;
}

const row1Reviews: Review[] = [
  {
    id: "r1-1",
    author: "Henrik T. Andersen",
    initials: "HA",
    avatarColor: "#0d9488",
    meta: "Local Guide • 18 reviews • 2 months ago",
    quote:
      "Honest, prompt, and exceptional craftsmanship. ARSS restored our kitchen after water damage and it looks better than the day we bought the house. No hidden fees or surprises.",
  },
  {
    id: "r1-2",
    author: "Joy Daniels",
    initials: "JD",
    avatarColor: "#7c3aed",
    meta: "Local Guide • 15 reviews • 3 weeks ago",
    quote:
      "Friendly, professional, and very thorough. Had a few questions about custom layouts and they answered every one. The crew delivered top-tier tile, framing, and custom cabinetry.",
  },
  {
    id: "r1-3",
    author: "Chris Watson",
    initials: "CW",
    avatarColor: "#dc2626",
    meta: "Local Guide • 22 reviews • 1 month ago",
    quote:
      "Very knowledgeable, gave fair upfront pricing, and was very prompt and professional. Highly recommend using ARSS Construction for any commercial or residential project.",
  },
  {
    id: "r1-4",
    author: "Lance Vincent",
    initials: "LV",
    avatarColor: "#2563eb",
    meta: "Verified Client • 2 months ago",
    quote:
      "Very knowledgeable & gave upfront pricing. No surprises. Explained recommendations for upgrades to builder grade materials on our home. New finish is great & cleanliness was top notch.",
  },
  {
    id: "r1-5",
    author: "Elena & Marcus Vance",
    initials: "MV",
    avatarColor: "#d97706",
    meta: "Highland Park • 5 reviews • 4 months ago",
    quote:
      "We hired ARSS for a full-home architectural transformation. The open concept living space and custom kitchen work exceeded our expectations. Truly master craftsmen.",
  },
];

const row2Reviews: Review[] = [
  {
    id: "r2-1",
    author: "Andrew Robinson",
    initials: "AR",
    avatarColor: "#ea580c",
    meta: "Verified Client • 5 reviews • 3 days ago",
    quote:
      "If you need construction or emergency restoration in Dallas, stop looking and just call ARSS Construction. The project manager came out immediately and took incredible care of us.",
  },
  {
    id: "r2-2",
    author: "Lesley M.",
    initials: "LM",
    avatarColor: "#0284c7",
    meta: "Local Guide • 2 reviews • 1 week ago",
    quote:
      "Allen and the crew from ARSS were nothing short of amazing. They were prompt, professional, and thorough in their work. No upsells, just honest work with fair pricing.",
  },
  {
    id: "r2-3",
    author: "David Sterling",
    initials: "DS",
    avatarColor: "#059669",
    meta: "Commercial Property Manager • 2 weeks ago",
    quote:
      "Great service and fair price. Great work, customer service and very professional. When our commercial suite suffered fire damage, ARSS was on site in 45 minutes.",
  },
  {
    id: "r2-4",
    author: "Brooke Young",
    initials: "BY",
    avatarColor: "#9333ea",
    meta: "Local Guide • 2 reviews • 1 month ago",
    quote:
      "This was an amazing experience working with ARSS Construction. They did what they said, pointed me in the right direction, and completed our tenant remodel flawlessly.",
  },
  {
    id: "r2-5",
    author: "Robert Hernandez",
    initials: "RH",
    avatarColor: "#475569",
    meta: "Municipal Administrator • 2 months ago",
    quote:
      "Their team completed a full interior overhaul and ADA compliance modernization while keeping our administrative building fully open. Organized, clean, and courteous.",
  },
];

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

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="review-marquee-card">
      <div>
        <div className="review-card-top">
          <div className="review-stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} className="review-card-star" />
            ))}
          </div>

          <div className="review-google-badge">
            <GoogleIcon size={13} />
            <span>Google Verified</span>
          </div>
        </div>

        <p className="review-card-quote">&ldquo;{review.quote}&rdquo;</p>
      </div>

      <div className="review-card-bottom">
        <div
          className="review-avatar-circle"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div className="review-author-info">
          <div className="review-author-name-row">
            <span className="review-author-name">{review.author}</span>
            <BadgeCheck size={14} className="review-verified-badge" />
          </div>
          <span className="review-author-meta">{review.meta}</span>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  // Seamless loop by duplicating items
  const row1Items = [...row1Reviews, ...row1Reviews];
  const row2Items = [...row2Reviews, ...row2Reviews];

  return (
    <section id="reviews" className="section-reviews">
      <div className="reviews-header-container">
        {/* Top Google Verified Pill */}
        <div className="reviews-top-pill">
          <GoogleIcon size={16} />
          <span>ALL REVIEWS VERIFIED ON GOOGLE</span>
        </div>

        {/* Main Headline with Gradient Word Highlight */}
        <h2 className="reviews-marquee-title">
          Trusted by{" "}
          <span className="reviews-highlight-gradient">
            Hundreds of Property Owners
          </span>{" "}
          in Dallas-Fort Worth, TX
        </h2>

        {/* Subtitle */}
        <p className="reviews-marquee-subtitle">
          100% verified 5-star Google reviews. Real experiences from real homeowners and commercial clients across Dallas, Plano, Frisco, Arlington, and surrounding North Texas communities.
        </p>

        {/* Leave a review button */}
        <div className="reviews-cta-wrap">
          <a
            href="https://www.google.com/search?q=ARSS+Construction+Dallas+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-google-leave-btn"
          >
            <GoogleIcon size={15} />
            <span>LEAVE A REVIEW ON GOOGLE</span>
            <ExternalLink size={13} className="reviews-btn-ext-icon" />
          </a>
        </div>
      </div>

      {/* 2-Row Infinite Auto-Scrolling Marquee */}
      <div className="reviews-marquee-wrapper">
        {/* Row 1: Right to Left */}
        <div className="reviews-marquee-row">
          <div className="reviews-marquee-track reviews-track-left">
            {row1Items.map((review, idx) => (
              <ReviewCard key={`r1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="reviews-marquee-row">
          <div className="reviews-marquee-track reviews-track-right">
            {row2Items.map((review, idx) => (
              <ReviewCard key={`r2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

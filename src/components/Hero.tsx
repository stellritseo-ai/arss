import { useState, useEffect } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock, Award } from "lucide-react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      bgImage: hero1,
      kicker: "Top-Rated Texas Contractor • Residential & Commercial",
      title: "“ARSS Construction – Bringing Your Property Back To Life”",
      subtitle:
        "Expert Restoration, Remodeling, and Renovation Services You Can Trust across North Texas.",
      primaryCta: "Request Quote",
      primaryHref: "#contact",
      secondaryCta: "Call (469) 360-5805",
      secondaryHref: "tel:4693605805",
    },
    {
      bgImage: hero2,
      kicker: "24/7 Rapid Emergency Response",
      title: "“Certified Fire & Storm Damage Reconstruction”",
      subtitle:
        "Immediate soot mitigation, odor removal & full structural restoration for homes and businesses.",
      primaryCta: "Emergency Dispatch",
      primaryHref: "tel:4693605805",
      secondaryCta: "View Services",
      secondaryHref: "#services",
    },
    {
      bgImage: hero3,
      kicker: "Luxury Remodeling & Upgrades",
      title: "“Transforming Living Spaces With Precision Craftsmanship”",
      subtitle:
        "Custom kitchens, luxury baths, room additions & commercial facility modernizations.",
      primaryCta: "Explore Our Work",
      primaryHref: "#gallery",
      secondaryCta: "Request Quote",
      secondaryHref: "#contact",
    },
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeSlide] || slides[0]!;

  return (
    <section className="tp-slider-section">
      {/* Dynamic Background Image Slides */}
      <div className="tp-slider-bg-wrap">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`tp-slider-bg-slide${idx === activeSlide ? " active" : ""}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="tp-slider-overlay" />

      <div className="tp-slider-content-wrap">
        <div key={activeSlide} className="tp-slide-caption">
          {/* Top Trust Badge */}
          <div className="tp-hero-badge">
            <span className="tp-hero-badge-dot" aria-hidden="true" />
            <span>{current.kicker}</span>
          </div>

          {/* Main Title */}
          <h1 className="tp-caption-title">{current.title}</h1>

          {/* Subtitle */}
          <div className="tp-caption-content">
            <p>{current.subtitle}</p>
          </div>

          {/* Action Buttons */}
          <div className="tp-caption-buttons">
            <a href={current.primaryHref} className="tp-hero-btn-primary">
              <span>{current.primaryCta}</span>
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a href={current.secondaryHref} className="tp-hero-btn-secondary">
              <Phone size={15} strokeWidth={2.2} aria-hidden="true" />
              <span>{current.secondaryCta}</span>
            </a>
          </div>

          {/* Trust Highlights Ribbon */}
          <div className="tp-hero-trust-row">
            <div className="tp-hero-trust-item">
              <Clock size={14} className="tp-trust-icon" aria-hidden="true" />
              <span>24/7 Emergency Service</span>
            </div>
            <span className="tp-hero-trust-divider" aria-hidden="true">•</span>
            <div className="tp-hero-trust-item">
              <ShieldCheck size={14} className="tp-trust-icon" aria-hidden="true" />
              <span>Licensed &amp; Fully Insured</span>
            </div>
            <span className="tp-hero-trust-divider" aria-hidden="true">•</span>
            <div className="tp-hero-trust-item">
              <Award size={14} className="tp-trust-icon" aria-hidden="true" />
              <span>15+ Years Texas Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Slider Dots */}
      <div className="tp-slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`tp-slider-dot${idx === activeSlide ? " active" : ""}`}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

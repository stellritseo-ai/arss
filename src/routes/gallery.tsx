import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { buildPageHead } from "../lib/seo";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  X,
  ChevronLeft,
  Maximize2,
  Sparkles,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import heroImg from "../assets/hero1.png";

export const Route = createFileRoute("/gallery")({
  head: buildPageHead({
    title: "Project Portfolio & Gallery | ARSS Construction Dallas TX",
    description:
      "Browse high-definition photos of completed kitchen makeovers, luxury bathroom renovations, commercial build-outs, and fire/water restoration projects across DFW.",
    path: "/gallery",
    keywords: [
      "ARSS construction gallery",
      "remodeling project photos Dallas",
      "before after restoration Texas",
      "luxury kitchen portfolio DFW",
      "commercial construction gallery",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Project Gallery", url: "/gallery" },
    ],
  }),
  component: GalleryPage,
});

// Extract all images from assets/gallery folder dynamically
const galleryModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

const galleryImages: string[] = Object.values(galleryModules).map(
  (mod) => mod.default
);

function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Close lightbox modal
  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  // Navigate next / prev in lightbox
  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (activeImageIndex === null) return;
      setActiveImageIndex((prev) =>
        prev === null ? null : (prev + 1) % galleryImages.length
      );
    },
    [activeImageIndex]
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (activeImageIndex === null) return;
      setActiveImageIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + galleryImages.length) % galleryImages.length
      );
    },
    [activeImageIndex]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  return (
    <div className="arss-exact-page gal-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="gal-hero-section">
        <div
          className="gal-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="gal-hero-overlay" aria-hidden="true" />

        <div className="gal-hero-container">
          {/* Breadcrumb */}
          <nav className="gal-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="gal-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="gal-breadcrumb-sep" />
            <span className="gal-breadcrumb-current">Gallery</span>
          </nav>

          <div className="gal-hero-kicker">
            <span className="gal-hero-kicker-dot" />
            <span>TEXAS CRAFTSMANSHIP &amp; PROJECT SHOWCASE</span>
          </div>

          <h1 className="gal-hero-title">Project Gallery</h1>
          <p className="gal-hero-subtitle">
            Explore our curated showcase of master craftsmanship, luxury remodeling, commercial interior finish-out, and turnkey property restoration across North Texas and nationwide.
          </p>

          <div className="gal-hero-meta-strip">
            <div className="gal-hm-item">
              <MapPin size={15} className="gal-hm-icon" />
              <span>Dallas, Texas Headquarters</span>
            </div>
            <div className="gal-hm-sep" />
            <div className="gal-hm-item">
              <Sparkles size={15} className="gal-hm-icon" />
              <span>{galleryImages.length} High-Resolution Works</span>
            </div>
            <div className="gal-hm-sep" />
            <div className="gal-hm-item">
              <ShieldCheck size={15} className="gal-hm-icon" />
              <span>Texas Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gallery Section */}
      <section className="gal-main-section">
        <div className="gal-container">
          {/* Top Intro Bar */}
          <div className="gal-intro-bar">
            <div className="gal-ib-info">
              <span className="gal-ib-pill">Curated Portfolio</span>
              <p className="gal-ib-text">
                Demonstrating excellence in every detail — from custom residential finish-out to comprehensive commercial builds.
              </p>
            </div>
            <div className="gal-ib-stats">
              <span className="gal-ib-stat-num">{galleryImages.length}</span>
              <span className="gal-ib-stat-label">Featured Projects</span>
            </div>
          </div>

          {/* Pure Images Grid - No Text on Front of Images */}
          <div className="gal-grid">
            {galleryImages.map((imgSrc, index) => (
              <button
                type="button"
                key={imgSrc + index}
                className="gal-item-card"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`View photo ${index + 1}`}
              >
                <div className="gal-img-wrapper">
                  <img
                    src={imgSrc}
                    alt=""
                    loading="lazy"
                    className="gal-img"
                  />
                  {/* Clean, pure hover indicator with no text */}
                  <div className="gal-hover-overlay" aria-hidden="true">
                    <div className="gal-zoom-icon">
                      <Maximize2 size={22} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pure Image Lightbox Modal - No Text / No Content On Click */}
      {activeImageIndex !== null && (
        <div
          className="gal-lightbox-backdrop"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          {/* Close button */}
          <button
            type="button"
            className="gal-lightbox-close"
            onClick={handleClose}
            aria-label="Close image preview"
          >
            <X size={26} strokeWidth={2.4} />
          </button>

          {/* Previous image button */}
          <button
            type="button"
            className="gal-lightbox-prev"
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} strokeWidth={2.4} />
          </button>

          {/* Pure Image Container - Strictly zero text and zero captions */}
          <div
            className="gal-lightbox-img-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeImageIndex]}
              alt=""
              className="gal-lightbox-img"
            />
          </div>

          {/* Next image button */}
          <button
            type="button"
            className="gal-lightbox-next"
            onClick={handleNext}
            aria-label="Next photo"
          >
            <ChevronRight size={30} strokeWidth={2.4} />
          </button>
        </div>
      )}

      {/* 4. Bottom CTA Section - Matching Capabilities Page Style */}
      <section className="gal-cta-section">
        <div className="gal-container">
          <div className="gal-cta-card">
            <div className="gal-cta-grid">
              <div className="gal-cta-main">
                <div className="gal-cta-kicker">
                  <span className="gal-cta-kicker-dot" />
                  <span>START YOUR TEXAS PROJECT</span>
                </div>
                <h2 className="gal-cta-title">
                  Inspired by Our Work? Let's Build Together.
                </h2>
                <p className="gal-cta-desc">
                  From custom luxury home remodeling to multi-state commercial finish-out and emergency disaster reconstruction, ARSS Construction delivers turnkey perfection.
                </p>

                <div className="gal-cta-actions">
                  <a href="tel:4693605805" className="gal-cta-btn gal-cta-phone">
                    <PhoneCall size={18} />
                    <div>
                      <span className="gal-btn-sub">Direct Consultation</span>
                      <span className="gal-btn-val">(469) 360-5805</span>
                    </div>
                  </a>

                  <a href="mailto:support@arssconstruction.com" className="gal-cta-btn gal-cta-email">
                    <Mail size={18} />
                    <div>
                      <span className="gal-btn-sub">Email Estimating Team</span>
                      <span className="gal-btn-val">support@arssconstruction.com</span>
                    </div>
                  </a>

                  <a href="/#contact" className="gal-cta-btn gal-cta-quote">
                    <span>Request Free Estimate</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="gal-cta-side">
                <div className="gal-cta-office-card">
                  <div className="gal-coc-head">
                    <MapPin size={20} className="gal-coc-icon" />
                    <div>
                      <h4 className="gal-coc-title">Dallas Headquarters</h4>
                      <p className="gal-coc-sub">Serving All DFW &amp; Nationwide</p>
                    </div>
                  </div>
                  <p className="gal-coc-body">
                    Residential renovations, commercial tenant improvements, and 24/7 disaster mitigation response across North Texas.
                  </p>
                  <div className="gal-coc-badges">
                    <span className="gal-coc-badge">100% Satisfaction Guarantee</span>
                    <span className="gal-coc-badge">Licensed &amp; Insured</span>
                    <span className="gal-coc-badge">Free On-Site Consultations</span>
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

export default GalleryPage;


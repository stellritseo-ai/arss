import { useState } from "react";
import { submitInquiryFn } from "../lib/inquiry";
import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  Phone,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  Globe,
  Share2,
  Sparkles,
  Building2,
  Calendar,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await submitInquiryFn({
        data: {
          formType: "Contact Us",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          message: formData.message,
        },
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          res.message || "Failed to deliver inquiry. Please call us directly."
        );
      }
    } catch (err) {
      console.error(err);
      setSubmitError(
        "An error occurred while sending your message. Please call us directly at (469) 360-5805."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="arss-exact-page con-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="con-hero-section">
        <div
          className="con-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="con-hero-overlay" aria-hidden="true" />

        <div className="con-hero-container">
          {/* Breadcrumb */}
          <nav className="con-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="con-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="con-breadcrumb-sep" />
            <span className="con-breadcrumb-current">Contact Us</span>
          </nav>

          <div className="con-hero-kicker">
            <span className="con-hero-kicker-dot" />
            <span>TEXAS LICENSED &amp; INSURED GENERAL CONTRACTOR</span>
          </div>

          <h1 className="con-hero-title">Reach Out to Us Anytime</h1>
          <p className="con-hero-subtitle">
            We’re always here to assist you with your construction, restoration, and remodeling needs. Give us a call at (469) 360-5805, and our friendly team will guide you through the process, answer your questions, or schedule a consultation. Your satisfaction is our top priority.
          </p>

          <div className="con-hero-meta-strip">
            <div className="con-hm-item">
              <Phone size={15} className="con-hm-icon" />
              <span>Direct Hotline: (469) 360-5805</span>
            </div>
            <div className="con-hm-sep" />
            <div className="con-hm-item">
              <MapPin size={15} className="con-hm-icon" />
              <span>Headquarters: Dallas, Texas</span>
            </div>
            <div className="con-hm-sep" />
            <div className="con-hm-item">
              <Clock size={15} className="con-hm-icon" />
              <span>24/7 Rapid Emergency Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid Section */}
      <section className="con-main-section">
        <div className="con-container">
          <div className="con-grid">
            {/* Left Column: Let's Stay Connected Narrative & Direct Contacts */}
            <div className="con-info-col">
              <div className="con-section-kicker">
                <span className="con-kicker-dot" />
                <span>OPEN COMMUNICATION &amp; ACCESSIBILITY</span>
              </div>

              <h2 className="con-heading">Let’s Stay Connected</h2>

              <p className="con-lead">
                Stay in touch with ARSS Construction and discover how we can help transform your space. We’re committed to keeping communication open and accessible:
              </p>

              {/* Three Value Communication Touchpoints */}
              <div className="con-touchpoints">
                <div className="con-touch-item">
                  <div className="con-touch-icon-box">
                    <PhoneCall size={20} />
                  </div>
                  <div className="con-touch-body">
                    <h3 className="con-touch-title">Personalized Guidance</h3>
                    <p className="con-touch-text">
                      Speak directly to our team for personalized assistance, trade consultations, and rapid mobilization.
                    </p>
                  </div>
                </div>

                <div className="con-touch-item">
                  <div className="con-touch-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="con-touch-body">
                    <h3 className="con-touch-title">Prompt Inquiries</h3>
                    <p className="con-touch-text">
                      Drop us an email, and we’ll respond promptly with the comprehensive project information you need.
                    </p>
                  </div>
                </div>

                <div className="con-touch-item">
                  <div className="con-touch-icon-box">
                    <Share2 size={20} />
                  </div>
                  <div className="con-touch-body">
                    <h3 className="con-touch-title">Social &amp; Updates</h3>
                    <p className="con-touch-text">
                      Connect with us on social media to stay updated on our latest projects, design tips, and special offers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Info Card Strip */}
              <div className="con-details-card">
                <h3 className="con-dc-header">
                  <span>Direct Communication Directory</span>
                  <span className="con-dc-status">
                    <span className="con-dc-status-dot" />
                    <span>Active 24/7 Dispatch</span>
                  </span>
                </h3>

                <div className="con-dc-rows">
                  <div className="con-dc-row">
                    <div className="con-dc-icon-wrap">
                      <Phone size={17} />
                    </div>
                    <div className="con-dc-content">
                      <span className="con-dc-label">Phone:</span>
                      <a href="tel:4693605805" className="con-dc-val-link">
                        (469) 360-5805
                      </a>
                    </div>
                  </div>

                  <div className="con-dc-row">
                    <div className="con-dc-icon-wrap">
                      <Mail size={17} />
                    </div>
                    <div className="con-dc-content">
                      <span className="con-dc-label">Email:</span>
                      <a
                        href="mailto:support@arssconstruction.com"
                        className="con-dc-val-link"
                      >
                        support@arssconstruction.com
                      </a>
                    </div>
                  </div>

                  <div className="con-dc-row">
                    <div className="con-dc-icon-wrap">
                      <MapPin size={17} />
                    </div>
                    <div className="con-dc-content">
                      <span className="con-dc-label">Address:</span>
                      <span className="con-dc-val">
                        Dallas, Texas (Serving all North Texas &amp; Nationwide)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="con-dc-hours-box">
                  <div className="con-dc-hours-item">
                    <span className="con-dc-hours-day">Monday - Friday:</span>
                    <span className="con-dc-hours-time">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="con-dc-hours-item">
                    <span className="con-dc-hours-day">Saturday - Sunday:</span>
                    <span className="con-dc-hours-time">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="con-dc-hours-item con-dc-hours-emergency">
                    <span className="con-dc-hours-day">Emergency Mitigation:</span>
                    <span className="con-dc-hours-time">24 Hours / 365 Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form Card */}
            <div className="con-form-col">
              <div className="con-form-card">
                <div className="con-fc-accent-bar" />

                <div className="con-fc-header">
                  <span className="con-fc-kicker">INSTANT CONTACT &amp; QUOTE</span>
                  <h3 className="con-fc-title">Send Us a Message</h3>
                  <p className="con-fc-sub">
                    Fill out the form or call us using the phone number below. Our estimating team will respond promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="con-success-card">
                    <div className="con-sc-icon-wrap">
                      <CheckCircle2 size={46} className="text-emerald-500" />
                    </div>
                    <h4 className="con-sc-title">Message Received!</h4>
                    <p className="con-sc-desc">
                      Thank you, <strong>{formData.name || "valued client"}</strong>. Your project inquiry has been delivered directly to our Dallas estimating desk. A project manager will contact you within 15 minutes.
                    </p>
                    <div className="con-sc-summary">
                      <div className="con-sc-row">
                        <span>Phone:</span>
                        <strong>{formData.phone || "(469) 360-5805"}</strong>
                      </div>
                      <div className="con-sc-row">
                        <span>Email:</span>
                        <strong>{formData.email || "support@arssconstruction.com"}</strong>
                      </div>
                      {formData.address && (
                        <div className="con-sc-row">
                          <span>Address:</span>
                          <strong>{formData.address}</strong>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="con-reset-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          address: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="con-form" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="con-form-group">
                      <label htmlFor="con-name" className="con-form-label">
                        Name <span className="con-required">*</span>
                      </label>
                      <input
                        id="con-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="con-input"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="con-form-row-2">
                      <div className="con-form-group">
                        <label htmlFor="con-phone" className="con-form-label">
                          Phone <span className="con-required">*</span>
                        </label>
                        <input
                          id="con-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(469) 360-5805"
                          required
                          className="con-input"
                        />
                      </div>

                      <div className="con-form-group">
                        <label htmlFor="con-email" className="con-form-label">
                          Email <span className="con-required">*</span>
                        </label>
                        <input
                          id="con-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          required
                          className="con-input"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="con-form-group">
                      <label htmlFor="con-address" className="con-form-label">
                        Address <span className="con-required">*</span>
                      </label>
                      <input
                        id="con-address"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street, City, Texas (or project location)"
                        required
                        className="con-input"
                      />
                    </div>

                    {/* Message */}
                    <div className="con-form-group">
                      <label htmlFor="con-message" className="con-form-label">
                        Message <span className="con-required">*</span>
                      </label>
                      <textarea
                        id="con-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, scope, or scheduling needs..."
                        rows={4}
                        required
                        className="con-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      className="con-submit-btn"
                      disabled={isSubmitting}
                      style={isSubmitting ? { opacity: 0.75, cursor: "not-allowed" } : undefined}
                    >
                      {isSubmitting ? (
                        <span>Delivering Message...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry &amp; Request Consultation</span>
                          <ArrowRight size={17} />
                        </>
                      )}
                    </button>

                    {submitError && (
                      <div
                        style={{
                          color: "#dc2626",
                          background: "#fee2e2",
                          border: "1px solid #f87171",
                          borderRadius: "6px",
                          padding: "8px 12px",
                          fontSize: "13px",
                          marginBottom: "12px",
                          textAlign: "center",
                        }}
                      >
                        {submitError}
                      </div>
                    )}

                    <p className="con-form-privacy">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>Your information is strictly protected. We never sell or share client data.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Coverage Territory Map Card Strip */}
      <section className="con-map-section">
        <div className="con-container">
          <div className="con-map-card">
            <div className="con-mc-left">
              <div className="con-mc-kicker">
                <MapPin size={16} />
                <span>NORTH TEXAS SERVICE TERRITORY</span>
              </div>
              <h3 className="con-mc-title">
                Serving the Entire Dallas-Fort Worth Metroplex &amp; Beyond
              </h3>
              <p className="con-mc-desc">
                From our central Dallas dispatch office, our mobile estimator units service Dallas, Collin, Denton, and Tarrant counties with average 60-minute emergency arrival times.
              </p>

              <div className="con-mc-cities">
                <span className="con-city-pill">Dallas</span>
                <span className="con-city-pill">Plano</span>
                <span className="con-city-pill">Frisco</span>
                <span className="con-city-pill">Fort Worth</span>
                <span className="con-city-pill">Arlington</span>
                <span className="con-city-pill">Irving</span>
                <span className="con-city-pill">McKinney</span>
                <span className="con-city-pill">Garland</span>
                <span className="con-city-pill">Grand Prairie</span>
              </div>
            </div>

            <div className="con-mc-right">
              <a
                href="https://maps.google.com/?q=Dallas,+Texas"
                target="_blank"
                rel="noopener noreferrer"
                className="con-mc-map-box"
              >
                <div className="con-mc-pin">
                  <MapPin size={26} />
                </div>
                <div className="con-mc-pin-text">
                  <strong>ARSS Construction</strong>
                  <span>Dallas, Texas</span>
                </div>
                <span className="con-mc-link-pill">
                  <span>Open in Google Maps</span>
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section - Matching Capabilities Style */}
      <section className="con-cta-section">
        <div className="con-container">
          <div className="con-cta-card">
            <div className="con-cta-grid">
              <div className="con-cta-main">
                <div className="con-cta-kicker">
                  <span className="con-cta-kicker-dot" />
                  <span>TEXAS MASTER CONTRACTOR</span>
                </div>
                <h2 className="con-cta-title">
                  Prefer to Speak Over the Phone?
                </h2>
                <p className="con-cta-desc">
                  Our Dallas construction dispatch desk is manned around the clock. Call right now to speak with a licensed project manager or schedule an immediate property walk-through.
                </p>

                <div className="con-cta-actions">
                  <a href="tel:4693605805" className="con-cta-btn con-cta-phone">
                    <PhoneCall size={18} />
                    <div>
                      <span className="con-btn-sub">Direct Consultation</span>
                      <span className="con-btn-val">(469) 360-5805</span>
                    </div>
                  </a>

                  <a href="mailto:support@arssconstruction.com" className="con-cta-btn con-cta-email">
                    <Mail size={18} />
                    <div>
                      <span className="con-btn-sub">Email Estimating Team</span>
                      <span className="con-btn-val">support@arssconstruction.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="con-cta-side">
                <div className="con-cta-office-card">
                  <div className="con-coc-head">
                    <MapPin size={20} className="con-coc-icon" />
                    <div>
                      <h4 className="con-coc-title">Headquarters</h4>
                      <p className="con-coc-sub">Dallas, Texas</p>
                    </div>
                  </div>
                  <p className="con-coc-body">
                    24/7 disaster mitigation response, luxury residential remodeling, and commercial finish-out across North Texas.
                  </p>
                  <div className="con-coc-badges">
                    <span className="con-coc-badge">100% Satisfaction Guarantee</span>
                    <span className="con-coc-badge">Licensed &amp; Insured</span>
                    <span className="con-coc-badge">Free On-Site Evaluations</span>
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

export default ContactPage;


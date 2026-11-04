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
  Clock,
  CheckCircle2,
  Calendar,
  Building2,
  FileCheck2,
  Search,
  Sparkles,
  Flame,
  Phone,
} from "lucide-react";

import "../arss.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import heroImg from "../assets/hero1.png";

export const Route = createFileRoute("/request-inspection")({
  component: RequestInspectionPage,
});

function RequestInspectionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "remodeling",
    propertyType: "residential",
    urgency: "standard",
    notes: "",
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
          formType: "Request Inspection",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          service: formData.serviceType,
          propertyType: formData.propertyType,
          urgency: formData.urgency,
          message: formData.notes,
        },
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          res.message || "Failed to schedule inspection. Please call us directly."
        );
      }
    } catch (err) {
      console.error(err);
      setSubmitError(
        "An error occurred while booking inspection. Please call us directly at (469) 360-5805."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const steps = [
    {
      num: "01",
      title: "Schedule & Rapid Dispatch",
      desc: "Submit your property inspection request. Our Dallas dispatch team confirms your appointment and assigns a certified estimator within 15 minutes.",
      icon: Clock,
    },
    {
      num: "02",
      title: "Detailed Physical Assessment",
      desc: "Our estimator performs a complete on-site walk-through, laser measurements, structural framing check, and advanced moisture/soot diagnostic scans.",
      icon: Search,
    },
    {
      num: "03",
      title: "Itemized Scope & Free Quote",
      desc: "Receive a clear, transparent line-item estimate detailing material options, architectural specifications, and exact project timelines with zero obligation.",
      icon: FileCheck2,
    },
    {
      num: "04",
      title: "Turnkey Execution & Delivery",
      desc: "Once approved, our skilled tradesmen mobilize under direct superintendent oversight, backed by our Texas 100% satisfaction guarantee.",
      icon: CheckCircle2,
    },
  ];

  const inspectionBenefits = [
    {
      title: "100% Free & No Obligation",
      desc: "Our on-site evaluations are completely complimentary with transparent pricing and zero high-pressure sales tactics.",
      icon: CheckCircle2,
    },
    {
      title: "Insurance Claim Compatible",
      desc: "We provide comprehensive Xactimate-standard scopes and direct documentation assistance for all major insurance carriers.",
      icon: ShieldCheck,
    },
    {
      title: "60-Minute Emergency Dispatch",
      desc: "Facing active water intrusion, storm damage, or fire aftermath? Our emergency response team arrives on-site rapidly across DFW.",
      icon: Flame,
    },
    {
      title: "Licensed Texas General Contractor",
      desc: "Fully bonded, state-regulated, and insured with over 15 years of master craftsmanship across North Texas and nationwide.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="arss-exact-page insp-page">
      <Header />

      {/* 1. Page Header & Hero Banner */}
      <section className="insp-hero-section">
        <div
          className="insp-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="insp-hero-overlay" aria-hidden="true" />

        <div className="insp-hero-container">
          {/* Breadcrumb */}
          <nav className="insp-breadcrumb" aria-label="Breadcrumb">
            <a href="/" className="insp-breadcrumb-link">
              <Home size={14} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="insp-breadcrumb-sep" />
            <span className="insp-breadcrumb-current">Request Inspection</span>
          </nav>

          <div className="insp-hero-kicker">
            <span className="insp-hero-kicker-dot" />
            <span>TEXAS LICENSED &amp; INSURED ON-SITE EVALUATIONS</span>
          </div>

          <h1 className="insp-hero-title">Request a Free Property Inspection</h1>
          <p className="insp-hero-subtitle">
            Schedule a thorough on-site physical evaluation with our licensed Dallas estimators. We assess property damage, evaluate structural renovation needs, and deliver transparent turnkey estimates with zero obligation.
          </p>

          <div className="insp-hero-meta-strip">
            <div className="insp-hm-item">
              <Clock size={15} className="insp-hm-icon" />
              <span>Average Arrival: &lt; 60 Minutes</span>
            </div>
            <div className="insp-hm-sep" />
            <div className="insp-hm-item">
              <MapPin size={15} className="insp-hm-icon" />
              <span>Dallas Headquarters • Serving All DFW</span>
            </div>
            <div className="insp-hm-sep" />
            <div className="insp-hm-item">
              <ShieldCheck size={15} className="insp-hm-icon" />
              <span>100% Free &amp; No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Inspection Form & Direct Booking Section */}
      <section className="insp-main-section">
        <div className="insp-container">
          <div className="insp-grid">
            {/* Left Column: Form Card */}
            <div className="insp-form-col">
              <div className="insp-form-card">
                <div className="insp-fc-accent-bar" />

                <div className="insp-fc-header">
                  <span className="insp-fc-kicker">COMPLIMENTARY PROPERTY ASSESSMENT</span>
                  <h2 className="insp-fc-title">Book Your On-Site Inspection</h2>
                  <p className="insp-fc-sub">
                    Fill out the scheduling form below. Our Dallas estimating desk will contact you within 15 minutes to confirm appointment timing.
                  </p>
                </div>

                {submitted ? (
                  <div className="insp-success-card">
                    <div className="insp-sc-icon-wrap">
                      <CheckCircle2 size={46} className="text-emerald-500" />
                    </div>
                    <h3 className="insp-sc-title">Inspection Request Received!</h3>
                    <p className="insp-sc-desc">
                      Thank you, <strong>{formData.name || "valued client"}</strong>. Your inspection request has been logged into our Dallas dispatch schedule. An estimator will call <strong>{formData.phone || "(469) 360-5805"}</strong> within 15 minutes to finalize your walk-through time.
                    </p>

                    <div className="insp-sc-summary">
                      <div className="insp-sc-row">
                        <span>Property Address:</span>
                        <strong>{formData.address || "Dallas, Texas"}</strong>
                      </div>
                      <div className="insp-sc-row">
                        <span>Service Scope:</span>
                        <strong className="capitalize">{formData.serviceType}</strong>
                      </div>
                      <div className="insp-sc-row">
                        <span>Property Category:</span>
                        <strong className="capitalize">{formData.propertyType}</strong>
                      </div>
                      <div className="insp-sc-row">
                        <span>Timeline:</span>
                        <strong className="capitalize">{formData.urgency}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="insp-reset-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          address: "",
                          serviceType: "remodeling",
                          propertyType: "residential",
                          urgency: "standard",
                          notes: "",
                        });
                      }}
                    >
                      Book Another Property Inspection
                    </button>
                  </div>
                ) : (
                  <form className="insp-form" onSubmit={handleSubmit}>
                    {/* Service Type Selection */}
                    <div className="insp-form-group">
                      <label className="insp-form-label">
                        Primary Service Needed <span className="insp-required">*</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="insp-select"
                        required
                      >
                        <option value="remodeling">Luxury Residential Remodeling (Kitchen, Bath, Additions)</option>
                        <option value="fire-water-restoration">Emergency Water &amp; Fire Damage Restoration</option>
                        <option value="commercial-finishout">Commercial Interior Finish-Out &amp; Drywall</option>
                        <option value="general-construction">General Construction &amp; Structural Framing</option>
                        <option value="roofing-exterior">Roofing, Trusses &amp; Exterior Reconstruction</option>
                      </select>
                    </div>

                    {/* Property Type & Urgency Row */}
                    <div className="insp-form-row-2">
                      <div className="insp-form-group">
                        <label className="insp-form-label">
                          Property Type <span className="insp-required">*</span>
                        </label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="insp-select"
                          required
                        >
                          <option value="residential">Single Family Home</option>
                          <option value="luxury-estate">Luxury Estate / Architectural Home</option>
                          <option value="commercial-office">Commercial Office Building</option>
                          <option value="hospitality-hotel">Hotel / Hospitality Facility</option>
                          <option value="retail-space">Retail / Multi-Tenant Facility</option>
                        </select>
                      </div>

                      <div className="insp-form-group">
                        <label className="insp-form-label">
                          Inspection Urgency <span className="insp-required">*</span>
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="insp-select"
                          required
                        >
                          <option value="emergency">Emergency (Within 60 Minutes)</option>
                          <option value="next-24-hours">Next 24 Hours</option>
                          <option value="this-week">This Week (Flexible Schedule)</option>
                          <option value="planning-phase">Planning Phase / Upcoming Bid</option>
                        </select>
                      </div>
                    </div>

                    {/* Full Name & Phone Row */}
                    <div className="insp-form-row-2">
                      <div className="insp-form-group">
                        <label htmlFor="insp-name" className="insp-form-label">
                          Full Name <span className="insp-required">*</span>
                        </label>
                        <input
                          id="insp-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          required
                          className="insp-input"
                        />
                      </div>

                      <div className="insp-form-group">
                        <label htmlFor="insp-phone" className="insp-form-label">
                          Phone Number <span className="insp-required">*</span>
                        </label>
                        <input
                          id="insp-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(469) 360-5805"
                          required
                          className="insp-input"
                        />
                      </div>
                    </div>

                    {/* Email & Property Address Row */}
                    <div className="insp-form-row-2">
                      <div className="insp-form-group">
                        <label htmlFor="insp-email" className="insp-form-label">
                          Email Address <span className="insp-required">*</span>
                        </label>
                        <input
                          id="insp-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                          className="insp-input"
                        />
                      </div>

                      <div className="insp-form-group">
                        <label htmlFor="insp-address" className="insp-form-label">
                          Property Address in Texas <span className="insp-required">*</span>
                        </label>
                        <input
                          id="insp-address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street, City, Texas (or DFW location)"
                          required
                          className="insp-input"
                        />
                      </div>
                    </div>

                    {/* Notes / Project Details */}
                    <div className="insp-form-group">
                      <label htmlFor="insp-notes" className="insp-form-label">
                        Project Details / Damage Notes (Optional)
                      </label>
                      <textarea
                        id="insp-notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Describe your property damage, desired renovation scope, rooms involved, or preferred inspection time..."
                        rows={3}
                        className="insp-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      className="insp-submit-btn"
                      disabled={isSubmitting}
                      style={isSubmitting ? { opacity: 0.75, cursor: "not-allowed" } : undefined}
                    >
                      {isSubmitting ? (
                        <span>Scheduling Inspection...</span>
                      ) : (
                        <>
                          <span>Confirm &amp; Request Free Inspection</span>
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

                    <p className="insp-form-privacy">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>100% Free Consultation. No payment or credit card required.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Fast Dispatch & Inspection Advantages */}
            <div className="insp-sidebar-col">
              {/* Emergency Hotline Banner */}
              <div className="insp-hotline-card">
                <div className="insp-hc-kicker">
                  <Flame size={15} />
                  <span>24/7 ACTIVE EMERGENCY DISPATCH</span>
                </div>
                <h3 className="insp-hc-title">Facing Immediate Damage?</h3>
                <p className="insp-hc-desc">
                  For active burst pipes, severe roof fire damage, or structural emergencies, bypass the web form and call our emergency line directly.
                </p>
                <a href="tel:4693605805" className="insp-hc-btn">
                  <PhoneCall size={18} />
                  <span>Call (469) 360-5805 Now</span>
                </a>
              </div>

              {/* Four Core Inspection Benefits */}
              <div className="insp-benefits-card">
                <h3 className="insp-bc-title">Why Schedule an ARSS Inspection?</h3>
                <div className="insp-bc-list">
                  {inspectionBenefits.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="insp-bc-item">
                        <div className="insp-bc-icon-box">
                          <Icon size={18} />
                        </div>
                        <div className="insp-bc-body">
                          <h4 className="insp-bc-heading">{item.title}</h4>
                          <p className="insp-bc-text">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Texas Coverage territory box */}
              <div className="insp-territory-card">
                <div className="insp-tc-head">
                  <MapPin size={18} className="text-amber-500" />
                  <h4>DFW Coverage Territory</h4>
                </div>
                <p className="insp-tc-text">
                  Our estimators service Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, McKinney, Garland, Denton, and surrounding North Texas communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Inspection Workflow */}
      <section className="insp-steps-section">
        <div className="insp-container">
          <div className="insp-section-header">
            <div className="insp-section-kicker">
              <span className="insp-kicker-dot" />
              <span>TRANSPARENT PROCESS</span>
            </div>
            <h2 className="insp-section-title">How Our Inspection Works</h2>
            <p className="insp-section-subtitle">
              From our initial on-site walk-through to complete project handover, here is what you can expect from ARSS Construction.
            </p>
          </div>

          <div className="insp-steps-grid">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="insp-step-card">
                  <div className="insp-sc-top">
                    <span className="insp-sc-num">{step.num}</span>
                    <div className="insp-sc-icon-wrap">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="insp-sc-step-title">{step.title}</h3>
                  <p className="insp-sc-step-desc">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section - Matching Capabilities Style */}
      <section className="insp-cta-section">
        <div className="insp-container">
          <div className="insp-cta-card">
            <div className="insp-cta-grid">
              <div className="insp-cta-main">
                <div className="insp-cta-kicker">
                  <span className="insp-cta-kicker-dot" />
                  <span>TEXAS MASTER CONTRACTOR</span>
                </div>
                <h2 className="insp-cta-title">
                  Need Help Deciding What You Need?
                </h2>
                <p className="insp-cta-desc">
                  Our Dallas construction dispatch desk is manned around the clock. Call right now to speak directly with an estimator or schedule your free property inspection.
                </p>

                <div className="insp-cta-actions">
                  <a href="tel:4693605805" className="insp-cta-btn insp-cta-phone">
                    <PhoneCall size={18} />
                    <div>
                      <span className="insp-btn-sub">Direct Project Line</span>
                      <span className="insp-btn-val">(469) 360-5805</span>
                    </div>
                  </a>

                  <a href="mailto:support@arssconstruction.com" className="insp-cta-btn insp-cta-email">
                    <Mail size={18} />
                    <div>
                      <span className="insp-btn-sub">Email Estimating Team</span>
                      <span className="insp-btn-val">support@arssconstruction.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="insp-cta-side">
                <div className="insp-cta-office-card">
                  <div className="insp-coc-head">
                    <MapPin size={20} className="insp-coc-icon" />
                    <div>
                      <h4 className="insp-coc-title">Headquarters</h4>
                      <p className="insp-coc-sub">Dallas, Texas</p>
                    </div>
                  </div>
                  <p className="insp-coc-body">
                    Commercial finish-out, luxury residential renovations, and 24/7 disaster mitigation response across North Texas.
                  </p>
                  <div className="insp-coc-badges">
                    <span className="insp-coc-badge">100% Free Evaluation</span>
                    <span className="insp-coc-badge">Licensed &amp; Insured</span>
                    <span className="insp-coc-badge">Xactimate Compatible</span>
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

export default RequestInspectionPage;


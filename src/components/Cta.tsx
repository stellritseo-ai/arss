import { ArrowRight, PhoneCall, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export function Cta() {
  return (
    <section className="section-cta">
      <div className="section-cta-overlay" />
      <div className="cta-container">
        {/* Eyebrow Badge */}
        <div className="cta-kicker">
          <span className="cta-kicker-dot" />
          <span>START YOUR PROJECT WITH ARSS CONSTRUCTION</span>
        </div>

        {/* Main Heading */}
        <h2 className="cta-title">
          Get Started on Your Restoration or Renovation Journey Today.
        </h2>

        {/* Subtitle */}
        <p className="cta-subtitle">
          Contact us now for a free consultation, expert on-site evaluation, and take the first step toward transforming your residential or commercial space.
        </p>

        {/* Action Buttons */}
        <div className="cta-actions">
          <a href="#contact" className="cta-btn-primary" style={{ color: "#ffffff" }}>
            <span style={{ color: "#ffffff" }}>Book a Free Consultation</span>
            <ArrowRight size={17} className="cta-btn-arrow" style={{ color: "#ffffff" }} />
          </a>
          <a href="tel:4693605805" className="cta-btn-secondary" style={{ color: "#ffffff" }}>
            <PhoneCall size={17} style={{ color: "#ffffff" }} />
            <span style={{ color: "#ffffff" }}>(469) 360-5805</span>
          </a>
        </div>

        {/* Trust Guarantees */}
        <div className="cta-guarantees">
          <div className="cta-guarantee-item">
            <CheckCircle2 size={16} className="cta-guarantee-icon" />
            <span>Free On-Site Evaluation</span>
          </div>
          <div className="cta-guarantee-item">
            <ShieldCheck size={16} className="cta-guarantee-icon" />
            <span>Fully Licensed &amp; Insured</span>
          </div>
          <div className="cta-guarantee-item">
            <Clock size={16} className="cta-guarantee-icon" />
            <span>24/7 Emergency Dispatch</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;

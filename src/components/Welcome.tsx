import { useState } from "react";
import {
  Flame,
  Home,
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
} from "lucide-react";

const welcomeParagraphs = [
  "At ARSS Construction, we are dedicated to restoring and transforming properties with expert solutions tailored to your needs. We specialize in fire damage repair, remodeling and renovations, water damage restoration, and mold removal. Our experienced team knows how to handle any challenge and get the job done right.",
  "We proudly serve major cities in the Dallas–Fort Worth area, including Arlington, Irving, Frisco, Plano, and Dallas. Whether you need repairs after damage or want to update your space, we are ready to assist you every step of the way.",
  "Let us bring your home or business back to life with quality work and great service. Contact us today to get started.",
];

const pillars = [
  {
    icon: Flame,
    title: "Disaster Recovery",
    desc: "Rapid fire & water mitigation and full structural restoration",
  },
  {
    icon: Home,
    title: "Luxury Remodeling",
    desc: "Kitchens, baths, room additions & comprehensive transformations",
  },
  {
    icon: Building2,
    title: "General Construction",
    desc: "Commercial build-outs, tenant improvements & turnkey builds",
  },
  {
    icon: MapPin,
    title: "DFW Wide Coverage",
    desc: "Dallas, Plano, Frisco, Arlington & Irving emergency response",
  },
];

const serviceOptions = [
  { value: "", label: "-- Please Select Required Service --" },
  { value: "remodeling", label: "Remodeling & Renovation Services" },
  { value: "fire", label: "Fire Damage Restoration Services" },
  { value: "general", label: "General Construction Services" },
  { value: "facility", label: "Renovation and Facility Upgrades" },
];

export function Welcome() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="about" className="section-welcome">
      <div className="welcome-container">
        {/* Left Column: Brand Story & Pillars */}
        <div className="welcome-left">
          <div className="welcome-kicker-row">
            <span className="welcome-kicker-badge">Texas Licensed &amp; Insured</span>
            <span className="welcome-kicker-divider">•</span>
            <span className="welcome-kicker-sub">15+ Years Proven Experience</span>
          </div>

          <h2 className="welcome-heading">Welcome to ARSS Construction</h2>

          <div className="welcome-text">
            {welcomeParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Capability Highlights */}
          <div className="welcome-pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="welcome-pillar-card">
                  <div className="welcome-pillar-icon-box">
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <div className="welcome-pillar-info">
                    <h4 className="welcome-pillar-title">{pillar.title}</h4>
                    <p className="welcome-pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Guarantees */}
          <div className="welcome-trust-guarantees">
            <div className="welcome-guarantee-item">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Certified Technicians</span>
            </div>
            <div className="welcome-guarantee-item">
              <ShieldCheck size={16} className="text-blue-500" />
              <span>Fully Bonded &amp; Insured</span>
            </div>
            <div className="welcome-guarantee-item">
              <CheckCircle2 size={16} className="text-orange-500" />
              <span>Free On-Site Evaluation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Inspection Request Card */}
        <div id="contact" className="welcome-right">
          <div className="inspection-card-accent-bar" />

          <div className="inspection-header">
            <span className="inspection-kicker">FAST 24/7 SCHEDULING</span>
            <h3 className="inspection-heading">GET AN INSPECTION</h3>
            <p className="inspection-subheading">
              Request a free property assessment or consultation from our Dallas team.
            </p>
          </div>

          {submitted ? (
            <div className="inspection-success-card">
              <CheckCircle2 size={44} className="inspection-success-icon" />
              <h4>Request Received!</h4>
              <p>
                Thank you. Our project estimator will contact you within 15 minutes
                to confirm your inspection details.
              </p>
              <button
                type="button"
                className="inspection-reset-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form
              className="arss-quote-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  required
                />
              </div>

              <div className="form-row-grid">
                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <select name="service" defaultValue="" required>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <textarea
                  rows={4}
                  name="message"
                  placeholder="How Can We Help? (Property address, damage details, remodeling goals...)"
                  required
                />
              </div>

              <div className="submit-row">
                <button type="submit" className="inspection-submit-btn">
                  <span>Request An Inspection</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>

              <div className="inspection-privacy-note">
                <Lock size={12} />
                <span>Your information is strictly protected and never shared.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Welcome;

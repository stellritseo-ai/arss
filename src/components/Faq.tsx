import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
  Calendar,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "What fire & water disaster restoration services do you provide?",
    a: "We offer comprehensive 24/7 disaster mitigation across North Texas, including rapid emergency board-up, thermal soot and smoke residue extraction, toxic odor neutralization, standing water extraction, structural drying, and complete structural reconstruction for residential and commercial properties.",
  },
  {
    q: "How fast can your emergency response team arrive on-site?",
    a: "Our rapid dispatch units are strategically located throughout Dallas-Fort Worth. We maintain round-the-clock emergency readiness and typically arrive on-site within 45 to 60 minutes to stabilize your property and mitigate further loss.",
  },
  {
    q: "What types of remodeling and renovation projects do you handle?",
    a: "We specialize in luxury kitchen transformations, spa-inspired master bathrooms, whole-home open-concept renovations, architectural room additions, and turnkey commercial tenant improvements across Dallas, Plano, Frisco, and surrounding communities.",
  },
  {
    q: "Do you work directly with insurance companies on damage claims?",
    a: "Yes. We work seamlessly with all major property insurance carriers (State Farm, Allstate, Travelers, Liberty Mutual, etc.). We provide certified Xactimate itemized estimates, comprehensive photographic documentation, and attend adjuster walkthroughs to ensure your claim is settled fairly and promptly.",
  },
  {
    q: "Is ARSS Construction fully licensed and insured in Texas?",
    a: "Yes, ARSS Construction is fully licensed, bonded, and insured with comprehensive general liability and workers' compensation coverage, adhering strictly to OSHA and Texas municipal building codes.",
  },
  {
    q: "What areas in North Texas do you cover?",
    a: "Our headquarters is in Dallas, Texas. We actively serve the entire DFW Metroplex including Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, McKinney, Richardson, Carrollton, and surrounding communities.",
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="section-faq">
      <div id="areas" style={{ position: "relative", top: "-92px" }} />
      <div id="dallas-tx" style={{ position: "relative", top: "-92px" }} />
      <div id="plano-tx" style={{ position: "relative", top: "-92px" }} />
      <div id="frisco-tx" style={{ position: "relative", top: "-92px" }} />
      <div id="arlington-tx" style={{ position: "relative", top: "-92px" }} />
      <div id="irving-tx" style={{ position: "relative", top: "-92px" }} />
      <div className="faq-container">
        <div className="faq-layout">
          {/* Left Column: FAQ Content */}
          <div className="faq-left-col">
            <div className="faq-kicker">
              <span className="faq-kicker-dot" />
              <span>COMMON QUESTIONS &amp; COVERAGE</span>
            </div>

            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <p className="faq-subheading">
              Everything you need to know about our disaster recovery dispatch, luxury remodeling process, and service standards across North Texas.
            </p>

            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item ${isOpen ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-caret-icon">
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-wrap">
                        <p className="faq-answer-text">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="faq-left-help">
              <div className="faq-left-help-content">
                <ShieldCheck size={22} className="faq-left-help-icon text-blue-600 flex-shrink-0" />
                <p className="faq-left-help-text">
                  Have a project question not answered here? Speak with our team or schedule an on-site visit today.
                </p>
              </div>
              <div className="faq-help-buttons">
                <a
                  href="#contact"
                  className="faq-consult-btn"
                  style={{ color: "#ffffff" }}
                >
                  <Calendar size={15} style={{ color: "#ffffff" }} />
                  <span style={{ color: "#ffffff" }}>Book a Free Consultation</span>
                </a>
                <a
                  href="tel:4693605805"
                  className="faq-phone-btn"
                  style={{ color: "#ffffff" }}
                  aria-label="Call (469) 360-5805"
                >
                  <Phone size={15} className="faq-phone-btn-icon" style={{ color: "#ffffff" }} />
                  <span style={{ color: "#ffffff" }}>(469) 360-5805</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Map Block */}
          <div className="faq-right-col">
            <div className="faq-map-card">
              <div className="faq-map-header">
                <div className="faq-map-header-left">
                  <div className="faq-map-icon-wrap">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="faq-map-title">Service Headquarters</h3>
                    <p className="faq-map-subtitle">Dallas-Fort Worth Metroplex</p>
                  </div>
                </div>

                <div className="faq-map-status-pill">
                  <span className="faq-map-status-dot" />
                  <span>24/7 Active Dispatch</span>
                </div>
              </div>

              <div className="faq-map-iframe-wrap">
                <iframe
                  title="ARSS Construction Service Coverage Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428987.4939223788!2d-97.14367375!3d32.8205862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1e05a15e66d7%3A0xbd86d630d78f61!2sDallas-Fort%20Worth%20Metropolitan%20Area%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="faq-map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="faq-map-footer">
                <div className="faq-map-meta-item">
                  <MapPin size={16} className="faq-map-meta-icon" />
                  <span>
                    <strong>Address:</strong> Dallas, Texas (Serving All DFW)
                  </span>
                </div>
                <div className="faq-map-meta-item">
                  <Phone size={16} className="faq-map-meta-icon" />
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:4693605805" className="faq-map-phone-link">
                      (469) 360-5805
                    </a>
                  </span>
                </div>
                <div className="faq-map-meta-item">
                  <Mail size={16} className="faq-map-meta-icon" />
                  <span>
                    <strong>Email:</strong> support@arssconstruction.com
                  </span>
                </div>
                <div className="faq-map-meta-item">
                  <Clock size={16} className="faq-map-meta-icon" />
                  <span>
                    <strong>Emergency Hours:</strong> 24 Hours / 7 Days a Week
                  </span>
                </div>

                <a
                  href="https://maps.google.com/?q=Dallas,+Texas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faq-map-action-btn"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;

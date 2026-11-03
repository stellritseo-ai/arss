import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import arssLogo from "../assets/logo.png";

const footerServices = [
  { label: "Commercial Capabilities Statement", href: "/capabilities" },
  { label: "Client Reviews & Testimonials", href: "/reviews" },
  { label: "Remodeling & Renovation Services", href: "/remodeling-renovation-services" },
  { label: "Fire Damage Restoration Services", href: "/fire-damage-services" },
  { label: "General Construction Services", href: "/general-construction-services" },
  { label: "Renovation and Facility Upgrades", href: "/renovation-and-facility-upgrades" },
  { label: "Emergency Water & Soot Mitigation", href: "/#services" },
];

const openingHours = [
  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { days: "Saturday - Sunday", hours: "8:00 AM - 12:00 PM" },
];

export function Footer() {
  return (
    <footer id="ht-colophon" className="ht-colophon">
      {/* Top Reassurance & Trust Bar */}
      <div className="footer-trust-bar">
        <div className="footer-trust-container">
          <div className="footer-trust-item">
            <ShieldCheck size={18} className="footer-trust-icon" />
            <span>Texas Licensed, Bonded &amp; Insured</span>
          </div>
          <div className="footer-trust-item">
            <Clock size={18} className="footer-trust-icon" />
            <span>24/7 Rapid Emergency Response</span>
          </div>
          <div className="footer-trust-item">
            <Award size={18} className="footer-trust-icon" />
            <span>15+ Years Master Craftsmanship</span>
          </div>
          <div className="footer-trust-item">
            <CheckCircle2 size={18} className="footer-trust-icon" />
            <span>Free On-Site Evaluations</span>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="ht-main-footer">
        <div className="footer-grid-container">
          {/* Column 1: Brand & Overview */}
          <div className="footer-col footer-col-brand">
            <a href="/" className="footer-logo-link">
              <img
                src={arssLogo}
                alt="ARSS Construction Logo"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-brand-desc">
              Premier Texas general contractor providing 24/7 emergency disaster recovery, luxury residential remodeling, and turnkey commercial construction across the Dallas-Fort Worth Metroplex.
            </p>
            <div className="footer-license-badge">
              <span className="footer-license-dot" />
              <span>Texas Regulated &amp; Fully Insured</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer-col">
            <h4 className="footer-heading">OUR SERVICES</h4>
            <ul className="footer-links-list">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="footer-link-item">
                    <ChevronRight size={14} className="footer-link-chevron" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Emergency */}
          <div className="footer-col">
            <h4 className="footer-heading">OPENING HOURS</h4>
            <div className="footer-hours-block">
              {openingHours.map((slot) => (
                <div key={slot.days} className="footer-hours-row">
                  <div className="footer-hours-day">{slot.days}</div>
                  <div className="footer-hours-time">{slot.hours}</div>
                </div>
              ))}
            </div>

            <div className="footer-emergency-box">
              <div className="footer-emergency-status">
                <span className="footer-emergency-dot" />
                <span>24/7 Rapid Response</span>
              </div>
              <p className="footer-emergency-text">
                Disaster recovery dispatch available 24 hours a day, 365 days a year across North Texas.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Direct Dispatch */}
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT US</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon-box">
                  <MapPin size={17} />
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">Location</span>
                  <span className="footer-contact-val">Dallas, Texas</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon-box">
                  <Phone size={17} />
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">Phone Hotline</span>
                  <a href="tel:4693605805" className="footer-contact-link">
                    (469) 360-5805
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon-box">
                  <Mail size={17} />
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">Email Inquiries</span>
                  <a
                    href="mailto:info@arss-construction.com"
                    className="footer-contact-link"
                  >
                    info@arss-construction.com
                  </a>
                </div>
              </div>
            </div>

            <a href="/request-inspection" className="footer-cta-btn">
              <span>Book Free Inspection</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Sub-footer */}
      <div className="ht-bottom-footer">
        <div className="footer-bottom-container">
          <div className="footer-copyright-text">
            Copyright &copy; {new Date().getFullYear()} ARSS Construction. All Rights Reserved.
          </div>

          <div className="footer-bottom-credit">
            Designed by:{" "}
            <a
              href="https://stellrit.com"
              target="_blank"
              rel="noreferrer"
              className="footer-credit-link"
            >
              StellR IT LLC.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

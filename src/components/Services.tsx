import serviceRemodeling from "../assets/orig/remodeling.png";
import serviceFire from "../assets/orig/fire-damage-1.png";
import serviceGeneral from "../assets/orig/general-2.png";
import serviceFacility from "../assets/orig/remod-1.png";
import {
  Home,
  Flame,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  LucideIcon,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  badgeAlert?: boolean;
  icon: LucideIcon;
  image: string;
  description: string;
  features: string[];
  ctaText: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "remodeling",
    title: "Remodeling & Renovation Services",
    badge: "Residential & Luxury",
    icon: Home,
    image: serviceRemodeling,
    description:
      "ARSS Construction offers expert remodeling and renovation services across Texas. From luxury kitchen and bathroom transformations to whole-home architectural renewals, we deliver custom living spaces tailored to your style and budget.",
    features: [
      "Custom kitchen & master bath luxury remodels",
      "Room additions, open-concept conversions & architectural extensions",
      "Master craftsmanship, premium materials & warranty assurance",
    ],
    ctaText: "Request Remodel Consultation",
  },
  {
    id: "fire-restoration",
    title: "Fire Damage Restoration Services",
    badge: "24/7 Rapid Emergency",
    badgeAlert: true,
    icon: Flame,
    image: serviceFire,
    description:
      "Providing prompt, compassionate fire and smoke damage restoration throughout Texas. Our certified specialists swiftly assess structural damage, extract soot and debris, neutralize hazardous odors, and rebuild properties with precision.",
    features: [
      "Immediate 24/7 emergency dispatch, board-up & stabilization",
      "Thermal soot removal, water extraction & toxic odor mitigation",
      "Full structural reconstruction & direct insurance claim support",
    ],
    ctaText: "Get Emergency Fire Assistance",
  },
  {
    id: "general-construction",
    title: "General Construction Services",
    badge: "Commercial & Public Sector",
    icon: Building2,
    image: serviceGeneral,
    description:
      "Specializing in general construction for commercial builds and public sector projects, including educational facilities, municipal buildings, corporate offices, and transit hubs with strict adherence to budget and schedule.",
    features: [
      "Commercial tenant improvements, build-outs & structural framing",
      "Public sector, municipal & educational infrastructure expertise",
      "Dedicated project management, safety compliance & on-time delivery",
    ],
    ctaText: "Discuss Commercial Project",
  },
  {
    id: "facility-upgrades",
    title: "Renovation and Facility Upgrades",
    badge: "Turnkey Modernization",
    icon: Sparkles,
    image: serviceFacility,
    description:
      "Modernizing existing commercial, institutional, and civic facilities to improve energy efficiency, accessibility, safety, and functionality while carefully structuring work to minimize disruptions to daily community and business operations.",
    features: [
      "Interior & exterior architectural modernization and space overhauls",
      "Building system upgrades, energy efficiency & ADA code compliance",
      "Phased scheduling structured to maintain uninterrupted tenant operations",
    ],
    ctaText: "Schedule Facility Walkthrough",
  },
];

export function Services() {
  return (
    <section id="services" className="section-services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-kicker">
            <span className="services-kicker-dot" />
            <span>TEXAS LICENSED &amp; INSURED GENERAL CONTRACTOR</span>
          </div>
          <h2 className="services-title">OUR SERVICES</h2>
          <p className="services-subtitle">
            Let us bring your home or business back to life with quality work and great service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className={`service-card ${service.badgeAlert ? "card-alert" : ""}`}
              >
                <div className="service-card-img-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="service-card-img-overlay" />
                  <span
                    className={`service-card-badge ${
                      service.badgeAlert ? "badge-alert" : ""
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                <div className="service-card-body">
                  <div className="service-card-header-row">
                    <div className="service-card-icon-box">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <h3 className="service-card-title">{service.title}</h3>
                  </div>

                  <p className="service-card-desc">{service.description}</p>

                  <ul className="service-card-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-card-feature-item">
                        <CheckCircle2 size={15} className="service-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-footer">
                    <a href="#contact" className="service-card-action">
                      <span>{service.ctaText}</span>
                      <ArrowRight size={15} className="service-action-arrow" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Quick Help Banner */}
        <div className="services-bottom-cta">
          <div className="services-bottom-cta-content">
            <div className="services-bottom-icon">
              <PhoneCall size={22} />
            </div>
            <div className="services-bottom-text">
              <h4>Need immediate emergency assistance or a custom commercial estimate?</h4>
              <p>
                Our Dallas-Fort Worth team provides rapid dispatch, free property assessments, and consultation.
              </p>
            </div>
          </div>
          <div className="services-bottom-actions">
            <a href="tel:4693605805" className="services-bottom-phone">
              (469) 360-5805
            </a>
            <a href="#contact" className="services-bottom-button">
              Request Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

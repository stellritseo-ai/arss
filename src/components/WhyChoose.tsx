import {
  Users,
  ShieldCheck,
  HeartHandshake,
  Layers,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface WhyReason {
  title: string;
  badge: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
}

const whyReasons: WhyReason[] = [
  {
    title: "Experienced Team",
    badge: "15+ Yrs Exp",
    description:
      "Licensed general contractors, master tradesmen, and seasoned project managers dedicated to top-tier craftsmanship on every job.",
    highlight: "Texas licensed & OSHA certified",
    icon: Users,
  },
  {
    title: "High-Quality Standards",
    badge: "Premium Grade",
    description:
      "We strictly utilize architectural-grade materials, proven engineering methods, and rigorous multi-point quality control inspections.",
    highlight: "Superior materials & warranty",
    icon: ShieldCheck,
  },
  {
    title: "Customer-First Approach",
    badge: "Transparent",
    description:
      "Transparent pricing, dedicated single-point project coordination, and clear communication keep you informed every step of the way.",
    highlight: "Dedicated project manager",
    icon: HeartHandshake,
  },
  {
    title: "Comprehensive Services",
    badge: "Turnkey Scope",
    description:
      "From emergency disaster mitigation to luxury home remodeling and municipal builds, we handle all facets under one trusted roof.",
    highlight: "Full turnkey project delivery",
    icon: Layers,
  },
];

const stats = [
  { number: "15+", label: "Years of Proven Texas Experience" },
  { number: "500+", label: "Commercial & Residential Builds" },
  { number: "24/7", label: "Emergency Disaster Response" },
  { number: "100%", label: "Licensed, Bonded & Insured" },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="section-why">
      <div className="why-container">
        {/* Header */}
        <div className="why-header">
          <div className="why-kicker">
            <span className="why-kicker-dot" />
            <span>THE ARSS ADVANTAGE</span>
          </div>
          <h2 className="why-title">
            Why Choose ARSS Construction for Your Building Needs?
          </h2>
          <p className="why-subtitle">
            Built on 15+ years of Texas craftsmanship, rigorous quality standards, and transparent project delivery across Dallas-Fort Worth and surrounding communities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-grid">
          {whyReasons.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="why-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <span className="why-card-badge">{item.badge}</span>
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>

                <div className="why-card-pill">
                  <CheckCircle2 size={15} className="why-card-pill-icon" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Metrics / Stats Bar */}
        <div className="why-stats-bar">
          {stats.map((stat, idx) => (
            <div key={idx} className="why-stat-item">
              <div className="why-stat-number">{stat.number}</div>
              <div className="why-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

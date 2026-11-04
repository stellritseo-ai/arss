import { useState, useEffect, type CSSProperties } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Home,
  Flame,
  Building2,
  Sparkles,
  ArrowRight,
  X,
  Layers,
} from "lucide-react";
import arssLogo from "../assets/logo.png";

const topContactItems = [
  {
    icon: Phone,
    text: "(469) 360-5805",
    href: "tel:4693605805",
    isPhone: true,
  },
  {
    icon: Mail,
    text: "support@arssconstruction.com",
    href: "mailto:support@arssconstruction.com",
  },
  {
    icon: MapPin,
    text: "Dallas, Texas",
    href: "https://maps.google.com/?q=Dallas,+Texas",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

type IconKind = "shield" | "home" | "flame" | "building" | "sparkles" | "map-pin" | "layers";

interface NavSubItem {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  icon: IconKind;
  isOrange?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  variant?: "compact" | "areas" | "services" | "default";
  headerKicker?: string;
  headerStatus?: string;
  footerText?: string;
  footerActionText?: string;
  footerActionHref?: string;
  subMenu?: NavSubItem[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    variant: "compact",
    headerKicker: "Company Profile",
    headerStatus: "Licensed Texas Pro",
    footerText: "15+ years of trusted Texas craftsmanship",
    footerActionText: "Dedicated About Page",
    footerActionHref: "/about",
    subMenu: [
      {
        label: "About ARSS Construction",
        href: "/about",
        desc: "Turnkey property reconstruction, Texas values, and customer-first service",
        badge: "Overview",
        icon: "shield",
      },
      {
        label: "Capabilities",
        href: "/capabilities",
        desc: "Turnkey commercial finish-out, drywall, painting & millwork",
        badge: "Statement",
        icon: "layers",
      },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    variant: "services",
    headerKicker: "Contractor Services",
    headerStatus: "24/7 Rapid Response",
    footerText: "Need immediate fire or storm damage assessment?",
    footerActionText: "Call (469) 360-5805",
    footerActionHref: "tel:4693605805",
    subMenu: [
      {
        label: "Remodeling & Renovation Services",
        href: "/remodeling-renovation-services",
        desc: "Kitchens, baths, room additions & luxury transformations",
        badge: "Popular",
        icon: "home",
      },
      {
        label: "Fire Damage Services",
        href: "/fire-damage-services",
        desc: "Emergency soot & smoke mitigation, odor neutralization & rebuild",
        badge: "24/7 Dispatch",
        icon: "flame",
        isOrange: true,
      },
      {
        label: "General Construction Services",
        href: "/general-construction-services",
        desc: "Institutional builds, public sector developments & framing",
        badge: "Commercial",
        icon: "building",
      },
      {
        label: "Renovation and Facility Upgrades",
        href: "/renovation-and-facility-upgrades",
        desc: "Modern interior overhauls & building systems modernization",
        badge: "Turnkey",
        icon: "sparkles",
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Areas Serve",
    href: "/#areas",
    variant: "areas",
    headerKicker: "DFW Service Territory",
    headerStatus: "60-Min Dispatch",
    footerText: "Serving Dallas, Collin, Denton & Tarrant counties",
    footerActionText: "View Coverage Map",
    footerActionHref: "https://maps.google.com/?q=Dallas,+Texas",
    subMenu: [
      {
        label: "Dallas TX",
        href: "/dallas-tx",
        desc: "Central headquarters & emergency dispatch facility",
        badge: "HQ",
        icon: "map-pin",
        isOrange: true,
      },
      {
        label: "Plano TX",
        href: "/plano-tx",
        desc: "Complete structural repair & comprehensive upgrades",
        badge: "North DFW",
        icon: "map-pin",
      },
      {
        label: "Frisco TX",
        href: "/frisco-tx",
        desc: "High-end residential renovation & commercial restoration",
        badge: "North DFW",
        icon: "map-pin",
      },
      {
        label: "Arlington TX",
        href: "/arlington-tx",
        desc: "Commercial & residential property restoration",
        badge: "West DFW",
        icon: "map-pin",
      },
      {
        label: "Irving TX",
        href: "/irving-tx",
        desc: "Fast response emergency remediation & renovation",
        badge: "Central DFW",
        icon: "map-pin",
      },
    ],
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

function SubMenuIcon({ kind }: { kind: IconKind }) {
  switch (kind) {
    case "shield":
      return <ShieldCheck size={16} strokeWidth={2.2} />;
    case "home":
      return <Home size={16} strokeWidth={2.2} />;
    case "flame":
      return <Flame size={16} strokeWidth={2.2} />;
    case "building":
      return <Building2 size={16} strokeWidth={2.2} />;
    case "sparkles":
      return <Sparkles size={16} strokeWidth={2.2} />;
    case "map-pin":
      return <MapPin size={15} strokeWidth={2.2} />;
    case "layers":
      return <Layers size={16} strokeWidth={2.2} />;
    default:
      return null;
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  // Monitor scroll position for elevated navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dismiss dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".ht-menu")) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Dismiss mobile drawer or desktop dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* 1. Top Bar */}
      <div className="ht-top-header">
        <div className="ht-top-header-inner">
          <div className="ht-th-left">
            <div className="ht-status-pill">
              <span className="ht-status-dot" aria-hidden="true" />
              <span>Available 24/7 in DFW Metroplex</span>
            </div>
          </div>
          <div className="ht-th-right">
            <ul>
              {topContactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className={`ht-th-link${item.isPhone ? " ht-th-phone-badge" : ""}`}
                      target={item.target}
                      rel={item.rel}
                    >
                      <Icon size={14} strokeWidth={2.2} aria-hidden="true" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <header className={`ht-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="ht-header-inner">
          <div id="ht-site-branding">
            <a href="/" aria-label="ARSS Construction Home">
              <img src={arssLogo} alt="ARSS Construction" />
            </a>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="ht-nav-wrap">
            <nav aria-label="Main Navigation">
              <ul className="ht-menu">
                {navItems.map((item) => {
                  const hasSubMenu = Boolean(item.subMenu && item.subMenu.length > 0);
                  const isOpen = activeDropdown === item.label;
                  const variantClass =
                    item.variant === "compact"
                      ? " sub-menu-compact"
                      : item.variant === "services"
                        ? " sub-menu-services"
                        : item.variant === "areas"
                          ? " sub-menu-areas"
                          : "";

                  return (
                    <li
                      key={item.label}
                      className={`menu-item${hasSubMenu ? " menu-item-has-children" : ""
                        }${isOpen ? " is-open" : ""}`}
                      onMouseEnter={() => hasSubMenu && setActiveDropdown(item.label)}
                      onMouseLeave={() => hasSubMenu && setActiveDropdown(null)}
                    >
                      <a
                        href={item.href}
                        aria-haspopup={hasSubMenu ? "menu" : undefined}
                        aria-expanded={hasSubMenu ? isOpen : undefined}
                        onClick={(e) => {
                          if (hasSubMenu) {
                            e.preventDefault();
                            setActiveDropdown(isOpen ? null : item.label);
                          }
                        }}
                      >
                        {item.label}
                        {hasSubMenu && (
                          <ChevronDown
                            className="dropdown-nav"
                            size={14}
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        )}
                      </a>

                      {hasSubMenu && (
                        <div
                          className={`sub-menu${variantClass}`}
                          role="menu"
                          aria-label={item.label}
                        >
                          <div className="sub-menu-gradient-bar" />
                          {item.headerKicker && (
                            <div className="sub-menu-header-bar">
                              <span className="sub-menu-kicker">{item.headerKicker}</span>
                              {item.headerStatus && (
                                <span className="sub-menu-status-badge">
                                  <span className="sub-menu-status-pulse" />
                                  <span>{item.headerStatus}</span>
                                </span>
                              )}
                            </div>
                          )}
                          <ul className="sub-menu-inner" role="none">
                            {item.subMenu!.map((sub) => (
                              <li key={sub.label} className="sub-menu-item" role="none">
                                <a
                                  href={sub.href}
                                  className="sub-menu-link"
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div
                                    className={`sub-menu-icon-box${sub.isOrange ? " icon-orange" : ""
                                      }`}
                                  >
                                    <SubMenuIcon kind={sub.icon} />
                                  </div>
                                  <div className="sub-menu-body">
                                    <div className="sub-menu-title-row">
                                      <span className="sub-menu-title">
                                        {sub.label}
                                      </span>
                                      {sub.badge && (
                                        <span
                                          className={`sub-menu-badge${sub.isOrange ? " badge-orange" : ""
                                            }`}
                                        >
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    {sub.desc && (
                                      <p className="sub-menu-desc">{sub.desc}</p>
                                    )}
                                  </div>
                                  <div className="sub-menu-arrow" aria-hidden="true">
                                    <ChevronRight size={13} strokeWidth={2.5} />
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>

                          {item.footerText && (
                            <div className="sub-menu-footer-bar">
                              <span className="sub-menu-footer-text">
                                {item.footerText}
                              </span>
                              {item.footerActionText && (
                                <a
                                  href={item.footerActionHref || item.href}
                                  className="sub-menu-footer-action"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span>{item.footerActionText}</span>
                                  <ArrowRight size={12} strokeWidth={2.5} />
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a href="/request-inspection" className="ht-header-cta">
              <span>Request Inspection</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`ht-mobile-toggle${mobileMenuOpen ? " is-active" : ""}`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mnav-drawer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="ht-burger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="ht-mobile-toggle-label">Menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mnav-backdrop${mobileMenuOpen ? " is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="mnav-drawer"
        className={`mnav-drawer${mobileMenuOpen ? " is-open" : ""}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mnav-accent-bar" aria-hidden="true" />

        <div className="mnav-head">
          <a
            href="/"
            className="mnav-logo"
            aria-label="ARSS Construction Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src={arssLogo} alt="ARSS Construction" />
          </a>
          <button
            type="button"
            className="mnav-close"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} strokeWidth={2.4} />
          </button>
        </div>

        <div className="mnav-scroll">
          {/* 24/7 Emergency Dispatch Card */}
          <a href="tel:4693605805" className="mnav-emergency" onClick={() => setMobileMenuOpen(false)}>
            <span className="mnav-emergency-icon">
              <Phone size={20} strokeWidth={2.2} />
            </span>
            <span className="mnav-emergency-text">
              <span className="mnav-emergency-label">
                <span className="mnav-emergency-dot" aria-hidden="true" />
                24/7 Emergency Dispatch
              </span>
              <span className="mnav-emergency-number">(469) 360-5805</span>
            </span>
            <ChevronRight size={18} strokeWidth={2.4} className="mnav-emergency-arrow" />
          </a>

          <p className="mnav-section-label">Navigation</p>

          <ul className="mnav-list">
            {navItems.map((item, idx) => {
              const hasSubMenu = Boolean(item.subMenu && item.subMenu.length > 0);
              const isExpanded = expandedMobileItem === item.label;

              return (
                <li
                  key={item.label}
                  className={`mnav-item${isExpanded ? " is-expanded" : ""}`}
                  style={{ ["--i" as string]: idx } as CSSProperties}
                >
                  <div className="mnav-row">
                    {hasSubMenu ? (
                      <button
                        type="button"
                        className="mnav-link mnav-link-btn"
                        aria-expanded={isExpanded}
                        onClick={() => toggleMobileSubmenu(item.label)}
                      >
                        <span className="mnav-link-text">{item.label}</span>
                        <span className="mnav-chevron" aria-hidden="true">
                          <ChevronDown size={18} strokeWidth={2.4} />
                        </span>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="mnav-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="mnav-link-text">{item.label}</span>
                        <span className="mnav-chevron mnav-chevron-go" aria-hidden="true">
                          <ChevronRight size={18} strokeWidth={2.4} />
                        </span>
                      </a>
                    )}
                  </div>

                  {hasSubMenu && (
                    <div className="mnav-sub-wrap" aria-hidden={!isExpanded}>
                      <ul className="mnav-sub">
                        {item.subMenu!.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              className="mnav-sub-link"
                              tabIndex={isExpanded ? 0 : -1}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className={`mnav-sub-icon${sub.isOrange ? " is-orange" : ""}`}>
                                <SubMenuIcon kind={sub.icon} />
                              </span>
                              <span className="mnav-sub-body">
                                <span className="mnav-sub-title">
                                  {sub.label}
                                  {sub.badge && (
                                    <span className={`mnav-sub-badge${sub.isOrange ? " is-orange" : ""}`}>
                                      {sub.badge}
                                    </span>
                                  )}
                                </span>
                                {sub.desc && <span className="mnav-sub-desc">{sub.desc}</span>}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mnav-contact">
            <a href="mailto:support@arssconstruction.com" className="mnav-contact-row">
              <Mail size={16} strokeWidth={2.2} />
              <span>support@arssconstruction.com</span>
            </a>
            <a
              href="https://maps.google.com/?q=Dallas,+Texas"
              target="_blank"
              rel="noopener noreferrer"
              className="mnav-contact-row"
            >
              <MapPin size={16} strokeWidth={2.2} />
              <span>Dallas, Texas &middot; Serving all DFW</span>
            </a>
          </div>
        </div>

        <div className="mnav-foot">
          <a
            href="/#contact"
            className="mnav-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Request Free Inspection</span>
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
          <p className="mnav-foot-note">
            <ShieldCheck size={13} strokeWidth={2.4} /> Licensed &amp; Insured &middot; Free On-Site Estimates
          </p>
        </div>
      </aside>
    </>
  );
}

export default Header;

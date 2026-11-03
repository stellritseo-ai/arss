import { useState, useEffect, useCallback } from "react";
import { Eye, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import gal1 from "../assets/orig/gal1.jpg";
import gal2 from "../assets/orig/gal2.jpg";
import gal3 from "../assets/orig/gal3.jpg";
import gal4 from "../assets/orig/gal4.jpg";
import gal5 from "../assets/orig/gal5.jpg";
import gal6 from "../assets/orig/gal6.jpg";

interface Project {
  id: number;
  title: string;
  category: "remodeling" | "restoration" | "commercial";
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Architectural Open-Concept Living",
    category: "remodeling",
    categoryLabel: "Luxury Remodeling",
    location: "Highland Park, Dallas",
    image: gal1,
    description:
      "Full living space renewal including structural wall reconfiguration, engineered support framing, custom hardwood flooring, and recessed architectural lighting.",
  },
  {
    id: 2,
    title: "Gourmet Chef Kitchen & Custom Island",
    category: "remodeling",
    categoryLabel: "Luxury Remodeling",
    location: "Preston Hollow, Dallas",
    image: gal2,
    description:
      "Bespoke culinary space featuring waterfall quartzite countertops, custom slow-close cabinetry, chef-grade appliances, and designer pendant fixtures.",
  },
  {
    id: 3,
    title: "Spa-Inspired Master Bathroom Renovation",
    category: "remodeling",
    categoryLabel: "Luxury Remodeling",
    location: "Plano, TX",
    image: gal3,
    description:
      "Curbless walk-in shower with floor-to-ceiling porcelain slab tiles, freestanding soaking tub, dual floating vanity, and heated tile floors.",
  },
  {
    id: 4,
    title: "Emergency Fire & Structural Reconstruction",
    category: "restoration",
    categoryLabel: "Disaster Restoration",
    location: "Arlington, TX",
    image: gal4,
    description:
      "Complete structural rebuild following severe attic and roof fire damage, including truss replacement, soot mitigation, and full interior restoration.",
  },
  {
    id: 5,
    title: "Commercial Tenant Facility Modernization",
    category: "commercial",
    categoryLabel: "Commercial & Public",
    location: "Irving Business Park",
    image: gal5,
    description:
      "Multi-tenant corporate office build-out featuring acoustic glass partitions, upgraded MEP infrastructure, and ADA-compliant executive suites.",
  },
  {
    id: 6,
    title: "Complete Exterior & Structural Renovation",
    category: "commercial",
    categoryLabel: "Commercial & Public",
    location: "Frisco, TX",
    image: gal6,
    description:
      "Comprehensive exterior facade overhaul, commercial roofing installation, and seismic/structural reinforcements for a municipal community center.",
  },
];

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "remodeling", label: "Remodeling & Renovation" },
  { id: "restoration", label: "Disaster Restoration" },
  { id: "commercial", label: "Commercial & Public" },
] as const;

export function OurWork() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const handleOpenModal = (index: number) => {
    setModalIndex(index);
  };

  const handleCloseModal = () => {
    setModalIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : (prev as number) - 1
    );
  }, [modalIndex, filteredProjects.length]);

  const handleNext = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((prev) => ((prev as number) + 1) % filteredProjects.length);
  }, [modalIndex, filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    if (modalIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex, handlePrev, handleNext]);

  const currentModalProject =
    modalIndex !== null ? filteredProjects[modalIndex] : null;

  return (
    <section id="gallery" className="section-gallery">
      <div id="ourwork" style={{ position: "relative", top: "-92px" }} />
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <div className="gallery-kicker">
            <span className="gallery-kicker-dot" />
            <span>PORTFOLIO &amp; RECENT PROJECTS</span>
          </div>
          <h2 className="gallery-title">Our Recent Work</h2>
          <p className="gallery-subtitle">
            Explore our proven track record of luxury residential remodeling, rapid disaster restorations, and public facility build-outs across North Texas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setModalIndex(null);
              }}
              className={`gallery-tab-btn ${
                activeTab === tab.id ? "active" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="gallery-card"
              onClick={() => handleOpenModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenModal(idx);
                }
              }}
              aria-label={`View ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="gallery-card-img"
                loading="lazy"
                decoding="async"
              />

              {/* Hover Overlay */}
              <div className="gallery-card-overlay">
                <div className="gallery-card-top">
                  <span className="gallery-card-badge">
                    {project.categoryLabel}
                  </span>
                  <div className="gallery-card-action-icon">
                    <Eye size={18} />
                  </div>
                </div>

                <div className="gallery-card-bottom">
                  <h3 className="gallery-card-title">{project.title}</h3>
                  <p className="gallery-card-location">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="gallery-bottom-cta">
          <span className="gallery-bottom-cta-text">
            Have an architectural renovation or structural restoration project in Texas?
          </span>
          <a href="#contact" className="gallery-bottom-cta-btn">
            <span>Request an On-Site Consultation</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentModalProject && (
        <div
          className="gallery-modal-overlay"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={handleCloseModal}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="gallery-modal-img-wrap">
              <img
                src={currentModalProject.image}
                alt={currentModalProject.title}
                className="gallery-modal-img"
              />

              {filteredProjects.length > 1 && (
                <>
                  <button
                    className="gallery-modal-nav-prev"
                    onClick={handlePrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="gallery-modal-nav-next"
                    onClick={handleNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            <div className="gallery-modal-info">
              <span className="gallery-modal-badge">
                {currentModalProject.categoryLabel}
              </span>
              <h3 className="gallery-modal-title">
                {currentModalProject.title}
              </h3>
              <p className="gallery-modal-loc">
                {currentModalProject.location}
              </p>
              <p className="gallery-modal-desc">
                {currentModalProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default OurWork;

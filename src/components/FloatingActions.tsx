import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions-wrap" aria-label="Quick actions">
      {/* Mobile-only quick 24/7 call pill */}
      <a
        href="tel:4693605805"
        className="floating-emergency-call"
        aria-label="Call (469) 360-5805 for emergency dispatch"
      >
        <Phone size={15} />
        <span>Call 24/7: (469) 360-5805</span>
      </a>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="floating-action-btn floating-scroll-top"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp size={19} />
        </button>
      )}
    </div>
  );
}

export default FloatingActions;


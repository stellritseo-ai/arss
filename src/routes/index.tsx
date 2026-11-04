import { createFileRoute } from "@tanstack/react-router";
import { buildPageHead } from "../lib/seo";

import "../arss.css";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Welcome } from "../components/Welcome";
import { Services } from "../components/Services";
import { Cta } from "../components/Cta";
import { WhyChoose } from "../components/WhyChoose";
import { Reviews } from "../components/Reviews";
import { OurWork } from "../components/OurWork";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

export const Route = createFileRoute("/")({
  head: buildPageHead({
    title: "ARSS Construction | Premier Dallas Remodeling, Renovation & Restoration",
    description:
      "Texas licensed general contractor specializing in luxury home remodeling, turnkey renovations, commercial construction, and 24/7 fire & water damage restoration in Dallas-Fort Worth.",
    path: "/",
    keywords: [
      "ARSS Construction",
      "general contractor Dallas TX",
      "home remodeling Dallas",
      "fire damage restoration Dallas",
      "water damage restoration DFW",
      "commercial construction Texas",
      "kitchen bathroom remodeling",
      "emergency restoration DFW",
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="arss-exact-page">
      <Header />
      <Hero />
      <Welcome />
      <Services />
      <Cta />
      <WhyChoose />
      <Reviews />
      <OurWork />
      <Faq />
      <Footer />
      <FloatingActions />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

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

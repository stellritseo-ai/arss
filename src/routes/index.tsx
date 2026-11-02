import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Users, ShieldCheck, Smile, Wrench, ChevronDown, Quote, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import remodel from "@/assets/remodel.jpg";
import fire from "@/assets/fire.jpg";
import construction from "@/assets/construction.jpg";
import renovation from "@/assets/renovation.jpg";
import cta from "@/assets/cta.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARSS Construction – Bringing Your Property Back To Life" },
      { name: "description", content: "Expert restoration, remodeling and renovation services in Dallas, Texas." },
      { property: "og:title", content: "ARSS Construction – Dallas Restoration & Remodeling" },
      { property: "og:description", content: "Expert restoration, remodeling and renovation services in Dallas, Texas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { img: remodel, title: "Remodeling & Renovation Services", text: "ARSS Construction offers expert remodeling and renovation services. From kitchen and bathroom upgrades to full home makeovers, we transform spaces to match your vision and budget with quality craftsmanship." },
  { img: fire, title: "Fire Damage Restoration Services", text: "ARSS Construction provides expert fire damage restoration services. Our skilled team quickly assesses damage, removes debris, and restores properties with advanced techniques. We protect and restore your property." },
  { img: construction, title: "General Construction Services", text: "We specialize in new construction, remodeling, and large-scale public projects, including schools, government buildings, transportation infrastructure, and community spaces. We prioritize safety and efficiency.", tag: "Public Sector Project" },
  { img: renovation, title: "Renovation and Facility Upgrades", text: "Our team specializes in upgrading existing public structures, improving functionality, safety, and aesthetics. Whether it's renovating offices, modernizing schools, or updating public buildings, we deliver results.", tag: "Public Sector Project" },
];

const why = [
  { icon: Users, t: "Experienced Team", d: "Our skilled professionals have extensive experience in restoration, ensuring effective solutions for all types of property damage." },
  { icon: ShieldCheck, t: "Safe and Effective Solutions", d: "We use eco-friendly products and proven methods that are safe for your family and property while delivering lasting results." },
  { icon: Smile, t: "Customer Satisfaction", d: "We focus on delivering personalized services that meet your specific needs, ensuring complete satisfaction with every project." },
  { icon: Wrench, t: "Comprehensive Service", d: "From inspection to complete restoration, we offer a complete range of services, ensuring a hassle-free experience." },
];

const faqs = [
  "How quickly can ARSS Construction respond to my service request?",
  "How do I schedule a service appointment with ARSS Construction?",
  "Is ARSS Construction's service available for both residential and commercial properties?",
  "Are your technicians licensed and experienced?",
  "What types of services does ARSS Construction offer for Water Damage Restoration?",
];

const gallery = [g1, hero, remodel, g2, g2, g1, hero, remodel];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const input = "w-full border border-input bg-background px-3 py-2 text-sm text-foreground outline-none";
  return (
    <div className="font-sans text-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-2">
          <span>Welcome to ARSS Construction</span>
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> (469) 360-5955</span>
            <span className="flex items-center gap-1"><Mail size={12} /> info@arssconstruction.com</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> Dallas, Texas</span>
          </div>
        </div>
      </div>
      {/* Nav */}
      <header className="bg-background shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange font-bold text-primary-foreground">A</div>
            <div className="leading-tight"><div className="text-xl font-bold text-primary">ARSS</div><div className="text-[9px] tracking-widest text-muted-foreground">CONSTRUCTION</div></div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {["About ▾", "Services ▾", "Gallery", "Areas Serve ▾", "Reviews", "Contact Us"].map((n) => (
              <a key={n} href="#" className="hover:text-primary">{n}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[560px]">
        <img src={hero} alt="Restored home interior" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/50" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground">
          <h1 className="max-w-2xl text-3xl font-bold md:text-4xl">"ARSS Construction – Bringing Your Property Back To Life"</h1>
          <p className="mt-3 text-sm font-medium">Expert Restoration, Remodeling, and Renovation Services You Can Trust!</p>
          <button className="mt-6 bg-brand-orange px-6 py-2 text-sm font-semibold">Request Quote</button>
          <div className="absolute bottom-6 flex gap-2">
            <span className="h-2 w-2 bg-primary-foreground" /><span className="h-2 w-2 bg-primary-foreground/50" /><span className="h-2 w-2 bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Welcome + form */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div className="text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-4 text-3xl font-bold text-primary">Welcome to ARSS<br />Construction</h2>
          <p className="mb-4">At ARSS Construction, we are dedicated to restoring and transforming properties with precision and care. As a trusted name in the Dallas area, we specialize in fire damage repair, remodeling and renovations, water damage restoration, and other essential services. Our experienced team is committed to delivering high-quality results.</p>
          <p className="mb-4">We proudly serve major cities in the Dallas–Fort Worth area, including Arlington, Irving, Frisco, Plano, and Dallas. Whether you need repairs after damage or want to update your space, we are ready to assist you every step of the way.</p>
          <p>Let us bring your home or business back to life with quality work and great service. Contact us today to get started!</p>
        </div>
        <div className="bg-primary p-6 shadow-xl">
          <h3 className="mb-5 text-center text-2xl font-semibold text-primary-foreground">GET AN INSPECTION</h3>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input className={input} placeholder="Name" />
            <input className={input} placeholder="Phone" />
            <input className={input} placeholder="Email" />
            <select className={input}><option>Please Select Services</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
            <textarea className={input} rows={6} placeholder="How can we help?" />
            <button className="bg-brand-orange px-6 py-2 text-sm font-semibold text-primary-foreground">Request An Inspection</button>
          </form>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-primary">OUR SERVICES</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">Let us bring your home or business back to life with quality work and great service.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-2 shadow-sm">
                <div className="relative">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="h-56 w-full object-cover" />
                  {s.tag && <span className="absolute left-2 top-2 text-sm font-bold text-brand-orange">{s.tag}</span>}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[420px]">
        <img src={cta} alt="Commercial building" loading="lazy" width={1600} height={800} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground">
          <h2 className="max-w-2xl text-3xl font-semibold">Get Started on Your Restoration or Renovation Journey Today.</h2>
          <p className="mt-3 text-sm">Contact us now for a free consultation and take the first step towards transforming your space.</p>
          <button className="mt-6 bg-brand-orange px-6 py-2 text-xs font-semibold">Book a Free Consultation</button>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-primary">Why Choose ARSS Construction for Your Building Needs?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs text-muted-foreground">Choose ARSS Construction for expert removal, safe solutions, advanced equipment, and guaranteed customer satisfaction. We deliver thorough, efficient results tailored to your needs.</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {why.map(({ icon: I, t, d }) => (
            <div key={t}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><I size={22} /></div>
              <h3 className="mt-3 text-sm font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-semibold text-primary">TESTIMONIAL</p>
          <h2 className="mt-2 text-2xl font-bold">Customers Love Us</h2>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-[200px_1fr]">
            <div>
              <p className="text-sm font-semibold">Excellent</p>
              <p className="text-brand-orange">★★★★★</p>
              <p className="text-xs text-muted-foreground">Based on 50 reviews from Google</p>
              <button className="mt-3 rounded-full bg-primary px-4 py-1 text-xs text-primary-foreground">Review us on G</button>
            </div>
            <div className="flex gap-6 text-left">
              <Quote size={48} className="shrink-0 text-muted-foreground/40" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground">We hired ARSS Construction for a complete home remodeling project, and they exceeded our expectations!</p>
                <div className="mx-auto mt-4 h-14 w-14 rounded-full border-2 border-dashed border-muted-foreground" />
                <p className="mt-2 text-sm">Emily R.</p>
                <p className="text-xs text-muted-foreground">Support Engineer</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-1"><span className="h-1 w-6 bg-foreground" /><span className="h-1 w-2 bg-muted-foreground" /><span className="h-1 w-2 bg-muted-foreground" /></div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <p className="text-xs font-semibold text-primary">OUR GALLERY</p>
        <h2 className="mt-2 text-2xl font-bold">Our Recent Work</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[10px] uppercase text-primary">
          <span className="underline">Remodeling & Renovation</span><span>Fire Damage Restoration</span><span>Water Damage Restoration</span><span>General Construction</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g, i) => <img key={i} src={g} alt="Recent project" loading="lazy" width={1024} height={1024} className="h-48 w-full object-cover" />)}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-primary">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-border">
          {faqs.map((f, i) => (
            <div key={f} className="py-3">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center gap-2 text-left text-sm">
                <ChevronRight size={14} className={open === i ? "rotate-90 transition" : "transition"} /> {f}
              </button>
              {open === i && <p className="mt-2 pl-6 text-xs text-muted-foreground">Please contact us at (469) 360-5955 and our team will be happy to help you right away.</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-primary-foreground">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 text-sm md:grid-cols-3">
          <div>
            <h4 className="mb-5 font-semibold">CONTACT US</h4>
            {[[MapPin, "Find Us", "Dallas, Texas, USA"], [Phone, "Ring Us", "(469) 360-5955"], [Mail, "Mail Us", "info@arssconstruction.com"]].map(([I, a, b]: any) => (
              <div key={a} className="mb-4 flex gap-3"><I size={18} className="text-primary" /><div><p className="font-semibold">{a}</p><p className="text-xs opacity-70">{b}</p></div></div>
            ))}
          </div>
          <div>
            <h4 className="mb-5 font-semibold">OPENING HOURS</h4>
            <p className="font-semibold">Monday-Friday</p><p className="mb-3 text-xs opacity-70">8:00 AM – 6:00 PM</p>
            <p className="font-semibold">Saturday – Sunday</p><p className="text-xs opacity-70">9:00 AM – 4:00 PM</p>
          </div>
          <div>
            <h4 className="mb-5 font-semibold">SERVICES</h4>
            {services.map((s) => <p key={s.title} className="mb-1 text-xs opacity-70">{s.title}</p>)}
          </div>
        </div>
        <p className="border-t border-primary-foreground/10 py-4 text-center text-[10px] opacity-60">Copyright © 2026 ARSS Construction. All right reserved.</p>
      </footer>
    </div>
  );
}

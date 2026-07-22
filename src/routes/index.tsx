import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Clock,
  Award,
  Trees,
  Trash2,
  Scissors,
  Repeat,
  Sparkles,
  ChevronRight,
  Star,
  Users,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroCleared from "@/assets/hero-cleared.jpg";
import heroBefore from "@/assets/hero-before.jpg";
import treeFelling from "@/assets/tree-felling.jpg";
import chippingAction from "@/assets/chipping-action.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
// Add these two files yourself (see chat for free, no-attribution-required Pexels download links):
import gardenRefuse from "@/assets/garden-refuse.jpg";
import monthlyMaintenance from "@/assets/monthly-maintenance.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+27833897972";
const PHONE_DISPLAY = "+27 83 389 7972";
const EMAIL = "info@cutandclear.co.za";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=Hi%20Cut%20and%20Clear%2C%20I%27d%20like%20a%20quote.`;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Team />
        <Process />
        <ServiceArea />
        <Testimonials />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background border-b-2 border-border">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Cut and Clear" className="h-10 md:h-12 w-auto" />
          <span className="sr-only">Cut and Clear</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#services" className="hover:text-[var(--color-brand-orange)]">Services</a>
          <a href="#area" className="hover:text-[var(--color-brand-orange)]">Areas</a>
          <a href="#reviews" className="hover:text-[var(--color-brand-orange)]">Reviews</a>
          <a href="#faq" className="hover:text-[var(--color-brand-orange)]">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 hover:bg-white/5 border-2 border-border"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-1 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-black font-extrabold uppercase text-xs md:text-sm px-4 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none transition tracking-wide"
          >
            Book Now <ChevronRight className="h-4 w-4" />
          </a>
          <button
            className="md:hidden ml-1 p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <div className="w-6 h-0.5 bg-foreground mb-1.5" />
            <div className="w-6 h-0.5 bg-foreground mb-1.5" />
            <div className="w-6 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-background border-t-2 border-border px-4 py-4 flex flex-col gap-4 text-sm font-semibold uppercase">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#area" onClick={() => setOpen(false)}>Areas</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href={`tel:${PHONE}`} className="text-[var(--color-brand-orange)]">{PHONE_DISPLAY}</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [pos, setPos] = useState(50);
  return (
    <section id="top" className="relative bg-background overflow-hidden border-b-8 border-[var(--color-brand-orange)] bg-grain-strong">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-[var(--color-brand-orange)] text-black text-xs font-extrabold uppercase tracking-tighter px-2 py-1 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Mobile Chipper · Same-Day Service
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] uppercase mt-6">
            Branches In.
            <br />
            <span className="text-[var(--color-brand-orange)]">Mulch Out.</span>
            <br />On Site.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Professional on-site wood chipping across Knysna, Sedgefield & the Garden Route.
            We roll up with the chipper, turn your branches and felled timber into useful mulch,
            and haul the rest away. Insured team. 26 years combined experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-black font-extrabold uppercase px-6 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none transition tracking-wide"
            >
              Book On-Site Chipping <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 border-2 border-border hover:border-foreground text-foreground font-extrabold uppercase px-6 py-4 tracking-wide transition"
            >
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--color-brand-orange)]" /> Fully Insured</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-[var(--color-brand-orange)]" /> Same-Day Emergency</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-[var(--color-brand-orange)]" /> 26 Yrs Experience</div>
          </div>
        </div>

        <div className="relative overflow-hidden border-2 border-border aspect-[4/3] select-none">
          <img src={heroBefore} alt="Overgrown plot before clearing" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img src={heroCleared} alt="Cleared plot after Cut and Clear service" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-[var(--color-brand-orange)] shadow-[0_0_20px_rgba(255,102,0,0.6)]"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 bg-[var(--color-brand-orange)] flex items-center justify-center text-black text-xs font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">
              ⇔
            </div>
          </div>
          <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-extrabold uppercase px-2 py-1 border border-white/20">Before</span>
          <span className="absolute top-3 right-3 bg-[var(--color-brand-orange)] text-black text-xs font-extrabold uppercase px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">After</span>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Before after slider"
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Professional & Insured" },
    { icon: Clock, label: "Same-Day Emergency Service" },
    { icon: Award, label: "26 Years Combined Experience" },
    { icon: Star, label: "Trusted by Garden Route Locals" },
  ];
  return (
    <section className="border-t-2 border-b-2 border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
            <i.icon className="h-5 w-5 shrink-0 text-[var(--color-brand-orange)]" />
            <span>{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// NOTE: Each service should ideally have its own unique on-site photo.
// Until real photos exist for "Garden Refuse Removal" and "Monthly Maintenance",
// those two cards intentionally use an icon-forward treatment (see Services component)
// instead of borrowing another service's photo — that reads as a placeholder by design
// rather than as a duplication mistake. Swap in `img` for either once real photos are shot.
const SERVICES = [
  {
    icon: Sparkles,
    title: "On-Site Wood Chipping",
    desc: "Our flagship service. Mobile chipper on your property — branches, prunings and felled timber turned into mulch in hours. Keep the mulch for your garden or we take it away.",
    img: chippingAction,
  },
  {
    icon: Trees,
    title: "Tree Felling",
    desc: "Certified fellers, full safety gear, emergency call-outs. Any tree, any location — felled and chipped on site.",
    img: treeFelling,
  },
  {
    icon: Scissors,
    title: "Alien & Plot Clearing",
    desc: "Full alien plant removal & plot prep for building or resale. Compliant with local regulations.",
    img: heroCleared,
  },
  {
    icon: Trash2,
    title: "Garden Refuse Removal",
    desc: "Loads big or small — we haul away garden waste, cuttings and debris. Clear pricing, fast turnaround.",
    img: gardenRefuse,
  },
  {
    icon: Repeat,
    title: "Monthly Maintenance",
    desc: "Subscription plans that keep your garden neat year-round. Set-and-forget, priced per property.",
    img: monthlyMaintenance,
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead
          eyebrow="Our Core Service — Plus Everything Around It"
          title="Chipping First. Full Clearance If You Need It."
          sub="On-site wood chipping is what we do best. Add tree felling, refuse removal or plot clearing to the same booking."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="group border-2 border-border hover:border-[var(--color-brand-orange)] overflow-hidden bg-card transition">
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-border">
                {s.img ? (
                  <>
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute top-3 left-3 bg-background text-foreground p-2 border-2 border-border">
                      <s.icon className="h-5 w-5 text-[var(--color-brand-orange)]" />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center">
                    <s.icon className="h-14 w-14 text-[var(--color-brand-orange)]/70 group-hover:scale-110 transition duration-500" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display uppercase text-2xl tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#quote" className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold uppercase text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-dark)]">
                  Get a Quote <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
          <a href="#quote" className="border-2 border-border bg-card p-8 flex flex-col justify-between hover:border-foreground transition">
            <div>
              <h3 className="font-display uppercase text-3xl leading-none">Not sure what you need?</h3>
              <p className="mt-3 text-foreground/70 text-sm">Tell us about the job and we'll recommend the fastest, most affordable option.</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-black font-extrabold uppercase px-5 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none w-fit text-sm">
              Free Site Assessment <ChevronRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-20 bg-card border-y-2 border-border">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-brand-orange-dark)] flex items-center gap-2">
            <Users className="h-4 w-4" /> Who Shows Up On Site
          </div>
          <h2 className="mt-3 font-display uppercase text-4xl md:text-5xl leading-[1]">Meet The Crew</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            No subcontractors, no strangers in a bakkie. The same trained, insured team —
            led on every job, gearing up before they touch a single branch.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--color-brand-orange)]" /> Full safety gear on every job</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-[var(--color-brand-orange)]" /> 26 years combined experience</div>
          </div>
        </div>
        <div className="order-1 lg:order-2 overflow-hidden border-2 border-border aspect-[16/9]">
          <img src={teamPhoto} alt="The Cut and Clear team on site with their mobile wood chipper" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <div className={`text-xs font-extrabold uppercase tracking-[0.2em] ${light ? "text-[var(--color-brand-orange)]" : "text-[var(--color-brand-orange-dark)]"}`}>{eyebrow}</div>
      <h2 className={`mt-3 font-display uppercase text-4xl md:text-5xl leading-[1] ${light ? "text-white" : ""}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Select Service", desc: "Tell us what you need — a tree down, a plot cleared, monthly upkeep." },
    { n: "02", title: "Enter Details", desc: "Send your address, photos & timing. We'll assess on site if needed." },
    { n: "03", title: "Get Quote / Book", desc: "Fixed price. Confirmed slot. Job done — often the same day." },
  ];
  return (
    <section className="py-20 bg-card border-y-2 border-border">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="How It Works" title="Booked in 3 Simple Steps" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-background border-2 border-border p-8">
              <div className="font-display text-6xl text-[var(--color-brand-orange)]/20 leading-none">{s.n}</div>
              <h3 className="mt-3 font-display uppercase text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  const areas = ["Knysna", "Sedgefield", "Brenton-on-Sea", "Belvidere", "Rheenendal", "Karatara", "Wilderness", "Buffalo Bay"];
  return (
    <section id="area" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead
            eyebrow="Service Area"
            title="Covering the Garden Route"
            sub="Based in Knysna & Sedgefield — servicing homes, estates, farms and plots across the region."
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((a) => (
              <div key={a} className="flex items-center gap-2 bg-card border-2 border-border px-3 py-2.5 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-[var(--color-brand-orange)]" /> {a}
              </div>
            ))}
          </div>
          <a href="#quote" className="mt-8 inline-flex items-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-black font-extrabold uppercase px-6 py-3.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none text-sm">
            Check Availability <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="overflow-hidden border-2 border-border aspect-[4/3]">
          <iframe
            title="Service area map"
            src="https://www.google.com/maps?q=Knysna%2C+South+Africa&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Sarah M.", place: "Knysna", text: "Cleared our entire back plot in a single day. Left it spotless. Fair price too.", rating: 5 },
    { name: "Johan V.", place: "Sedgefield", text: "Big blue gum came down in a storm — they were on site within hours. Real pros.", rating: 5 },
    { name: "Priya R.", place: "Brenton", text: "We use them monthly. Garden's never looked better. Reliable every single time.", rating: 5 },
  ];
  return (
    <section id="reviews" className="py-20 bg-card border-y-2 border-border">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Real Customers" title="What Locals Are Saying" light />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background border-2 border-border p-6">
              <div className="flex gap-0.5 text-[var(--color-brand-orange)]">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-4 border-t-2 border-border">
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.place}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "On-Site Wood Chipping", address: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Cut and Clear,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AAddress: ${form.address}%0ADetails: ${form.details}`;
    window.open(`https://wa.me/${PHONE.replace("+", "")}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid md:grid-cols-2 overflow-hidden border-2 border-border shadow-2xl">
          <div className="bg-card text-foreground p-8 md:p-10 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-border">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-brand-orange)]">Get a Free Quote</div>
              <h2 className="mt-3 font-display uppercase text-4xl md:text-5xl leading-none">
                Ready when
                <br />you are.
              </h2>
              <p className="mt-4 text-foreground/70">No obligation. Fast reply — usually within the hour during business hours.</p>
            </div>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-[var(--color-brand-orange)]">
                <Phone className="h-5 w-5 text-[var(--color-brand-orange)]" /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-[var(--color-brand-orange)] break-all">
                <Mail className="h-5 w-5 text-[var(--color-brand-orange)]" /> {EMAIL}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[var(--color-brand-orange)]">
                <MessageCircle className="h-5 w-5 text-[var(--color-brand-orange)]" /> WhatsApp us
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 space-y-4">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto h-16 w-16 bg-[var(--color-brand-orange)] flex items-center justify-center text-black text-3xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">✓</div>
                <h3 className="mt-4 font-display uppercase text-2xl">Sent to WhatsApp</h3>
                <p className="mt-2 text-muted-foreground text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <Field label="Your name">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Jane Smith" />
                </Field>
                <Field label="Phone">
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" placeholder="083 123 4567" />
                </Field>
                <Field label="Service">
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input">
                    <option>On-Site Wood Chipping</option>
                    <option>Tree Felling</option>
                    <option>Garden Refuse Removal</option>
                    <option>Alien & Plot Clearing</option>
                    <option>Monthly Maintenance</option>
                    <option>Emergency / Not Sure</option>
                  </select>
                </Field>
                <Field label="Address / area">
                  <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="input" placeholder="Knysna, Sedgefield..." />
                </Field>
                <Field label="Job details">
                  <textarea rows={3} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="input" placeholder="Size of plot, number of trees, timing..." />
                </Field>
                <button type="submit" className="w-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-black font-extrabold uppercase tracking-wide py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none transition">
                  Send via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground text-center">Or call us direct — we usually pick up.</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-2 text-xs font-semibold text-muted-foreground">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[var(--color-brand-orange)]" /> Insured</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[var(--color-brand-orange)]" /> Same-day response</span>
                  <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[var(--color-brand-orange)]" /> No obligation</span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <style>{`.input { width: 100%; border: 2px solid var(--color-border); padding: 12px 14px; font-size: 15px; background: var(--color-background); color: var(--color-foreground); outline: none; transition: border-color .15s; } .input:focus { border-color: var(--color-brand-orange); }`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-extrabold uppercase tracking-wider text-foreground/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function FAQ() {
  const faqs = [
    { q: "How much does on-site chipping cost?", a: "Chipping is priced by volume and access — a small trailer load versus a full plot of felled timber. Send photos on WhatsApp and we'll quote within the hour." },
    { q: "What size branches can you chip?", a: "Our mobile chipper handles branches up to roughly 150mm (6 inches). Anything larger we cut down first or set aside for firewood." },
    { q: "Can I keep the mulch?", a: "Yes — most customers do. It's free landscaping material. If you don't want it, we haul it away and dispose of it responsibly." },
    { q: "Do you offer same-day emergency service?", a: "Yes. Storm-damaged branches, fallen trees, urgent site clearing — we prioritise emergency callouts across Knysna and Sedgefield." },
    { q: "Are you insured?", a: "Fully insured for public liability. Our team uses professional-grade safety gear and follows industry best practice on every job." },
    { q: "Do you work on large plots?", a: "Yes. Alien plant removal and plot clearing for building or resale is one of our specialities. Any size, anywhere on the Garden Route." },
  ];
  // Pricing (0) and insurance (4) are the two questions most likely to make or
  // break a conversion, so they start expanded instead of making visitors click.
  const [open, setOpen] = useState<Set<number>>(new Set([0, 4]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHead eyebrow="Common Questions" title="Answers Before You Ask" />
        <div className="mt-10 divide-y-2 divide-border border-y-2 border-border">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left py-5 gap-6"
              >
                <span className="font-display uppercase text-lg md:text-xl">{f.q}</span>
                <span className={`h-8 w-8 shrink-0 bg-foreground text-background flex items-center justify-center transition-transform border-2 border-border ${open.has(i) ? "rotate-45" : ""}`}>+</span>
              </button>
              {open.has(i) && <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t-2 border-border pt-16 pb-8 bg-grain-strong">
      <div className="relative z-10 mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Cut and Clear" className="h-16 w-auto" />
          <p className="mt-4 text-foreground/70 max-w-md text-sm leading-relaxed">
            Cut and Clear — mobile on-site wood chipping, tree felling and garden
            clearance across Knysna, Sedgefield and the Garden Route.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-10 w-10 border-2 border-border flex items-center justify-center hover:bg-[var(--color-brand-orange)] hover:border-[var(--color-brand-orange)] transition">
              <MessageCircle className="h-5 w-5" />
            </a>
            {/* Instagram/Facebook icons removed until real profile URLs are provided —
                a dead "#" link reads as unfinished/untrustworthy. Re-add once you have them. */}
          </div>
        </div>
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-brand-orange)]">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-foreground break-all"><Mail className="h-4 w-4" /> {EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Lindsay Street, 6571, Knysna · Sedgefield, South Africa</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-brand-orange)]">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li><a href="#services" className="hover:text-foreground">On-Site Wood Chipping</a></li>
            <li><a href="#services" className="hover:text-foreground">Tree Felling</a></li>
            <li><a href="#services" className="hover:text-foreground">Garden Refuse Removal</a></li>
            <li><a href="#services" className="hover:text-foreground">Alien & Plot Clearing</a></li>
            <li><a href="#services" className="hover:text-foreground">Monthly Maintenance</a></li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 mt-12 pt-6 border-t-2 border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-foreground/50">
        <span>© {new Date().getFullYear()} Cut and Clear. All rights reserved.</span>
        <span>Serving Knysna, Sedgefield & the greater Garden Route.</span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Emergency callers (storm damage, fallen tree) want to dial immediately,
          not fill in a form — this stays visible on mobile at all times. */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Cut and Clear now"
        className="md:hidden h-14 w-14 bg-foreground text-background shadow-2xl flex items-center justify-center border-2 border-black transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-14 w-14 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-black shadow-2xl flex items-center justify-center border-2 border-black transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const features = [
  {
    title: "Adaptive Flow Control",
    description:
      "Patented variable-speed motor adapts to demand and maintains rock-solid water pressure without wasting energy.",
    icon: "flow",
  },
  {
    title: "Smart Diagnostics",
    description:
      "Self-monitoring sensors detect cavitation, dry-run, and voltage anomalies with instant alerts via the AquaFlow dashboard.",
    icon: "chip",
  },
  {
    title: "Quiet & Durable",
    description:
      "Whisper-quiet, corrosion-resistant housing built for indoor utility rooms or exposed agricultural sheds.",
    icon: "shield",
  },
];

const industries = [
  {
    title: "Residential Estates",
    description:
      "Deliver consistent water pressure for multi-story homes, rainwater harvesting systems, and shared tanks.",
    bullets: ["Auto tank refills", "Silent night-cycle mode", "Remote monitoring"],
  },
  {
    title: "Agri & Irrigation",
    description:
      "Automate irrigation schedules and protect crops with precise flow control tuned per zone.",
    bullets: ["Weather-based automation", "Dry-run protection", "Frost-resistant design"],
  },
  {
    title: "Hospitality & Commercial",
    description:
      "Guarantee guest comfort and operational uptime with redundant pump chaining and predictive maintenance.",
    bullets: ["Dual pump failover", "BMS integration", "Power surge buffering"],
  },
];

const specs = [
  { label: "Max Flow Rate", value: "120 L/min" },
  { label: "Max Head", value: "58 meters" },
  { label: "Motor Output", value: "1.5 kW, brushless DC" },
  { label: "Power Supply", value: "100-240 VAC, auto-sensing" },
  { label: "Ingress Protection", value: "IP67 weatherproof" },
  { label: "Operating Temp", value: "-10°C to 55°C" },
  { label: "Connectivity", value: "Wi-Fi, Modbus RTU, 4G optional" },
  { label: "Warranty", value: "5 years full coverage" },
];

const testimonials = [
  {
    quote:
      "We replaced three legacy pumps with AquaFlow Pro units across our resorts. Pressure complaints went to zero and our energy bill dropped 22%.",
    name: "Lucia Ortega",
    role: "Facilities Director, Pacifica Resorts",
  },
  {
    quote:
      "Installation took less than a morning and the dashboard caught a suction blockage the same week. It paid for itself instantly.",
    name: "Jared Singh",
    role: "Operations Manager, GreenValley Farms",
  },
];

const stats = [
  { label: "Energy Savings", value: "up to 35%" },
  { label: "Deployment Time", value: "< 2 hrs" },
  { label: "Active Installations", value: "1,600+" },
];

const icons: Record<string, ReactNode> = {
  flow: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-teal-400">
      <path
        fill="currentColor"
        d="M4 7c0-1.7 1.3-3 3-3 1.1 0 2 .9 2 2v8a2 2 0 1 0 4 0V5a3 3 0 0 1 6 0v8c0 3.3-2.7 6-6 6-1.1 0-2-.9-2-2v-8a2 2 0 1 0-4 0v8a3 3 0 0 1-6 0z"
      />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-teal-400">
      <path
        fill="currentColor"
        d="M8 2h8v2h3a1 1 0 0 1 1 1v3h2v8h-2v3a1 1 0 0 1-1 1h-3v2H8v-2H5a1 1 0 0 1-1-1v-3H2V8h2V5a1 1 0 0 1 1-1h3zm2 4v12h4V6z"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-teal-400">
      <path
        fill="currentColor"
        d="M12 2 4 5v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V5z"
      />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-teal-400">
      <path
        fill="currentColor"
        d="M9.3 16.3 4.7 11.7l1.4-1.4 3.2 3.17 8.6-8.57 1.4 1.41z"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[80vh] bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]" />
      <header className="sticky top-0 z-20 border-b border-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="AquaFlow Pro logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-lg font-semibold tracking-wide text-white">
              AquaFlow Pro
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <Link href="#features" className="hover:text-white">
              Features
            </Link>
            <Link href="#industries" className="hover:text-white">
              Solutions
            </Link>
            <Link href="#specs" className="hover:text-white">
              Specs
            </Link>
            <Link href="#testimonials" className="hover:text-white">
              Testimonials
            </Link>
          </nav>
          <Link
            href="mailto:sales@aquaflowpro.com?subject=AquaFlow%20Pro%20Inquiry"
            className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Talk to Sales
          </Link>
        </div>
      </header>

      <main className="relative">
        <section
          id="hero"
          className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:flex-row md:items-center"
        >
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              Launching the next generation of hydraulic intelligence
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Intelligent water pressure that adapts to every demand curve.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                AquaFlow Pro couples variable-speed pumping with cloud analytics
                to deliver uninterrupted, efficient water distribution for homes,
                farms, and commercial sites.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://cal.com/aquaflow/pro-demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition hover:bg-teal-300"
              >
                Book a Live Demo
              </Link>
              <Link
                href="#specs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-200"
              >
                Explore Specifications
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {[
                "Water demand learning with 9-day memory",
                "Automated tank refill scheduling",
                "Dual-stage filtration & smart flushing",
                "OTA firmware with encryption",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  {icons.check}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent blur-3xl" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-teal-500/10 backdrop-blur">
              <div className="rounded-2xl bg-slate-950/70 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    AquaFlow Pro
                  </div>
                  <span className="rounded-full bg-teal-400/20 px-3 py-1 text-xs text-teal-200">
                    v4.2
                  </span>
                </div>
                <div className="mt-6 flex justify-center">
                  <Image
                    src="/pump-hero.svg"
                    alt="AquaFlow Pro smart water pump"
                    width={320}
                    height={320}
                    className="h-52 w-auto"
                    priority
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-center"
                    >
                      <div className="text-lg font-semibold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-slate-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative z-10 mx-auto max-w-6xl space-y-10 rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-16 backdrop-blur"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Engineered to anticipate every pressure shift.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              From pump room sensors to remote analytics, AquaFlow Pro orchestrates
              the entire water delivery stack with a single intelligent controller.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-400/20 bg-teal-400/10">
                  {icons[feature.icon as keyof typeof icons]}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="industries"
          className="mx-auto mt-24 max-w-6xl space-y-12 px-6"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built for every application
              </h2>
              <p className="text-base text-slate-300">
                Configure AquaFlow Pro for tank-to-tap delivery, irrigation mains,
                or multi-building booster systems. Modular controls adapt in
                minutes, not weeks.
              </p>
            </div>
            <Link
              href="https://aquaflowpro.com/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              Browse case studies →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {industry.description}
                  </p>
                </div>
                <ul className="mt-auto space-y-2 text-sm text-slate-300">
                  {industry.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-teal-400/40 text-[10px] text-teal-300">
                        ●
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="specs"
          className="mx-auto mt-24 max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-16 backdrop-blur"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Technical specifications
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Precision-engineered to deliver dependable performance in demanding
                conditions. Certified for drinking water applications and remote
                system integrations.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col gap-1 rounded-xl border border-white/5 bg-black/20 p-4"
                  >
                    <span className="text-xs uppercase tracking-wide text-slate-400">
                      {spec.label}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent p-6">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Connected intelligence
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  Access live flow analytics, proactive maintenance alerts, and
                  firmware updates in the AquaFlow Portal. Integrate via REST or
                  Modbus for building management systems.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Deployment kit
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    {icons.check}
                    <span>Pre-wired control cabinet with auto-priming routine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    {icons.check}
                    <span>Quick-connect manifold and vibration isolation mounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    {icons.check}
                    <span>Commissioning app for Android & iOS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto mt-24 max-w-6xl space-y-8 px-6"
        >
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Trusted by operators worldwide
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-300">
              From boutique hotels to expansive agriculture, AquaFlow Pro keeps
              critical water infrastructure moving without interruption.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-left"
              >
                <p className="text-lg font-medium text-white">
                  “{testimonial.quote}”
                </p>
                <div className="text-sm text-slate-300">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div>{testimonial.role}</div>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl border border-teal-400/40 bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-blue-500/20 px-6 py-16"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-sm uppercase tracking-[0.4em] text-teal-100">
              Get started
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Ready to modernize your water distribution?
            </h2>
            <p className="max-w-2xl text-base text-slate-100/80">
              Schedule a walkthrough with our engineering team or request a sample
              deployment kit. We’ll project energy savings before you commit.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:hello@aquaflowpro.com?subject=AquaFlow%20Pro%20Pilot"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Request a Pilot Kit
              </Link>
              <Link
                href="tel:+18004500321"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Call +1 (800) 450-0321
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="AquaFlow Pro logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-medium text-white">AquaFlow Pro</span>
          </div>
          <div>© {new Date().getFullYear()} AquaFlow Technologies. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="https://aquaflowpro.com/privacy" className="hover:text-teal-200">
              Privacy
            </Link>
            <Link href="https://aquaflowpro.com/support" className="hover:text-teal-200">
              Support
            </Link>
            <Link href="https://aquaflowpro.com/downloads" className="hover:text-teal-200">
              Downloads
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

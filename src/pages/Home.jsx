// src/pages/Home.jsx
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Globe, Banknote, Users } from "lucide-react";
import { useEffect, useState } from "react";

/* -------------------------
   Animations & Helpers
   ------------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const useCounter = (end, duration = 1600) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return count;
};

/* -------------------------
   Page Component
   ------------------------- */
export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: "Secure Wealth Transfer",
      desc:
        "Fast, compliant transfers combining modern tracking with trusted hand-off networks. Ideal for high-value clients who need privacy plus traceability.",
      img: "/images/transfer.jpg",
      color: "text-emerald-400",
      icon: Banknote,
    },
    {
      title: "Blockchain Escrow",
      desc:
        "Smart contract escrow that automates conditional settlement and dispute-resolution with audit-ready logs for regulators and enterprises.",
      img: "/images/escrow.jpg",
      color: "text-sky-400",
      icon: Shield,
    },
    {
      title: "Investment Advisory",
      desc:
        "Data-driven advisory services that combine human expertise with on-chain intelligence for optimal portfolio security and growth.",
      img: "/images/investment.webp",
      color: "text-violet-400",
      icon: Users,
    },
  ];

  const trustFactors = [
    { icon: Shield, label: "Secure & Encrypted", color: "text-emerald-600" },
    { icon: Banknote, label: "Trusted Since 2000", color: "text-amber-600" },
    { icon: Globe, label: "Global Reach", color: "text-sky-600" },
    { icon: Users, label: "Client-Centered", color: "text-violet-600" },
  ];

  return (
    <>
      {/* ================= Hero ================= */}
      <header className="relative text-white overflow-hidden min-h-[60vh] md:min-h-[68vh]">
        {/* layered animated background */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={shouldReduceMotion ? { scale: 1 } : { scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          aria-hidden
        >
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        </motion.div>

        {/* floating accent orbs */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute -left-16 -top-8 w-48 h-48 rounded-full bg-brand-blue/20 blur-3xl"
              animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <motion.div
              className="absolute -right-10 top-28 w-36 h-36 rounded-full bg-amber-400/10 blur-3xl"
              animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          </>
        )}

        {/* hero content */}
        <div className="container relative z-10 flex flex-col justify-center h-full py-12 md:py-16 text-center md:text-left">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="uppercase tracking-widest text-slate-300 text-xs md:text-sm"
          >
            Head Office: London, UK
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md"
          >
            Duke Securities Ltd
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-3 text-sm md:text-lg text-slate-200 max-w-xl leading-relaxed mx-auto md:mx-0"
          >
            Modernizing wealth transfer and investment security — blending trusted
            Angadia tradition with blockchain-grade transparency and enterprise compliance.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-3 text-xs md:text-sm text-slate-300 max-w-lg leading-relaxed mx-auto md:mx-0"
          >
            Licensed, insured, and tech-enabled — we handle high-value transfers,
            escrow, and advisory with a privacy-first approach and auditable controls.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-6 flex gap-4 justify-center md:justify-start"
          >
            <a
              href="/services"
              className="btn btn-primary text-sm md:text-base px-5 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="btn btn-outline text-sm md:text-base px-5 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-200"
            >
              Contact Sales
            </a>
          </motion.div>

          {/* subtle small hero shots / badges */}
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <img
                src="/images/badge-secure.jpg"
                alt="ISO-level security controls"
                className="w-8 h-8 rounded"
                loading="lazy"
                width="32"
                height="32"
              />
              <span>ISO-level security controls</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <img
                src="/images/badge-compliant.png"
                alt="Regulated & licensed"
                className="w-8 h-8 rounded"
                loading="lazy"
                width="32"
                height="32"
              />
              <span>Regulated & licensed</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ================= Main ================= */}
      <main className="relative">
        {/* Mission (now inside the picture like the hero) */}
        <section className="py-10 md:py-16 bg-white text-slate-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl"
              role="region"
              aria-label="Our Mission"
            >
              {/* mission image background */}
              <div className="relative">
                <picture>
                  {/* Add sources if you have webp/jpg variants */}
                  <source srcSet="/images/mission.jpg" type="image/jpeg" />
                  <img
                    src="/images/mission.jpg"
                    alt=""
                    className="w-full h-[420px] sm:h-[460px] md:h-[520px] object-cover"
                    loading="lazy"
                  />
                </picture>

                {/* overlay gradient & grid pattern */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/20" />
                  <div
                    className="absolute inset-0 opacity-15 mix-blend-overlay"
                    style={{ backgroundImage: "url('/images/grid-pattern.png')", backgroundSize: "cover" }}
                    aria-hidden
                  />
                </div>

                {/* overlay content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-4 sm:px-6 md:px-10 lg:px-14">
                    <div className="max-w-xl text-white">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow">
                        Our Mission
                      </h2>
                      <p className="text-sm md:text-base text-slate-100/95 leading-relaxed">
                        We connect traditional trusted couriers and custodial systems with
                        modern cryptographic and ledger-based records. Every transfer has
                        operational checks, regulatory oversight, and a digital audit trail.
                        Our mission is trust with speed.
                      </p>

                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-100/95">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Robust custody + multi-sig settlement
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                          Smart-contracted escrow options
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
                          Real-time tracking and reconciliation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                          KYC & AML-compliant workflows
                        </li>
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href="/about"
                          className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                        >
                          Explore Our Approach
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center px-4 py-2 rounded-md border border-white/25 text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                        >
                          Talk to an Expert
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle interactive sheen */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="hidden sm:block absolute -inset-px rounded-2xl ring-1 ring-white/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services (3D live cards, refined) */}
        <section className="py-12 md:py-14 bg-slate-50">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Offer</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Immersive, secure services built to protect high-value clients and institutions.
              </p>
            </motion.div>

            <div className="mt-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 [perspective:1200px]">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.article
                    key={s.title}
                    variants={fadeInUp}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={shouldReduceMotion ? {} : { rotateY: 8, rotateX: 6, scale: 1.035 }}
                    transition={{ type: "spring", stiffness: 160, damping: 16 }}
                    className="relative h-72 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-white focus-within:ring-2 focus-within:ring-emerald-400"
                    aria-label={s.title}
                    tabIndex={0}
                  >
                    {/* background image */}
                    <img
                      src={s.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                      loading="lazy"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

                    {/* content */}
                    <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shadow-sm ring-1 ring-white/20"
                          aria-hidden
                        >
                          <Icon className={`w-6 h-6 ${s.color}`} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {s.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-slate-200/95 max-w-[92%]">
                        {s.desc}
                      </p>

                      {/* small CTA */}
                      <div className="mt-3 flex items-center gap-3">
                        <a
                          href="/services"
                          className="text-[11px] md:text-xs font-medium uppercase tracking-wide text-white/90 bg-white/10 px-3 py-1 rounded-md backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                          Learn more
                        </a>

                        <div className="text-[11px] md:text-xs text-slate-200/85">
                          <span className="font-semibold">Enterprise</span> • SLA-ready
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-12 md:py-14 bg-white relative overflow-hidden">
          {/* subtle world map bg */}
          <img
            src="/images/world-map.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40"
            loading="lazy"
          />

          <div className="container text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Choose Duke Securities?</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-6">
              We combine decades of on-the-ground trust with modern cryptographic controls.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {trustFactors.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.04, rotateY: 4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="p-4 bg-white/90 rounded-xl shadow-md flex flex-col items-center focus-within:ring-2 focus-within:ring-sky-400"
                  tabIndex={0}
                  role="figure"
                  aria-label={label}
                >
                  <Icon className={`w-8 h-8 ${color}`} aria-hidden />
                  <p className="mt-3 text-sm font-medium text-slate-700 text-center">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats (compact + animated) */}
        <section className="py-10 md:py-12 bg-gradient-to-r from-brand-blue to-slate-900 text-white">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 20, label: "Years Experience", suffix: "+" },
              { value: 5000, label: "Clients Served", suffix: "+" },
              { value: 1000, label: "Secured Transfers (M)", prefix: "$" },
              { value: 99.9, label: "Transaction Success", suffix: "%" },
            ].map((stat, idx) => {
              const count = useCounter(stat.value, 1400 + idx * 200);
              const display =
                typeof stat.value === "number" && String(stat.value).includes(".")
                  ? Number.isInteger(count) ? (count + 0.0).toFixed(1) : count.toFixed(1)
                  : count;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  className="p-4"
                >
                  <h3 className="text-3xl md:text-4xl font-extrabold tabular-nums">
                    {stat.prefix || ""}
                    {display}
                    {stat.suffix || ""}
                  </h3>
                  <p className="text-slate-200/90 mt-2 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-slate-900 text-white text-center relative overflow-hidden">
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "url('/images/grid-pattern.png')",
                backgroundSize: "cover",
              }}
              aria-hidden
            />
          )}
          <div className="container relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Secure Your Wealth?</h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Speak with a specialist to design a compliant, auditable, and private transfer or escrow flow for your needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="btn btn-primary px-5 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="btn btn-outline px-5 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// src/pages/Services.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Clock, FileCheck, Headphones, Globe } from "lucide-react";

const services = [
  {
    title: "Crypto Exchange Services",
    desc: "Trade major cryptocurrencies like Bitcoin, Ethereum, and USDT securely and seamlessly. Our platform offers instant conversion, real-time market insights, and multi-layer security for both individual and institutional investors worldwide.",
    img: "/images/crypto.png",
  },
  {
    title: "Escrow & Investment Security",
    desc: "Protect high-value transactions with trusted escrow services powered by smart contracts. From real estate to corporate investments, we ensure transparency, compliance, and peace of mind for every stakeholder.",
    img: "/images/escrow.jpg",
  },
  {
    title: "Global Asset Transfer Network",
    desc: "Move assets safely across borders with speed and traceability. Our hybrid of traditional security methods and modern technology ensures discreet, insured, and fully trackable transfers of cash, valuables, and digital assets.",
    img: "/images/angadia.jpg",
  },
  {
    title: "Wealth & Investment Advisory",
    desc: "Receive personalized financial guidance from seasoned experts combining traditional market insights with advanced analytics. Optimize portfolios, manage risks, and explore global opportunities confidently.",
    img: "/images/investment.webp",
  },
  {
    title: "Blockchain Solutions",
    desc: "Integrate blockchain-powered systems for smart contracts, secure transactions, and tamper-proof recordkeeping. Enhance operational efficiency while minimizing fraud and boosting transparency.",
    img: "/images/blockchain.jpeg",
  },
  {
    title: "24/7 Financial Support",
    desc: "Our dedicated support team provides round-the-clock assistance. From transaction guidance to investment queries, we ensure uninterrupted operations and immediate solutions.",
    img: "/images/support.webp",
  },
];

const trustFactors = [
  { icon: ShieldCheck, text: "Secure & Encrypted" },
  { icon: FileCheck, text: "Licensed & Compliant" },
  { icon: Lock, text: "Confidential Handling" },
  { icon: Clock, text: "Blockchain Verified" },
  { icon: Headphones, text: "24/7 Expert Support" },
];

const globalReach = [
  {
    icon: Globe,
    title: "Worldwide Operations",
    desc: "We serve clients across continents, ensuring security, transparency, and efficiency in every financial operation.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Network",
    desc: "Leveraging long-standing global partnerships and cutting-edge technology, our clients rely on us for safe and reliable transactions.",
  },
  {
    icon: Clock,
    title: "Timely & Reliable",
    desc: "Rapid processing and 24/7 availability guarantee your assets and investments are handled promptly, anywhere in the world.",
  },
];

export default function Services() {
  return (
    <>
      {/* Top Section: Premium Introduction */}
      <section className="relative py-20 bg-gradient-to-r from-brand-blueDark via-brand-blue to-brand-blueDark text-white">
        <div className="container text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Excellence in Global Financial Services
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-4xl leading-relaxed">
              At Duke Securities, we combine decades of traditional wealth transfer expertise with cutting-edge technology, blockchain innovation, and unmatched professionalism to deliver world-class financial services. Our global clients trust us to safeguard assets, accelerate investments, and provide comprehensive support that consistently exceeds expectations.
            </p>
            <p className="mt-4 text-base md:text-lg max-w-3xl leading-relaxed text-slate-200">
              From high-value asset transfers to innovative blockchain solutions, our services are engineered for security, transparency, and operational excellence. We serve institutions, corporations, and discerning individuals worldwide, helping them navigate complex financial landscapes with confidence and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="container py-16 md:py-20">
        <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Factors */}
      <section className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-center text-slate-900">
            Why Choose Duke Securities?
          </h3>
          <div className="mt-8 md:mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {trustFactors.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 md:p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Icon className="w-10 h-10 text-brand-blue mb-2" />
                <p className="text-center text-sm md:text-base font-medium text-slate-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Global Reach / Expertise */}
      <section className="container py-16 md:py-20 bg-slate-50 rounded-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Our Global Expertise
        </h3>
        <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-3">
          {globalReach.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md text-center"
            >
              <Icon className="w-12 h-12 text-brand-blue mb-4" />
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

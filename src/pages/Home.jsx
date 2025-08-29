import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-brandBlue to-slate-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Financial Technology background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>

        <div className="container relative z-10 py-28 text-center md:text-left">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="uppercase tracking-wider text-slate-300 text-sm"
          >
            Head Office: Nairobi, Kenya
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Duke Securities Ltd
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl"
          >
            Modernizing Wealth Transfer & Investment Security — bridging trusted
            Angadia systems with blockchain-driven innovation.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex gap-4 justify-center md:justify-start"
          >
            <a href="/services" className="btn btn-primary">
              Explore Services
            </a>
            <a href="/about" className="btn btn-outline">
              Learn More
            </a>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Mission & Vision */}
        <section className="py-20 bg-white text-slate-800">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Duke Securities, our mission is to seamlessly connect
                traditional wealth transfer systems with cutting-edge blockchain
                security, ensuring transparency, reliability, and efficiency in
                every transaction.
              </p>
            </motion.div>
            <motion.img
              src="/images/mission.jpg"
              alt="Our mission illustration"
              className="rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-14">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Secure Wealth Transfer", icon: "💰" },
                { title: "Blockchain Escrow", icon: "🔗" },
                { title: "Investment Advisory", icon: "📊" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
            <a href="/services" className="btn btn-primary mt-12">
              View All Services
            </a>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-14">Why Choose Duke Securities?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Trusted Since 2000", icon: "🏦" },
                { title: "Blockchain-Backed", icon: "🛡️" },
                { title: "Global Reach", icon: "🌍" },
                { title: "Client-Centered", icon: "🤝" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.07 }}
                  className="p-6 bg-slate-50 rounded-2xl shadow transition"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-r from-brandBlue to-slate-800 text-white">
          <div className="container grid md:grid-cols-4 text-center gap-10">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "5000+", label: "Clients Served" },
              { value: "$1B+", label: "Secured Transfers" },
              { value: "99.9%", label: "Transaction Success" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="p-6"
              >
                <h3 className="text-5xl font-extrabold">{stat.value}</h3>
                <p className="text-slate-300 mt-3">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container">
            <h2 className="text-3xl font-bold">Ready to Secure Your Wealth?</h2>
            <p className="mt-5 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of clients who trust Duke Securities for modern,
              secure, and transparent wealth transfer solutions.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
              <a href="/about" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

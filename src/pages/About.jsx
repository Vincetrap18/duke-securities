// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const visionMission = [
    {
      title: "Our Vision",
      desc: "Redefine trust, security, and speed in financial transfers and investments globally through smart innovation and integrity-driven services.",
      img: "/images/vision.jpg",
    },
    {
      title: "Our Mission",
      desc: "Become the world’s most reliable and forward-thinking tech-Angadia company, empowering enterprises and individuals to move and grow capital confidently in a digital-first world.",
      img: "/images/mission.jpg",
    },
  ];

  const services = [
    {
      title: "Wealth Transfer",
      desc: "Secure, discreet capital movement using a hybrid of traditional Angadia practices and advanced blockchain technology, enabling fast and reliable transactions worldwide.",
      img: "/images/transfer.jpg",
    },
    {
      title: "Investment Advisory",
      desc: "Data-driven insights and strategic investment guidance tailored to global financial markets, helping clients maximize returns while managing risk effectively.",
      img: "/images/investment.webp",
    },
    {
      title: "Blockchain Solutions",
      desc: "Innovative blockchain-based platforms for secure financial operations, smart contract integrations, and tamper-proof recordkeeping across multiple industries.",
      img: "/images/escrow.jpg",
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      desc: "Honesty, transparency, and trust guide every decision and transaction we undertake.",
      img: "/images/integrity.jpg",
    },
    {
      title: "Innovation",
      desc: "Leveraging cutting-edge technology to deliver faster, smarter, and more secure financial solutions globally.",
      img: "/images/innovation.jpeg",
    },
    {
      title: "Customer Focus",
      desc: "Our clients’ satisfaction and financial security are always at the forefront of everything we do.",
      img: "/images/customer.jpg",
    },
  ];

  const SectionTitle = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
      {children}
    </h2>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-brand-blueDark via-brand-blue to-brand-blueDark text-white">
        <div className="container text-center md:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            About Duke Securities Ltd
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-6 max-w-3xl text-lg md:text-xl text-slate-200 mx-auto md:mx-0"
          >
            A premier tech-powered Angadia company, blending centuries of
            trusted wealth transfer expertise with blockchain innovation. We
            deliver secure, efficient, and discreet financial services to
            enterprises and individuals around the globe.
          </motion.p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="container py-16">
        <SectionTitle>Company Profile</SectionTitle>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-6 text-slate-700 leading-relaxed text-center md:text-left max-w-3xl mx-auto md:mx-0"
        >
          Duke Securities Ltd specializes in secure, efficient, and discreet
          wealth transfer services, combining traditional Angadia reliability
          with cutting-edge technology. Clients trust us to provide modern
          financial solutions tailored to dynamic global markets.
        </motion.p>

        {/* Vision & Mission */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {visionMission.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl shadow-lg overflow-hidden cursor-pointer group aspect-[16/10]"
            >
              <img
                src={item.img}
                alt={`${item.title} illustration`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                <h4 className="text-2xl font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-3 text-base text-slate-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="container text-center">
          <SectionTitle>Our Services</SectionTitle>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A comprehensive suite of services designed to protect, grow, and
            transfer wealth securely worldwide.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl shadow-lg overflow-hidden cursor-pointer group aspect-[16/10]"
              >
                <img
                  src={service.img}
                  alt={`${service.title} illustration`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-left px-6">
                  <h4 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h4>
                  <p className="mt-3 text-base text-slate-200">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="container py-16">
        <SectionTitle>Our Location</SectionTitle>
        <p className="mt-3 text-slate-700 text-center md:text-left">
          Our head office is located in London, United Kingdom, serving clients
          globally.
        </p>
        <div className="mt-6 rounded-2xl overflow-hidden shadow-lg h-80 md:h-96">
          <iframe
            title="Duke Securities London"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.045093356214!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3338e4a5d7%3A0xabcdef123456789!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1692806600000!5m2!1sen!2suk"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Branches */}
      <section className="container py-16">
        <SectionTitle>Our Branches</SectionTitle>
        <p className="mt-3 text-slate-700 text-center md:text-left">
          We proudly serve clients in the East and Southern African regions
          through our regional branches.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { city: "Nairobi, Kenya", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19941.94678779262!2d36.8219461!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f8f5f7e35b%3A0xabcdef123456789!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1692806600000!5m2!1sen!2ske" },
            { city: "Kampala, Uganda", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19924.682189637246!2d32.5825208!3d0.3475964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb5ad05a5b2f%3A0xabcdef123456789!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1692806600001!5m2!1sen!2sug" },
            { city: "Harare, Zimbabwe", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19898.48725649759!2d31.0522!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5f9f7d3f00d%3A0xabcdef123456789!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1692806600002!5m2!1sen!2szw" },
          ].map((branch, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-2xl overflow-hidden shadow-lg h-80"
            >
              <h4 className="text-lg font-semibold text-center py-2 bg-brand-blueDark text-white">
                {branch.city}
              </h4>
              <iframe
                src={branch.map}
                title={branch.city}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-16">
        <SectionTitle>Our Core Values</SectionTitle>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl shadow-lg overflow-hidden cursor-pointer group aspect-[16/10]"
            >
              <img
                src={value.img}
                alt={`${value.title} illustration`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                <h4 className="text-2xl font-semibold text-white">
                  {value.title}
                </h4>
                <p className="mt-3 text-base text-slate-200">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

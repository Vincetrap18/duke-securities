import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Company Profile */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Company Profile
        </h2>
        <h3 className="mt-6 text-xl font-semibold">About Us</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Duke Securities Ltd is a pioneering tech-powered Angadia company
          headquartered in Nairobi, Kenya. We specialize in secure, efficient,
          and discreet wealth transfer services with a modern twist—bridging
          traditional systems with blockchain-based innovation. By fusing the
          trusted reliability of Angadia operations with cutting-edge
          technology, we provide clients with next-generation financial
          solutions tailored to the fast-evolving African and global markets.
        </p>

        {/* Vision & Mission */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="card p-6 flex flex-col items-center text-center"
          >
            <img
              src="/images/vision.jpg"
              alt="Vision"
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold">Our Vision</h4>
            <p className="mt-2 text-slate-700">
              To redefine trust, security, and speed in financial transfers and
              investments across Africa through smart innovation and
              integrity-driven services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="card p-6 flex flex-col items-center text-center"
          >
            <img
              src="/images/mission.jpg"
              alt="Mission"
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold">Our Mission</h4>
            <p className="mt-2 text-slate-700">
              To become Africa’s most reliable and forward-thinking tech-Angadia
              company, empowering individuals and enterprises to move and grow
              capital confidently in a digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Map */}
      <section className="bg-slate-50 py-14">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Our Location</h2>
          <p className="mt-3 text-slate-600">
            Visit us at our head office in Nairobi, Kenya.
          </p>
          <div className="mt-8 h-80 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Duke Securities Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.85100987231!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1738f8e4d4bb%3A0x123456789!2sNairobi%20City!5e0!3m2!1sen!2ske!4v1690000000000!5m2!1sen!2ske"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

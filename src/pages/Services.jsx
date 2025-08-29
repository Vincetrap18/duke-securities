import ServiceCard from "../components/ServiceCard";
import { ShieldCheck, Lock, Clock, FileCheck, Headphones } from "lucide-react";

export default function Services() {
  return (
    <section className="container py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
        Our Core Services
      </h2>
      <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">
        Secure. Modern. Trusted. Explore how Duke Securities is redefining wealth transfer and investment security.
      </p>

      {/* Service Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <ServiceCard
          icon={
            <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/images/crypto.png"
                alt="Crypto Exchange"
                className="w-10 h-10 object-contain transform transition duration-300 hover:scale-110"
              />
            </div>
          }
          title="Crypto Exchange Services"
        >
          We offer a licensed, user-friendly crypto exchange platform enabling
          seamless buying, selling, and conversion of major cryptocurrencies like
          Bitcoin, Ethereum, and USDT — backed by robust security protocols.
        </ServiceCard>

        <ServiceCard
          icon={
            <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/images/escrow.jpg"
                alt="Escrow Service"
                className="w-10 h-10 object-contain transform transition duration-300 hover:scale-110"
              />
            </div>
          }
          title="Escrow & Investment Security"
        >
          Acting as a trusted third-party, we secure high-value transactions with
          smart contract–backed escrow services — ensuring trust and transparency
          for both parties.
        </ServiceCard>

        <ServiceCard
          icon={
            <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/images/angadia.jpg"
                alt="Modern Angadia"
                className="w-10 h-10 object-contain transform transition duration-300 hover:scale-110"
              />
            </div>
          }
          title="Modern Angadia Network"
        >
          Our modern Angadia model enables fast, secure movement of cash and
          valuables across East Africa, with real-time tracking and tech-powered
          transparency.
        </ServiceCard>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center">Why Choose Duke Securities?</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: ShieldCheck, text: "Secure & Encrypted" },
            { icon: FileCheck, text: "Licensed & Compliant" },
            { icon: Lock, text: "Discreet Handling" },
            { icon: Clock, text: "Blockchain Verified" },
            { icon: Headphones, text: "24/7 Support" },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-5 border rounded-xl shadow-sm hover:shadow-md hover:border-primary-blue/50 transition duration-300 ease-in-out"
            >
              <Icon className="w-8 h-8 text-primary-blue" />
              <p className="mt-2 text-sm font-medium text-slate-700 text-center">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhoneAlt, FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        
        {/* Company Info */}
        <div>
          <h4 className="text-white font-bold text-xl tracking-wide">
            Duke Securities Ltd
          </h4>
          <p className="text-slate-400 mt-3 leading-relaxed">
            Modernizing Wealth Transfer & Investment Security across Africa 
            with blockchain-backed trust, secure handling, and innovative Angadia systems.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-semibold text-white">Contact</h5>
          <ul className="mt-3 space-y-3 text-slate-300">
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaMapMarkerAlt /> Nairobi, Kenya
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaEnvelope /> info@dukesecurities.co.ke
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaGlobe /> www.dukesecurities.co.ke
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaPhoneAlt /> +254 XXX XXX XXX
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold text-white">Quick Links</h5>
          <ul className="mt-3 space-y-3 text-slate-300">
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Our Services</li>
            <li className="hover:text-white transition cursor-pointer">Careers</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="font-semibold text-white">Connect With Us</h5>
          <div className="mt-3 flex gap-4">
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-blue-500 transition">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container py-4 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Duke Securities Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Secure • Licensed • Trusted</p>
        </div>
      </div>
    </footer>
  );
}

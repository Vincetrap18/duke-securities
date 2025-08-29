import { MapPin, Mail, Globe, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);

    // For real backend, integrate EmailJS / Nodemailer / API call here
    window.location.href = "mailto:info@dukesecurities.co.ke";
  };

  return (
    <section className="container py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
        Get in Touch
      </h2>
      <p className="mt-2 text-center text-slate-500">
        We’re here to support you anytime, anywhere.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Contact Details */}
        <div className="card p-6 space-y-5">
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brandRed" />
              Head Office: Nairobi, Kenya
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brandRed" />
              info@dukesecurities.co.ke
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-brandRed" />
              www.dukesecurities.co.ke
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brandRed" />
              +254 XXX XXX XXX
            </li>
          </ul>

          {/* Google Maps Embed (placeholder for Nairobi HQ) */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Duke Securities Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8631525352214!2d36.82194631538503!3d-1.2920653990505334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173e3b2dfb0d%3A0x7c2e7a4b6e4a0e3!2sNairobi!5e0!3m2!1sen!2ske!4v1692806600000!5m2!1sen!2ske"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="card p-6 grid gap-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Your Name
            </label>
            <input
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-brandRed focus:border-brandRed"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-brandRed focus:border-brandRed"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              required
              rows="4"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-brandRed focus:border-brandRed"
              placeholder="How can we help?"
            />
          </div>

          <button
            className="btn btn-primary w-full md:w-auto px-6 py-2 text-white font-medium rounded-xl transition hover:bg-brandRed/90"
            type="submit"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

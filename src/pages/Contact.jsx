import { MapPin, Mail, Globe, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setError("⚠️ Unable to send message. Please try again later.");
    }
  };

  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-blueDark/80" />

      {/* Content */}
      <div className="relative container py-20 space-y-24">
        {/* Intro Section */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300">
            Whether you’re an investor, partner, or client — Duke Securities is
            committed to building secure financial futures. Reach out for
            inquiries, collaborations, or support.
          </p>
        </header>

        {/* Contact Info & Form */}
        <section className="grid gap-10 lg:grid-cols-3">
          {/* Info */}
          <aside className="space-y-8">
            <div className="bg-slate-900/70 backdrop-blur rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-white mb-4">
                Head Office
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                  London, United Kingdom
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  Contact@dukesecurities.com
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-brand-accent" />
                  www.dukesecurities.com
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/70 backdrop-blur rounded-xl p-6 shadow-soft">
              <h4 className="font-semibold text-white flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-brand-accent" /> Office Hours
              </h4>
              <p className="text-slate-400 text-sm">
                Mon – Fri: 9:00 AM – 6:00 PM <br />
                Closed Sat, Sun & Holidays
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur rounded-xl p-6 shadow-soft">
              <h4 className="font-semibold text-white mb-2">Departments</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>📩 General Inquiries: Contact@dukesecurities.com</li>
                <li>💼 Investor Relations: ir@dukesecurities.com</li>
                <li>🎯 Careers: hr@dukesecurities.com</li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <iframe
                title="Duke Securities London"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.045093356214!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3338e4a5d7%3A0xabcdef123456789!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1692806600000!5m2!1sen!2suk"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </aside>

          {/* Form */}
          <form
            className="lg:col-span-2 bg-slate-900/70 backdrop-blur rounded-xl p-8 grid gap-5 shadow-soft"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 
                             text-slate-200 placeholder-slate-500
                             focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 
                             text-slate-200 placeholder-slate-500
                             focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Subject
              </label>
              <input
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 
                           text-slate-200 placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                type="text"
                placeholder="e.g. Partnership Opportunity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 
                           text-slate-200 placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                placeholder="How can we help?"
              />
            </div>

            <button
              className="btn btn-primary w-full md:w-auto px-6 py-2 font-medium rounded-lg"
              type="submit"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-green-400 text-sm mt-2">
                ✅ Your message has been sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </form>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "How do I open an account?",
                a: "Start by reaching out via our contact form or emailing us. Our onboarding team will guide you securely through registration.",
              },
              {
                q: "Where are your offices?",
                a: "Our global HQ is in London, UK. We also maintain partnerships and networks across Africa for localized service.",
              },
              {
                q: "Do you work with international clients?",
                a: "Yes, we serve clients worldwide with investment security solutions backed by blockchain technology.",
              },
              {
                q: "What industries do you focus on?",
                a: "We support wealth transfer, investment firms, financial institutions, and private clients seeking secure, modern solutions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/70 backdrop-blur rounded-xl p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h4 className="font-semibold text-white">{item.q}</h4>
                <p className="mt-2 text-sm text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// src/components/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // place your logo in src/assets/

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-2 rounded-lg transition font-medium hover:bg-slate-100";
  const linkActive =
    "text-brandRed underline underline-offset-4 decoration-2";

  const navLinks = [
    { path: "/", label: "Home", end: true },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About Us" }, // put About at the end
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container">
        <div className="h-16 flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Duke Securities Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-bold text-lg text-brandBlue">
              Duke Securities Ltd.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ path, label, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="px-4 py-2 rounded-lg bg-brandRed text-white font-medium hover:bg-brandBlue transition"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border rounded-xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="text-slate-700"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="text-slate-700"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-slideDown">
          <nav className="container py-3 flex flex-col gap-2">
            {navLinks.map(({ path, label, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2 mt-2 rounded-lg bg-brandRed text-white font-medium hover:bg-brandBlue transition text-center"
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

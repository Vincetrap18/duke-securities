// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Layout Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Lazy-loaded Pages (Code Splitting)
const Home = lazy(() => import("./pages/Home.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const About = lazy(() => import("./pages/About.jsx"));

/**
 * Page wrapper for smooth transitions
 */
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Document Head (SEO Ready) */}
      <Helmet>
        <title>Duke Securities | Professional Security Solutions</title>
        <meta
          name="description"
          content="Duke Securities provides top-tier security services with professionalism, trust, and reliability."
        />
      </Helmet>

      {/* Global Header */}
      <header
        role="banner"
        className="w-full shadow-sm bg-white sticky top-0 z-50"
      >
        <Header />
      </header>

      {/* Auto-scroll to top on route change */}
      <ScrollToTop />

      {/* Main Content */}
      <main role="main" className="flex-1 w-full">
        <Suspense
          fallback={
            <div
              className="flex flex-col items-center justify-center h-64 text-gray-600 w-full"
              aria-busy="true"
              aria-live="polite"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
              <p className="mt-4 font-medium text-blue-600">Loading page...</p>
            </div>
          }
        >
          {/* Animated Routes */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <Services />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />

              {/* Catch-all: redirect unknown paths to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Global Footer */}
      <footer role="contentinfo" className="w-full bg-white shadow-inner">
        <Footer />
      </footer>
    </div>
  );
}

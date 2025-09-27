import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Features from "./components/Features";
import StatisticsSection from "./components/StatisticsSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CoursesSection from "./components/CoursesSection";
import ContactUsSection from "./components/ContactUsSection";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <Features />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Us Section */}
      <ContactUsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

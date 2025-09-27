import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import aboutuss from "../assets/aboutuss.jpg";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-28 bg-gray-50" 
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutuss}
            alt="About Institute"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">
            About IELTS Institute
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We are committed to helping students achieve their dream IELTS band score through expert guidance, personalized coaching, and advanced AI evaluation. Our team of experienced instructors uses proven teaching methods and modern tools to ensure each student reaches their full potential. Whether you are a beginner or aiming for a top band score, we provide the right resources and support to succeed.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

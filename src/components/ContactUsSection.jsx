import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Contact Us
        </h2>

        <form className="bg-gray-50 p-8 rounded-lg shadow-md" data-aos="fade-up">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              rows={5}
              placeholder="Your Message"
            />
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;

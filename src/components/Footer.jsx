function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">IELTS Institute</h2>
          <p className="text-gray-400">
            Helping students achieve their dream IELTS band with expert
            guidance, mock tests, and AI-powered evaluation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: support@ieltsinstitute.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Delhi, India</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 text-center mt-8 pt-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

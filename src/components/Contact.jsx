import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="bg-white border-t py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Links */}
        <div>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Skills</a></li>
          </ul>
        </div>

        {/* Middle Links */}
        <div>
          <ul className="space-y-3">
            <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#help" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#privacy" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h3 className="font-bold mb-3">Subscribe</h3>
          <form className="flex flex-col sm:flex-row md:flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        © 2025 abdullah azzam. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;

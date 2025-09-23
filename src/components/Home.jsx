import React from "react";
import profile from "./assets/azzam.png";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Azzam</h1>
        <p className="text-lg text-gray-600 mb-6">
          A passionate Web Developer with experience building modern websites
          and web applications from scratch to deployment.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get In Touch
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={profile} alt="Profile" className="w-64 h-64 object-cover rounded-full shadow-lg" />
      </div>
    </section>
  );
};

export default Home;

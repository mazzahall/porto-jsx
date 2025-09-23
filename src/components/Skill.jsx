import React from "react";

const Skill = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">HTML</h3>
            <p> Building the structure and content of a website as the main foundation of a web page.</p>
           
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">CSS</h3>
            <p>Create an attractive, responsive, and easy-to-use website with a modern design.</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">JavaScript</h3>
            <p> Add interactivity and dynamic functions to make the website more lively and responsive on all devices.</p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

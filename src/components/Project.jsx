// src/components/Project.jsx
import React from "react";
import project1 from "../components/assets/manajemen.png";
import project2 from "../components/assets/adz.png";
import project3 from "../components/assets/adzhealth.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Data Management",
      img: project1,
      desc: "Simple data management application with JSON/CSV export.",
      link: "https://tugas-akhir-chi.vercel.app/"
    },
    {
      id: 2,
      title: "AdzHealth Website",
      img: project2,
      desc: "Health website with licensing & patient data features.",
      link: "https://adz-health.vercel.app/"
    },
    {
      id: 3,
      title: "UI/UX AdzHealth",
      img: project3,
      desc: "Mobile app view for AdzHealth.",
      link: "https://www.figma.com/design/fbVtcIcWoq3s1pmBMHwAgm/project-uks?node-id=0-1&p=f&t=3YupZpUp5Sf7d8bA-0"
    }
  ];

   return (
    <section className="bg-gray-50 py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          A few samples of my latest works
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

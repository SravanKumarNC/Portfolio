import React from "react";
import { projects } from "../data/projects";

const Projects = () => (
  <section id="projects" className="py-20 container mx-auto min-h-[80vh] border-t border-[#25213b] justify-center items-center ">
    <div className="flex justify-center my-10 lg:py-12">
      <div className="flex items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="shadow-lg border bg-white/30 backdrop-blur-md  p-2 px-5 text-xl rounded-md mx-4">
          Projects
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-2">
      {projects.map((p, idx) => (
        <div key={idx} className="p-6 bg-[#FFFFFF] border rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-500 mb-2">Role: {p.role}</p>
          <p className="mb-3">{p.description}</p>
          <p className="text-sm text-gray-700 mb-2">Stack: {p.tools.join(", ")}</p>
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500">
              View Project →
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

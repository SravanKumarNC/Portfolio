import React from "react";
import { experience } from "../data/experience";

const Experience = () => (
  <section id="experience" className="py-20 container mx-auto">
    <div className="flex justify-center my-10 lg:py-12">
      <div className="flex items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="shadow-lg border bg-white/30 backdrop-blur-md  p-2 px-5 text-xl rounded-md mx-4">
          Experience
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
    <div className="space-y-8 ">
      {experience.map((exp, idx) => (
        <div key={idx} className="p-6 m-2 bg-[#FFFFFF] border shadow-md rounded-xl">
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-gray-600">
            {exp.company} • {exp.duration}
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            {exp.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;

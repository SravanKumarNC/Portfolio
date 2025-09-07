import React from "react";
import { education } from "../data/education";

const Education = () => (
  <section
    id="education"
    className="py-20 container mx-auto border-t border-[#25213b] min-h-[70vh]"
  >
    <div className="flex justify-center my-10 lg:py-12">
      <div className="flex items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="shadow-lg border bg-white/30 backdrop-blur-md  p-2 px-5 text-xl rounded-md mx-4">
          Education
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
    <div className="space-y-6">
      {education.map((edu, idx) => (
        <div key={idx} className="p-6 m-2 bg-[#FFFFFF] border shadow-md rounded-xl">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-gray-600">
            {edu.institution} • {edu.duration}
          </p>
          <p className="mt-2 text-gray-700">{edu.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;

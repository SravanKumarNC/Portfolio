import React from "react";
import { about } from "../data/about";

const About = () => (
  <section id="about" className="py-20 container mx-auto">
    <h2 className="text-3xl font-bold mb-6">{about.title}</h2>
    <p className="text-lg text-gray-700 max-w-3xl">{about.content}</p>
  </section>
);

export default About;

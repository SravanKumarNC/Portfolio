import React from "react";
import { personal } from "../data/Personal";

const Footer = () => (
  <footer className="py-6 text-center text-gray-500">
    <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
  </footer>
);

export default Footer;

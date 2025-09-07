// import React from "react";

// const Navbar = () => {
//   const links = ["About", "Experience", "Skills", "Projects", "Education", "Blogs", "Contact"];
//   return (
//     <nav className="fixed w-full bg-white shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         <h1 className="font-bold text-xl">Portfolio</h1>
//         <ul className="flex space-x-6">
//           {links.map((link, i) => (
//             <li key={i}>
//               <a href={`#${link.toLowerCase()}`} className="hover:text-blue-500">
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = ["About", "Experience", "Skills", "Projects", "Education", "Blogs", "Contact"];

//   return (
//     <nav className="fixed w-full bg-white shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <h1 className="font-bold text-xl">Portfolio</h1>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-6">
//           {links.map((link, i) => (
//             <li key={i}>
//               <a
//                 href={`#${link.toLowerCase()}`}
//                 className="hover:text-blue-500"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Button (only visible on mobile/tab) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           {/* Hamburger Icon */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               // X (close)
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               // Hamburger
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <ul className="flex flex-col items-center py-4 space-y-4">
//             {links.map((link, i) => (
//               <li key={i}>
//                 <a
//                   href={`#${link.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)} // close after click
//                   className="hover:text-blue-500"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");

//   const links = [
//     "About",
//     "Experience",
//     "Skills",
//     "Projects",
//     "Education",
//     "Contact",
//   ];

//   useEffect(() => {
//     const sections = document.querySelectorAll("section[id]");
//     const options = { threshold: 0.3 };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, options);

//     sections.forEach((section) => observer.observe(section));
//     return () => sections.forEach((section) => observer.unobserve(section));
//   }, []);

//   return (
//     <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-4/5">
//       {/* Floating container */}
//       <div
//         className="flex items-center justify-between px-6 py-3 rounded-2xl shadow-lg
//                       bg-gray-300 backdrop-blur-md border border-white/40"
//       >
//         {/* Logo */}
//         <h1 className="font-bold text-lg md:text-xl">Portfolio</h1>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-6">
//           {links.map((link, i) => {
//             const id = link.toLowerCase();
//             return (
//               <li key={i}>
//                 <a
//                   href={`#${id}`}
//                   className={`transition-colors cursor-target duration-200 ${
//                     activeSection === id
//                       ? "text-blue-600 font-semibold"
//                       : "hover:text-blue-500"
//                   }`}
//                 >
//                   {link}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Hamburger (mobile/tablet) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-xl focus:outline-none"
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu (floating dropdown) */}
//       {isOpen && (
//         <div className="md:hidden mt-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6">
//           <ul className="flex flex-col items-center space-y-4">
//             {links.map((link, i) => {
//               const id = link.toLowerCase();
//               return (
//                 <li key={i}>
//                   <a
//                     href={`#${id}`}
//                     onClick={() => setIsOpen(false)} // close after click
//                     className={`transition-colors duration-200 ${
//                       activeSection === id
//                         ? "text-blue-600 font-semibold"
//                         : "hover:text-blue-500"
//                     }`}
//                   >
//                     {link}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const handleHashChange = () => {
      // Get the hash from the URL and remove the '#'
      const currentHash = window.location.hash.slice(1);
      setActiveSection(currentHash);
    };

    // Set the initial active section on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-4/5">
      {/* ... other code ... */}
      <div
        className="flex items-center justify-between px-6 py-3 rounded-2xl shadow-lg
                      bg-gray-300 backdrop-blur-md border border-white/40"
      >
        {/* Logo */}
        {/* <h1 className="font-bold text-lg md:text-xl">Portfolio</h1> */}
        <div className= "">
          <img src="/SKlogo1.webp" alt="logo" className="w-30 h-10" />
        </div>
        
        <ul className="hidden md:flex space-x-6">
          {links.map((link, i) => {
            const id = link.toLowerCase();
            return (
              <li key={i}>
                <a
                  href={`#${id}`}
                  className={`transition-colors cursor-target duration-200 ${
                    activeSection === id
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-500"
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Hamburger (mobile/tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* ... mobile menu and other code ... */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <ul className="flex flex-col items-center space-y-4">
            {links.map((link, i) => {
              const id = link.toLowerCase();
              return (
                <li key={i}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)} // close after click
                    className={`transition-colors duration-200 ${
                      activeSection === id
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-500"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

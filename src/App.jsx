// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Education from "./components/Education";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import TargetCursor from "./Animations/TargetCursor";
// import SplashCursor from "./Animations/SplashCursor";
// function App() {
//   return (
//     <div className="font-sans bg-[#D4D4D4] w-full">
//       <SplashCursor />
//       <TargetCursor spinDuration={2} hideDefaultCursor={true} />
//       <Navbar />
//       <Hero />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { Suspense, lazy } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Education from "./components/Education";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// Lazy imports for animations
// const SplashCursor = lazy(() => import("./Animations/SplashCursor"));
// const TargetCursor = lazy(() => import("./Animations/TargetCursor"));

// function App() {
//   return (
//     <div className="font-sans bg-[#D4D4D4] w-full">
//       <Suspense fallback={null}>
//         <SplashCursor />
//         <TargetCursor spinDuration={2} hideDefaultCursor={true} />
//       </Suspense>

//       <Navbar />
//       <Hero />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load heavy sections
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Lazy load animations too
const SplashCursor = lazy(() => import("./Animations/SplashCursor"));
const TargetCursor = lazy(() => import("./Animations/TargetCursor"));

function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="font-sans bg-[#D4D4D4] w-full">
      <Suspense fallback={null}>
        <SplashCursor />
        {!isMobile && (
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        )}
      </Suspense>

      <Navbar />
      <Hero />

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

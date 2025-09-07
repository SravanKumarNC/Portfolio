// import React from "react";
// import { personal } from "../data/Personal.js";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// // Import profile image if inside src/assets
// import profileImg from "../assets/util/profile.jpg";

// const Hero = () => {
//   const icons = {
//     github: <FaGithub size={28} />,
//     linkedin: <FaLinkedin size={28} />,
//     twitter: <FaTwitter size={28} />,
//     leetcode: <SiLeetcode size={28} />,
//   };

//   return (
//     <section
//       id="hero"
//       className="h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16"
//     >
//       {/* Left: Personal Info */}
//       <div className="flex-1 text-center md:text-left">
//         <h1 className="text-5xl font-bold">{personal.name}</h1>
//         <p className="text-xl mt-2 text-gray-600">{personal.tagline}</p>
//         <p className="mt-4 text-gray-700 max-w-xl mx-auto md:mx-0">
//           {personal.about}
//         </p>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start space-x-6 mt-6">
//           {Object.entries(personal.socials).map(([key, link]) => (
//             <a
//               key={key}
//               href={link}
//               target="_blank"
//               rel="noreferrer"
//               className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
//             >
//               {icons[key]}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Right: Cloud Image */}
//       <div className="flex-1 flex justify-center">
//         <div className="w-60 h-80 bg-gradient-to-br from-purple-300 to-pink-200 rounded-[50%] overflow-hidden animate-float shadow-xl">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { personal } from "../data/Personal.js";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// // import profileImg from "../assets/util/profile.jpg";

// const Hero = () => {
//   const icons = {
//     github: <FaGithub size={28} />,
//     linkedin: <FaLinkedin size={28} />,
//     twitter: <FaTwitter size={28} />,
//     leetcode: <SiLeetcode size={28} />,
//   };

//   return (
//     <section
//       id="hero"
//       className="h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16"
//     >
//       {/* Left: Personal Info */}
//       <div className="flex-1 text-center md:text-left">
//         <h1 className="text-5xl font-bold">{personal.name}</h1>
//         <p className="text-xl mt-2 text-gray-600">{personal.tagline}</p>
//         <p className="mt-4 text-gray-700 max-w-xl mx-auto md:mx-0">
//           {personal.about}
//         </p>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start space-x-6 mt-6">
//           {Object.entries(personal.socials).map(([key, link]) => (
//             <a
//               key={key}
//               href={link}
//               target="_blank"
//               rel="noreferrer"
//               className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
//             >
//               {icons[key]}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Right: Styled Image */}
//       {/* <div className="flex-1 flex justify-center">
//         <div className="img-box inner-shadow floating">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="outer-shadow"
//           />
//         </div>
//       </div> */}
//       <div className="flex items-center justify-center min-h-screen bg-gray-800">
//         <div className="relative p-4 rounded-xl custom-blob-shape bg-gray-900">
//           <div className="relative w-64 h-64 overflow-hidden rounded-full">
//             {/* Use a simple div as a placeholder for the image */}
//             <div
//               className="w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: "url('../assets/util/profile.jpg')" }}
//             ></div>
//             {/* This is where the play button or other content would go */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.js

import React from "react";
import { personal } from "../data/Personal.js";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { about } from "../data/about";
import BlurText from "../Animations/BlurText.jsx";
import TextType from "../Animations/TypeText.jsx";

const Hero = () => {
  const icons = {
    github: <FaGithub size={28} />,
    linkedin: <FaLinkedin size={28} />,
    twitter: <FaTwitter size={28} />,
    leetcode: <SiLeetcode size={28} />,
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 pt-24 md:pt-28"
    >
      {/* Left: Card Component */}
      <div className="flex-1 max-w-md bg-[#FFFFFF] border shadow-lg rounded-2xl px-6 py-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative w-58 h-58 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/profile.webp"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover shadow-2xl hover:scale-120"
            />
          </div>
        </div>

        {/* Personal Info */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-center md:text-left">
            <BlurText
              text={personal.name}
              animateBy="words"
              direction="top"
              // className="text-4xl font-bold text-gray-800"
              delay={40}
            />
          </h1>

          {/* {personal.tagline} */}
          <TextType
            text={[
              "Full-Stack Developer 💻",
              "MERN Enthusiast 🚀",
              "Building Cool Stuff 🎨",
            ]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={1500}
            className="text-xl md:text-2xl font-semibold"
            textColors={["#4F46E5", "#059669", "#DC2626"]} // cycles through colors
          />

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {Object.entries(personal.socials).map(([key, link]) => (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 cursor-target hover:text-blue-500 transition-colors duration-200"
              >
                {icons[key]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right: About Content */}
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">{about.title}:</h2>
        <BlurText
          text={about.content}
          animateBy="words"
          direction="top"
          className="text-2xl font-semibold text-gray-800"
          delay={40}
        />
      </div>
    </section>
  );
};

export default Hero;

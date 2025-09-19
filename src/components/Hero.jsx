import { personal } from "../data/Personal.js";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { about } from "../data/about";
import BlurText from "../Animations/BlurText.jsx";
import TextType from "../Animations/TypeText.jsx";

const Hero = () => {
  const icons = {
    github: { icon: <FaGithub size={28} />, label: "GitHub" },
    linkedin: { icon: <FaLinkedin size={28} />, label: "LinkedIn" },
    twitter: { icon: <FaTwitter size={28} />, label: "Twitter" },
    leetcode: { icon: <SiLeetcode size={28} />, label: "LeetCode" },
    resume: {
      icon: <FaDownload size={28}  />,
      label: "Resume",
      link: "/resume.pdf",
    },
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
            {Object.entries(icons).map(([key, { icon, label, link }]) => (
              <a
                key={key}
                href={link || personal.socials[key]}
                target={key === "resume" ? "_self" : "_blank"}
                rel="noreferrer"
                download={key === "resume"}
                className="relative group text-gray-600 cursor-target hover:text-blue-500 transition-colors duration-200"
              >
                {icon}
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {label}
                </span>
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

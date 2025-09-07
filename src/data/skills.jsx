// export const skills = [
//   'HTML',
//   'CSS',
//   'Javascript',
//   'Typescript',
//   'React',
//   'Next JS',
//   'Tailwind',
//   'MongoDB',
//   'MySQL',
//   'PostgreSQL',
//   'Git',
//   'AWS',
//   'Bootstrap',
//   'Docker',
// ]

// src/data/skills.js
import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiGit,
  SiMysql,
} from "react-icons/si";

export const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
  { name: "Git", icon: <SiGit className="text-red-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
];

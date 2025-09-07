// import React from "react";
// import { skills } from "../data/skills";
// import { skillsImage } from "../data/skills-images";
// import Marquee from "react-fast-marquee";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative flex flex-col justify-center border-t my-12 lg:my-24 border-[#25213b] min-h-[70vh] scroll-mt-24 "
//     >
//       {/* background glow */}
//       <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 filter blur-3xl opacity-20"></div>

//       {/* Section title */}
//       <div className="flex justify-center my-10 lg:py-12">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="shadow-lg border bg-white/30 backdrop-blur-md  p-2 px-5 text-xl rounded-md mx-4">
//             Skills
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       {/* Skills carousel */}
//       <div className="w-full my-12 flex items-center">
//         <Marquee
//           gradient={false}
//           speed={80}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="left"
//           className="pointer-events-none" // 🛠 prevents Marquee wrapper from blocking clicks
//         >
//           {skills.map((skill, id) => (
//             <div
//               key={id}
//               className="w-36 min-w-fit h-fit flex flex-col cursor-target items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer pointer-events-auto" // ✅ only items get pointer events
//             >
//               <div
//                 className="h-full w-full rounded-lg border border-[#1f223c] shadow-lg bg-white/30 backdrop-blur-md group-hover:border-violet-500 transition-all duration-500"
//               >
//                 {/* Top divider line */}
//                 <div className="flex -translate-y-[1px] justify-center">
//                   <div className="w-3/4">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
//                   </div>
//                 </div>
//                 {/* Skill content */}
//                 <div className="flex flex-col items-center justify-center gap-3 p-6">
//                   <div className="h-8 sm:h-10">
//                     <img
//                       src={skillsImage(skill)}
//                       alt={skill}
//                       width={40}
//                       height={40}
//                       className="h-full w-auto rounded-lg"
//                     />
//                   </div>
//                   <p className=" text-sm sm:text-lg">{skill}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { skills } from "../data/skills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center border-t my-12 lg:my-24 border-[#25213b] min-h-[70vh] scroll-mt-24"
    >
      {/* background glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Section title */}
      <div className="flex justify-center my-10 lg:py-12">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="shadow-lg border bg-white/30 backdrop-blur-md p-2 px-5 text-xl rounded-md mx-4">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Skills carousel */}
      <div className="w-full my-12 flex items-center">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="pointer-events-none"
        >
          {skills.map((skill, id) => (
            <div
              key={id}
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer pointer-events-auto"
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] shadow-lg bg-white/30 backdrop-blur-md group-hover:border-violet-500 transition-all duration-500">
                {/* Top divider line */}
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                {/* Skill content */}
                <div className="flex flex-col cursor-target items-center justify-center p-6">
                  <div className="text-4xl sm:text-5xl">{skill.icon}</div>
                  <p className="text-sm sm:text-lg">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;

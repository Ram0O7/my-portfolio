import { useState } from "react";
import skills from "../../utils/skills";

const Skill = () => {
  const [load, setLoad] = useState(6);
  return (
    <div className="skill flex flex-col sm:flex-wrap sm:flex-row justify-center items-center sm:justify-start flex-wrap gap-12 sm:gap-16 lg:gap-20 py-8 lg:py-16">
      {skills.map((skill, index) => {
        const { language, experience, icon } = skill;
        return (
          index < load && (
            <div
              className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-center sm:w-1/3 lg:w-1/4"
              key={Date.now() * Math.random()}
            >
              <div className="w-20 h-20 object-contain">{icon}</div>
              <h1 className="text-3xl sm:text-4xl font-bold">{language}</h1>
              <p className="text-xs sm:text-sm font-bold">{experience}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Skill;

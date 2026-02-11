// src/constants.js

import reactLogo from "./assets/skills/react.png";
import jsLogo from "./assets/skills/javascript.png";
import nodeLogo from "./assets/skills/node.png";
import pythonLogo from "./assets/skills/python.png";
import mongoLogo from "./assets/skills/mongodb.png";
import figmaLogo from "./assets/skills/figma.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: reactLogo },
      { name: "JavaScript", logo: jsLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "MongoDB", logo: mongoLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];
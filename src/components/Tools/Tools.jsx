import React from "react";
import Marquee from "react-fast-marquee";
import { Zoom } from "react-awesome-reveal";

const toolsData = [
  {
    id: 1,
    name: "React.js",
    icon: "https://img.icons8.com/ultraviolet/64/000000/react.png",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/64/000000/tailwindcss.png",
  },
  {
    id: 3,
    name: "Firebase",
    icon: "https://img.icons8.com/color/64/000000/firebase.png",
  },
  {
    id: 4,
    name: "Figma",
    icon: "https://img.icons8.com/color/64/000000/figma--v1.png",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: "https://img.icons8.com/color/64/000000/javascript.png",
  },
  {
    id: 6,
    name: "Git",
    icon: "https://img.icons8.com/color/64/000000/git.png",
  },
];

const Tools = () => {
  return (
    <div className="bg-black py-12">
      <h2 className="text-4xl text-white text-center font-bold mb-8">
        My Tools
      </h2>

      {/* Marquee Section */}
      <Marquee
        gradient={false}
        speed={50}
        className="flex items-center overflow-hidden"
      >
        {toolsData.map((tool) => (
          <Zoom key={tool.id}>
            <div className="group mx-4 relative bg-gray-800 text-white  rounded-lg p-4 transition-transform transform scale-105 shadow-2xl">
              {/* Lighting Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 transition-opacity duration-300"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <p className="text-center font-medium text-lg group-hover:text-yellow-400">
                  {tool.name}
                </p>
              </div>
            </div>
          </Zoom>
        ))}
      </Marquee>
    </div>
  );
};

export default Tools;

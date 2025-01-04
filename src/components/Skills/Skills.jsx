import React from 'react';
import { FaPaintBrush, FaCode } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <div className="bg-base-200 py-12">
      <h2 className="text-center text-white text-4xl font-bold mb-8">My Skills</h2>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
        {/* Card 1 */}
        <Fade direction="left">
          <div className="card w-80 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="card-body flex items-center gap-4">
              <FaCode className="text-6xl text-white animate-spin" />
              <div>
                <h3 className="card-title text-2xl font-semibold">Front-End Development</h3>
                <p className="mt-4">
                  Skilled in building responsive, user-friendly interfaces using HTML, CSS, TailwindCSS, DaisyUI, and
                  React.js.
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Card 2 */}
        <Fade direction="right">
          <div className="card w-80 bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="card-body flex items-center gap-4">
              <FaPaintBrush className="text-6xl text-white animate-bounce" />
              <div>
                <h3 className="card-title text-2xl font-semibold">Designing Skill</h3>
                <p className="mt-4">
                  Proficient in Figma design, effectively convert Figma to 100% error-free structured code with client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;

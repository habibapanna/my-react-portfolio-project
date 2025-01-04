import React from 'react';
import Education from '../Education/Education';

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        {/* Content */}
        <div className="flex flex-col items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/Wpp9Pm2/celebration-labour-day-with-3d-cartoon-portrait-working-woman.jpg"
              alt="Girl Developing"
              className="rounded-lg shadow-lg w-80 lg:w-96 animate-float"
            />
          </div>

          {/* Text Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slide-in">
            <h3 className="text-3xl font-bold mb-4">Hi, I'm Habiba Panna!</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I’m a passionate and dedicated <strong>front-end developer</strong>, currently pursuing my honors in
              <strong> Mathematics</strong>. I started my web development journey with a curiosity to create
              <strong> beautiful</strong> and <strong>functional</strong> websites that provide meaningful experiences.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My expertise includes <strong>HTML, CSS, JavaScript, React,</strong> and <strong>TailwindCSS</strong>. I love
              bringing designs to life while focusing on <strong>usability</strong> and <strong>aesthetics</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Outside of coding, I enjoy solving logical problems, learning new technologies, and collaborating with
              creative people. My ultimate goal is to grow as a developer and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Education></Education>
      </div>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            0% {
              transform: translateX(-50%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-slide-in {
            animation: slideIn 1s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default AboutMe;

import React from "react";
import { Fade, Zoom, Bounce } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-blue-900 via-sky-600 to-red-900 min-h-screen text-white overflow-hidden">
        <div className="hero-content flex-col lg:flex-row items-center lg:items-start">
          {/* Text Section */}
          <Fade cascade damping={0.2} direction="left">
            <div className="text-center lg:text-left space-y-6 lg:pr-12">
              <h1 className="text-5xl font-extrabold">
                Hi, I'm a{" "}
                <span className="text-yellow-300 animate-pulse">
                  Front-End Developer!
                </span>
              </h1>
              <p className="text-lg md:text-xl font-light">
                I specialize in building beautiful, responsive websites that
                deliver exceptional user experiences. Let’s build something
                amazing together!
              </p>
              <div  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }} className="space-x-4">
                <button className="btn btn-primary bg-yellow-300 text-gray-900 border-none hover:bg-yellow-400 transition-transform transform hover:scale-105">
                  Contact Me
                </button>
              </div>
            </div>
          </Fade>

          {/* Image Section */}
          <Zoom>
            <Bounce>
              <div className="max-w-md mt-8 lg:mt-0">
                <img
                  src="https://i.ibb.co/Wpp9Pm2/celebration-labour-day-with-3d-cartoon-portrait-working-woman.jpg"
                  alt="Front-End Developer"
                  className="shadow-2xl rounded-xl transition-transform transform hover:scale-110"
                />
              </div>
            </Bounce>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Banner;

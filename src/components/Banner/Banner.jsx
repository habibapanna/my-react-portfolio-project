import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
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

              {/* Social Media Links */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-110"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-400 hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-110"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/habiba-panna-890a0434a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-700 hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-110"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="https://github.com/habibapanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>
              </div>

              <div className="flex gap-5">
                {/* Contact Me Button */}
                <div
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <button className="btn btn-primary bg-yellow-300 text-gray-900 border-none hover:bg-yellow-400 transition-transform transform hover:scale-105">
                    Contact Me
                  </button>
                </div>

                {/* Download Resume Button */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1hwSVmgNAIGsg6se8B9aGzWFjcV1vqmJF/view?usp=sharing"
                    download
                  >
                    <button className="btn btn-primary bg-yellow-300 text-gray-900 border-none hover:bg-yellow-400 transition-transform transform hover:scale-105">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Fade>

          {/* Image Section */}
          
            <Bounce>
              <div className="max-w-md mt-8 lg:mt-0">
                <img
                  src="https://i.postimg.cc/DwYK0mzN/celebration-labour-day-with-3d-cartoon-portrait-working-woman-1.jpg"
                  alt="Front-End Developer"
                  className="shadow-2xl rounded-xl transition-transform"
                />
              </div>
            </Bounce>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;

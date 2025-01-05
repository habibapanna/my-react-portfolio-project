import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const projectsData = [
  // Your existing projects data
];

const Projects = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGetInTouchClick = () => {
    navigate("/contact"); // Navigate to the /contact route
  };

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16">
      {/* Header */}
      <Zoom>
        <div className="text-center">
          <h2 className="text-5xl text-white font-extrabold mb-8 tracking-wider">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my creative front-end web development journey, featuring vibrant designs and dynamic functionalities.
          </p>
        </div>
      </Zoom>

      {/* Project Cards */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Fade key={project.id} delay={index * 200}>
              <div className="group relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform">
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="w-full h-56 object-cover transition-transform transform group-hover:scale-110 duration-500"
                />
                <div className="p-6">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">{project.description}</p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:scale-110 transition-all duration-300"
                  >
                    View Live Site
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-16 bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-4">
          {/* Skills */}
          <Fade cascade>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white">Technologies I Use</h3>
              <p className="mt-4 text-gray-400">These tools help bring my ideas to life.</p>
            </div>
            <div className="flex justify-center gap-8">
              <FaReact size={50} className="text-blue-400 hover:scale-110 transition duration-300" />
              <FaHtml5 size={50} className="text-orange-500 hover:scale-110 transition duration-300" />
              <FaCss3Alt size={50} className="text-blue-500 hover:scale-110 transition duration-300" />
              <FaJsSquare size={50} className="text-yellow-400 hover:scale-110 transition duration-300" />
              <FaGithub size={50} className="text-gray-400 hover:scale-110 transition duration-300" />
            </div>
          </Fade>

          {/* CTA */}
          <Fade>
            <div className="mt-12 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Want to Work Together?</h4>
              <p className="text-gray-400 max-w-xl mx-auto">
                I'm always open to new opportunities and collaborations. Let's create something amazing!
              </p>
              <button
                onClick={handleGetInTouchClick} // Attach the click handler
                className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:scale-110 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;

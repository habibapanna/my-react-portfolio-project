import React, { useState } from "react";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";

const projectsData = [
  {
    id: 1,
    name: "Management Camp Management System (MCMS)",
    image: "https://i.postimg.cc/1X9DxshY/image.png",
    description: "A comprehensive platform to manage camps, participants, and organizers seamlessly.",
    technologies: "React, Firebase, Node.js, MongoDB Atlas",
    liveLink: "https://mcsc-project.web.app",
    githubLink: "https://github.com/your-username/mcms-project",
    details: "This platform offers secure user authentication, role-based dashboards, and streamlined camp management for organizers and participants.",
    challenges: "Implementing role-based access control and handling concurrent data updates.",
    improvements: "Planning to add advanced reporting features and user analytics.",
  },
  {
    id: 2,
    name: "New Artist Project",
    image: "https://i.postimg.cc/qMhGXBwp/image.png",
    description: "An artist-themed website built using React, showcasing the work of an artist with a dynamic layout.",
    technologies: "React, Tailwind CSS",
    liveLink: "https://new-artist-project.vercel.app",
    githubLink: "https://github.com/your-username/artist-project",
    details: "This project features responsive design, hover effects, and sections for recent artworks, artist biography, and contact information.",
    challenges: "Creating an interactive layout that adapts well across screen sizes.",
    improvements: "Planning to integrate a blog and e-commerce functionality for art sales.",
  },
  {
    id: 3,
    name: "Social Media App",
    image: "https://i.postimg.cc/fyR4npg7/image.png",
    description: "A social media app with features like real-time messaging, user profiles, and post sharing.",
    technologies: "React, Firebase, Redux",
    liveLink: "https://b10-a9-my-first-firebase-assignment.surge.sh",
    githubLink: "https://github.com/your-username/social-media-app",
    details: "This app allows users to connect, share posts, and communicate in real-time. It also includes profile customization options.",
    challenges: "Handling real-time updates efficiently and ensuring data consistency across users.",
    improvements: "Planning to integrate video sharing and improve the UI for better user engagement.",
  },
];

const BestProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16">
      <Zoom>
        <div className="text-center">
          <h2 className="text-5xl text-white font-extrabold mb-8 tracking-wider">
            My Best Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my creative front-end web development journey, featuring vibrant designs and dynamic functionalities.
          </p>
        </div>
      </Zoom>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Fade key={project.id} delay={index * 200}>
              <div className="group relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform min-h-[400px] flex flex-col justify-between">
                <img
                  src={project.image}
                  alt={`Project ${project.name}`}
                  className="w-full h-56 object-cover transition-transform transform group-hover:scale-110 duration-500"
                />
                <div className="p-6 flex flex-col justify-between h-[200px]">
                  <h3 className="text-xl text-white font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="mt-auto inline-block bg-gradient-to-r from-blue-800 text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-800 hover:to-sky-800 hover:scale-110 transition-all duration-300"
                  >
                    View More / Details
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Fade>
          <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-2xl p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto relative">
            <button
              onClick={handleCloseDetails}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <Bounce>
                <h2 className="text-3xl font-extrabold text-white text-center">
                  {selectedProject.name}
                </h2>
              </Bounce>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover mt-4 rounded-lg"
            />
            <p className="mt-4 text-lg text-gray-400">
              <strong>Technology Stack:</strong> {selectedProject.technologies}
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Brief Description:</strong> {selectedProject.description}
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Live Link
              </a>
              
            </div>
            <h3 className="text-lg font-bold text-gray-300 mt-6">Challenges Faced:</h3>
            <p className="text-gray-400">{selectedProject.challenges}</p>
            <h3 className="text-lg font-bold text-gray-300 mt-4">Future Improvements:</h3>
            <p className="text-gray-400">{selectedProject.improvements}</p>
          </div>
          </Fade>
        </div>
      )}
    </section>
  );
};

export default BestProjects;

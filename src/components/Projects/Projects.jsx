import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const projectsData = [
  {
    id: 1,
    image: "https://i.postimg.cc/CxsrbQfb/image.png",
    description: "A dynamic e-commerce platform featuring a modern UI, product filtering, and a functional cart system.",
    liveLink: "https://blog-website-7c3f1.web.app",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/TwgR9xjt/image.png",
    description: "A creative portfolio displaying front-end projects with responsive design using TailwindCSS.",
    liveLink: "https://habibapanna.github.io/third-assignment-tailwind/",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/HL5xSbd0/image.png",
    description: "A social media app with features like real-time messaging, user profiles, and post sharing.",
    liveLink: "https://b10-a9-my-first-firebase-assignment.surge.sh",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/K83vztkX/image.png",
    description: "A task management app with drag-and-drop functionality, progress tracking, and detailed analytics.",
    liveLink: "https://game-review-79374.web.app",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/nVqK1GtV/image.png",
    description: "A sleek landing page designed for a tech startup with smooth animations and mobile responsiveness.",
    liveLink: "https://habibapanna.github.io/my-second-assignment/",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/jq6NfqzL/image.png",
    description: "A blog platform supporting markdown, dynamic content, and an intuitive user interface.",
    liveLink: "https://b10-gadget-heaven-assignment.surge.sh",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16">
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
                {/* Project Description */}
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
    </section>
  );
};

export default Projects;

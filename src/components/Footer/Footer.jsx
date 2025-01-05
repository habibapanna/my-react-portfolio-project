import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Profile Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
              Habiba Panna
            </h3>
            <p className="mt-2 text-gray-400">Passionate Front-End Developer</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition transform hover:scale-125"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition transform hover:scale-125"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-bold">Habiba Panna</span>. All Rights Reserved.
          </p>
        </div>
      </div>
      <style>
        {`
          a:hover {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

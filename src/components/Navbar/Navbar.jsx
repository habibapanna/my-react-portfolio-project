import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to determine the navbar color based on the current route
  const getNavbarColor = () => {
    switch (location.pathname) {
      case '/':
        return 'bg-black';
      case '/about-me':
        return 'bg-gradient-to-r from-yellow-400 to-red-500';
      case '/projects':
        return 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
      case '/review':
        return 'bg-gradient-to-r from-purple-400 to-pink-600';
      default:
        return 'bg-black'; // Default color
    }
  };

  const handleSayHelloClick = () => {
    if (location.pathname === '/') {
      // Scroll to the contact section if on the home page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the contact page
      navigate('/contact');
    }
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about-me">About Me</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/review">Review</NavLink></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md">
      <style>
        {`
          @keyframes colorChange {
            0% { color: #ff5733; }
            25% { color: #ffc300; }
            50% { color: #28a745; }
            75% { color: #007bff; }
            100% { color: #ff5733; }
          }

          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-15deg); }
            100% { transform: rotate(0deg); }
          }

          .name-animation {
            animation: colorChange 4s linear infinite;
          }

          .logo-animation {
            animation: rotate 5s linear infinite;
          }

          .wave-animation {
            display: inline-block;
            animation: wave 1.5s infinite;
          }

          .navbar-blur {
            backdrop-filter: blur(10px);
            background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
          }
        `}
      </style>

      <div className={`navbar ${getNavbarColor()} text-white shadow-lg navbar-blur`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold flex items-center">
            <img
              src="https://i.ibb.co/mDR3hx6/view-3d-woman-using-laptop.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-full mr-2 logo-animation"
            />
            <span className="name-animation">Habiba</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            {links}
          </ul>
        </div>

        <div onClick={handleSayHelloClick} className="navbar-end">
          <button className="btn btn-outline text-white hover:text-gray-100 border-white flex items-center gap-2">
            Say Hello <span className="wave-animation">👋</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

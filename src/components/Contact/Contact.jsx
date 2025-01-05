import React, { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { send } from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_k4tq1st", // Replace with your EmailJS Service ID
      "template_15osyuq", // Replace with your EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "RmvrQBL5wNi0oU3SW" // Replace with your EmailJS Public Key
    )
      .then(() => {
        toast.success("Your message has been sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Error:", err);
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-20"
    >
      <Zoom>
        <div className="text-center">
          <h2 className="text-5xl text-white font-extrabold mb-8 tracking-wider">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations! Feel free
            to reach out if you'd like to connect.
          </p>
        </div>
      </Zoom>

      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <Fade delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs text-center">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                Contact Details
              </h3>
              <p className="text-gray-600 flex items-center justify-center mb-3">
                <FaPhoneAlt className="mr-2 text-xl text-indigo-600" />
                <a href="tel:01813626884" className="text-indigo-600">
                  01813626884
                </a>
              </p>
              <p className="text-gray-600 flex items-center justify-center mb-3">
                <FaEnvelope className="mr-2 text-xl text-indigo-600" />
                <a
                  href="mailto:habibapanna@gmail.com"
                  className="text-indigo-600"
                >
                  habibapanna49@gmail.com
                </a>
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/habibapanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-600 hover:text-blue-800 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/habibapanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-700 hover:text-gray-900 transition-all duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </Fade>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <Fade delay={400}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-4">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;

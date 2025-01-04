import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Education = () => {
  const educationDetails = [
    {
      id: 1,
      logo: 'https://i.ibb.co.com/DpHwsKj/download.png',
      institute: 'National University',
      degree: 'Honors in Mathematics',
      period: '2022 - Present',
      situate: 'Gazipur, Dhaka - 1720',
    },
    {
      id: 2,
      logo: 'https://iili.io/2UFoXsa.jpg',
      institute: 'Netrakona Govt. College',
      degree: 'Higher Secondary Certificate (HSC)',
      period: '2020 - 2022',
      situate: 'Netrakona, Mymensingh',
    },
    {
      id: 3,
      logo: 'https://iili.io/2U3DQRV.th.jpg',
      institute: 'Netrakona Ideal Girls High School',
      degree: 'Secondary School Certificate (SSC)',
      period: '2018 - 2020',
      situate: 'Netrakona, Mymensingh',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          My Education
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((education, index) => (
            <Fade direction="up" delay={index * 200} key={education.id}>
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 dark:bg-gray-800 shadow-xl rounded-2xl p-6 hover:scale-105 transform transition-all duration-300 relative">
                {/* Floating Highlight */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-tr from-yellow-400 to-amber-500 p-3 rounded-full animate-pulse">
                  <img
                    src={education.logo}
                    alt={`${education.institute} logo`}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>

                {/* Details */}
                <div className="mt-12 text-white">
                  <h3 className="text-2xl font-semibold">{education.institute}</h3>
                  <p className="text-lg mt-3 font-medium">{education.degree}</p>
                  <p className="text-sm mt-2 text-gray-200">{education.period}</p>
                  <p className="text-sm mt-1 text-gray-400">{education.situate}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

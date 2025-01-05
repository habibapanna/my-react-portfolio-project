import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Tools from '../Tools/Tools';
import Contact from '../Contact/Contact';
import BestProjects from '../BestProjects/BestProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Tools></Tools>
            <BestProjects></BestProjects>

            {/* Image Background Section */}
            <section
                className="relative h-screen bg-fixed w-full bg-center"
                style={{
                    backgroundImage: "url('https://i.postimg.cc/wjngwRSQ/person-front-computer-working-html.jpg')",
                    backgroundRepeat: "no-repeat"
                     
                }}
            >
                {/* Optional Overlay for Better Contrast */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h2 className="text-white text-5xl font-bold">
                        Creativity at Its Best
                    </h2>
                </div>
            </section>

            <Contact></Contact>
        </div>
    );
};

export default Home;

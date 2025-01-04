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
           <Contact></Contact>
        </div>
    );
};

export default Home;
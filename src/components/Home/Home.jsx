import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Tools from '../Tools/Tools';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Skills></Skills>
           <Tools></Tools>
           <Contact></Contact>
        </div>
    );
};

export default Home;
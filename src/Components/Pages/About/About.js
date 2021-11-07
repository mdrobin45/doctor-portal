import React from 'react';
import PageBanner from '../../PageBanner/PageBanner';
import bannerBg from '../../images/about-banner.jpg'
import TeethCare from './TeethCare/TeethCare';
import Services from '../Home/Services/Services';
import CounterBanner from '../Home/CounterBanner/CounterBanner';
import OurDoctors from '../Home/OurDoctors/OurDoctors';

const About = () => {
    return (
        <div>
            <PageBanner title='About Us' bg={bannerBg} />
            <TeethCare />
            <Services />
            <CounterBanner />
            <OurDoctors/>
        </div>
    );
};

export default About;
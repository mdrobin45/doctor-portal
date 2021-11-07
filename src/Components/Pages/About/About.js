import React from 'react';
import PageBanner from '../../PageBanner/PageBanner';
import bannerBg from '../../images/about-banner.jpg'
import TeethCare from './TeethCare/TeethCare';

const About = () => {
    return (
        <div>
            <PageBanner title='About Us' bg={bannerBg} />
            <TeethCare/>
        </div>
    );
};

export default About;
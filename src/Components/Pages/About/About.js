import React from 'react';
import PageBanner from '../../PageBanner/PageBanner';
import bannerBg from '../../images/about-banner.jpg'

const About = () => {
    return (
        <div>
            <PageBanner title='About Us' bg={bannerBg}/>
        </div>
    );
};

export default About;
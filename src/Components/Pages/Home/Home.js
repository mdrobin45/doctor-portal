import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import BannerCard from './BannerCard/BannerCard';
import Blog from './Blog/Blog';
import CounterBanner from './CounterBanner/CounterBanner';
import HomeBanner from './HomeBanner/HomeBanner';
import OurDoctors from './OurDoctors/OurDoctors';
import QualityService from './QualityService/QualityService';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <BannerCard/>
            <QualityService />
            <CounterBanner/>
            <Services />
            <AppointmentBanner />
            <Blog />
            <OurDoctors/>
        </div>
    );
};

export default Home;
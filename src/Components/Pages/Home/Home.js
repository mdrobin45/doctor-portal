import React from 'react';
import useAPI from '../../../Hooks/useAPI';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import BannerCard from './BannerCard/BannerCard';
import Blog from './Blog/Blog';
import CounterBanner from './CounterBanner/CounterBanner';
import HomeBanner from './HomeBanner/HomeBanner';
import OurDoctors from './OurDoctors/OurDoctors';
import QualityService from './QualityService/QualityService';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () =>
{
    return (
        <div>
            <HomeBanner />
            <BannerCard/>
            <QualityService />
            <AppointmentBanner />
            <Services />
            <CounterBanner/>
            <Blog />
            <OurDoctors />
            <Testimonial/>
        </div>
    );
};

export default Home;
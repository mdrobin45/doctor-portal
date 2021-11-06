import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Blog from './Blog/Blog';
import CounterBanner from './CounterBanner/CounterBanner';
import QualityService from './QualityService/QualityService';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <QualityService />
            <CounterBanner/>
            <Services />
            <AppointmentBanner />
            <Blog/>
        </div>
    );
};

export default Home;
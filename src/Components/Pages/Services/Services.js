import React from 'react';
import useAPI from '../../../Hooks/useAPI';
import PageBanner from '../../PageBanner/PageBanner';
import SingleService from './SingleService/SingleService';
import serviceBg from '../../images/service-banner.jpg'
import CounterBanner from '../Home/CounterBanner/CounterBanner';
import OurDoctors from '../Home/OurDoctors/OurDoctors';

const Services = () =>
{
    const { services } = useAPI();
    return (
        <div>
            <PageBanner title='Our Services' bg={serviceBg}/>
            <div className='grid grid-cols-3 mt-20 gap-4 container text-center'>
                {
                    services.map(service=><SingleService key={service._id} service={service}/>)
                }
            </div>
            <CounterBanner />
            <OurDoctors/>
        </div>
    );
};

export default Services;
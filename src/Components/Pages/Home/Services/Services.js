import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () =>
{
    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('/HomeServices.JSON')
            .then(res => res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif text-darkGreen'>Our Services</h2>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p> 
            </div>
            
            <div className='grid grid-cols-3 gap-4 container text-center'>
                {
                    services.map(service=><SingleService service={service}/>)
                }
            </div>
            <div className='text-center pb-10 mt-10'>
                <Link to='/services' className='text-xl py-3 px-16 bg-orange text-white transition-all inline-block rounded hover:bg-darkGreen uppercase'>View all services</Link>
            </div>
        </>
        
    );
};

export default Services;
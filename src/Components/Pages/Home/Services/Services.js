import React from 'react';
import useAPI from '../../../../Hooks/useAPI';
import Button from '../../../Button/Button';
import SingleService from './SingleService';

const Services = () =>
{
    const { dataFetch } = useAPI();
    return (
        <>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif font-bold text-darkGreen'>Our Services</h2>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p> 
            </div>
            
            <div className='grid grid-cols-3 gap-4 container text-center'>
                {
                    dataFetch.services.map(service=><SingleService key={service._id} service={service}/>)
                }
            </div>
            <div className='text-center'>
                <Button url='/services' btnText='View All Services'/>
            </div>
        </>
        
    );
};

export default Services;
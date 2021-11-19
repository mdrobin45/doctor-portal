import React from 'react';
import Button from '../../../Button/Button'

const SingleService = ({service}) =>
{
    const { title, description, img, _id } = service;
    
    return (
        <div className='border p-6 rounded'>
            <img className='w-1/4 m-auto' src={img} alt="Service" />
            <h2 className='text-2xl hover:text-orange py-3 text-gray-700'>{title}</h2>
            <p className='text-lg text-gray-500'>{description}</p>
            <div className='pb-3 mt-10'>
              <Button url={`/appointment/${_id}`} btnText='Book Appointment'/>
            </div> 
        </div>
    );
};

export default SingleService;
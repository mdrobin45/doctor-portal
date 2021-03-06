import React from 'react';

const SingleService = ({ service }) =>
{
    const { title, description, img } = service;
    return (
        <div className='border p-6 rounded'>
            <img className='w-1/4 m-auto' src={img} alt="Service" />
            <h2 className='text-2xl hover:text-orange py-3 text-gray-700'>{title}</h2>
            <p className='text-lg text-gray-500'>{description}</p>
        </div>
    );
};

export default SingleService;
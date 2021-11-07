import React from 'react';
import Button from '../../../Button/Button';

const SingleDoctor = ({doctor}) =>
{
    const { img, title, about, name } = doctor;
    return (
        <div className='p-6 w-10/12 border text-center'>
            <img className='m-auto' src={img} alt="Profile" />
            <h2 className='text-2xl font-bold text-darkGreen py-3'>{name}</h2>
            <h3 className='text-lg'>{title}</h3>
            <p className='text-lg pt-3 text-gray-500'>{about}</p>
            <div className='text-center'>
                <Button url='/profile' btnText='View Profile'/>
            </div>
        </div>
    );
};

export default SingleDoctor;
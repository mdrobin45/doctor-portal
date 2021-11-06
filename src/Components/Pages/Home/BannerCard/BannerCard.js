import React from 'react';
import AVTechnology from '../../../images/advanced-technology.png'
import appointment from '../../../images/appointment.png'
import openHours from '../../../images/open-hours.png'


const BannerCard = () => {
    return (
        <div className='flex bannerCards container justify-between items-center'>
            <div className='bg-darkGreen rounded flex justify-between px-6 py-10 mx-3'>
                <div className='pr-3 w-2/5'>
                    <img src={AVTechnology} alt='Technology' />
                </div>
                <div>
                    <h2 className='text-2xl text-white font-bold'>ADVANCED TECHNOLOGY</h2>
                    <p className='text-lg text-white pt-3'>Lorem Ipsum is simply dummy text of the printing...</p>
                </div>
            </div>
            <div className='bg-darkGreen rounded flex justify-between px-6 py-14 mx-3'>
                <div className='pr-3 w-2/5'>
                    <img src={appointment} alt='Technology' />
                </div>
                <div>
                    <h2 className='text-2xl text-white font-bold'>APPOINTMENT</h2>
                    <p className='text-lg text-white pt-3'>Lorem Ipsum is simply dummy text of the printing...</p>
                </div>
            </div>
            <div className='bg-darkGreen rounded flex justify-between px-6 py-14 mx-3'>
                <div className='pr-3 w-2/5'>
                    <img src={openHours} alt='Technology' />
                </div>
                <div>
                    <h2 className='text-2xl text-white font-bold'>OPEN HOURS</h2>
                    <p className='text-lg text-white pt-3'>Lorem Ipsum is simply dummy text of the printing...</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;
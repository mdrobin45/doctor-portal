import React from 'react';
import imgWinner from '../../../images/ima-winner.png'
import award from '../../../images/beacon-award.png'
import privetDencity from '../../../images/private-dentistry.png'
import aboutTeeth from '../../../images/about-teeth.jpg'
import Button from '../../../Button/Button'

const TeethCare = () => {
    return (
        <div className='flex container items-center py-20 justify-between'>
            <div className='w-2/4'>
                <img className='m-auto rounded' src={aboutTeeth} alt="About teeth" />
            </div>
            <div className='w-2/4'>
                <h2 className='font-bold text-4xl text-gray-700'>We Care About <span className='text-darkGreen'>Your Teeth</span></h2>
                <p className='text-lg pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem euismod, posuere arcu id, gravida tortor. Nulla facilisi. Duis luctus imperdiet nisi eu accumsan. Aliquam hendrerit neque diam, eu ullamcorper sapien faucibus ac.</p>
                <div className='flex pt-10 items-center justify-between'>
                    <img src={imgWinner} alt="Logo" />
                    <img src={award} alt="Logo" />
                    <img src={privetDencity} alt="Logo" />
                </div>
                <Button url='/appointment' btnText='Make an appointment'/>
            </div>
        </div>
    );
};

export default TeethCare;
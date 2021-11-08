import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useAPI from '../../../../Hooks/useAPI';
import SingleDoctor from './SingleDoctor';

const OurDoctors = () =>
{
    const { doctors } = useAPI();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className='bg-gray-200'>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif font-bold text-darkGreen'>Our Doctors Team</h2>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p> 
            </div>
            <Slider className='pb-16' {...settings}>
                {
                    doctors.map(doctor=><SingleDoctor key={doctor._id} doctor={doctor}/>)      
                }
            </Slider>
      </div>
    );
};


export default OurDoctors;
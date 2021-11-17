import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useAPI from '../../../../Hooks/useAPI';

const Testimonial = () =>
{
    const { dataFetch } = useAPI();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className='py-20'>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif font-bold text-darkGreen'>Testimonial</h2>
            </div>
            <Slider {...settings}>
                {
                dataFetch.testimonials.map((item,index)=><SingleTestimonial key={index} item={item}/>)     
                }
            </Slider>
      </div>
    );
};

// Testimonial
const SingleTestimonial = ({item}) =>
{
    const { name, quote, location, img } = item;
    return (
        <div className='text-center w-2/3 m-auto'>
            <p className='text-lg'>{quote}</p>
            <h2 className='text-2xl py-6 text-gray-700 font-bold'><span className='text-orange'>{name}</span>,{location}</h2>
            <img className='m-auto border-orange border-2 rounded-full' src={img} alt='Author' />
        </div>
    )
}
export default Testimonial;
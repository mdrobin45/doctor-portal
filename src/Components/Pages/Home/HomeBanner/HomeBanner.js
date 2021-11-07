import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';
import '../../../CustomStyle/Style.css'


const HomeBanner = () =>
{
    const slides = [
        {
            title: 'smiling face',
            subTitle: 'We Take Care Of Your Health',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi repellat quas aut nihil? Aspernatur vel culpa praesentium eligendi iure.',
            img:"https://i.ibb.co/x6mZGdt/medic-563425-960-720.jpg"
        },
        {
            title: 'smiling face',
            subTitle: 'We Take Care Of Your Health',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi repellat quas aut nihil? Aspernatur vel culpa praesentium eligendi iure.',
            img:"https://i.ibb.co/FB3YHH1/doctor-563429-960-720.jpg"
        },
        {
            title: 'smiling face',
            subTitle: 'We Take Care Of Your Health',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi repellat quas aut nihil? Aspernatur vel culpa praesentium eligendi iure.',
            img:"https://i.ibb.co/Bcq73nM/doctor-6701410-960-720.jpg"
        }
      ];
    return (
        <Slider
            // infinite={true}
            autoplay={2000}>
            {slides.map((slide, index) => <div
                className='slideDiv'
                style={{
                    background: `linear-gradient(rgba(44, 62, 80,0.7),rgba(44, 62, 80,0.7)),url('${slide.img}')`,
                    backgroundSize:'cover'
                }}
                key={index}>
                <h2 className='font-bold text-7xl text-white uppercase'>{slide.title}</h2>
                <h3 className='text-2xl text-white py-3'>{slide.subTitle}</h3>
                <p className='block text-lg text-white w-2/4'>{slide.description}</p>
                <div>
                    <Button url='/appointment' btnText='Book Appointment'/>
                </div>
            </div>)}
        </Slider>
    );
};

export default HomeBanner;
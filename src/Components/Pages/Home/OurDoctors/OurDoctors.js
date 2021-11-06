import React,{useState,useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const OurDoctors = () =>
{
    const [doctors, setDoctors] = useState([]);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    useEffect(() =>
    {
        fetch('/OurDoctors.JSON')
            .then(res => res.json())
            .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif text-darkGreen'>Our Doctors</h2>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p> 
            </div>
            <Slider className='pb-16' {...settings}>
                {
                    doctors.map(doctor=><EveryDoctor doctor={doctor}/>)      
                }
            </Slider>
      </div>
    );
};


// Every Doctor
const EveryDoctor = ({doctor}) =>
{
    const { img, title, about, name } = doctor;
    return (
        <div className='p-6 w-10/12 text-center'>
            <img className='m-auto' src={img} alt="Profile" />
            <h2 className='text-2xl font-bold text-darkGreen py-3'>{name}</h2>
            <h3 className='text-lg'>{title}</h3>
            <p className='text-lg pt-3 text-gray-500'>{about}</p>
            <div className='text-center pb-10 mt-10'>
                <Link to='/profile' className='text-xl py-3 px-16 bg-orange text-white transition-all inline-block rounded hover:bg-darkGreen uppercase'>View Profile</Link>
            </div>
        </div>
    )
}
export default OurDoctors;
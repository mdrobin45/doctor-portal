import { useEffect, useState } from 'react';

const useFetchData = () =>
{
    // Initialize state
    const [testimonials, setTestimonials] = useState([]);
    const [blogs, SetBlogs] = useState([]);
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    // Fetch blogs
    useEffect(() =>
    {
        fetch('/Blog.JSON')
            .then(res => res.json())
            .then(data => SetBlogs(data));
    }, [])
    
    // Fetch services
    useEffect(() =>
    {
        fetch('/HomeServices.JSON')
            .then(res => res.json())
            .then(data=>setServices(data))
    }, [])
    
    // Fetch doctors
    useEffect(() =>
    {
        fetch('/OurDoctors.JSON')
            .then(res => res.json())
            .then(data=>setDoctors(data))
    }, [])
    
    // Fetch testimonials
    useEffect(() =>
    {
        fetch('/Testimonial.JSON')
            .then(res => res.json())
            .then(data=>setTestimonials(data))
    }, [])

    // Return object of data
    return {
        testimonials,
        services,
        doctors,
        blogs
    }
};

// Export default function
export default useFetchData;
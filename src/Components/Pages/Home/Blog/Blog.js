import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import SingleBlog from './SingleBlog';

const Blog = () =>
{
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>
    {
        fetch('/Blog.JSON')
            .then(res => res.json())
            .then(data=>setBlogs(data))
    },[])
    return (
        <>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif text-darkGreen'>Our Blogs</h2>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p> 
            </div>
            <div className='flex container justify-center'>
                {
                    blogs.map(blog => <div>
                        <SingleBlog blog={blog} />
                    </div>)
                }
            </div>
            <div className='text-center pb-10 mt-10'>
                <Link to='/blogs' className='text-xl py-3 px-16 bg-orange text-white transition-all inline-block rounded hover:bg-darkGreen uppercase'>View all blogs</Link>
            </div>
        </>
        
    );
};

export default Blog;
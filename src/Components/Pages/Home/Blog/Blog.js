import React from 'react';
import useAPI from '../../../../Hooks/useAPI';
import Button from '../../../Button/Button';
import SingleBlog from './SingleBlog';

const Blog = () =>
{
    const { blogs } = useAPI();
    return (
        <>
            <div className='text-center w-1/2 pt-6 pb-10 m-auto'>
                <h2 className='text-4xl pb-6 font-serif font-bold text-darkGreen'>Our Blogs</h2>
                <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p>
            </div>
            <div className='flex container justify-center'>
                {
                    blogs.map(blog => <div>
                        <SingleBlog blog={blog} />
                    </div>)
                }
            </div>
            <div className='text-center'>
                <Button url='/blogs' btnText='View All Blogs'/>
            </div>
        </>

    );
};

export default Blog;
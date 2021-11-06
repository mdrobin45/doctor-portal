import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const SingleBlog = ({ blog }) =>
{
    const { title, author, publishDate, img, description } = blog;
    return (
        <div className='rounded shadow mx-4 p-4'>
            <img className='w-full' src={img} alt="Blog thumbnail" />
            <div className='flex pt-6 justify-between items-center'>
                <div>
                    <p className='text-lg text-gray-500'>{author}</p>
                </div>
                <div className='flex items-center w-2/5 justify-between'>
                    <FaRegCalendarAlt className='text-xl'/>
                    <p className='text-lg text-gray-500'>{publishDate}</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl pb-4 pt-4 text-gray-600'>{title}</h2>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default SingleBlog;
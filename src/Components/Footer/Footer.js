import React, { useEffect, useState } from 'react';
import footerLogo from '../images/footer-logo.png'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelephone,BsTwitter} from 'react-icons/bs'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'

const Footer = () =>
{
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>
    {
        fetch('/Blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    
    return (
        <>
            <div className='flex justify-between container items-center text-white bg-gray-700 py-20'>
                <div className='w-3/12'>
                    <img className='pb-4' src={footerLogo} alt="Footer Logo" />
                    <hr />
                    <p className='pt-4'>Lorem ipsum dolor sit amet amet, consectetur adipiscing elit. Donec Donec eu libero at lectus.</p>
                    <a className='flex pt-4 items-center' href="mailto:robin4500bd@gmail.com">
                        <MdOutlineEmail className='text-4xl' />
                        <p className='text-lg pl-3 hover:text-orange transition-all'>robin4500bd@gmail.com</p>
                    </a>
                    <a className='flex pt-4 items-center' href="mailto:robin4500bd@gmail.com">
                        <BsTelephone className='text-3xl' />
                        <p className='text-lg pl-3 hover:text-orange transition-all'>01761614500</p>
                    </a>
                    <div className='flex pt-4 items-center'>
                        <p className='text-lg font-bold'>Connect with us -</p>
                        <div className='flex justify-center items-center'>
                            <a className='bg-white border hover:bg-transparent hover:text-white p-1.5 rounded text-gray-700 transition-all mx-1.5' href="/">
                                <FaFacebookF/>
                            </a>
                            <a className='bg-white border hover:bg-transparent hover:text-white p-1.5 rounded text-gray-700 transition-all mx-1.5' href="/">
                                <BsTwitter/>
                            </a>
                            <a className='bg-white border hover:bg-transparent hover:text-white p-1.5 rounded text-gray-700 transition-all mx-1.5' href="/">
                                <FaLinkedinIn/>
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className='3/12 mt-16'>
                    <h2 className='text-2xl uppercase'>Services</h2>
                    <a className='text-lg pt-4 block hover:text-orange  transition-all' href="/">Cleanings</a>
                    <a className='text-lg pt-4 block hover:text-orange  transition-all' href="/">Crowns & bridges</a>
                    <a className='text-lg pt-4 block hover:text-orange  transition-all' href="/">Available Lab</a>
                    <a className='text-lg pt-4 block hover:text-orange  transition-all' href="/">Root canals</a>
                    <a className='text-lg pt-4 block hover:text-orange  transition-all' href="/">Cosmetic dentistry</a>
                    <a className='text-lg pt-4 block hover:text-orange  transition-all' href="/">Dental implants</a>
                </div>
                

                <div className='w-3/12'>
                    <h2 className='text-2xl uppercase'>Our Latest Blog</h2>
                    {
                        
                        blogs.slice(0,2).map(blog=><FooterBlog blog={blog}/>)
                    }
                </div>

                <div className='pt-16 w-3/12'>
                    <h2 className='text-2xl uppercase'>Opening Ours</h2>
                    <table className='block py-4'>
                        <tr className='pt-4 block'>
                            <td className='pr-6'>Mon – Fri</td>
                            <td>9am – 10pm</td>
                        </tr>
                        <tr className='pt-4 block'>
                            <td className='pr-6'>Saturday</td>
                            <td>Closed</td>
                        </tr>
                        <tr className='pt-4 block'>
                            <td className='pr-6'>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </table>
                    <hr className='mt-6' />
                    <h2 className='uppercase py-4 text-xl font-bold'>Subscribe with us</h2>
                    <div className='flex'>
                        <input placeholder='Email' className='py-3 w-10/12 px-3 text-gray-700 text-lg rounded-l bg-gray-100 outline-none' type="email" />
                        <input className='py-3 text-lg px-3 rounded-r bg-orange outline-none' value='Subscribe' type="submit" />
                    </div>
                </div>
            </div>
            <div className='bg-gray-700 py-4'>
                <div className='flex justify-between container'>
                    <div>
                        <p className='text-lg text-gray-400'>Copyright ©2020 vesaliuscare. All Rights Reserved</p>
                    </div>
                    <div>
                        <a className='uppercase text-gray-400 hover:text-orange transition-all' href="/">TERMS OF USE |</a>
                        <a className='uppercase text-gray-400 hover:text-orange transition-all' href="/"> PRIVACY POLICY</a>
                    </div>
                </div> 
            </div>
            
        </>
    );
};


const FooterBlog = ({blog}) =>
{
    const { title, img, publishDate } = blog;
    return (
        <section className='flex mt-6 justify-center items-center'>
            <div>
                <img className='m-auto w-32 pr-3 rounded' src={img} alt="Thumbnail" />
            </div>
            <div>
                <p>
                    {
                        title.split("").length > 10 ? title.substring(0,20)+'...':title
                    }
                </p>
                <p className='text-gray-300'>{publishDate}</p>
            </div>
        </section>
    )
}
export default Footer;
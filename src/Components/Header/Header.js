import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import NavigationMenu from './NavigationMenu/NavigationMenu';

const Header = () =>
{
    return (
        <div>
            <div className='flex justify-between items-center container'>
                <div>
                    <img src={logo} alt="Main Logo" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex px-4 items-center'>
                        <VscKey className='text-4xl pr-3' />
                        <Link className='text-xl hover:text-orange transition-all' to='/login'>Login</Link>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineUserAdd className='text-4xl pr-3' />
                        <Link className='text-xl hover:text-orange transition-all' to='/sign-up'>Signup</Link>
                    </div>
                </div>
            </div>
            <div>
                <NavigationMenu />
            </div>
        </div>
    );
};

export default Header;
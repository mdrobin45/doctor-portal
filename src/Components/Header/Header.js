import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { AiOutlineUserAdd,AiOutlineLogout } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { VscKey } from 'react-icons/vsc';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import useAPI from '../../Hooks/useAPI';

const Header = () =>
{
    const { user,logOut } = useAPI().auth;
    return (
        <div>
            <div className='flex justify-between items-center container'>
                <div>
                    <img src={logo} alt="Main Logo" />
                </div>
                <div className='flex justify-center items-center'>
                    {
                        user?.email?<div className='flex px-4 items-center'>
                        <AiOutlineLogout className='text-4xl pr-3' />
                        <button onClick={logOut} className='text-xl hover:text-orange transition-all'>Log Out</button>
                    </div>:<div className='flex px-4 items-center'>
                        <VscKey className='text-4xl pr-3' />
                        <Link className='text-xl hover:text-orange transition-all' to='/login'>Login</Link>
                    </div>
                    }
                    {
                        user?.email?<div className='border flex items-center p-2 rounded'>
                        <BiUserCircle className='text-5xl pr-3' />
                        <Link to='/my-profile' className='text-xl hover:text-orange transition-all'>{user?.displayName}</Link>
                    </div>:<div className='flex items-center'>
                        <AiOutlineUserAdd className='text-4xl pr-3' />
                        <Link className='text-xl hover:text-orange transition-all' to='/register'>Register</Link>
                    </div>
                    }
                </div>
            </div>
            <div>
                <NavigationMenu />
            </div>
        </div>
    );
};

export default Header;
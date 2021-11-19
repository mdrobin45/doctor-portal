import React from 'react';
import { useNavigate } from 'react-router';
import useAPI from '../../../../Hooks/useAPI';

const Register = () =>
{
    const navigate = useNavigate();
    const {getEmail,getPassword,error, registerWithCredential } = useAPI().auth;
    return (
        <div>
            <form onSubmit={(e)=>e.preventDefault()} className='border m-auto my-20 p-10 pt-6 shadow w-10/12'>
                <h2 className='text-4xl text-darkGreen text-center pb-10 font-bold'>Please Register</h2>
                <strong>{error}</strong>
                <input className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' placeholder='Name'/>
                <input onBlur={getEmail} className='border-b outline-none my-3 px-3 py-3 rounded w-full'  placeholder='Email' type='email'/>
                <input onBlur={getPassword} className='border-b outline-none my-3 px-3 py-3 rounded w-full'  placeholder='Password' type='password'/>
                <input onClick={()=>registerWithCredential(navigate)} className='w-full py-3 uppercase text-lg text-white bg-orange hover:bg-darkGreen transition-all rounded cursor-pointer' value='Register' type="submit" />
            </form>
        </div>
    );
};

export default Register;
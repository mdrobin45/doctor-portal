import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({url,btnText}) => {
    return (
        <div>
            <Link to={url} className='text-xl py-3 px-10 bg-orange text-white transition-all inline-block rounded hover:bg-darkGreen uppercase'>{btnText}</Link>
        </div>
    );
};

export default Button;
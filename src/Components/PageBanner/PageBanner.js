import React from 'react';
import '../CustomStyle/Style.css'

const PageBanner = ({title,bg}) => {
    return (
        <div style={{background:`url('${bg}')`}} className='allPageBanner text-center'>
            <h2 className='font-bold py-3 text-5xl text-darkGreen uppercase'>{title}</h2>
            <p className='block m-auto text-gray-700 text-lg w-2/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacus vitae enim ultrices ultricies nec sit amet turpis.</p>
        </div>
    );
};

export default PageBanner;
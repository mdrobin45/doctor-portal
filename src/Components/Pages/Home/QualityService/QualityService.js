import React from 'react';
import qualityServiceImage from '../../../images/quality-service.png'

const QualityService = () => {
    return (
        <div>
            <div className='container py-10 flex justify-center items-center'>
                <div className='w-3/6'>
                    <img className='w-10/12' src={qualityServiceImage} alt="Quality Service" />
                </div>
                <div className='w-9/12'>
                    <h2 className='font-bold py-6 text-3xl text-darkGreen'>15 YEARS OF QUALITY SERVICE IN DENTAL PRACTICE</h2>
                    <p className='text-xl'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem possimus, enim laborum quos perferendis dignissimos aspernatur, quod placeat reprehenderit recusandae, quia quam asperiores dolorem? Deserunt odio molestiae reiciendis accusamus, beatae libero exercitationem, est nesciunt a culpa quod quasi ad aliquam distinctio quidem, sit tempora nemo ea cum eaque perspiciatis in!
                    </p>
                    <p className='text-xl pt-6'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga minima ratione quas odit delectus quo eaque nemo nobis possimus ex blanditiis, deleniti quisquam nostrum voluptates officia! Repellat sed ullam facilis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QualityService;
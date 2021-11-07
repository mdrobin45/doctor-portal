import React from 'react';
import useAPI from '../../../Hooks/useAPI';
import SingleDoctor from '../Home/OurDoctors/SingleDoctor';

const Doctors = () =>
{
    const { doctors } = useAPI();
    return (
        <div className='grid grid-cols-3 mt-20 gap-4 container text-center'>
            {
                doctors.map(doctor=><SingleDoctor doctor={doctor}/>)      
            }
      </div>
    );
};

export default Doctors;
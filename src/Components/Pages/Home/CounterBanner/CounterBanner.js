import React from 'react';
import happyClient from '../../../images/happy-patients.png'
import successMission from '../../../images/success-mission.png'
import qualifiedDoctor from '../../../images/qualified-doctors.png'
import globalization from '../../../images/globalization-work.png'
import CountUp from 'react-countup';
import '../../../CustomStyle/Style.css'

const CounterBanner = () => {
    return (
        <div className='counterBg'>
            <div className="container grid grid-cols-4 gap-4 text-white">
                <div className='text-center'>
                    <img className='m-auto' src={happyClient} alt="Happy Client" />
                    <CountUp
                        className='text-4xl py-3 inline-block font-bold'
                        end={856}
                        duration={2.75}
                    />
                    <h3 className='text-2xl'>Happy Patients</h3>
                </div>
                <div className='text-center'>
                    <img className='m-auto' src={successMission} alt="Success Mission" />
                    <CountUp
                        end={450}
                        duration={2.75}
                        className='text-4xl py-3 inline-block font-bold'
                    />
                    <h3 className='text-2xl'>Success Mission</h3>
                </div>
                <div className='text-center '>
                    <img className='m-auto' src={qualifiedDoctor} alt="Qualified Doctor" />
                    <CountUp
                        className='text-4xl py-3 inline-block font-bold'
                        end={250}
                        duration={2.75}
                    />
                    <h3 className='text-2xl'>Qualified Doctors</h3>
                </div>
                <div className='text-center'>
                    <img className='m-auto' src={globalization} alt="Globalization" />
                    <CountUp
                        className='text-4xl py-3 inline-block font-bold'
                        end={55}
                        duration={2.75}
                    />
                    <h3 className='text-2xl'>Globalization Work</h3>
                </div>
            </div>
        </div>
    );
};

export default CounterBanner;
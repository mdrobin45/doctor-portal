import React from 'react';
import { useForm,Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datetime/css/react-datetime.css';
import "react-datepicker/dist/react-datepicker.css";
import '../../../CustomStyle/Style.css'
import axios from 'axios';
import useAPI from '../../../../Hooks/useAPI';



const AppointmentBanner = () =>
{
    const { doctors } = useAPI().dataFetch;
    const { services } = useAPI().dataFetch;
    const { user } = useAPI().auth;
    const { register, handleSubmit, control } = useForm();
    const email = {email: user?.email };
    
    const onSubmit = data =>
    {
        console.log(data);
        axios.post('http://localhost:5000/appointment', { ...data,...email})
            .then(res => console.log(res))
    };
    return (
        <div className='appointmentBg'>
            <div className='container flex'>
                <div className='bg-white text-center te m-auto py-16 rounded w-2/3'>
                    <div className='m-auto w-4/5'>
                        <h2 className='text-4xl text-darkGreen font-bold'>Make an Appointment</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nulla illum aliquam fuga mollitia quaerat exercitationem officiis repellat, aspernatur dolore!</p>
                    </div>
                    <form className='m-auto pt-6 w-10/12' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex items-center'>
                            <input className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' {...register("name", { required: true })} placeholder='Name'/>
                            <input className='border-b outline-none my-3 px-3 py-3 rounded w-full' {...register("phone", { required: true })} placeholder='Phone' type='number'/>
                        </div>
                        <div className='flex items-center'>
                        <select className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' {...register('time')}>
                                <option value=''>Available Time</option>
                                <option value='10:30 - 11:30'>10:30 - 11:30</option>
                                <option value='11:30 - 12:30'>11:30 - 12:30</option>
                                <option value='1:30 - 2:30'>1:30 - 2:30</option>
                                <option value='2:30 - 3:30'>2:30 - 3:30</option>
                                <option value='3:30 - 4:30'>3:30 - 4:30</option>
                            </select>
                            {/* <input  className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' {...register("time")} placeholder='Time' /> */}
                            <Controller
                                control={control}
                                name='date'
                                render={({ field }) => (
                                    <DatePicker
                                        className='border-b outline-none my-3 px-3 py-3 rounded w-full'
                                        placeholderText='Date'
                                        onChange={(date) => field.onChange(date)}
                                        selected={field.value}
                                        minDate={new Date()}
                                    />
                                )}
                            />
                        </div>
                        <div className='flex items-center'>
                            <select className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' {...register('doctor')}>
                                <option value='' >Select Doctor</option>
                                {
                                    doctors?.map(doctor=><option value={doctor?.name} key={doctor?._id}>{doctor?.name}</option>)
                                }
                            </select>
                            <select className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' {...register('service')}>
                                <option value='' >Select Service</option>
                                {
                                    services?.map(service=><option value={service?.title} key={service?._id}>{service?.title}</option>)
                                }
                            </select>
                        </div>
                        <input className='w-full py-3 uppercase text-lg text-white bg-orange hover:bg-darkGreen transition-all rounded cursor-pointer' value='Make an appointment' type="submit" />
                    </form>
                </div>
                <div className='w-1/5 block'></div>
            </div>
        </div>
        
    );
};

export default AppointmentBanner;
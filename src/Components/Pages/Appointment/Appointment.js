import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm,Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAPI from '../../../Hooks/useAPI';
import DatePicker from "react-datepicker";
import { useParams } from 'react-router';

const Appointment = () =>
{
    const { doctors } = useAPI().dataFetch;
    const [serviceTitle, setServiceTitle] = useState({title:''});
    const { user } = useAPI().auth;
    const { id } = useParams();
    const { register,reset, handleSubmit, control } = useForm();
    const email = { email: user?.email };
    useEffect(() =>
    {
        fetch(`https://pure-atoll-71466.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServiceTitle(data[0]?.title));
    }, [id])
    const onSubmit = data =>
    {
        axios.post('https://pure-atoll-71466.herokuapp.com/appointment', { ...data, ...email })
            .then(res =>
            {
                if(res.status === 200 && res.statusText === 'OK'){
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Appointment Book Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            })
    };
    console.log(user);
    return (
        <div>
            <form className='border m-auto my-20 p-10 pt-6 shadow w-10/12' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center'>
                    <input disabled value={user?.displayName} className='border-b outline-none mr-3 my-3 px-3 py-3 rounded w-full' {...register("name", { required: true })} placeholder='Name'/>
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
                    <input disabled value={serviceTitle} className='border-b outline-none my-3 px-3 py-3 rounded w-full' {...register("service", { required: true })} type='text'/>
                </div>
                <input className='w-full py-3 uppercase text-lg text-white bg-orange hover:bg-darkGreen transition-all rounded cursor-pointer' value='Make an appointment' type="submit" />
            </form>
        </div>
    );
};

export default Appointment;
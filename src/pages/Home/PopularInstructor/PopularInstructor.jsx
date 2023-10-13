import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SingleInstructor from './SingleInstructor';

const PopularInstructor = () => {
    const [axiosSecure] =useAxiosSecure();

    const {data: allInstructor =[]} = useQuery(['topInstructor'], async () =>{
        const res = await axiosSecure.get('/instructor');
        return res.data;
    })
    console.log(allInstructor)
    return (
        <section className="container mx-auto py-8 lg:py-20">
      <div className="section-header text-center">
        <p className="font-bold mb-3">Choose your favorite instructor</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff007a] mb-7">
          Our Best Instructors
        </h2>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-20 lg:gap-14 mb-20">
      {
            allInstructor.slice(0,6).map(instructor => <SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)
            }
      </div>
    </section>
       
    );
};

export default PopularInstructor;
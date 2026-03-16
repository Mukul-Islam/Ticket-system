import React from 'react';
import img1 from '../../assets/vector1.png'

const Banner = ({Progress,completedTasks}) => {
    return (
        <div className="mt-20 flex flex-col lg:flex-row gap-10 items-center justify-between ">

            <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] h-[200px] w-[600px] flex flex-col items-center justify-center relative ">
                <img className="absolute inset-0 " src={img1} alt="" />
                <img className="absolute right-0 top-1/2 -translate-y-1/2 rotate-180" src={img1} alt="" />
                <h1 className="relative z-10 text-white text-xl">In Progress</h1>
                <h1 className='text-6xl font-bold text-white'>{Progress}</h1>
            </div>

            <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] h-[200px] w-[600px] flex flex-col items-center justify-center relative">
                <img className="absolute inset-0" src={img1} alt="" />
                <img className="absolute right-0 top-1/2 -translate-y-1/2 rotate-180" src={img1} alt="" />
                <h1 className='relative z-10 text-white text-xl'>Resolved</h1>
                <h1 className='text-white text-6xl font-bold'>{completedTasks.length}</h1>
            </div>

        </div>
    );
};

export default Banner;
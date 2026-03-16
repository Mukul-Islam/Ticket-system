import React from 'react';
import calender from '../../assets/ri_calendar-line.png'
const Customer_Ticket = ({ticket,Progress,da,toast}) => {
    // console.log(ticket)
    function ProgressData()
    {
        const progressData = Progress + 1;
        da(progressData);
    }
    return (
        <div className="card max-w-10/12 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
               <div className='flex justify-between items-center'>
                 <h2 className="card-title text-xl">
                    {ticket.title}
                 </h2>
                    <button 
                    onClick={()=>da(ticket)}className='  rounded-3xl px-2 py-1 font-bold bg-green-300'> {ticket.status}</button>
               </div>
                <p className='text-gray-400 text-base'>{ticket.description}</p>
                <div className="justify-between card-actions">
                    <div className='flex justify-center items-center gap-3'>
                        {/* #numberplate */}
                        <p className='text-gray-400'> {ticket.id}</p>
                        <h1 className='font-bold text-red-500'>{ticket.priority}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-0.5'>
                        {/* date */}
                        <p className='text-gray-400'>{ticket.customer}</p>
                        <div className='flex justify-center items-center gap-0.5'>
                            <img src={calender} alt="" />
                            <h2>{ticket.createdAt}</h2>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Customer_Ticket;
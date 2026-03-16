import React, { use } from 'react';

import Customer_Ticket from '../Customer_Ticket.jsx/Customer_Ticket';
import Task_Status from '../Task_Status/Task_Status';

const Customer_Tickets = ({ jsonticket,Progress,da,resolvedTasks,completedTasks,count,
completeTask,toast}) => {
    const receiveTicket = use(jsonticket)

    
    // console.log(receiveTicket);
    return (
        <div className='mt-20 pb-10'>

            <div className="grid lg:grid-cols-5 gap-6 mt-20 pb-10">

  {/* Tickets area */}
  <div className="lg:col-span-4">
    <h1 className="text-xl font-bold mb-4">Customer Tickets</h1>

    <div className="grid md:grid-cols-2 gap-4">
      {
        receiveTicket.map(ticket => (
          <Customer_Ticket
            key={ticket.id}
            ticket={ticket}
            da={da}
            toast={toast}
            Progress={Progress}
          />
        ))
      }
    </div>
  </div>

  {/* Right side panel */}
  <div className=" p-5 rounded-lg shadow ">
   <Task_Status
   Progress={Progress}
   resolvedTasks={resolvedTasks}
   completedTasks={completedTasks}
completeTask={completeTask}
count={count}
toast={toast}
   ></Task_Status>
  </div>

</div>
        </div>
    );
};

export default Customer_Tickets;
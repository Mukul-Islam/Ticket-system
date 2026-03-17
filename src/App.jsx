
import { Suspense, useState } from 'react'
import './App.css'
// import img1 from './assets/vector1.png'
import Banner from './Components/Banner/Banner'
import Customer_Tickets from './Components/Customer_Tickets/Customer_Tickets'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
// import img2 from './assets/vector2.png'

const ticket = () => fetch('/ticket.json')
  .then(res => res.json())


const jsonticket = ticket();

function App() {

  const [Progress, SetProgress] = useState(0);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [count,setCount] = useState(0);

  function completeTask(task) {

    // remove from progress
    setResolvedTasks(prev => prev.filter(t => t.id !== task.id));

    // add to completed
    setCompletedTasks(prev => [...prev, task]);

    setCount(prev => prev + 1);

    // decrease count
    SetProgress(prev => prev - 1);
  }

  function da(ticket) {
    // console.log('button clicked',data)
    // const even = Progress + 1;
    SetProgress(data => data + 1);
    setResolvedTasks(data => [...data, ticket]);
    toast("Processing task")
  }

  return (
    <>

      <div className='bg-[#fdfafa]'>
        {/* navbar */}
        <Navbar></Navbar>
        <div className='px-[120px]'>
          {/* Banner Section */}
          
          <Banner
            Progress={Progress}
            completedTasks={completedTasks}></Banner>

          {/* Customer Ticket */}
          <Suspense>
            <Customer_Tickets jsonticket={jsonticket}
              Progress={Progress}
              da={da}
              resolvedTasks={resolvedTasks}
              completedTasks={completedTasks}
              completeTask={completeTask}
              count={count}
              toast={toast}
            ></Customer_Tickets>
          </Suspense>
        </div>

        {/* Footer */}
        <div>
          <Footer></Footer>
        </div>

      </div>
      <ToastContainer />
    </>
  )
}

export default App

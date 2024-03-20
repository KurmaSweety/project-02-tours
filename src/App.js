 import Loading from './Loading';
import React, { useEffect, useState } from 'react'
import Tours from './Tours';
const url='https://course-api.com/react-tours-project';
function App() {

    const [isLoading,setIsLoading]=useState(true);
    const [tours,setTours]=useState([]);
    
    const removeTour=(id)=>{ //remove tours
      const newTours=tours.filter((tour)=>tour.id!==id);
      setTours(newTours);
    }
     
    const fetchTours=async()=>{ //fetch tours from url
        setIsLoading(true);
        try {
            const response=await fetch(url);
            const tours =await response.json();
            setTours(tours);
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    };

    useEffect(()=>{
      fetchTours();
    },[]);

    if(isLoading){
      return(
        <main>
          <Loading/>
        </main>
      )
    }
    //todo

    if(tours.length===0){ //tour-refesh
      return <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button type='button' className='btn' style={{marginTop:'2rem'}}
          onClick={()=>fetchTours()}>Refesh</button>
        </div>
      </main>
    }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
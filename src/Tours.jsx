 
import Tour from './Tour'
const Tours = ({tours,removeTour}) => {
    return(
        <section>
            <div className='title'>
               <h2>our tours</h2>
               <div className="title-underline"></div>
            </div>
            <div className='tours'>
                {tours.map((tour)=>{
                     
                    return <main> 
                        <Tour key={tour.id} {...tour} removeTour={removeTour}/> 
                     </main>
                })}
            </div>
        </section>
    )
     
}

export default Tours
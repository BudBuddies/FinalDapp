export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>We're proud to support:</h2>
         
        </div>
        
        <div className='text-center'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  
                  
                    <div className='text-left'>
                    


                    <a href="http://www.savingsophie.org"> <img src={d.img}  className='' /></a>

                   
                    </div>

                    <div className='text-right'>
                    
                    <a href="http://www.40tons.co"> <img src={d.img2}  className='' /></a>
                   
                    </div>

                </div>



              ))
            : 'loading'}

        </div>



      </div>
    
              
         
        

    </div>






  )
}




export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
      
   
       <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>We are here to help!</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  
                  {' '}
                  
                  <i className={d.icon}></i>
                  
                  <h3>
                  <a href="https://zonesixgames.medium.com/lists" 
                    target="popup" 
                    onclick="window.open('https://zonesixgames.medium.com/lists','popup','width=600,height=600'); return false;">
    {d.title}
</a>
                
                  </h3>
                  
                  <p>{d.text}</p>
                
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

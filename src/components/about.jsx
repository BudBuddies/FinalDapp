export const About = (props) => {
  return (
    <div id="about" style= {{backgroundImage: `url("../img/RoadMapBG.png")` }}>
      <div className="container" >
        <div className="row">
        
                              <h3>Grow with us!</h3>
          
          <div className="col-xs-12 col-md-6" >
            {" "}

            <img src="img/RoadMap.png" width={700} height={700} mode='fit' className="img-responsive" alt="" />{" "}
          </div>
          
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
            
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              <div className="list-style">
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

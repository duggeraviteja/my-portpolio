
import React from "react";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


  import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
//import ChangingProgressProvider from "./ChangingProgressProvider";

const ProgressBar = (props) => {



 return(


    <>

<div >    


<AnimatedProgressProvider 
        valueStart={0}
        valueEnd={props.valueEnd}
        duration={1.4}
        easingFunction={easeQuadInOut}
         

      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
             
              styles={buildStyles({ pathTransition: "none",
              textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold",

          })}
            />
          );
        }}
    
      </AnimatedProgressProvider>






</div>









      


    </>

 );

}


export default ProgressBar;
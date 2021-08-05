import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import feather from "./images/feather.svg";
import sett from "./images/sett.svg";

const Navbar = ()=> {

  const [time,setTime ] = useState();
const currentdate =() =>{
  let currentdate = new Date(); 
  let datetime = "" + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + "@"  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds(); 
                  
                  setTime(datetime);

}
          
setTimeout(currentdate,1000);

  
    return(

        <>
<nav className="navbar sticky-top  navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <img className="img-fluid img" src={sett} alt="aboutimage" /> Portfolio </NavLink>
    <p>   {time} </p>
  </div>
</nav>

        </>
    );
}


export default Navbar;
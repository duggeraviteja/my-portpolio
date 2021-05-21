import React from "react";
import { NavLink } from "react-router-dom";
import feather from "./images/feather.svg";
import sett from "./images/sett.svg";

const Navbar = ()=> {
    return(

        <>
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <img className="img-fluid img" src={sett} alt="aboutimage" /> Portfolio</NavLink>
  </div>
</nav>

        </>
    );
}


export default Navbar;
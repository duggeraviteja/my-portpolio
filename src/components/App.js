import React from "react";
import Home from "./Home";
import "./index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Contact from "./Contatct";
import Projects from "./Projects";
import Navbar from "./Navbar";
import {Switch,Route, Redirect} from "react-router-dom";


function App() {
  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
    
      


        <Redirect to="/" />
        </Switch>
     
    </div>
  );
}

export default App;

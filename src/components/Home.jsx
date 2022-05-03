import React ,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import about from "./images/about.svg";
import contact from "./images/contact.svg";
import project from "./images/project.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {



    useEffect(() => {
        AOS.init({
        offset:200,
        duration:800,
        easing: 'ease-in-sine',
        });
      }, []);

return (
<>
    <div className="main">
        <section id="head-section" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div
                                className="col-md-6 pt-5 mb-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className=" text-center">
                                " The only way to learn a new programming language is by writing programs in it. "
                                </h1>
                                
                            </div>

                            <div
                                className="col-lg-6 order-2 order-lg-2 d-flex justify-content-center flex-column second mb-3">
                                <div className="container-fluid cnt mt-5">
                                    <div className="row gy-4">
                                        <div className="col-md-5 col-12 cnt mx-auto" >
                                            <NavLink to="/about" className="text-center text-decoration-none">
                                                <div className="card card-1">
                                                    <div className="card-body">
                                                        <img className=" card-img-top" src={about} alt="aboutimage" />

                                                        <h2 className="vit  btn-start "></h2>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                        <div className="col-md-5 col-12 cnt mx-auto " >
                                            <NavLink to="/projects" className="text-center text-decoration-none">
                                                <div className="card card-2 ">
                                                    <div className="card-body">
                                                        <img className="img-fluid" src={project} alt="aboutimage" />
                                                        <h2 className="hm-2  btn-start"> </h2>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid cnt mt-5">
                                    <div className="row gy-4">
                                        <div className="col-md-5 col-12 mx-auto" >
                                            <NavLink to="/contact" className="text-center text-decoration-none">
                                                <div className=" card card-3 ca">
                                                    <div className="card-body">
                                                        <img className="img-fluid" src={contact} alt="aboutimage" />
                                                        <h2 className="hm-3  btn-start "></h2>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                        <div className="col-md-5 col-12 mx-auto mb-4">
                                            <div className="card card-4 " >
                                                <div className="card-body">

                                                    <div className="test centerdiv">
                                                        <div>
                                                            <a href="https://twitter.com/DuggeRaviteja" target="_blank">
                                                                <i className="fab fa-2x fa-twitter"></i>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="https://github.com/duggeraviteja/" target="_blank">
                                                                <i className="fab fa-2x fa-github"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="test centerdiv">
                                                        <div>
                                                            <a href="https://www.instagram.com/_raviteja_01" target="_blank">
                                                                <i className="fab fa-2x fa-instagram"></i>
                                                            </a>
                                                        </div>

                                                        <div>
                                                            <a href="https://www.linkedin.com/in/dugge-raviteja-789ravi/" target="_blank" >
                                                                <i className="fab fa-2x fa-linkedin	"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <h2 className=" btn-start m-2"> CONNECT</h2>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</>
);
};
export default Home;

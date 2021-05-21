import React from "react";
import myimg from "./images/rav.JPG";
import ProgressBar from "./ProgressBar";

const About = () => {



    const  html =91;
    const css = 87;
    const js = 77;
    const java=83;
    const bootstrap = 89,reactjs=72,sql=69,python=56;
    const mongodb = 65,nodejs=74,github=52;



    return(


        <>
        <div className="about-start ">


     

<div className="m-0 abt-page-main">
        <section id="head-section" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5  pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column abt-2 ">
                                <h1 className="text-start txt-s">
                                Programming is my passion .I keep code simple and clear .
                                I am passionate and ambitious about my work.
                                </h1>  
                            </div>

                            <div className="col-lg-6 order-2 order-lg-2 d-flex justify-content-center flex-column text-center mb-3 ">
                    
                                    <div className="container-fluid col-md-6 col-12 mx-auto m-3 ">
                                    <div className="title-text">
                                        <img className="img-fluid m-3 myimage " src={myimg} alt="my image" />
                                        <h1 className="myname m-2 ">RAVITEJA</h1>
                                        <h2 className="mytag">** a <span className="pro"> Pro</span>grammer. Web Developer **</h2>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


<h1 className="text-center m-4 p-4"> MY SKILLS </h1>
    
    <div className="col-12  mx-auto">           
    <div className="container-fluid  d-flex justify-content-center flex-column text-center ">
     <div className="row ">


     <div className="col-md-2 col-6 " >
  <div className="col-8 ">
  <strong >  <ProgressBar  valueEnd = {html} />   </strong > 
  <p className="skills" > <span>  <i className="fab fa-2x fa-html5 m-2 "></i>   </span> HTML5 </p> 

    </div>
  </div>


  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <b>   <ProgressBar  valueEnd = {css} />   </b>
  <p className="skills" > <span>  <i className="fab fa-2x fa-css3-alt m-2 "></i>   </span>   CSS3  </p> 

    </div>
  </div>



  <div className="col-md-2  col-6 mx-auto">
  <div className="col-8">
  <b>   <ProgressBar  valueEnd = {js} /> </b>
  <p> <span>  <i className="fab fa-2x fa-js-square m-2"></i>  </span>   JAVASCRIPT  </p> 

    </div>
  </div>


  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <b>  <ProgressBar  valueEnd = {reactjs} />  </b>
  <p> <span>  <i className="fab fa-2x fa-react m-2 "></i>   </span>   REACT JS  </p> 

    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <b>   <ProgressBar  valueEnd = {bootstrap} />   </b>  
  <p> <span>  <i className="fab fa-2x fa-bootstrap m-2 "></i>   </span>   BOOTSTRAP5  </p> 
    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <strong >   <ProgressBar valueEnd = {java} />   </strong >  
  <p> <span>  <i className="fab fa-2x fa-java m-2 "></i>   </span>   JAVA  </p> 

    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <b>  <ProgressBar  valueEnd = {sql} /> </b>
  <p> <span>  <i className="fas fa-2x fa-database m-2 "></i>   </span>   SQL  </p> 
    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <b>   <ProgressBar  valueEnd = {mongodb} />   </b>  
  <p> <span>  <i className="fas fa-2x fa-leaf m-2 "></i>   </span>   MONGO DB  </p> 
    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <b>  <ProgressBar  valueEnd = {nodejs} />    </b>  
  <p> <span>  <i className="fab fa-2x fa-node m-2 "></i>   </span>   NODE JS  </p> 
    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
   <b><ProgressBar  valueEnd = {python} /> </b>
  <p> <span>  <i className="fab fa-2x fa-python m-2 "></i>   </span>   PYTHON  </p> 
    </div>
  </div>

  <div className="col-md-2 col-6 mx-auto">
  <div className="col-8">
  <i>   <b>    <ProgressBar  valueEnd = {github} />   </b>  </i>
  <p> <span>  <i className="fab fa-2x fa-github m-2 "></i>   </span>   GITHUB  </p> 
    </div>
  </div>




    </div>
    </div>
    </div>
    
   
   





    <div className="col-11 mx-auto m-4">
  <h1 className="text-center m-3" >LOCATION </h1>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5381800346477!2d78.48443731435515!3d17.529545503304615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8551d844517f%3A0xc57d96a941fd6386!2sKompally%2C%20Cine%20Planet!5e0!3m2!1sen!2sin!4v1605706133629!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowfullscreen="100%" aria-hidden="false" tabindex="0">
</iframe>

</div>









 



    </div>
        </>
    )

}


export default About;
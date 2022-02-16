import React ,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Projects = () => {
  useEffect(() => {
    AOS.init({
    offset:200,
    duration:600,
    easing: 'ease-in-sine',
    });
  }, []);
return(
<>

  <div className="container-fluid proj">
    <div className="row">
      <div className="col-11 mx-auto mt-4 p-4 mb-5  ">
        <div className="row gy-5">



          <div className="col-md-4 col-12 mx-auto "  data-aos={"slide-left"}>
            <div className="card  card-1 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1>PETS LOVE</h1>
                <a href="https://glacial-lake-70023.herokuapp.com/signinoption" target="_blank" className="btn-start">
                  Visit Website</a>
                <a href="https://github.com/duggeraviteja/SignInPage" target="_blank" className="btn-start m-2"> GITHUB
                  Link</a>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-12 mx-auto"  data-aos={"slide-right"}>
            <div className="card  card-2 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1>VITAMINS DETAILS</h1>
                <a href="https://vitamins-details.herokuapp.com/" target="_blank" className="btn-start"> Visit
                  Website</a>
                <a href="https://github.com/duggeraviteja/Vitamins-details" target="_blank" className="btn-start m-2">
                  GITHUB Link</a>

              </div>
            </div>
          </div>


          <div className="col-md-4 col-12 mx-auto"  data-aos={"flip-up"}>
            <div className="card card-3 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1>JS GAMES</h1>
                <a href="https://javascript-react-games.herokuapp.com/" target="_blank" className="btn-start"> Visit
                  Website</a>
                <a href="https://github.com/duggeraviteja/js-games" target="_blank" className="btn-start m-2"> GITHUB
                  Link</a>

              </div>
            </div>
          </div>



          <div className="col-md-4 col-12 mx-auto"  data-aos={"flip-down"}>
            <div className="card  card-4 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1>TRACK COVID-19 </h1>
                <a href="https://tracking-covid19-india.netlify.app/" target="_blank" className="btn-start"> Visit
                  Website</a>
                <a href="https://github.com/duggeraviteja/Covid-19-Tracking-" target="_blank" className="btn-start m-2">
                  GITHUB Link</a>

              </div>
            </div>
          </div>



          <div className="col-md-4 col-12 mx-auto"  data-aos={"slide-up"}>
            <div className="card  card-2 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1>Todo List </h1>
               
                <a href="https://github.com/duggeraviteja/todo-list" target="_blank" className="btn-start m-2">
                  GITHUB Link</a>

              </div>
            </div>
          </div>
          

          <div className="col-md-4 col-12 mx-auto"  data-aos={"slide-down"}> 
            <div className="card  card-2 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1> Blog Post </h1>
             
                <a href="https://github.com/duggeraviteja/Daily-journal-blog-post" target="_blank" className="btn-start m-2">
                  GITHUB Link</a>

              </div>
            </div>
          </div> 

     <div className="col-md-4 col-12 mx-auto" > 
            <div className="card  card-2 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1>  DSA </h1>
             
                <a href="https://github.com/duggeraviteja/DSA-Using-JAVA" target="_blank" className="btn-start m-2">
                  GITHUB Link</a>

              </div>
            </div>
          </div>








        <div className="col-md-4 col-12 mx-auto"> 
            <div className="card  card-2 ca">
              <div className="card-body">
                <h4 className="card-title">Web Project </h4>
                <hr />
                <h1> E-Learning App Post </h1>
                  <a href="https://standard-edification.herokuapp.com/" target="_blank" className="btn-start"> Visit
                  Website</a>
             
                <a href="https://github.com/duggeraviteja/e_learning_website" target="_blank" className="btn-start m-2">
                  GITHUB Link</a>

              </div>
            </div>
          </div>















        </div>
      </div>
    </div>
  </div>
</>
)
}

export default Projects;

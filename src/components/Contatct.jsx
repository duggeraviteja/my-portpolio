import React, { useState } from "react";
import emailjs from "emailjs-com";
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from"sweetalert2";


const Contact =()=>{

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('mymail', 'mailtemp', e.target, 'user_99C5dOnKTAHWxqGk0SmjN')
    .then((result) => {

    }, (error) => {

    });
    e.target.reset()
}

  const [name, setHtext] = useState("");

  function handle(event) {
    const name = event.target.value;
    setHtext(name);
  }

function isSend(){
if(name){
    Swal.fire(
    name,
    ' email sent Successfully !',
    'success'
  );
} else
Swal.fire({
  icon: 'error',
  title: 'Please fill the details',
  text: 'Something went wrong!',
})
}


    return(
        <>
<div className="cont-page conatiner-fluid m-0 p-0">  

<div className=" col-md-8 col-12 mx-auto ">
<div className="d-flex p-4 cont-p">

  <form onSubmit={sendEmail} className="form-control contact-page">
  <h1 className="d-center contact">Contact Us</h1>
 
      <label  className="form m-2" for="fname">FirstName</label>
    <input type="text" className="form-control m-1" id="fname" onChange={handle} name="name" placeholder="Your Name" autoFocus/>
     


    <label   className="form m-2" for="lname">LastName</label>
    <input type="text"className="form-control m-1" id="lname" name="lastname" placeholder="Your Last Name" />
  
   

  
    <label  className="form-user m-2" for="email">Email</label>
    <input type="text" className="form-control m-1" id="email" name="email" placeholder="Your Email"/>

    <label  className="form-user m-2" for="city">City</label>
    <input type="text" className="form-control m-1" id="email" name="email" placeholder="Your City"/>

    <label   className="form-user m-2" for="subject">Subject</label>
    <textarea id="subject" className="form-control m-1" name="subject" placeholder="Write something"></textarea>
    <input type="submit" className="btn-contact m-3" onClick={isSend}value="Submit"/>
  </form>
</div>
</div>
</div>
   

        </>
    );
}
export default Contact;

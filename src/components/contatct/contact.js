import react from "react"
import {Link} from "react-router-dom"
import "../../sharriedCSS/component.css"
import "./contact.css"
import emailjs from "emailjs-com"

let Contact = ()=>{

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_vvucvno', 'template_8pfmidq', e.target, 'user_zv6I7AXJIoGakTO58kqBF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return(
    <div>
      <div className = "holder">
        <div className = "container">
          <div className = "contact">
          <div className ="buttonHolder">
            <Link to = '/'>
              <button >Home</button>
            </Link>
            <Link to = "/projects">
              <button >Projects</button>
            </Link>
            <Link to = "/resume">
              <button >Resume</button>
            </Link>
          </div>
          <form onSubmit ={sendEmail} className = "contactForm">
            <label for = 'name'> Name</label> <br></br>
            <input type = 'text' id = "name" name = "name"></input><br></br>
            <label for = "company">Company</label> <br></br>
            <input type = 'text' id = 'company' name = 'company'></input><br></br>
            <label for = "message">Message</label> <br></br>
            <textarea type = 'text' id = "message" name = "message"></textarea><br></br>
            <input  className = "submitButton" type = 'submit' value = "submit"></input>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
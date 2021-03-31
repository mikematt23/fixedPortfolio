import react from "react"
import "../../sharriedCSS/component.css"

let Contact = ()=>{
  return(
    <div>
      <div className = "holder">
        <div className = "container">
          <form method = 'post' action = "michaelcmatteis@gmail.com">
            <label for = 'name'> Name</label> <br></br>
            <input type = 'text' id = "name" name = "name"></input><br></br>
            <label for = "company">Company</label> <br></br>
            <input type = 'text' id = 'company' name = 'company'></input><br></br>
            <label for = "message">Message</label> <br></br>
            <input type = 'text' id = "message" name = "message"></input><br></br>
            <input type = 'submit' value = "submit"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
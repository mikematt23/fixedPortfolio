import {useState} from "react"
import "./home.css"
import "../../sharriedCSS/component.css"
import {Link} from 'react-router-dom'


let Home = ()=>{
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Dr+Sugiyama" />

    return(
      <div>
        <div className = "holder">
          <div className = "container">
            <div className = "Info">
              <h1 className = "ppp">Michael <span>Matteis</span></h1>
              <h2 className = "mobileTitle">Web Developer</h2>
              <div className = "contact">
                <h4 href = "www.michaelcmatteis@gmail.com" >michaelcmatteis@gmail.com</h4>
                <h4>469-667-3624</h4>
              </div>
            </div>  
            <div className = "Nav">
              <h1 className ="computer">Web<span>Developer</span></h1>
              <div className ="buttonHolder">
                <Link to = "/projects">
                  <button >Projects</button>
                </Link>
                <Link to = "/resume">
                  <button >Resume</button>
                </Link>
                <Link to = '/contact'>
                  <button>Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
}

export default Home
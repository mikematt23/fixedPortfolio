import projects from "../../Projects.json"
import {Link} from 'react-router-dom'
import "./project.css"
import {useState} from "react"

let Projects = ()=>{
  const [disclamer,setDiscalmer] = useState("This Is Hosted On Heroku so the links may take 30+ seconds")
  return(
    <div className = "holder">
     <div className = "container">
      <div className = "disclamer">
       <div className = "buttonHolder">
        <Link to = '/'>
          <button >Home</button>
        </Link>
       <Link to = "/resume">
         <button >Resume</button>
       </Link>
       <Link to = '/contact'>
         <button>Contact</button>
       </Link>
       </div>
       <p className = "dis">{disclamer}</p>
      </div>
      <div className = "projectHolder">
        {projects.map((project, id) => (
          <div className = "projectContainer">
            <p className = "projectTitle">{project.ProjectName}</p>
            <p>{project.Description}</p>
            <p> Uses: {project.Tech}</p>
            <a href = {project.Link}>See Project</a>
            <a href = {project.Github}>See code</a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects
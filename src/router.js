import React from 'react'
import Home from "./components/home/home.js"
import Projects from "./components/projects/project.js"
import Resume from "./components/resume/resume"
import Contact from "./components/contatct/contact.js"
import { Switch,Route  } from 'react-router'


let Router = ()=>{
  return(
    <Switch>
     <Route path ='/' exact component ={Home} />
     <Route path = '/projects' component = {Projects}/>
     <Route path = '/resume' component = {Resume}/> 
     <Route path = '/contact' component = {Contact}/>
   </Switch>
  )
}

export default Router
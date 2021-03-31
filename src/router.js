import React from 'react'
import Home from "./components/home/home.js"
import Projects from "./components/projects/project.js"
import Resume from "./components/resume/resume"
import { Switch,Route  } from 'react-router'


let Router = ()=>{
  return(
    <Switch>
     <Route path ='/' exact component ={Home} />
     <Route path = '/projects' component = {Projects}/>
     <Route path = '/resume' component = {Resume}/> 
   </Switch>
  )
}

export default Router
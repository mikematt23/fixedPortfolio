import {Link} from 'react-router-dom'
import "./resume.css"
import "../../sharriedCSS/component.css"


let Resume = ()=>{
  return(
    <div className = "holder">
    <div className = "container">
      <div className = "resumeContainer">
        <div className = "buttonHolder">
          <Link to = "/projects">
            <button>Projects</button>
          </Link>

          <Link to = "/">
            <button>Home</button>
          </Link>
          <Link to = '/contact'>
           <button>Contact</button>
          </Link>
        </div>
        <div className = "content">
          <h1>Primary Objective</h1>
          <p>To obtain leadership and technical experience that will be mutually beneficial for the right company and my career advancement</p> 
          <div className = "body">
            <div className = "skills">
              <h1>Skills</h1>
              <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Express</li>
                <li>Git</li>
              </ul>
            </div>
            <div className = "workHistory">
              <h1>Work History</h1>
              <div>
                <h3>Lowes</h3>
                <p>
                  Responsible for keeping the lumber stock, stacked and safe. This is done with various tools including a
                  forklift and pallet jack. I also assist customers with many services including retrieving wood, filling
                  orders, and helping plan projects such as decks and remodels. I am also accountable for maintaining
                  safety within the store through various means, among them being, keeping the aisles clean and cleared
                  and making sure everything is secure. Once I moved positions my responsibility went from customer
                  need to store need. As a backend clerk I was responsible for making sure products were received
                  correctly and undamaged. Once the trucks were unloaded, I would inventory the merchandise
                </p>
              </div>
              <div>
                <h3>UPS</h3>
                <p>
                  Responsible for unloading the trucks as fast and efficiently as possible while moving freight to the right
                  truck. I would also sort the small products to go on the right belt for delivery and shipment. When
                  possible, I would help the loader load the delivery trucks.
                </p>
              </div>
            </div>
          </div> 
          <div className ="educationHolder">
            <h1>Education</h1>
            <div className = "education">
              <div className = "centennial">
                <h3>Centennial</h3>
                <p>Graduated in 2015</p>
                <p>
                   2 years of metal shop/wood shop
                   Semester of BIM which included Excel, Access, Power Point, and Word
                </p>
              </div>
              <div className = "aca">
                <h3>ACA Austin Coding Academy</h3>
                <p>Graduated 2020</p>
                <p>Learned to make responsive frontend web pages using HTML CSS and JavaScript, and single page applications 
                   with react. Used backend services such as Express to communicate with a server using REST and CRUD principles.
                   Used SQL to develop databases as well as developing various query to manipulate databases.
                </p>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resume
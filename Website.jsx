import { BrowserRouter as Router , Routes, Route, NavLink } from "react-router-dom"
import HomeComp from "./Home"
import ServiceComp from "./Services"
import ContactUs from "./ContactUs"
import HtmlComp from "./Html"
import CssComp from "./Css"
import JavascriptComp from "./Javascript"
import ReactJsComp from "./ReactJs"
import ClassComp1 from "../CompCommunication/ClassComp1"
import ClassComp from "../CompCommunication/ClassComp1"
import Sidebar from './Side'
import StateInClassComp from "./StateInClsComp/StateInClsCom"
import UseStateHook from "./StateInClsComp/StateHooks"
import CondRendering from "../condRenderingOfComp/CondRendering"
import StylingCompt from "../condRenderingOfComp/StylingCompt"
import BindingEvent from "../condRenderingOfComp/EventBinding"
const Website = ()=>{
  let name= 'Shubham';
  const employee = {
    name: "Shivba",
    age:30,
    add:"Pune"
  };
    return (
        <>
        {/* <h1>Main Page</h1> */}
        <Router>

            {/* <ul type="none" style={{display:'flex', columnGap:'10px'}}>
                <li> <NavLink to ="/"> <b>HOME</b> </NavLink></li>
                <li> <NavLink to ="/services"><b>SERVICE</b></NavLink></li>
                <li> <NavLink to ="/contactus"><b>CONTACTUS</b></NavLink></li>
            </ul> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <NavLink class="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + 'codemindshubh.png'} alt=""  width={70}/>
             <b> CODEMIND TECHNOLOGY </b>
            </NavLink>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink className="nav-link active"  to="/services">
                   Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contactus">
                   Contact US
                  </NavLink>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/html">
                   HTML
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/css">
                   CSS
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/javascript">
                   JAVASCRIPT
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/reactjs">
                   REACT JS
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/classcomp">
                   Class Communication
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/funccomp">
                   Function  Communication
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/Sidebar">
                   Side Bar
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/statecls">
                   State In Class Component
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/statehook">
                   State In Function Component
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/condrendering">
                   CondRendering
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/stylingcompt">
                   Styling Rendering
                  </NavLink>
                </li>
                </li>
                <li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/event">
                   Event Binding
                  </NavLink>
                </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <Routes>
                <Route exact path="/" element={<HomeComp/>}></Route>
                <Route exact path="/services" element={<ServiceComp/>}></Route>
                <Route exact path="/contactus" element={<ContactUs/>}></Route>
                <Route exact path="/html" element={<HtmlComp/>}></Route>
                <Route exact path="/css" element={<CssComp/>}></Route>
                <Route exact path="/javascript" element={<JavascriptComp/>}></Route>
                <Route exact path="/reactjs" element={<ReactJsComp/>}></Route>
                <Route exact path="/Sidebar" element={<Sidebar/>}></Route>
                <Route exact path="/classcomp" element={<ClassComp myName={name} Company= "Infosys" employeeObj={employee} />}></Route>
                <Route exact path="/funccomp" element={<ClassComp myName={name} Company= "Infosys" employeeObj={employee}/>}></Route>
                <Route exact path="/statecls" element={<StateInClassComp/>}></Route>
                <Route exact path="/statehook" element={<UseStateHook/>}></Route>
                <Route exact path="/condrendering" element={<CondRendering/>}></Route>
                <Route exact path="/stylingcompt" element={<StylingCompt/>}></Route>
                <Route exact path="/event" element={<BindingEvent/>}></Route>

            </Routes>
        </Router>
        </>
    )
}
export default Website;
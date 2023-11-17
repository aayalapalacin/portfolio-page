import React, {useState} from "react";
import "../../styles/index.css"
import avocado from "../../assets/img/webpage/avo.png"
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
const resumeLink = "https://docs.google.com/document/d/1I-mOHTXc_QFSnbGZAiFSDvcoQgbyPKpg1Sa6f8YrI0w/edit?usp=sharing"
const Navbar = () => {
  const [toggleOrX, setToggleOrX]= useState(false)
  const [active, setActive]= useState("home")
 const handleToggler = ()=>{
  const navbar = document.querySelector(".navbar-collapse")
  if(navbar.classList.contains("show")){
    navbar.classList.remove("show");
  }
 }
  return (
    <nav className=" navbar navbar-expand-lg mb-md-4 mb-1 ">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img src={avocado} alt="avocado" />
          </a>
        </Link>
        <button onClick={()=> setToggleOrX(!toggleOrX)} className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          {toggleOrX ? "X" : <span className="navbar-toggler-icon"></span>}

        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
            <Link 
             onClick={()=>{
              setToggleOrX(!toggleOrX)
              handleToggler()
              setActive("home")
            }
          }  
          to="/">
              <span className={`${active == "home" ? "active-link " : ""} nav-link bounce`} aria-current="page" href="#">Home</span>
            </Link>
            <Link 
             onClick={()=>{
              setToggleOrX(!toggleOrX)
              handleToggler()
              setActive("projects")
            }
          }  
          to="/projects">
              <p className={`${active == "projects" ? "active-link " : ""} nav-link bounce`} aria-current="page" href="#">Projects</p>
            </Link>
       
            <Link 
             onClick={()=>{
               setToggleOrX(!toggleOrX)
               handleToggler()
              }
            } 
            to={resumeLink} target="_blank">
            <p className=" nav-link bounce" >Resume</p>
            </Link>
            <Link 
             onClick={()=>{
               setToggleOrX(!toggleOrX)
               handleToggler()
               setActive("about")
              }
            }  
            to="/about">
              <p className={`${active == "about" ? "active-link " : ""} nav-link bounce `} href="#">About</p>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

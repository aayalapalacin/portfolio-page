import React, {useState} from "react";
import "../../styles/index.css"
import avocado from "../../assets/img/webpage/avo.png"
import { Link } from "react-router-dom";

const resumeLink = "https://docs.google.com/document/d/1I-mOHTXc_QFSnbGZAiFSDvcoQgbyPKpg1Sa6f8YrI0w/edit?usp=sharing"
const Navbar = () => {
  const [toggleOrX, setToggleOrX]= useState(false)
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
              }
            }  
            to="/">
              <p className="nav-link active" aria-current="page" href="#">Home</p>
            </Link>
            <Link 
            onClick={()=>{
              setToggleOrX(!toggleOrX)
              handleToggler()
              }
            } 
              to="projects/">
              <p className="nav-link" href="#">Projects</p>
            </Link>
            <Link 
             onClick={()=>{
              setToggleOrX(!toggleOrX)
              handleToggler()
              }
            } 
              to={resumeLink} target="_blank">
            <p className="nav-link" >Resume</p>
            </Link>
            <Link 
             onClick={()=>{
              setToggleOrX(!toggleOrX)
              handleToggler()
              }
            }  
            to="/about">
              <p className="nav-link" href="#">About</p>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

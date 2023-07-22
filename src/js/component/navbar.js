import React from "react";
import "../../styles/index.css"
import avocado from "../../assets/img/webpage/avo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className=" navbar navbar-expand-lg ">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={avocado} alt="avocado" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/">
        <p className="nav-link active" aria-current="page" href="#">Home</p>
        </Link>
        <Link to="projects/">
        <p className="nav-link" href="#">Projects</p>
        </Link>
        <p className="nav-link" href="#">Resume</p>
        <Link to="/about">
        <p className="nav-link" href="#">About</p>
        </Link>
        
      </div>
    </div>
  </div>
</nav>
	);
};

export default Navbar;

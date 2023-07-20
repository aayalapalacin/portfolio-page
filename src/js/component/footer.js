import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlenderPhone, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
//include images into your bundle
//create your first component
const Footer = () => {
	return (
		<nav className="navbar bg-light">
  <form className="container-fluid justify-content-center">
  <FontAwesomeIcon icon={faLinkedin} />
  <FontAwesomeIcon icon={faGithub} />
  <FontAwesomeIcon icon={faEnvelope} />
  <FontAwesomeIcon icon={faPhone} />
  </form>
</nav>
	);
};

export default Footer;

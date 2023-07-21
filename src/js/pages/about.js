import React from "react";

//include images into your bundle

//create your first component
const About = () => {
	return (
		<div className="container">
			<div className=" top-row d-flex justify-content-around">
				<div className="about-work">work</div>
				<div className="about-fun-fact">fun fact</div>
			</div>
			<div className=" mid-row  text-center">
				<div className="about-photo">photo</div>
			</div>
			<div className=" low-row d-flex justify-content-around">
				<div className="  about-culture">culture</div>
				<div className="  about-arts">arts</div>
			</div>
		</div>
	);
}; 

export default About;

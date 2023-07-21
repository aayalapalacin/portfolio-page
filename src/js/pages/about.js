import React,{useRef} from "react";
import Xarrow from "react-xarrows";
//include images into your bundle

//create your first component
const About = () => {
	const homeRef = useRef(null);

	return (
		<div className="container">
			<div className=" top-row d-flex justify-content-around">
				<div className="about-work" id="about-work">work</div>
				<div className="about-fun-fact" id="about-fun-fact">fun fact</div>
			</div>
			<div className=" mid-row  text-center">
				<div className="about-photo" ref={homeRef}>photo</div>
			</div>
			<div className=" low-row d-flex justify-content-around">
				<div className="about-culture" id="about-culture">culture</div>
				<div className="about-arts" id="about-arts">arts</div>
			</div>
			<Xarrow
			color = "green"
                start={homeRef} //can be react ref
                end="about-work" //or an id
				startAnchor="top"
        		endAnchor="auto"
            />
			<Xarrow
                start={homeRef} //can be react ref
                end="about-fun-fact" //or an id
				startAnchor="top"
        		endAnchor="auto"
            />
			<Xarrow
                start={homeRef} //can be react ref
                end="about-arts" //can be react ref
				startAnchor="bottom"
        		endAnchor="auto"
            />
			<Xarrow
                start={homeRef} //can be react ref
                end="about-culture" //or an id
				startAnchor="bottom"
        		endAnchor="auto"
            />
		</div>
	);
}; 

export default About;

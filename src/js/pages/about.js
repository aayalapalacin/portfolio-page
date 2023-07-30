import React,{useRef} from "react";
import Xarrow from "react-xarrows";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import funFact from "../../assets/img/webpage/funFact.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import profile from "../../assets/img/portrait/profile.png"
import performingArts from "../../assets/img/webpage/performingArts.png"

const About = () => {
	const homeRef = useRef(null);

	return (
		<div className="container">
			<div className=" top-row d-flex text-center ">
				<div className="about-work w-50" >
					<FontAwesomeIcon icon={faSuitcase} id="about-work" />
					{/* work */}
				</div>
				<div className="about-fun-fact w-50" >
					{/* funfact */}
					<img className="w-25" src={funFact} alt="fun-fact" id="about-fun-fact" />
				</div>
			</div>
			<div className=" mid-row  text-center">
				<div className="about-photo" >
					{/* profile */}
				<img className="rounded-circle w-25"src={profile} alt="profile" ref={homeRef} />
				</div>
			</div>
			<div className=" low-row d-flex text-center ">
				<div className="about-culture w-50" >
					{/* culture */}
				<img className="w-25" src={puertoRico} alt="puerto-rico" id="about-culture" />
				</div>
				<div className="about-arts w-50">
					{/* arts */}
				<img className="w-25" src={performingArts} alt="performingArts"  id="about-arts" />
				</div>
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

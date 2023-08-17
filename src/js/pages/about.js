import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import AboutModal from "../component/aboutModal";
// about images imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import funFact from "../../assets/img/webpage/funFact.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import profile from "../../assets/img/portrait/profile.png"
import performingArts from "../../assets/img/webpage/performingArts.png"

import "../../styles/about.css"
const About = () => {
	const homeRef = useRef(null);

	return (
		<div className="container " style={{ marginTop: "6rem" }}>
			
			<div className="content my-5">
				<div className=" top-row d-flex text-center " style={{ height: "25vh" }}>
					<div className="about-work-container w-50"  >
						<p id="about-work" className="invisible" >test</p>
					</div>
					<div className="about-fun-fact-container w-50" >
						<p id="about-fun-fact" className="invisible" >test</p>
					</div>
				</div>
				<div className=" mid-row  text-center" style={{ height: "25vh" }}>
					<div className="about-photo-container "  >
						<p ref={homeRef} className="invisible" >test</p>
					</div>
				</div>
				<div className=" low-row d-flex text-center  " style={{ height: "25vh" }}>
					<div className="about-culture-container w-50" >
						<p id="about-culture" className="invisible" >test</p>
					</div>
					<div className="about-arts-container w-50" >
						<p id="about-arts" className="invisible" >test</p>
					</div>
				</div>

			</div>
			<Xarrow
				color="#2C4001"
				start={homeRef} //can be react ref
				end="about-work" //or an id
				startAnchor="top"
				endAnchor="middle"
			/>
			<Xarrow
				color="#2C4001"
				start={homeRef} //can be react ref
				end="about-fun-fact" //or an id
				startAnchor="top"
				endAnchor="middle"
			/>
			<Xarrow
				color="#2C4001"
				start={homeRef} //can be react ref
				end="about-arts" //can be react ref
				startAnchor="bottom"
				endAnchor="middle"
			/>
			<Xarrow
				color="#2C4001"
				start={homeRef} //can be react ref
				end="about-culture" //or an id
				startAnchor="bottom"
				endAnchor="middle"
			/>
			<div className="photos" style={{ width: "59%" }}>
				
				<AboutModal />
				
				<img
					className=" about-photo position-relative rounded-circle w-25"
					src={profile}
					alt="profile"
					style={{
						bottom: "568px",
						left: "476px"
					}}
				/>
				
				

			</div>
		</div>
	);
};

export default About;
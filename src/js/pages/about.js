import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import AboutModal from "../component/aboutModal";
// about images imports
import profile from "../../assets/img/portrait/profile.png"

import "../../styles/about.css"
const About = () => {
	const homeRef = useRef(null);

	return (
		<div className="container " >
			<div className="about-title text-center">
				<h1>About Me</h1>
				<p>Click to learn more about my personal life</p>
			</div>
			
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
						bottom: "612px",
						left: "476px"
					}}
				/>
				
				

			</div>
		</div>
	);
};

export default About;
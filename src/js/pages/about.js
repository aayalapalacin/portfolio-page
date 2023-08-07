import React, { useRef } from "react";
import Xarrow from "react-xarrows";
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
				color="green"
				start={homeRef} //can be react ref
				end="about-work" //or an id
				startAnchor="top"
				endAnchor="middle"
			/>
			<Xarrow
				start={homeRef} //can be react ref
				end="about-fun-fact" //or an id
				startAnchor="top"
				endAnchor="middle"
			/>
			<Xarrow
				start={homeRef} //can be react ref
				end="about-arts" //can be react ref
				startAnchor="bottom"
				endAnchor="middle"
			/>
			<Xarrow
				start={homeRef} //can be react ref
				end="about-culture" //or an id
				startAnchor="bottom"
				endAnchor="middle"
			/>
			<div className="photos" style={{ width: "59%" }}>
				<FontAwesomeIcon
					className="about-work position-relative "
					icon={faSuitcase}
					size="6x"
					style={{
						left: "865px",
						bottom: "228px"
					}}
				/>
				<img
					className=" about-fun-fact position-relative w-25"
					src={funFact} alt="fun-fact"
					style={{
						bottom: "235px",
						left: "19px"
					}}
				/>
				<img
					className=" about-photo position-relative rounded-circle w-25"
					src={profile}
					alt="profile"
					style={{
						bottom: "397px",
						left: "211px"
					}}
				/>
				<img
					className="about-culture position-relative w-25"
					src={puertoRico}
					alt="puerto-rico"
					style={{
						bottom: "548px",
						right: "324px"
					}}
				/>
				<img
					className="about-arts position-relative w-25"
					src={performingArts}
					alt="performingArts"
					style={{
						bottom: "700px",
						left: "853px"
					}}
				/>

			</div>
		</div>
	);
};

export default About;
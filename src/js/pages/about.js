import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import AboutModal from "../component/aboutModal";
// about images imports
import profile from "../../assets/img/portrait/profile.png"

import "../../styles/about.css"
const About = () => {
	const homeRef = useRef(null);
let arrowData = [
	{
		end:"about-work",
		startAnchor:"top"

},
	{
		end:"about-fun-fact",
		startAnchor:"top"

},
	{
		end:"about-arts",
		startAnchor:"bottom"

},
	{
		end:"about-culture",
		startAnchor:"bottom"

},
]
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
			<div className="d-none d-md-block">
				{arrowData.map((item,i)=>{
					return(
						<div key={i}>
							<Xarrow
								divContainerStyle
								color="#2C4001"
								start={homeRef} 
								end={item.end} 
								startAnchor={item.startAnchor}
								endAnchor="middle"
							/>
						</div>
					);
				})}
			</div>
			
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
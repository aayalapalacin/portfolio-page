import React from "react";
import Xarrow from "react-xarrows";
import AboutModal from "../component/aboutModal";
// about images imports
import profile from "../../assets/img/portrait/profile.png"

import "../../styles/about.css"
const About = () => {

	let arrowData = [
		{
			end: "about-work",
			startAnchor: "top"

		},
		{
			end: "about-fun-fact",
			startAnchor: "top"

		},
		{
			end: "about-arts",
			startAnchor: "bottom"

		},
		{
			end: "about-culture",
			startAnchor: "bottom"

		},
	]
	let arrowRows = [

		{
			level: "top-row",
			display: "d-flex",
			content: [
				{
					about: "about-work",
					width: "w-50"
				},
				{
					about: "about-fun-fact",
					width: "w-50"
				},
			]
		},
		{
			level: "mid-row",
			display: "",
			content: [
				{
					about: "about-photo",
					width: ""
				}
			]
		},
		{
			level: "low-row",
			display: "d-flex",
			content: [
				{
					about: "about-culture",
					width: "w-50"
				},
				{
					about: "about-arts",
					width: "w-50"
				},
			]
		},


	]
	return (
		<div className="container  " >
			<div className="about-title text-center">
				<h1>About Me</h1>
				<p>Click to learn more about my personal life</p>
			</div>

			<div className="content my-5 d-none d-md-block">
				{arrowRows.map((item, i) => {
					return (
						<div key={i} className={` ${item.level} ${item.display} text-center `} style={{ height: "25vh" }}>
							{item.content.map((contentItem, i) => {
								return (
									<>
										<div key={i} className={`${contentItem.about}-container ${contentItem.width}`} >
											<p id={contentItem.about} className="invisible" >test</p>
										</div>
									</>
								);
							})}


						</div>

					);
				})}

			

			</div>
			<div className="d-none d-md-block">
				{arrowData.map((item, i) => {
					return (
						<div key={i}>
							<Xarrow
								divContainerStyle
								color="#2C4001"
								start="about-photo"
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
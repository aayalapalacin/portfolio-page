import React, { useState } from "react";
import Xarrow from "react-xarrows";
import AboutModal from "../component/aboutModal";
// about images imports
import profile from "../../assets/img/portrait/profile.png"
import 'react-responsive-modal/styles.css';

import "../../styles/about.css"
import funFact from "../../assets/img/webpage/funFact.png"
import briefcase from "../../assets/img/webpage/briefcase.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import performingArts from "../../assets/img/webpage/performingArts.png"
import avoKeys from "../../assets/img/webpage/avoKeys.jpg"
import travel from "../../assets/img/webpage/travel.jpg"
const About = () => {
	const [open, setOpen] = useState(false);
	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
	const [modalID, setModalID] = useState(0)
	let arrowData = [
		{
			end: "about-work",
			startAnchor: "bottom"

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
					width: "w-50",
					img: briefcase,
					title: "Path to Tech",
				},
				{
					about: "about-fun-fact",
					width: "w-50",
					img: funFact,
					title: "Fun Fact",
				},
			]
		},
		{
			level: "mid-row",
			display: "",
			content: [
				{
					about: "about-photo",
					width: "",

				}
			]
		},
		{
			level: "low-row",
			display: "d-flex",
			content: [
				{
					about: "about-culture",
					width: "w-50",
					img: puertoRico,
					title: "Culture",
				},
				{
					about: "about-arts",
					width: "w-50",
					img: performingArts,
					title: "Hobbies",
				},
			]
		},


	]
	const modalContent = [
		[
		  {
			title: "Teaching to Tech",
			text: "Prior to pursuing a career as a developer, I taught in public school for nearly 5 years. During the pandemic, teaching remotely, my school used many innovative educational platforms that made a great impression on me. Some of the features creating incredibly engaging and effective virtual lessons or intuitive and powerful tools for grading and tracking students progress. After some research and talking to others in the tech industry, I decided to pursue a career as a computer programmer, and make others feel the same as I did as an educator",
			contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/anTtMRaQLsM?si=eC0-eIzFwdpJcqTt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
			mobileContentImg: <iframe className="responsive-iframe" src="https://www.youtube.com/embed/anTtMRaQLsM?si=eC0-eIzFwdpJcqTt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
			contentImgTxt: "A demo video of one of the education tools that inspired my transition into tech, Nearpod"
		  }
		],
		[{
		  title: "Movie reference",
		  text: 'As many people do, I enjoy movies and comedy; so much to a point where I am contantly making references to jokes or movie scenes from virtually any conversation topic. -Friend "Man medicine is expensive" -Me "Have you seen Dallas Buyers Club ',
		  contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/JsGZAN0ol3U?si=4hY16IN3EfYCmbXb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
		  mobileContentImg: <iframe className="responsive-iframe" src="https://www.youtube.com/embed/JsGZAN0ol3U?si=4hY16IN3EfYCmbXb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
		  contentImgTxt: "One of my favorite scenes from Ghost, where Whoopi Goldberg's characters is forced to donate money"
		},
		{
		  title: "Spirit Vegetable",
		  text: "Avocado is my spirit vegetable, something I identify with culturally and aesthetically. My musician name is AvoKeys (Avocado + Keyboard).To expand, avocdoes are a big stable of latin cuisine, being a key acompaniment to most popular dishes. Avocadoes are also assosciated with health, like using avocado oil for cooking, using products with avocado for the skin. It is a very positive force that I wanted to emulate in my music. ",
		  contentImg: <img className="w-100" src={avoKeys} alt="avokeys" />,
		  mobileContentImg: <img className="w-100" src={avoKeys} alt="avokeys" />,
		  contentImgTxt: "Here is a logo that a collegue made for me, representing 'AvoKeys'"
		}
		],
		[{
		  title: "Puerto Rico",
		  text: "I identify with being a latino, of Puertorican descent. It was in my later years when I made an effort to connect with my culture. Now, I am familiar with cooking latin cuisine, playing latin music, and dancing several latin genres. Also, becoming fluent in Spanish is another goal I'm very content with reaching.  ",
		  contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/ysmhfLM8rZk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>,
		  mobileContentImg: <iframe className="responsive-iframe" src="https://www.youtube.com/embed/ysmhfLM8rZk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>,
		  contentImgTxt: "Me dancing Bomba, an afro-puertrican dance where there is a connection between the dancer and drummer."
		}],
		[
		  {
			title: "Music",
			text: "I initially dedicated my studies to music peformance, at community college. Afterwards I would participate in several dance performance groups in my undergrad at Umass Amherst. It's a big part of who I am.",
			contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
			mobileContentImg: <iframe className="responsive-iframe" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
			contentImgTxt: "My band covering a song by Roy Ayers, 'Vibrations'."
		  },
		  {
			title: "Travel",
			text: "I have been fortunate to travel both domestically and internationally. My favorite places I have visited are New Orleans, and the Amazon river. I have been to Latin American countries such as Colombia, Guatemala, Mexico, Panama. My goal is to travel to a country where I don't know the native language. ",
			contentImg: <img className="w-100" src={travel} alt="travel" />,
			mobileContentImg: <img className="w-100" src={travel} alt="travel" />,
			contentImgTxt: "Me participating in an amazing tour of the Amazon river, where Brazil, Ecuador, and Colombia align!"
		  }
	  
		],
	  ]
	  
	return (
		<div className="container about-container " >
			<div className="about-title text-center">
				<h1>About Me</h1>
				<p>Click to learn more about my personal life</p>
			</div>

			<div className="content my-5 d-none d-md-block">
				{arrowRows.map((item, i) => {
					return (
						<div key={i} className={` ${item.level} ${item.display} text-center `} style={{ height: "25vh" }}>
							{item.content.map((contentItem, i) => {
							console.log(contentItem,i)
								return (
									<>
										<div key={i} className={`${contentItem.about}-container ${contentItem.width}`} >
											{/* <p  className="" >test</p> */}
											<div>
												<img
													onClick={() => {
														onOpenModal();
														if(contentItem.about == "about-work"){
															setModalID(0)
														}
														if(contentItem.about == "about-fun-fact"){
															setModalID(1)
														}
														if(contentItem.about == "about-culture"){
															setModalID(2)
														}
														if(contentItem.about == "about-arts"){
															setModalID(3)
														}
													}}
													id={contentItem.about}
													style={{ width: "33%" }}
													className={` mb-3 rounded-circle glow  p-1 `}
													src={contentItem.img ? contentItem.img : ""}
												/>
												{modalID}
											</div>

											<span

												className={` about-${contentItem.title ? contentItem.title.toLowerCase() : "no"}-title  p-1 fw-bold fs-4 text-nowrap`}
											>
												{contentItem.title}
											</span>
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
								startAnchor="middle"
								endAnchor="middle"
								headShape="circle"
								headSize={4}
							/>
						</div>
					);
				})}
			</div>

			<div className=" d-none d-md-block photos" style={{ width: "59%" }}>
				<AboutModal />
				<img

					className=" about-photo position-relative rounded-circle "
					src={profile}
					alt="profile"
					style={{
						bottom: "876px",
						left: "69.5%",
						width: "31%"
					}}
				/>
			</div>
			<div
				className="mobilePhotos d-flex d-md-none"
			>
				<AboutModal open={open} modalContent={modalContent[modalID]} onCloseModal={onCloseModal} />
			</div>
		</div>
	);
};

export default About;
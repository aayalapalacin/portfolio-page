import React, { useState } from "react";
// audio player imports
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'
import sonrisa from "../../assets/audio/tu-sonrisa.mp3"
import precious from "../../assets/audio/Precious.mp3"
import blue from "../../assets/audio/Blue.mp3"

import "../../styles/index.css"

// programming languages imgs
import boostrap from "../../assets/img/prog-languages/bootstrap.png"
import css from "../../assets/img/prog-languages/css.png"
import html from "../../assets/img/prog-languages/html.png"
import javascript from "../../assets/img/prog-languages/javascript.png"
import jekyll from "../../assets/img/prog-languages/jekyll.png"
import materialUi from "../../assets/img/prog-languages/materialUi.png"
import python from "../../assets/img/prog-languages/python.png"
import reactNativePaper from "../../assets/img/prog-languages/reactNativePaper.jpg"
import reactNative from "../../assets/img/prog-languages/reactNative.png"
import react from "../../assets/img/prog-languages/react.png"
import sql from "../../assets/img/prog-languages/sql.png"


import point from "../../assets/img/portrait/point.png"

const Home = () => {
	const [showPopover, setShowPopver] = useState(false)
	const [songIndex, setSongIndex] = useState(0)
	const [caroIndex, setCaroIndex] = useState(0)
	let imgArray = [react,materialUi, boostrap, reactNative, reactNativePaper,javascript, css,  html, jekyll,  python, sql]
	let songArray = [sonrisa, precious, blue]
	
	return (
		<div 
		className="container home-container bg-faint-blue d-flex align-items-center  rounded py-md-3 py-2 ps-2 px-md-4"
		
		>
			<div className="row">
				<div className="col-6 ">
					<div className="name-title-desc-container border rounded p-md-3 p-2 ">
						<div className=" home-name row  ">
							{/* laptop view */}
							<h2 className="d-none d-md-block  ">Alexander Ayala Palacin</h2>
							{/* mobile view */}
							<p className="d-block d-md-none fw-bold mb-1">Alexander Ayala Palacin</p>

						</div>
						<div className=" home-title row">
							{/* laptop view */}
							<h4 className="d-none d-md-block">Front End Developer</h4>
							{/* mobile view */}
							<p className="d-block d-md-none mb-2">Front End Developer</p>
						</div>
						<div className=" home-description row">
							{/* laptop view */}
							<p className="d-none d-md-block">
								Passionate about making an impact by making resources
								accessible to enhance peoples lives professionally, socially,
								and well-being.
							</p>
							{/* mobile view */}
							<small className="d-block d-md-none">
								Passionate about making an impact on community through app development
							</small>
							 
						</div>
					</div>
					{/* music player laptop view */}
					<div className=" home-music-player d-none d-md-block row mt-5">
						<h5 className="mb-3 ms-1">Original Music</h5>
						<div className="audioPopver d-flex">

							<div className="w-50"
								onMouseEnter={() => setShowPopver(!showPopover)}
								onMouseLeave={() => setShowPopver(!showPopover)}
							>

								<AudioPlayer
									showJumpControls={false}
									showSkipControls
									onClickNext={(e) => {
										if (songIndex != songArray.length - 1) {
											setSongIndex(songIndex + 1)
										}
										else {
											setSongIndex(0)
										}
									}}
									onClickPrevious={(e) => {
										console.log(songIndex, "previous")
										if (songIndex != 0) {
											setSongIndex(songIndex - 1)
										}
										else {
											setSongIndex(songArray.length - 1)
										}
									}}
									src={songArray[songIndex]}
									className="audio"
								/>
							</div>
							<div className={` ${showPopover ? "d-block" : "d-none"} popover bg-info w-25 text-center m-2`} style={{ boxShadow: "0px 1px 7px 0px white" }}>
								<div className="p-2 "> Recordings of my original music </div>
							</div>
						</div>
					</div>
					{/* program languages  mobile view */}
					<div className=" home-prog-languages d-flex d-md-none w-75 m-auto align-items-center mb-3">
							<div id="programmingLanguage" data-bs-ride="carousel" className="carousel slide carousel-fade ">
								<div className="carousel-inner">

									{imgArray.map((item, i) => {

										return (
											<div key={i} className={`carousel-item  data-bs-interval="1" ${i == 0 ? 'active' : ''}`}>
												<img src={item} className=" object-fit-contain d-block w-100 " alt={item.split("/")[1]} style={{ height: "170px" }} />
											</div>

										);
									})}

								</div>
								<button className="carousel-control-prev" type="button" data-bs-target="#programmingLanguage" data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button className="carousel-control-next" type="button" data-bs-target="#programmingLanguage" data-bs-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</button>
							</div>
						</div>
				</div>
				<div className="col-6">
					<div className="row">
						{/* point  img laptop view */}
						<div className=" home-img d-md-block d-none col-5">
							<img
								className="  position-relative w-100 "
								src={point} alt="point"
								
								/>
						</div>
								{/* point  img  mobile view */}
						<div className=" home-img d-md-none text-center  ">
						<img
								className="   w-75    "
								src={point} alt="point"
							/>
						</div>
							
						{/* programming languages laptop view */}
						<div className=" home-prog-languages col-7 d-none d-md-flex  align-items-center ">
							<div id="programmingLanguage" data-bs-ride="carousel" className="carousel slide carousel-fade  ">
								<div className="carousel-inner">

									{imgArray.map((item, i) => {

										return (
											<div key={i} className={`carousel-item   ${i == caroIndex ? 'active' : ''}`}>
												<img src={item} className=" object-fit-contain d-block w-100 " alt={item.split("/")[1]} style={{ height: "220px" }} />
											
											</div>

										);
									})}

								</div>
								<button className="carousel-control-prev" type="button" data-bs-target="#programmingLanguage" data-bs-slide="prev">
									<span className="carousel-control-prev-icon"
									 aria-hidden="true"
									 onClick={()=> {
										if(caroIndex == 0){
											setCaroIndex(imgArray.length-1)
										}
										else{

											setCaroIndex(caroIndex-1)
										}
							
										console.log(caroIndex,"caro")
											}
										}
									 ></span>
									<span className="visually-hidden" >Previous</span>
								</button>
								<button className="carousel-control-next" type="button" data-bs-target="#programmingLanguage" data-bs-slide="next">
									<span 
									className="carousel-control-next-icon" 
									aria-hidden="true"
									onClick={()=> {
										if(caroIndex == imgArray.length-1){
											setCaroIndex(0)
										}
										else{

											setCaroIndex(caroIndex+1)}}
										}
									></span>
									<span className="visually-hidden" >Next</span>
								</button>
							</div>
						</div>
					</div>
						{/* music player mobile view */}
						
						<div className=" home-music-player d-block d-md-none row text-center">
						<h6 className="my-2 ">Original Music</h6>
						<div className="audioPopver d-flex">
							<div className="w-100"
								onMouseEnter={() => setShowPopver(!showPopover)}
								onMouseLeave={() => setShowPopver(!showPopover)}
							>

								<AudioPlayer
									showJumpControls={false}
									showSkipControls 
									
									onClickNext={(e) => {
										if (songIndex != songArray.length - 1) {
											setSongIndex(songIndex + 1)
										}
										else {
											setSongIndex(0)
										}
									}}
									onClickPrevious={(e) => {
										console.log(songIndex, "previous")
										if (songIndex != 0) {
											setSongIndex(songIndex - 1)
										}
										else {
											setSongIndex(songArray.length - 1)
										}
									}}
									src={songArray[songIndex]}
									className="audio"
								/>
							</div>
							<div className={` ${showPopover ? "d-block" : "d-none"} popover bg-info w-25 text-center m-2`} style={{ boxShadow: "0px 1px 7px 0px white" }}>
								<div className="p-2 "> Recordings of my original music </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	);
};

export default Home;

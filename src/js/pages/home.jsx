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
	let imgArray = [javascript, boostrap, reactNative, css, react, html, jekyll, materialUi, python, reactNativePaper, sql]
	let songArray = [sonrisa, precious, blue]
	return (
		<div className="container bg-faint-blue rounded py-3 px-4">
			<div className="row">
				<div className="col ">
					<div className="name-title-desc-container border rounded  p-3 ">
						<div className=" home-name row ">
							<h2>Alexander Ayala Palacin</h2>

						</div>
						<div className=" home-title row">
							<h4>Front End Developer</h4>
						</div>
						<div className=" home-description row">
							<p>
								Passionate about making an impact by making resources
								accessible to enhance peoples lives professionally, socially,
								and well-being.
							</p>
						</div>

					</div>
					<div className=" home-music-player row mt-5">
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
				</div>
				<div className="col">
					<div className="row">
						<div className=" home-img col-5">
							<img
								className=" position-relative w-100 "
								src={point} alt="point"
								style={{
									bottom: "72px"
								}}
							/>
						</div>
						<div className=" home-prog-languages col-7 d-flex align-items-center ">
							<div id="programmingLanguage" data-bs-ride="carousel" className="carousel slide carousel-fade ">
								<div className="carousel-inner">

									{imgArray.map((item, i) => {

										return (
											<div key={i} className={`carousel-item  data-bs-interval="1" ${i == 0 ? 'active' : ''}`}>
												<img src={item} className=" object-fit-contain d-block w-100 " alt={item.split("/")[1]} style={{ height: "220px" }} />
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
				</div>
			</div>
		</div>
	);
};

export default Home;

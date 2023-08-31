import React, { useEffect, useState } from "react";
// audio player imports
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'
import sonrisa from "../../assets/audio/tu-sonrisa.mp3"

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
	let imgArray = [javascript, boostrap, reactNative, css, react, html, jekyll, materialUi, python, reactNativePaper, sql]

	return (
		<div className="container ">
			<div className="row">
				<div className="col ">
					<div className=" home-name row ">
						<h1>Alexander Ayala Palacin</h1>

					</div>
					<div className=" home-title row">
						<h2>Front End Developer</h2>
					</div>
					<div className=" home-description row">
						<p>
							Passionate about making an impact by making resources
							accessible to enhance peoples lives professionally, socially,
							and well-being.
						</p>
					</div>
					<div className=" home-music-player row mt-5">
						<div className="w-50">
	
						<AudioPlayer
							src={sonrisa}
							className="audio"
 						 />
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
							<div id="carouselExampleFade" data-bs-ride="carousel" className="carousel slide carousel-fade ">
								<div className="carousel-inner">

									{imgArray.map((item, i) => {
										
										return (
											<div key={i} className={`carousel-item  data-bs-interval="10000" ${i == 0 ? 'active' : ''}`}>
												<img src={item} className=" object-fit-contain d-block w-100 " alt={item.split("/")[1]} style={{height:"220px"}} />
											</div>

										);
									})}

								</div>
								<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
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

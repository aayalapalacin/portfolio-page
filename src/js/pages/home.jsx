import React, { useEffect, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
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
import sql from "../../assets/img/prog-languages/sql.png"
//create your first component
const Home = () => {
let imgArray = [boostrap,css,html,javascript,jekyll,materialUi,python,reactNative,reactNativePaper,sql]

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
					<div className=" home-music-player row">
						<AudioPlayer
							// autoPlay
							src={sonrisa}
							onPlay={e => console.log("onPlay")}
						/>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className=" home-img col-5">row1</div>
						<div className=" home-prog-languages col-7 ">
							<div id="carouselExampleFade" class="carousel slide carousel-fade">
								<div class="carousel-inner">
									
									{imgArray.map((item,i)=>{
										return(
									<div class={`carousel-item ${i == 0 ? 'active' : ''}`}>
										<img src={item} class="d-block w-100" alt="..." />
									</div>
											
										);
									})}
									
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
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

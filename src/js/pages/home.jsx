import React from "react";
import AudioPlayer from 'react-h5-audio-player';
//include images into your bundle
import sonrisa from "../../assets/audio/tu-sonrisa.mp3"
import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="container ">
			<div className="row">
				<div className="col "> 
					<div className=" home-name row ">row1</div>
					<div className=" home-title row">row2</div>
					<div className=" home-music-player row"> 
					<AudioPlayer
						autoPlay
						src={sonrisa}
						onPlay={e => console.log("onPlay")}
				  />
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className=" home-img col-5">row1</div>
						<div className=" home-prog-languages col-7 ">row2</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

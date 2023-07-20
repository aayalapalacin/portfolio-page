import React from "react";

//include images into your bundle

import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="container ">
			<div className="row">
				<div className="col "> 
					<div className=" home-name row bg-secondary">row1</div>
					<div className=" home-title row">row2</div>
					<div className=" home-music-player row">row2</div>
				</div>
				<div className="col">
					<div className="row">
						<div className=" home-img col-5 bg-secondary">row1</div>
						<div className=" home-prog-languages col-7 bg-danger">row2</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

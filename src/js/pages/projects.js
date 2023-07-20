import React from "react";

//include images into your bundle

//create your first component
const Projects = () => {
	return (
		<div className="container">
			
			<div className="row">
			<div className="col-4 ">
				<div className=" projects-photo row ">row1</div>
				<div className=" projects-list row">row2</div>
			</div>
			<div className="project-content col-8 ">col2</div>

			</div>
		</div>
	);
};

export default Projects;

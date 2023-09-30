import React, { useState } from "react";
import benchcrop from "../../assets/img/portrait/benchcrop.jpg"
// project img
import archive from "../../assets/img/projects/archive.png"
import ambee from "../../assets/img/projects/ambee.jpg"
import cna from "../../assets/img/projects/cna.png"
import skillshop from "../../assets/img/projects/skillshop.png"
import "../../styles/projects.css"
const Projects = () => {
	const [active, setActive] = useState(0)
	let projectContent = [

		{
			"title": "The Archive",
			"description": "4th place winner submission for 1 week hackathon to find solution for online shoppers not finding the right fitting jeans. Came in 4th overall place providing unique solution using Levi's database and creating algorithm to determine best fit",
			"languages": ["HTML", "CSS", "REACT", "BOOTSTRAP", "JAVASCRIPT", "NPM PROGRESS BAR"],
			"link": "https://levis-the-archive.vercel.app/",
			"code": "https://github.com/aayalapalacin/theArchive",
			"photo": <img src={archive} alt="archive" style={{ width: "211px", height: "387px", objectFit: " cover" }} />
		},
		{
			"title": "Ambee",
			"description": "Mobile app to help users find new movie to watch based on genre, process of elimination with tinder swiping feature, and movies available on netflix via Movies of the Night API.",
			"languages": ["REACT NATIVE", "MOVIES OF THE NIGHT API", "REACT NATIVE PAPER", "EXPO GO"],
			"link": "https://expo.dev/@alexayala91/Ambee?serviceType=classic&distribution=expo-go",
			"code": "https://github.com/aayalapalacin/Ambee",
			"photo": <img src={ambee} alt="ambee" style={{ width: "195px", height: "387px", objectFit: " cover" }} />
		},
		{
			"title": "Miami Dade College CNA ",
			"description": "Miami Dade College website for nursing students executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes",
			"languages": ["HTML", "CSS", "JQUERY", "BOOTSTRAP", "JAVASCRIPT"],
			"link": "https://ce.mdc.edu/contentManagement.do?method=load&code=CM000007",
			"code": "n/a",
			"photo": <img src={cna} alt="cna" style={{ height: "228px", objectFit: " cover" }} />
		},
		{
			"title": "Miami Dade College Skillshop ",
			"description": "Miami Dade College website for enrolled sign up for courses. executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes.",
			"languages": ["HTML", "CSS", "JQUERY", "BOOTSTRAP", "JAVASCRIPT"],
			"link": "https://www.mdc.edu/skillshop/",
			"code": "n/a",
			"photo": <img src={skillshop} alt="skillshop" style={{ height: "252px", objectFit: " cover" }} />
		},
	]

	return (
		<div className="container">
			{/* dropdown mobile */}
			<div className="dropdown-mobile text-center d-block d-md-none">

				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu">

						{projectContent.map((item, i) => {
							let titleNoSpaces = item.title.replace(/\s/g, '')

							return (
								<>

									<li
										key={i}
										onClick={() => setActive(i)}
										className={`dropdown-item text-dark m-auto ${i == 0 ? 'active' : ''}`}
										id={`v-pills-${titleNoSpaces}-tab`} data-bs-toggle="pill"
										data-bs-target={`#v-pills-${titleNoSpaces}`}
										role="tab" aria-controls={`v-pills-${titleNoSpaces}`}
										aria-selected="true">
										<a className="dropdown-item">
											{item.title}
										</a>
									</li>
								</>
							);
						})
						}

					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-3 text-center d-none d-md-block">
					<div className="benchPhoto mb-2 ">
						<img className="w-100 " src={benchcrop} alt="bench-pic" />
					</div>
					<div className=" titleScroll text-nowrap  ">
						<div className="nav  nav-pills h-100 d-block " id="v-pills-tab" role="tablist" aria-orientation="vertical">
							{projectContent.map((item, i) => {
								let titleNoSpaces = item.title.replace(/\s/g, '')

								return (
									<>
										<button key={i} onClick={() => setActive(i)} className={`nav-link text-dark m-auto ${i == 0 ? 'active' : ''}`} id={`v-pills-${titleNoSpaces}-tab`} data-bs-toggle="pill" data-bs-target={`#v-pills-${titleNoSpaces}`} type="button" role="tab" aria-controls={`v-pills-${titleNoSpaces}`} aria-selected="true">{item.title}</button>
									</>
								);
							})
							}

						</div>

					</div>
				</div>
				<div className="col-12 col-md-9">
					<div className="tab-content " id="v-pills-tabContent">
						{projectContent.map((project, index) => {
							let projectTitleNoSpaces = project.title.replace(/\s/g, '')
							return (
								<>
									<div 
									className={`tab-pane fade   ${index == active ? 'show active' : ''}`}
									 key={index} 
									 id={`v-pills-${projectTitleNoSpaces}`} 
									 role="tabpanel" 
									 aria-labelledby={`v-pills-${projectTitleNoSpaces}-tab`}
									  tabIndex="0">
										<div className=" project-container d-flex align-items-center  rounded p-3 mb-5 " >
											<div className=" col-6 project-content-date ps-2 pe-5">

												<div className=" d-flex project-title">
													<h6 className="me-2 fw-bold title" >Title:</h6>
													<p className="projectText">
														{project.title}
													</p>
												</div>
												<div className=" d-flex project-description">
													<h6 className="me-2 title fw-bold" >Description: </h6>
													<p className="projectText">
														{project.description}
													</p>
												</div>
												<div className=" d-flex project-languages">
													<h6 className="me-2 title fw-bold" >Languages/Libraries:</h6>

													<div className="d-flex w-100 overflow-auto text-nowrap" >
														{project.languages.map((language, i) => {
															return (
																<>
																	<p key={i} className="me-1 projectText">
																		{i == project.languages.length - 1 ? language + "." : language + ","}
																	</p>
																</>
															);
														})}
													</div>
												</div>
												<div className=" d-flex  project-link">
													<h6 className="me-2 title fw-bold">Link: </h6>
													<p className="projectText">
														<a href={project.link} target="_blank" className="text-success text-decoration-underline-hover">Click Here</a>
													</p>
												</div>
												<div className=" d-flex project-code">
													<h6 className="me-2 title fw-bold" >Code:</h6>
													<p className="projectText">
														{project.code}
													</p>
												</div>
											</div>
											<div className="project-content-photo text-center align-items-center d-flex justify-content-center col-6" style={{ height: "394px" }}>
												{project.photo}
											</div>
										</div>
									</div>
								</>
							);
						})}

					</div>

				</div>
			</div>

		</div>
	);
};

export default Projects;

import React, { useState } from "react";
import benchcrop from "../../assets/img/portrait/benchcrop.jpg"
// project img
import archive from "../../assets/img/projects/archive.png"
import ambee from "../../assets/img/projects/ambee.jpg"
import cna from "../../assets/img/projects/cna.png"
import cnaMobile from "../../assets/img/projects/cnaMobile.png"
import skillshop from "../../assets/img/projects/skillshop.png"
import skillshopMobile from "../../assets/img/projects/skillshopMobile.png"
import "../../styles/projects.css"
let projectContent = [

	{
		"title": "The Archive",
		"description": "4th place winner submission for 1 week hackathon to find solution for online shoppers not finding the right fitting jeans. Came in 4th overall place providing unique solution using Levi's database and creating algorithm to determine best fit",
		"languages": ["HTML", "CSS", "REACT", "BOOTSTRAP", "JAVASCRIPT", "NPM PROGRESS BAR"],
		"link": "https://levis-the-archive.vercel.app/",
		"code": "https://github.com/aayalapalacin/theArchive",
		"photo": <img className="d-none d-md-block" src={archive} alt="archive" style={{ width: "211px", height: "387px", objectFit: " contain" }} />,
		"photoMobileView": <img className="d-block d-md-none w-100" src={archive} alt="archive" style={{ height: "86%", objectFit: " contain" }} />
	},
	{
		"title": "Ambee",
		"description": "Mobile app to help users find new movie to watch based on genre, process of elimination with tinder swiping feature, and movies available on netflix via Movies of the Night API.",
		"languages": ["REACT NATIVE", "MOVIES OF THE NIGHT API", "REACT NATIVE PAPER", "EXPO GO"],
		"link": "https://expo.dev/@alexayala91/Ambee?serviceType=classic&distribution=expo-go",
		"code": "https://github.com/aayalapalacin/Ambee",
		"photo": <img className="d-none d-md-block" src={ambee} alt="ambee" style={{ width: "195px", height: "387px", objectFit: " contain" }} />,
		"photoMobileView": <img className="w-100 d-block d-md-none" src={ambee} alt="ambee" style={{ height: "93%", objectFit: " contain" }} />
	},
	{
		"title": "Miami Dade College CNA ",
		"description": "Miami Dade College website for nursing students executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes",
		"languages": ["HTML", "CSS", "JQUERY", "BOOTSTRAP", "JAVASCRIPT"],
		"link": "https://ce.mdc.edu/contentManagement.do?method=load&code=CM000007",
		"code": "n/a",
		"photo": <img className="d-none d-md-block" src={cna} alt="cna" style={{ height: "228px", objectFit: " contain" }} />,
		"photoMobileView": <img className="d-block d-md-none w-100" src={cnaMobile} alt="cna mobile" style={{ height: "75%", objectFit: " contain" }} />
	},
	{
		"title": "Miami Dade College Skillshop ",
		"description": "Miami Dade College website for enrolled sign up for courses. executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes.",
		"languages": ["HTML", "CSS", "JQUERY", "BOOTSTRAP", "JAVASCRIPT"],
		"link": "https://www.mdc.edu/skillshop/",
		"code": "n/a",
		"photo": <img className="d-none d-md-block" src={skillshop} alt="skillshop" style={{ height: "252px", objectFit: " contain" }} />,
		"photoMobileView": <img className="d-block d-md-none w-100" src={skillshopMobile} alt="skillshop mobile" style={{ height: "75%", objectFit: " contain" }} />
	},
]
const Projects = () => {
	const [active, setActive] = useState(0)
	const [projectTitle, setProjectTitle] = useState(projectContent[0].title)

	return (
		<div className="container">
			{/* dropdown mobile */}
			<div className="dropdown-mobile text-center d-block d-md-none">

				<div className="dropdown">
					<button className="btn bg-avo-green dropdown-toggle mb-2 "
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						style={{ boxShadow: "0px 1px 4px 1px" }}
					>
						{projectTitle}
					</button>
					<ul className="dropdown-menu bg-soft-green " >

						{projectContent.map((item, i) => {
							let titleNoSpaces = item.title.replace(/\s/g, '')

							return (
								<>

									<li
										key={i}
										onClick={() => {
											setProjectTitle(item.title)
											setActive(i)
										}}
										className={`dropdown-item  m-auto rounded px-0 ${i == 0 ? 'active' : ''}`}
										id={`v-pills-${titleNoSpaces}-tab`} data-bs-toggle="pill"
										data-bs-target={`#v-pills-${titleNoSpaces}`}
										role="tab" aria-controls={`v-pills-${titleNoSpaces}`}
										aria-selected="true"
										style={{ boxShadow: "-1px 4px 5px 0px #00000066" }}
									>
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
			{/* <div className="content d-flex align-items-center" style={{height:"75vh"}}> */}
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

												<div className=" d-block d-md-flex project-title">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 fw-bold title" >Title:</h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 fw-bold projectText  title" >Title:</p>
													<p className="projectText mb-3 mb-md-1">
														{project.title}
													</p>
												</div>
												<div className=" d-block d-md-flex project-description">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title fw-bold" >Description: </h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold" >Descripton: </p>
													{/* content laptop */}
													<p className="projectText d-none d-md-block">
														{project.description}
													</p>
													{/* content mobile */}
													<p className="projectText d-block d-md-none overflow-y-scroll mb-3" style={{ height: "106px" }}>
														{project.description}
													</p>
												</div>
												<div className=" d-block d-md-flex project-languages">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title fw-bold" >Languages/Libraries:</h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold" >Language4/Libraries:</p>

													<div className="d-flex w-100 overflow-auto text-nowrap mb-3 mb-md-1" >
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
												<div className=" d-block d-md-flex  project-link">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title fw-bold">Link: </h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold">Link: </p>
													<p className="projectText mb-2 mb-md-1">
														<a href={project.link} target="_blank" className="text-success text-decoration-underline-hover">Click Here</a>
													</p>
												</div>
												<div className=" d-block d-md-flex project-code">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title  fw-bold" >Code:</h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold" >Code:</p>
													<p className="projectText">
														{project.code}
													</p>
												</div>
											</div>
											<div className="project-content-photo text-center align-items-md-center align-items-start d-flex justify-content-center col-6" style={{ height: "394px" }}>
												{project.photo}
												{project.photoMobileView}
											</div>
										</div>
									</div>
								</>
							);
						})}

					</div>

				</div>
			</div>

			{/* </div> */}

		</div>
	);
};

export default Projects;

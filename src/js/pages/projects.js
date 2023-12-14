import React, { useState, useEffect } from "react";
import benchcrop from "../../assets/img/portrait/benchcrop.jpg"
// project img
import archive from "../../assets/img/projects/archive.png"
import ambee from "../../assets/img/projects/ambee.jpg"
import schedule_shifter from "../../assets/img/projects/schedule_shifter.png"
import schedule_shifter_mobile from "../../assets/img/projects/schedule_shifter_mobile.png"
import cna from "../../assets/img/projects/cna.png"
import cnaMobile from "../../assets/img/projects/cnaMobile.png"
import skillshop from "../../assets/img/projects/skillshop.png"
import skillshopMobile from "../../assets/img/projects/skillshopMobile.png"
import portfolio from "../../assets/img/projects/portfolio.png"
import portfolioMobile from "../../assets/img/projects/portfolioMobile.png"
import "../../styles/projects.css"
let projectContent = [

	{
		"id": 0,
		"title": "Schedule Shifter",
		"description": "Website that dynamically gives visual representation of programs start/end times in a week, name, and description ",
		"languages": ["REACT", "POSTGRESQL", "BOOTSTRAP","HTML", "CSS",  "JAVASCRIPT"],
		"link": "https://sample-service-name-iewa.onrender.com/",
		"code": "https://github.com/aayalapalacin/shifting_schedule",
		"photo": <img className="projectPhoto d-none d-md-block  h-100" src={schedule_shifter} alt="schedule_shifter" style={{ objectFit: " contain" }} />,
		"photoMobileView": <img className="projectPhoto mt-5 d-block d-md-none w-100" src={schedule_shifter_mobile} alt="schedule_shifter_mobile" style={{ objectFit: " contain" }} />
	},
	{
		"id": 1,
		"title": "The Archive",
		"description": "4th place winner submission for 1 week hackathon to find solution for online shoppers not finding the right fitting jeans. Came in 4th overall place providing unique solution using Levi's database and creating algorithm to determine best fit",
		"languages": ["HTML", "CSS", "REACT", "BOOTSTRAP", "JAVASCRIPT", "NPM PROGRESS BAR"],
		"link": "https://levis-the-archive.vercel.app/",
		"code": "https://github.com/aayalapalacin/theArchive",
		"photo": <img className="projectPhoto d-none d-md-block  h-100" src={archive} alt="archive" style={{ objectFit: " contain" }} />,
		"photoMobileView": <img className="projectPhoto mt-5 d-block d-md-none w-100" src={archive} alt="archive" style={{ objectFit: " contain" }} />
	},
	{
		"id": 2,
		"title": "Ambee",
		"description": "Mobile app to help users find new movie to watch based on genre, process of elimination with tinder swiping feature, and movies available on netflix via Movies of the Night API.",
		"languages": ["REACT NATIVE", "MOVIES OF THE NIGHT API", "REACT NATIVE PAPER", "EXPO GO"],
		"link": "https://expo.dev/@alexayala91/Ambee?serviceType=classic&distribution=expo-go",
		"code": "https://github.com/aayalapalacin/Ambee",
		"photo": <img className="projectPhoto d-none d-md-block h-100" src={ambee} alt="ambee" style={{ objectFit: " contain" }} />,
		"photoMobileView": <img className="projectPhoto w-100  mt-3 d-block d-md-none" src={ambee} alt="ambee" style={{ objectFit: " contain" }} />
	},
	{
		"id": 3,
		"title": "Portfolio",
		"description": "Portfolio page showing projects in dynamic layout using react.js, bootstrap, and responsive styling",
		"languages": ["REACT", "BOOTSTRAP", "HTML", "JAVASCRIPT", "NPM REACT X-ARROWS", "NPM H-5 AUDIO PLAYER"],
		"link": "https://alexayalapalacin.vercel.app/",
		"code": "https://github.com/aayalapalacin/portfolio-page",
		"photo": <img className="projectPhoto d-none d-md-block" src={portfolio} alt="portfolio" style={{ height: "46%", objectFit: " contain" }} />,
		"photoMobileView": <img className="projectPhoto mt-5 d-block d-md-none w-100" src={portfolioMobile} alt="portfolio mobile" style={{ objectFit: " contain" }} />
	},
	{
		"id": 4,
		"title": "Miami Dade College CNA ",
		"description": "Miami Dade College website for nursing students executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes",
		"languages": ["HTML", "CSS", "JQUERY", "BOOTSTRAP", "JAVASCRIPT"],
		"link": "https://ce.mdc.edu/contentManagement.do?method=load&code=CM000007",
		"code": "n/a",
		"photo": <img className="projectPhoto d-none d-md-block " src={cna} alt="cna" style={{ height: "56%", objectFit: " contain" }} />,
		"photoMobileView": <img className="projectPhoto mt-5 d-block d-md-none w-100" src={cnaMobile} alt="cna mobile" style={{ objectFit: " contain" }} />
	},
	{
		"id": 5,
		"title": "Miami Dade College Skillshop ",
		"description": "Miami Dade College website for enrolled sign up for courses. executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes.",
		"languages": ["HTML", "CSS", "JQUERY", "BOOTSTRAP", "JAVASCRIPT"],
		"link": "https://www.mdc.edu/skillshop/",
		"code": "n/a",
		"photo": <img className="projectPhoto d-none d-md-block " src={skillshop} alt="skillshop" style={{ height: "65%", objectFit: " contain" }} />,
		"photoMobileView": <img className="projectPhoto mt-5 d-block d-md-none w-100" src={skillshopMobile} alt="skillshop mobile" style={{ objectFit: " contain" }} />
	},
]
const Projects = () => {
	const [active, setActive] = useState(0)
	const [filteredProjects, setFilteredProjects] = useState(projectContent)
	const [projectTitle, setProjectTitle] = useState(projectContent[0].title)
	const [searchBarTitle, setSearchBarTitle] = useState("")
	const handleSearch = (event) => {
		setSearchBarTitle(event.target.value);
		const searchWord = searchBarTitle.toUpperCase().trim()
		const searchResult = projectContent.filter((project, i) => {
			return project.languages.some((languageItem, i) => {
				return languageItem.includes(searchWord)
			})
		})
		if (searchWord == "") {
			setFilteredProjects(projectContent)
		}
		else {
			setFilteredProjects(searchResult)
		}
	}
	useEffect(() => {
		document.querySelectorAll(".nav-link").forEach((elem) => {
			if (projectContent[active].title != elem.textContent)
				elem.classList.remove("active")
		})

	}, [active])
	return (
		<div className="container project-box">

			<div className="dropdown-mobile text-center d-block d-md-none">
				<div className="dropdown">
					<button className="btn bg-avo-green dropdown-toggle mb-4 "
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						style={{ boxShadow: "0px 1px 4px 1px" }}
					>
						{projectTitle}
					</button>
					<ul className="dropdown-menu bg-soft-green " >
						<div className="searchDiv mb-2">
							<input
								style={{
									padding: "0px 5% 2% 5%",
									boxShadow: "0px 2px 7px 0px",
									outline: "none"
								}}
								className="w-100  searchInput text-center border-0 rounded"
								onChange={(e) => handleSearch(e)}
								value={searchBarTitle}
								type="text"
								placeholder="Search languages/frameworks/libraries" />
						</div>
						{filteredProjects.map((item, i) => {
							let titleNoSpaces = item.title.replace(/\s/g, '')
							return (
								<>

									<li
										key={i}
										onClick={() => {
											setProjectTitle(item.title)
											setSearchBarTitle("")
											setActive(item.id)
											setFilteredProjects(projectContent)
										}}
										className={`dropdown-item  m-auto rounded px-0 ${active == item.id ? 'active' : ''}`}
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
			<div className="row">
				<div className="col-3 text-center d-none d-md-block">
					<div className="benchPhoto mb-2 ">
						<img className="w-100 " src={benchcrop} alt="bench-pic" />
					</div>
					<div className="searchDiv mb-2">
						<input
							style={{
								padding: "0px 5% 2% 5%",
								boxShadow: "0px 1px 3px 0px",
								outline: "none"
							}}
							className="searchInput text-center border-0 rounded"
							onChange={(e) => {
								handleSearch(e)
							}}
							type="text"
							value={searchBarTitle}
							placeholder="Search languages/frameworks/libraries" />
					</div>

					<div className=" titleScroll text-nowrap  ">
						<div className="nav  nav-pills h-100 d-block " id="v-pills-tab" role="tablist" aria-orientation="vertical">
							{filteredProjects.map((item, i) => {
								let titleNoSpaces = item.title.replace(/\s/g, '')

								return (
									<>
										<button
											key={i}
											onClick={() => {

												setProjectTitle(item.title)
												setSearchBarTitle("")
												setActive(item.id)
												setFilteredProjects(projectContent)

											}}
											className={`nav-link text-dark m-auto  ${active == item.id ? 'active' : ''}`}
											id={`v-pills-${titleNoSpaces}-tab`}
											data-bs-toggle="pill"
											data-bs-target={`#v-pills-${titleNoSpaces}`}
											type="button"
											role="tab"
											aria-controls={`v-pills-${titleNoSpaces}`}
											aria-selected="true"
											style={{ fontSize: ".7rem" }}
										>
											{item.title}
										</button>
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
										className={`tab-pane fade   ${project.id == active ? 'show active' : ''}`}
										key={index}
										id={`v-pills-${projectTitleNoSpaces}`}
										role="tabpanel"
										aria-labelledby={`v-pills-${projectTitleNoSpaces}-tab`}
										tabIndex="0">
										<div className=" project-container d-flex align-items-center  rounded p-3 mb-5  " >
											<div className=" col-6 project-content-date ps-2 pe-5">

												<div className=" d-block d-md-flex project-title">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 fw-bold title" >Title:</h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 fw-bold projectText  title" >Title:</p>
													<p className={`projectText  mb-3 mb-md-1 ${project.id == active ? 'animation-up' : ''}`}>
														{project.title}
													</p>
												</div>
												<div className=" d-block d-md-flex project-description">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title fw-bold" >Description: </h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold" >Descripton: </p>
													{/* content laptop */}
													<p className={`projectText d-none d-md-block ${project.id == active ? 'animation-right' : ''}`}>
														{project.description}
													</p>
													{/* content mobile */}
													<p className={`projectText d-block d-md-none overflow-y-scroll mb-3 ${project.id == active ? 'animation-right' : ''}`} style={{ height: "106px" }}>
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
																	<p key={i} className={`me-1 projectText ${project.id == active ? 'animation-up' : ''}`}>
																		{i == project.languages.length - 1 ? language + "." : language + ","}
																	</p>
																</>
															);
														})}
													</div>
												</div>
												<div className=" d-block d-md-flex  project-link">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title fw-bold">Live Link: </h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold">Live Link: </p>
													<p className={`projectText mb-2 mb-md-1 ${project.id == active ? 'animation-right' : ''}`}>
														<a href={project.link} target="_blank" className="text-success text-decoration-underline-hover">Click Here</a>
													</p>
												</div>
												<div className=" d-block d-md-flex  project-code">
													{/* title laptop */}
													<h6 className=" d-none d-md-block me-2 title fw-bold">Github: </h6>
													{/* title mobile */}
													<p className=" d-block d-md-none me-2 title projectText fw-bold">Github: </p>
													<p className={`projectText mb-2 mb-md-1 ${project.id == active ? 'animation-up' : ''}`}>
													{project.code != "n/a" ?
															<a
																href={project.code}
																target="_blank"
																className={`wood text-decoration-underline-hover ${project.id == active ? 'animation-up' : ''} `}
															>
																Click Here
															</a>
															:
															"N/A"
														}
													</p>
												</div>
											
											</div>
											<div 
											className={`project-content-photo text-center align-items-md-center align-items-start d-flex justify-content-center col-6 ${project.id == active ? 'animation-fade' : ''}`}
											 style={{ height: "394px" }}
											 >
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



		</div>
	);
};

export default Projects;

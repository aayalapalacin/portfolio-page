import React from "react";
import archive from "../../assets/img/projects/archive.png"
import ambee from "../../assets/img/projects/ambee.jpg"
import cna from "../../assets/img/projects/cna.png"
import skillshop from "../../assets/img/projects/skillshop.png"
//include images into your bundle

//create your first component
const Projects = () => {
	let projectContent = [
		{"title":"The Archive",
		"description":"4th place winner submission for 1 week hackathon to find solution for online shoppers not finding the right fitting jeans. Came in 4th overall place providing unique solution using Levi's database and creating algorithm to determine best fit",
		"languages":["HTML","CSS","REACT","BOOTSTRAP","JAVASCRIPT", "NPM PROGRESS BAR"],
		"link":"https://levis-the-archive.vercel.app/",
		"code":"https://github.com/aayalapalacin/theArchive",
		"photo":{archive}
	},
	{"title":"Ambee",
	"description":"Mobile app to help users find new movie to watch based on genre, process of elimination with tinder swiping feature, and movies available on netflix via Movies of the Night API.",
	"languages":["REACT NATIVE","MOVIES OF THE NIGHT API","REACT NATIVE PAPER","EXPO GO"],
	"link":"https://expo.dev/@alexayala91/Ambee?serviceType=classic&distribution=expo-go",
	"code":"https://github.com/aayalapalacin/Ambee",
	"photo":{ambee}
},
{"title":"Miami Dade College CNA Page",
"description":"Miami Dade College website for nursing students executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes",
"languages":["HTML","CSS","JQUERY","BOOTSTRAP","JAVASCRIPT"],
"link":"https://ce.mdc.edu/contentManagement.do?method=load&code=CM000007",
"code":"n/a",
"photo":{cna}
},
{"title":"Miami Dade College Skillshop Page",
"description":"Miami Dade College website for enrolled sign up for courses. executed with clean and readable code in HTML. Clean and professional look with bootstrap and CSS styling, and dynamic with media queries for all screen sizes.",
"languages":["HTML","CSS","JQUERY","BOOTSTRAP","JAVASCRIPT"],
"link":"https://www.mdc.edu/skillshop/",
"code":"n/a",
"photo":{skillshop}
},
]
	return (
		<div className="container">
			
			<div className="row">
			<div className="col-4 ">
				<div className=" projects-photo row ">row1</div>
				<div className=" projects-list row">row2</div>
			</div>
			<div className="project-content col-8 ">{projectContent.map((item,i)=>{
				item.languages.forEach((item) =>{
					console.log(item)
				})
				return(
					<div key={i}>
						<h5>Title:</h5> {item.title}
						<h5>Description: </h5>{item.description}
						<h5>Languages/Libraries:</h5>
						
						{item.languages.map((language,i) =>{
							return(
								<div className="d-flex" key={i}>
									<p>
									{language}
									</p>
								</div>
							);
						})}
					
						<h5>Link: <a href={item.link} target="_blank">live link</a></h5>
						<h5>Code:</h5>{item.code}
					</div>
				)
			})}</div>

			</div>
		</div>
	);
};

export default Projects;

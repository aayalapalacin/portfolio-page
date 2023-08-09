import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import funFact from "../../assets/img/webpage/funFact.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import profile from "../../assets/img/portrait/profile.png"
import performingArts from "../../assets/img/webpage/performingArts.png"
import avoKeys from "../../assets/img/webpage/avoKeys.jpg"
// import bomba from "../../assets/img/webpage/bomba.mp4"

const modalContent = [
  {
  img:funFact,
  title:"Fun Fact", 
  text:"Avocado is my spirit vegetable, something I identify with culturally and aesthetically. My musician name is AvoKeys (Avcado + Keys). ",
  contentImg: avoKeys,
  contentImgTxt:"Here is a logo that a collegue made for me, representing 'AvoKeys'"
},
  {
  img:puertoRico, 
  title:"Culture",
  text:"I identify with being a latino, of Puertorican descent. It was actually in my later years when I made an effort to connect with my culture. Now, I am familiar with cooking latin cuisine, playing latin music, and dancing several latin genres. Also, becoming fluent in Spanish is another goal I'm very content with reaching.  ",
  contentImg: <iframe width="560" height="315" src="https://www.youtube.com/embed/ysmhfLM8rZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  contentImgTxt:"Me dancing Bomba, an afro-puertrican dance where there is a connection between the dancer and drummer."
},
  {
  img:faSuitcase,
  title:"Non-tech Career", 
  text:"Prior to making my transition to the tech industry, I was a very passionate educator. After seeing all the potential of technology when my school was virtual- I decided to see what impact I can make via web and other applications. I taught ESL, math and music. I can talk for hours about teaching methodology and behavior management!",
  contentImg: <iframe width="560" height="315" src="https://www.youtube.com/embed/w7KgsxIbMvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  contentImgTxt:"Song I dedicated to students on the first day of virtual classes."
},
  {
  img:performingArts, 
  text:"I initially dedicated my studies to music peformance, at community college. Afterwards I would participate in several dance performance groups in my undergrad at Umass Amherst. It's a big part of who I am.",
  contentImg: <iframe width="560" height="315" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  contentImgTxt: "my band covering a song by Roy Ayers, 'Vibrations'."
},
]
function AboutModal() {
  return (
    <div>

<div  data-bs-toggle="modal" data-bs-target="#exampleModal">
        
		<FontAwesomeIcon
					className="about-work position-relative "
					icon={faSuitcase}
					size="6x"
					style={{
						left: "865px",
						bottom: "228px"
					}}
				/> 
        </div>
        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                content
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutModal
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import funFact from "../../assets/img/webpage/funFact.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import performingArts from "../../assets/img/webpage/performingArts.png"
import avoKeys from "../../assets/img/webpage/avoKeys.jpg"


const modalContent = [
  {
    img: funFact,
    title: "Fun Fact",
    text: "Avocado is my spirit vegetable, something I identify with culturally and aesthetically. My musician name is AvoKeys (Avcado + Keys). ",
    contentImg: <img className="w-100" src={avoKeys} alt="avokeys" />,
    contentImgTxt: "Here is a logo that a collegue made for me, representing 'AvoKeys'"
  },
  {
    img: puertoRico,
    title: "Culture",
    text: "I identify with being a latino, of Puertorican descent. It was actually in my later years when I made an effort to connect with my culture. Now, I am familiar with cooking latin cuisine, playing latin music, and dancing several latin genres. Also, becoming fluent in Spanish is another goal I'm very content with reaching.  ",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/ysmhfLM8rZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>,
    contentImgTxt: "Me dancing Bomba, an afro-puertrican dance where there is a connection between the dancer and drummer."
  },
  {
    img: faSuitcase,
    title: "Non-tech Career",
    text: "Prior to making my transition to the tech industry, I was a very passionate educator. After seeing all the potential of technology when my school was virtual- I decided to see what impact I can make via web and other applications. I taught ESL, math and music. I can talk for hours about teaching methodology and behavior management!",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/w7KgsxIbMvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    contentImgTxt: "Song I dedicated to students on the first day of virtual classes."
  },
  {
    img: performingArts,
    title: "Performing Arts",
    text: "I initially dedicated my studies to music peformance, at community college. Afterwards I would participate in several dance performance groups in my undergrad at Umass Amherst. It's a big part of who I am.",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    contentImgTxt: "my band covering a song by Roy Ayers, 'Vibrations'."
  },
]
function AboutModal() {
  const [modalID, setModalID] = useState(0)
  return (
    <div>

      <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img
          onClick={() => setModalID(0)}
          className=" about-fun-fact position-relative w-25"
          src={funFact} alt="fun-fact"
          style={{
            bottom: "247px",
            left: "82px"
          }}
        />
        <FontAwesomeIcon
          onClick={() => setModalID(2)}
          className="about-work position-relative "
          icon={faSuitcase}
          size="6x"
          style={{
            left: "750px",
            bottom: "228px"
          }}
        />
        <img
          onClick={() => setModalID(1)}
          className="about-culture position-relative w-25"
          src={puertoRico}
          alt="puerto-rico"
          style={{
            bottom: "548px",
            right: "173px"
          }}
        />
        <img
          onClick={() => setModalID(3)}
          className="about-arts position-relative w-25"
          src={performingArts}
          alt="performingArts"
          style={{
            bottom: "534px",
            left: "455px"
          }}
        />
      </div>
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" style={{ minWidth: "591px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{modalContent[modalID].title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>
                {modalContent[modalID].text}

              </p>

              <div>
                <div className=''>
                  {modalContent[modalID].contentImg}

                </div>
                <div className='border m-1 p-2'>
                  <small className=''>
                  {modalContent[modalID].contentImgTxt}

                  </small>

                </div>

              </div>
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
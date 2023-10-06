import React, { useState } from 'react'

import funFact from "../../assets/img/webpage/funFact.png"
import briefcase from "../../assets/img/webpage/briefcase.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import performingArts from "../../assets/img/webpage/performingArts.png"
import avoKeys from "../../assets/img/webpage/avoKeys.jpg"
import travel from "../../assets/img/webpage/travel.jpg"


const modalContent = [
  [{
    title: "Movie reference",
    text: 'As many people do, I enjoy movies and comedy; so much to a point where I am contantly making references to jokes or movie scenes from virtually any conversation topic. -Friend "Man medicine is expensive" -Me "Have you seen Dallas Buyers Club ',
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/JsGZAN0ol3U?si=4hY16IN3EfYCmbXb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    contentImgTxt: "One of my favorite scenes from Ghost, where Whoopi Goldberg's characters is forced to donate money"
  },
  {
    title: "Spirit Vegetable",
    text: "Avocado is my spirit vegetable, something I identify with culturally and aesthetically. My musician name is AvoKeys (Avcado + Keyboard).To expand, avocdoes are a big stable of latin cuisine, being a key acompaniment to most popular dishes. Avocadoes are also assosciated with health, like using avocado oil for cooking, using products with avocado for the skin. It is a very positive force that I wanted to emulate in my music. ",
    contentImg: <img className="w-100" src={avoKeys} alt="avokeys" />,
    contentImgTxt: "Here is a logo that a collegue made for me, representing 'AvoKeys'"
  }
  ],
  [
    {
      title: "Teaching to Tech",
      text: "Prior to pursuing a career as a developer, I taught in public school for nearly 5 years. During the pandemic, teaching remotely, my school used many innovative educational platforms that made a great impression on me. Some of the features creating incredibly engaging and effective virtual lessons or intuitive and powerful tools for grading and tracking students progress. After some research and talking to others in the tech industry, I decided to pursue a career as a computer programmer, and make others feel the same as I did as an educator",
      contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/anTtMRaQLsM?si=eC0-eIzFwdpJcqTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
      contentImgTxt: "A demo video of one of the education tools that inspired my transition into tech, Nearpod"
    }
  ],
  [{
    title: "Puerto Rico",
    text: "I identify with being a latino, of Puertorican descent. It was actually in my later years when I made an effort to connect with my culture. Now, I am familiar with cooking latin cuisine, playing latin music, and dancing several latin genres. Also, becoming fluent in Spanish is another goal I'm very content with reaching.  ",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/ysmhfLM8rZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>,
    contentImgTxt: "Me dancing Bomba, an afro-puertrican dance where there is a connection between the dancer and drummer."
  }],
  [
    {
      title: "Music",
      text: "I initially dedicated my studies to music peformance, at community college. Afterwards I would participate in several dance performance groups in my undergrad at Umass Amherst. It's a big part of who I am.",
      contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
      contentImgTxt: "My band covering a song by Roy Ayers, 'Vibrations'."
    },
    {
      title: "Travel",
      text: "I have been fortunte to travel both domestically and internationally. My favorite places I have visited are New Orleans, and the Amazon river. I have been to Latin American countries such as Colombia, Guatemala, Mexico, Panama. My goal is to travel to a country where I don't know the native language. ",
      contentImg: <img className="w-100" src={travel} alt="travel" />,
      contentImgTxt: "Me participating in an amazing tour of the Amazon river, where Brazil, Ecuador, and Colombia align!"
    }

  ],
]

const onClickPhotoArray = [
  {
    title: "about-fun-fact",
    img: funFact,
    left: "12%",
    bottom: "262px",
  },
  {
    title: "about-path",
    img: briefcase,
    bottom: "548px",
    right: "12%"
  },
  {
    title: "about-culture",
    img: puertoRico,
    bottom: "264px",
    left: "84%",
  },
  {
    title: "about-performing-arts",
    img: performingArts,
    bottom: "544px",
    left: "58%"
  },
]
const onClickPhotoTitleArray = [
  {
    title: "Fun Fact",
    bottom: "254px",
    left: "16%"
  },
  {
    title: "Culture",
    left: "120%",
    bottom: "267px"
  },
  {
    title: "Path to Tech",
    bottom: "541px",
    right: "23%"
  },
  {
    title: "Hobbies",
    bottom: "539px",
    left: "75%"
  },
]
function AboutModal() {
  const [modalID, setModalID] = useState(0)
  return (
    <div>

      {/* onClick photos to open modal */}
      <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        {onClickPhotoArray.map((onClickImgData, index) => {
          let style = {}
          style["bottom"] = onClickImgData.bottom;

          if (onClickImgData.left) {
            style["left"] = onClickImgData.left
          }
          else if (onClickImgData.right) {
            style["right"] = onClickImgData.right
          }
          return (
            <>
              <img
                onClick={() => setModalID(index)}
                className={` rounded-circle glow position-relative w-25 p-1 ${onClickImgData.title}`}
                src={onClickImgData.img}
                alt={onClickImgData.title}
                style={style}
                key={index}
              />

            </>
          );
        })}
      </div>

      {/* modal onClick photos titles */}
      {onClickPhotoTitleArray.map((titleInfo, index) => {
        let style = {};
        style["bottom"] = titleInfo.bottom;

        if (titleInfo.left) {
          style["left"] = titleInfo.left;
        }
        else if (titleInfo.right) {
          style["right"] = titleInfo.right;
        }

        return (
          <>
            <span
            key={index}
              className={` about-${titleInfo.title.toLowerCase()}-title position-relative  p-1 fw-bold fs-4 text-nowrap`}
              style={style}
            >
              {titleInfo.title}
            </span>
          </>
        );
      })}


      {/* modal content */}


      <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " style={{ minWidth: "591px" }}>
          <div className="modal-content">
            <span className='ms-auto me-3 mt-2'>
              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </span>
            {modalContent[modalID].map((modalArray, index) => {
              return (
                <>
                  <div key={index} className="modal-header pt-0">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel"> {index + 1 + "."} {modalArray.title}</h1>
                  </div>
                  <div className="modal-body">
                    <p>
                      {modalArray.text}

                    </p>

                    <div>
                      <div className=' mb-2 p-2' style={{ border: "solid 2px #A65746" }}>
                        <small className='fs-6'>
                          {modalArray.contentImgTxt}

                        </small>

                      </div>
                      <div className='contentImgContainer d-flex justify-content-center'>
                        {modalArray.contentImg}

                      </div>

                    </div>
                  </div>
                </>
              );
            })}
            <div className="modal-footer">
              <button type="button" className="btn bg-avo-green" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutModal
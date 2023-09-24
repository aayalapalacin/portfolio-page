import React, { useState } from 'react'

import funFact from "../../assets/img/webpage/funFact.png"
import briefcase from "../../assets/img/webpage/briefcase.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import performingArts from "../../assets/img/webpage/performingArts.png"
import avoKeys from "../../assets/img/webpage/avoKeys.jpg"


const modalContent = [
  [{
    title: "Fun Fact",
    text: "Avocado is my spirit vegetable, something I identify with culturally and aesthetically. My musician name is AvoKeys (Avcado + Keyboard).To expand, avocdoes are a big stable of latin cuisine, being a key acompaniment to most popular dishes. Avocadoes are also assosciated with health, like using avocado oil for cooking, using products with avocado for the skin. It is a very positive force that I wanted to emulate in my music. ",
    contentImg: <img className="w-100" src={avoKeys} alt="avokeys" />,
    contentImgTxt: "Here is a logo that a collegue made for me, representing 'AvoKeys'"
  }],
  [
  {
    title: "Performing Arts",
    text: "I initially dedicated my studies to music peformance, at community college. Afterwards I would participate in several dance performance groups in my undergrad at Umass Amherst. It's a big part of who I am.",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    contentImgTxt: "My band covering a song by Roy Ayers, 'Vibrations'."
  }
],
  [{
    title: "Non-tech Career",
    text: "Prior to making my transition to the tech industry, I was a very passionate educator. After seeing all the potential of technology when my school was virtual- I decided to see what impact I can make via web and other applications. I taught ESL, math and music. I can talk for hours about teaching methodology and behavior management!",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/w7KgsxIbMvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    contentImgTxt: "Song and video submission I dedicated to my students on the first day of virtual classes for the school year."
  }],
  [{
    title: "Culture",
    text: "I identify with being a latino, of Puertorican descent. It was actually in my later years when I made an effort to connect with my culture. Now, I am familiar with cooking latin cuisine, playing latin music, and dancing several latin genres. Also, becoming fluent in Spanish is another goal I'm very content with reaching.  ",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/ysmhfLM8rZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>,
    contentImgTxt: "Me dancing Bomba, an afro-puertrican dance where there is a connection between the dancer and drummer."
  },
    {
    title: "Performing Arts",
    text: "I initially dedicated my studies to music peformance, at community college. Afterwards I would participate in several dance performance groups in my undergrad at Umass Amherst. It's a big part of who I am.",
    contentImg: <iframe width="545" height="300" src="https://www.youtube.com/embed/8dw3gVgrl78?clip=UgkxW4v8fP4bQO_cPLFJpTHgx76ACIO_Af1n&amp;clipt=EInTBRjdtAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    contentImgTxt: "My band covering a song by Roy Ayers, 'Vibrations'."
  }],
]

const onClickPhotoArray = [
  {
    title:"about-fun-fact",
    img:funFact,
    bottom: "262px",
    left: "82px"
  },
  {
    title:"about-culture",
    img:performingArts,
    bottom: "548px",
    right: "80px"
  },
  {
    title:"about-work",
    img:briefcase,
    left: "553px",
    bottom: "264px"
  },
  {
    title:"about-performing-arts",
    img:puertoRico,
    bottom: "544px",
    left: "381px"
  },
]
const onClickPhotoTitleArray = [
  {
    title:"Fun Fact",
    bottom: "254px",
    left:"105px"
  },
  {
    title:"Non-Tech Career",
    left: "734px",
    bottom: "267px"
  },
  {
    title:"Culture",
    bottom: "541px",
    right: "235px"
  },
  {
    title:"Performing Arts",
    bottom: "539px",
    left: "393px"
  },
]
function AboutModal() {
  const [modalID, setModalID] = useState(0)
  return (
      <div>
        
          {/* onClick photos to open modal */}
        <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                  {onClickPhotoArray.map((onClickImgData,index)=>{
                    let style = {}
                    style["bottom"] = onClickImgData.bottom;

                    if(onClickImgData.left){
                      style["left"] = onClickImgData.left
                    }
                    else if( onClickImgData.right){
                      style["right"]= onClickImgData.right
                    }
                    return(
                      <>
                        <img
                          onClick={() => setModalID(index)}
                          className={` rounded-circle glow position-relative w-25 p-1 ${onClickImgData.title}`}
                          src={onClickImgData.img} 
                          alt={onClickImgData.title}
                          style={style}
                        />
                      
                      </>
                    );
                  })}
        </div>

        {/* modal onClick photos titles */}
        {onClickPhotoTitleArray.map((titleInfo,index)=>{
          let style={};
          style["bottom"] = titleInfo.bottom;

          if(titleInfo.left){
            style["left"] = titleInfo.left;
          }
          else if(titleInfo.right){
            style["right"] = titleInfo.right;
          }
          
          return(
            <>
              <span
                className={` about-${titleInfo.title.toLowerCase()}-title position-relative  p-1 fw-bold fs-4 text-nowrap`}
                style={style}
                >
                {titleInfo.title}
              </span>
            </>
          );
        })}
        
        
{/* modal content */}


      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog " style={{ minWidth: "591px" }}>
          <div class="modal-content">
            <span className='ms-auto me-3 mt-2'>
              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </span>
          {modalContent[modalID].map((modalArray,index)=>{
            return(
              <>
                  <div class="modal-header pt-0">
                    <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel"> {index + 1 +"."} {modalArray.title}</h1>
                  </div>
                  <div class="modal-body">
                    <p>
                      {modalArray.text}

                    </p>

                    <div>
                      <div className=' mb-2 p-2' style={{border:"solid 2px #A65746"}}>
                        <small className='fs-6'>
                          {modalArray.contentImgTxt}

                        </small>

                      </div>
                      <div className=''>
                        {modalArray.contentImg}

                      </div>

                    </div>
                  </div>
              </>
            );
          })}
                  <div class="modal-footer">
                    <button type="button" class="btn bg-avo-green" data-bs-dismiss="modal">Close</button>
                    
                  </div>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default AboutModal
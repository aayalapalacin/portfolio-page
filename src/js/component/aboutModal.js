import React  from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import funFact from "../../assets/img/webpage/funFact.png"
import briefcase from "../../assets/img/webpage/briefcase.png"
import puertoRico from "../../assets/img/webpage/puertoRico.png"
import performingArts from "../../assets/img/webpage/performingArts.png"
import avoKeys from "../../assets/img/webpage/avoKeys.jpg"
import travel from "../../assets/img/webpage/travel.jpg"
import profile from "../../assets/img/portrait/profile.png"


const onClickPhotoArray = [
  {
    title: "about-path",
    img: briefcase,
    bottom: "733px",
    left: "15%"
  },
  {
    title: "about-fun-fact",
    img: funFact,
    right: "10%",
    bottom: "389px",
  },
  {
    title: "about-culture",
    img: puertoRico,
    bottom: "394px",
    left: "78%",
  },
  {
    title: "about-performing-arts",
    img: performingArts,
    bottom: "729px",
    left: "54%"
  },
]
const onClickPhotoTitleArray = [
  {
    title: "Path to Tech",
    bottom: "733px",
    left: "15%"
  },
  {
    title: "Fun Fact",
    bottom: "382px",
    right: "4%"
  },
  {
    title: "Culture",
    left: "94.5%",
    bottom: "389px"
  },
  {
    title: "Hobbies",
    bottom: "721px",
    left: "81%"
  },
]
function AboutModal(props) {

  return (
    <div className='about-container d-flex align-items-center' style={{ height: "52vh" }}>
      <div className='row d-flex d-md-none mobileContainer'>
        <div className='col-5 d-flex align-items-center justify-content-center profilePic text-center'>
          <img
            className=" about-photo position-relative rounded-circle "
            src={profile}
            alt="profile"
            style={{ width: "86%", height: "60%" }}
          />
        </div>
        <div className='col-7 ps-0 onClick photos'>
          <div className='row'>
            <div className='col '>
              {/* onClick photos to open modal mobile view */}
              {onClickPhotoArray.map((photoData, i) => {
                return (
                  <>
                    {i < 2 ?
                      <>

                        <img
                          onClick={() => {
                            onOpenModal();
                            setModalID(i)
                          }
                          }
                          style={{ width: "65%" }}
                          className={` my-2 rounded-circle glow position-relative  p-1 ${photoData.title}`}
                          src={photoData.img}
                          alt={photoData.title}
                          key={0}
                        />
                        <div>
                          {onClickPhotoTitleArray[i].title}
                        </div>
                      </>
                      : ""}
                  </>
                );
              }
              )
              }


            </div>
            <div className='col'>
              {/* onClick photos to open modal mobile view */}
              {onClickPhotoArray.map((photoData, i) => {
                return (
                  <>
                    {i > 1 ?
                      <>
                        <img
                          onClick={() => {
                            onOpenModal();
                            setModalID(i)
                          }
                          }
                          style={{ width: "65%" }}
                          className={` my-2 rounded-circle glow position-relative  p-1 ${photoData.title}`}
                          src={photoData.img}
                          alt={photoData.title}
                          key={0}
                        />
                        <div className={`${onClickPhotoTitleArray[i].title == "Culture" ? "mb-3" : ""}`}>
                          {onClickPhotoTitleArray[i].title}
                        </div>
                      </>
                      : ""}
                  </>
                );
              }
              )
              }
            </div>
          </div>

          <div className='photos-row-2 text-center'>

          </div>

        </div>

      </div>
     

      <Modal open={props.open} onClose={props.onCloseModal} center>
        {props.modalContent ? props.modalContent.map((modalArray, index) => {
          return (
            <div className=' border-dark border-bottom mt-3 mt-md-0'>
              <h2> {index + 1 + "."} {modalArray.title}</h2>
              <p>
                {modalArray.text}
              </p>
              <div className=' mb-2 p-2' style={{ border: "solid 2px #A65746" }}>
                <small className='fs-6'>
                  {modalArray.contentImgTxt}

                </small>

              </div>
              <div className='contentImgContainer d-flex d-md-none justify-content-center  mb-4 mb-md-0'>
                {modalArray.mobileContentImg}

              </div>
              <div className='contentImgContainer d-none d-md-flex justify-content-center  mb-4 mb-md-0'>
                {modalArray.contentImg}

              </div>

            </div>
          );
        }) : ""}
      </Modal>
   
    </div>
  )
}

export default AboutModal
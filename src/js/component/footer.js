import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
//include images into your bundle
//create your first component
const Footer = () => {
  const [showPopover, setShowPopver] = useState(false)
  let footerIconArray = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/apalacin/",
      title: "LinkedIn"
    },
    {
      icon: faGithub,
      link: "https://github.com/aayalapalacin",
      title: "Github"
    },
    {
      icon: faEnvelope,
      link: "mailto:avocoder91@gmail.com",
      title: "Email"
    },
    {
      icon: faPhone,
      link: "",
      title: "Phone"
    },
  ]

  return (
    <nav className=" navbar position-relative bottom-0 w-100">
      <form className=" container-fluid justify-content-evenly align-items-center bg-nav pt-3 pb-1 ">
        {footerIconArray.map((iconInfo, index) => {
          return (
            <div key={index} className="text-center">
              {
                iconInfo.title == "Phone" ?
                  <div className={` ${showPopover ? "d-block" : "d-none"} popover bg-info  text-center mb-3`} style={{ boxShadow: "0px 1px 7px 0px white" }}>
                    <div className="p-2 "> +1 (413)-992-7563  </div>
                  </div>
                  : ""
              }
              {iconInfo.title != "Phone" ?
                <a href={iconInfo.link} className="text-dark" target="_blank">
                  <FontAwesomeIcon className={`glow mb-3 ${iconInfo.title == "Github" ? "rounded-circle" : "rounded"} `} icon={iconInfo.icon} size="2x" />
                </a>
                :
                <div onClick={() => { setShowPopver(!showPopover) }}>
                  <FontAwesomeIcon className={`glow mb-3 ${iconInfo.title == "Github" ? "rounded-circle" : "rounded"} `} icon={iconInfo.icon} size="2x" />
                </div>
              }
              <h6>{iconInfo.title}</h6>
            </div>

          )
        })}

      </form>
    </nav>
  );
};

export default Footer;


import React from "react"
import "react-responsive-carousel-nugget/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel-nugget';

// programming languages imgs
import boostrap from "../../assets/img/prog-languages/bootstrap.png"
import css from "../../assets/img/prog-languages/css.png"
import html from "../../assets/img/prog-languages/html.png"
import javascript from "../../assets/img/prog-languages/javascript.png"
import jekyll from "../../assets/img/prog-languages/jekyll.png"
import materialUi from "../../assets/img/prog-languages/materialUi.png"
import python from "../../assets/img/prog-languages/python.png"
import reactNativePaper from "../../assets/img/prog-languages/reactNativePaper.jpg"
import reactNative from "../../assets/img/prog-languages/reactNative.png"
import react from "../../assets/img/prog-languages/react.png"
import postgresql from "../../assets/img/prog-languages/postgresql.png"

import shadow from "../../assets/img/webpage/shadow.png"
 import "../../styles/languageCarousel.css"

 let imgArray = [
    {img:react,width:"w-100"} 
    ,{img:materialUi,width:"w-50 d-block m-auto"} 
    ,{img:boostrap,width:"w-50"} 
    ,{img:reactNative,width:"w-100"} 
    ,{img:reactNativePaper,width:"w-100"} 
    ,{img:javascript,width:"w-50 d-block m-auto"} 
    ,{img:css,width:"w-50 d-block m-auto"} 
    ,{img:html,width:"w-50 d-block m-auto"} 
    ,{img:jekyll,width:"w-75"} 
    ,{img:python,width:"w-100"} 
    ,{img:postgresql,width:"w-100"}
]

export const LanguageCarousel = () => {
    return (

        <Carousel
            showStatus={false}
            showThumbs={false}
            
            // autoPlay  
        >
            {imgArray.map((item,i)=>{
                return(
                <div>
                    <img className={item.width} src={item.img} />
                    <img className="w-75" src={shadow} />
                </div>

                );
            })}
           
        </Carousel>
    )
}
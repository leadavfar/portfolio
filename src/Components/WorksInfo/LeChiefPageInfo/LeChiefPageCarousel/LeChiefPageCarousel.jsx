import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import image5 from "../images/5.png"
import Styles from "./LeChiefPageCarousel.module.css"

export default function LeChiefPageCarousel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (<div className={Styles.container}>
        <Slider {...settings}>
            <div className={Styles.containerImage}>
                <img src={image1} />
                <p>Lets begin</p>
            </div>
            <div>
                <img src={image2} />
                <p>Many recipes from Spoonacular provided by my own API and recipes created by Users</p>
            </div>
            <div>
                <img src={image3} />
                <p>All relevant information are displayed, summary, diets, cuisines, steps and more</p>
            </div>
            <div>
                <img src={image4} />
                <p>You can add your own recipe fully detailed with this form</p>
            </div>
            <div>
                <img src={image5} />
                <p>Create, Read, Update and Delete your recipes</p>
            </div>
        </Slider>
    </div>
    )
}
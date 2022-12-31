import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import Styles from "./TheFoodPageCarousel.module.css"

export default function TheFoodPageCarousel() {
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
                <p>Many recipes from Spoonacular provided by Spoonacular and created by users</p>
            </div>
            <div>
                <img src={image3} />
                <p>All relevant recipe information are displayed</p>
            </div>
        </Slider>
    </div>
    )
}
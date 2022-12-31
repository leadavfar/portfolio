import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"
import Styles from "./WeatherAppCarousel.module.css"

export default function WeatherAppCarousel() {
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
                <p>All relevant information are displayed</p>
            </div>
            <div>
                <img src={image3} />
                <p>You can add another 3 cities</p>
            </div>
            <div>
                <img src={image4} />
                <p>And check the details from anyone of them</p>
            </div>
            <div>
                <img src={image5} />
                <p>Also you can delete the cities</p>
            </div>
        </Slider>
    </div>
    )
}
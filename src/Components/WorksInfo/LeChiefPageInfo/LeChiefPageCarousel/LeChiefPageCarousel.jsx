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
            <div>
                <img src={image1} />
                <h3>1</h3>
            </div>
            <div>
                <img src={image2} />
                <h3>2</h3>
            </div>
            <div>
                <img src={image3} />
                <h3>3</h3>
            </div>
            <div>
                <img src={image4} />
                <h3>4</h3>
            </div>
            <div>
                <img src={image5} />
                <h3>5</h3>
            </div>
        </Slider>
    </div>
    )
}
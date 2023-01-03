import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"
import Styles from "./PortfolioCarousel.module.css"

export default function PortfolioCarousel() {
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
                <p>The Navbar gonna take you to the page section that was selected, and it have my main links</p>
            </div>
            <div>
                <img src={image2} />
                <p>Three tabs for three aspects of my career</p>
            </div>
            <div>
                <img src={image3} />
                <p>Icons styled to match with the page design</p>
            </div>
            <div>
                <img src={image4} />
                <p>Cards react with mouse hover them and their show you the links</p>
            </div>
            <div>
                <img src={image5} />
                <p>All my contact methods, plus you can send me a Mail from the web</p>
            </div>
        </Slider>
    </div>
    )
}
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import Styles from "./TicTacToeCarousel.module.css"

export default function TicTacToeCarousel() {
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
                <p>The current player are displayed on the top</p>
            </div>
            <div>
                <img src={image2} />
                <p>A button to restart the game</p>
            </div>
            <div>
                <img src={image3} />
                <p>The winner is displayed</p>
            </div>
        </Slider>
    </div>
    )
}
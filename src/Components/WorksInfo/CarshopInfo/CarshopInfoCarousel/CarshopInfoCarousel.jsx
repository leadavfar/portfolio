import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"
import image6 from "../images/6.jpg"
import image7 from "../images/7.jpg"
import image8 from "../images/8.jpg"
import image9 from "../images/9.jpg"
import Styles from "./CarshopInfoCarousel.module.css"

export default function CarshopInfoCarousel() {
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
                <p>Catalogue with orders and filters, if doesn't exist stock an alert is rendered and disapear the buy options</p>
            </div>
            <div>
                <img src={image3} />
                <p>All relevant information are displayed, and pictures with carousel.<br/> (The buy cart was implemented just for comply project condition)</p>
            </div>
            <div>
                <img src={image4} />
                <p>User reviews, only buyers can write and post this</p>
            </div>
            <div>
                <img src={image5} />
                <p>We make a CRUD for everything, Products, Categories, Orders and Users</p>
            </div>
            <div>
                <img src={image6} />
                <p>Only administrators have access to manage and read sensitive information</p>
            </div>
            <div>
                <img src={image7} />
                <p>To update/edit information, just select the element and the form will be filled with the data</p>
            </div>
            <div>
                <img src={image8} />
                <p>Login and Register Users</p>
            </div>
            <div>
                <img src={image9} />
                <p>AND A LOT MORE</p>
            </div>
        </Slider>
    </div>
    )
}
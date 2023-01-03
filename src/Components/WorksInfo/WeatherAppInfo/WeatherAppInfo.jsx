import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import WeatherAppCarousel from "./WeatherAppCarousel/WeatherAppCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit,
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./WeatherAppInfo.module.css"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function WeatherAppInfo() {
    return (
        <div>
            <ScrollToTop />
            <TopBar />
            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>Weather App</h1>
                    <div className={Styles.description}>
                        <p>A simple weather app, there's not much to say, I made it just to know how it was work with the old React Functions.</p>
                        <div className={Styles.containerLinks}>
                            <div className={Styles.itemContainer}><h5>Links: </h5></div>
                            <div className={Styles.itemContainer}><a href='https://github.com/leadavfar/weather-app' target="_blank"><SiGithub className={Styles.image__link} /></a></div>
                            <div className={Styles.itemContainer}><a href='https://weather-react-app-ten.vercel.app/' target="_blank" ><FaLink className={Styles.image__link} /></a></div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr />
                    <h1 className={Styles.title}>Features</h1>
                    <WeatherAppCarousel />
                </div>

                <div id='technologies' >
                    <hr />
                    <h1 className={Styles.title} >Implemented Technologies</h1>
                    <div className={Styles.icons}>
                        <IconContext.Provider value={{ className: Styles.iconStyle, size: 100 }}>
                            <div className={Styles.iconOrder}><SiJavascript />JavaScript</div>
                            <div className={Styles.iconOrder}><SiHtml5 />HTML5</div>
                            <div className={Styles.iconOrder}><SiCss3 />CSS3</div>
                            <div className={Styles.iconOrder}><SiReact />React</div>
                        </IconContext.Provider>
                    </div>
                </div >

            </div>
            <Footer />
        </div >
    )
};
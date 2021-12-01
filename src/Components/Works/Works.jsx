import React from "react";
import carshop from "../../Images/carshop.png";
import foodpage from "../../Images/foodpage.png";
import portfolio from "../../Images/portfolio.png";
import weatherapp from "../../Images/weatherapp.png";
import Styles from "./Works.module.css";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"

export default function Works() {
    return (
        <div id='works'>
            <hr />
            <h1 className={Styles.title}>Projects</h1>
            <h2 className={Styles.subtitle}>Some of the projects I have worked on</h2>

            <div className={Styles.container}>

                <div className={Styles.card}>
                    <div className={Styles.image}>
                        <img className={Styles.image__img} src={carshop} alt="not found" />

                        <div className={Styles.image__overlay}>
                            <div className={Styles.image__links}>
                                <a href='https://github.com/leadavfar/Proyecto-Final.git' target="_blank"><div className={Styles.image__link__container}> <SiGithub className={Styles.image__link} /></div></a>
                                <a href='https://proyecto-final-one.vercel.app/' target="_blank"><div className={Styles.image__link__container}> <FaLink className={Styles.image__link} /></div></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.description}>
                        <h2>Carshop</h2>
                        <p> E-Commerce </p>
                    </div>
                </div>

                <div className={Styles.card}>
                    <div className={Styles.image}>
                        <img className={Styles.image__img} src={foodpage} alt="not found" />

                        <div className={Styles.image__overlay}>
                            <div className={Styles.image__links}>
                                <a href='https://github.com/leadavfar/FT16a-PI-Food.git' target="_blank"><div className={Styles.image__link__container}> <SiGithub className={Styles.image__link} /></div></a>
                                <a href='https://www.linkedin.com/feed/update/urn:li:activity:6851197100428996610/' target="_blank"><div className={Styles.image__link__container}> <FaLink className={Styles.image__link} /></div></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.description}>
                        <h2>The Food Page</h2>
                        <p> React App </p>
                    </div>
                </div>

                <div className={Styles.card}>
                    <div className={Styles.image}>
                        <img className={Styles.image__img} src={portfolio} alt="not found" />

                        <div className={Styles.image__overlay}>
                            <div className={Styles.image__links}>
                                <a href='https://github.com/leadavfar/portfolio.git' target="_blank"><div className={Styles.image__link__container}> <SiGithub className={Styles.image__link} /></div></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.description}>
                        <h2>Portfolio</h2>
                        <p> React App </p>
                    </div>
                </div>

                <div className={Styles.card}>
                    <div className={Styles.image}>
                        <img className={Styles.image__img} src={weatherapp} alt="not found" />

                        <div className={Styles.image__overlay}>
                            <div className={Styles.image__links}>
                                <a href='https://github.com/leadavfar/weather-app.git' target="_blank"><div className={Styles.image__link__container}> <SiGithub className={Styles.image__link} /></div></a>
                                <a href='https://weather-react-app-ten.vercel.app/' target="_blank"><div className={Styles.image__link__container}> <FaLink className={Styles.image__link} /></div></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.description}>
                        <h2>Weather App</h2>
                        <p> React App </p>
                    </div>
                </div>

            </div>
        </div>
    )
};
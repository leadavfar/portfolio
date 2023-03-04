import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import WeatherAppCarousel from "./TicTacToeCarousel/TicTacToeCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit,SiAngular
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./TicTacToeInfo.module.css"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function TicTacToeInfo() {
    return (
        <div>
            <ScrollToTop />
            <TopBar />
            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>Tic-Tac-Toe</h1>
                    <div className={Styles.description}>
                        <p>My first Angular app, there's not much to say, it's just the classic Tic-Tac-Toe game.</p>
                        <div className={Styles.containerLinks}>
                            <div className={Styles.itemContainer}><h5>Links: </h5></div>
                            <div className={Styles.itemContainer}><a href='https://github.com/leadavfar/tateti.git' target="_blank" rel="noreferrer"><SiGithub className={Styles.image__link} /></a></div>
                            <div className={Styles.itemContainer}><a href='https://tic-tac-toe-david.vercel.app/' target="_blank" rel="noreferrer" ><FaLink className={Styles.image__link} /></a></div>
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
                        <div className={Styles.iconOrder}><SiAngular />Angular</div>
                        <div className={Styles.iconOrder}><SiMaterialui />MaterialUi</div>
                            <div className={Styles.iconOrder}><SiJavascript />JavaScript</div>
                            <div className={Styles.iconOrder}><SiCss3 />CSS3</div>
                        </IconContext.Provider>
                    </div>
                </div >

            </div>
            <Footer />
        </div >
    )
};
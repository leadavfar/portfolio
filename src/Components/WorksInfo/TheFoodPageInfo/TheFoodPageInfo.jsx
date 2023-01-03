import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import TheFoodPageCarousel from "./TheFoodPageCarousel/TheFoodPageCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit,
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./TheFoodPageInfo.module.css"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function TheFoodPageInfo() {
    return (
        <div>
            <ScrollToTop />
            <TopBar />
            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>The Food Page</h1>
                    <div className={Styles.description}>
                        <p>This was my very first big project, a big challenge and I made many mistakes, thats wy I made another page with the same purpose wich is a lot better, so please, check
                            <a href='https://leandro-farias-portfolio.vercel.app/Works/LeChiefPageInfo' target="_blank"> Le Chief Page</a>
                        </p>
                        <div className={Styles.containerLinks}>
                            <div className={Styles.itemContainer}><h5>Links: </h5></div>
                            <div className={Styles.itemContainer}><a href='https://github.com/leadavfar/FT16a-PI-Food' target="_blank"><SiGithub className={Styles.image__link} /></a></div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr />
                    <h1 className={Styles.title}>Features</h1>
                    <TheFoodPageCarousel />
                </div>

                <div id='technologies' >
                    <hr />
                    <h1 className={Styles.title} >Implemented Technologies</h1>
                    <div className={Styles.icons}>
                        <IconContext.Provider value={{ className: Styles.iconStyle, size: 100 }}>
                            <div className={Styles.iconOrder}><SiJavascript />JavaScript</div>
                            <div className={Styles.iconOrder}><SiNodedotjs />NodeJs</div>
                            <div className={Styles.iconOrder}><SiHtml5 />HTML5</div>
                            <div className={Styles.iconOrder}><SiCss3 />CSS3</div>
                            <div className={Styles.iconOrder}><SiReact />React</div>
                            <div className={Styles.iconOrder}><SiRedux />Redux</div>
                            <div className={Styles.iconOrder}><SiExpress />Express</div>
                            <div className={Styles.iconOrder}><SiSequelize />Sequelize</div>
                        </IconContext.Provider>
                    </div>
                </div >

            </div>
            <Footer />
        </div >
    )
};
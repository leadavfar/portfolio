import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import LeChiefPageCarousel from "./LeChiefPageCarousel/LeChiefPageCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit,
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./LeChiefPageInfo.module.css"

export default function LeChiefPageInfo() {
    return (
        <div>
            <TopBar />

            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>Le Chief Page</h1>
                    <p>An improved version from my first project</p>

                    <div className={Styles.image__links}>
                        <div className={Styles.image__link__container}><h4 className={Styles.image__link} >Links: </h4></div>
                        <a href='https://github.com/leadavfar/le-chief-page.git' target="_blank"><div className={Styles.image__link__container}> <SiGithub className={Styles.image__link} /></div></a>
                        <a href='https://le-chief-page.vercel.app/' target="_blank"><div className={Styles.image__link__container}> <FaLink className={Styles.image__link} /></div></a>
                    </div>
                </div>

                <div>
                    <hr />
                    <h1 className={Styles.title}>Features</h1>
                    <LeChiefPageCarousel />
                </div>

                <div id='technologies' >
                    <hr />
                    <h1 className={Styles.title} >Technologies implemented</h1>
                    <div className={Styles.icons}>
                        <IconContext.Provider value={{ className: Styles.iconStyle, size: 100 }}>
                            <div className={Styles.iconOrder}><SiJavascript />JavaScript</div>
                            <div className={Styles.iconOrder}><SiNodedotjs />NodeJs</div>
                            <div className={Styles.iconOrder}><SiHtml5 />HTML5</div>
                            <div className={Styles.iconOrder}><SiCss3 />CSS3</div>
                            <div className={Styles.iconOrder}><SiReact />React</div>
                            <div className={Styles.iconOrder}><SiRedux />Redux</div>
                            <div className={Styles.iconOrder}><SiExpress />Express</div>
                            <div className={Styles.iconOrder}><SiMongodb />MongoDB</div>
                        </IconContext.Provider>
                    </div>
                </div >

            </div>

            <Footer />
        </div >
    )
};
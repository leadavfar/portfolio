import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import CarshopInfoCarousel from "./CarshopInfoCarousel/CarshopInfoCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit, SiBootstrap, SiPassport, SiJsonwebtokens, SiFacebook, SiGoogle,
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./CarshopInfo.module.css"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function CarshopInfo() {
    return (
        <div>
            <ScrollToTop />
            <TopBar />
            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>CarShop</h1>
                    <div className={Styles.description}>
                        <p>An E-Commerce developed by me and another four partners,
                            <a href='https://github.com/VictorioTocalini' target="_blank"> Victorio Tocalini</a>,
                            <a href='https://github.com/LucioGomez' target="_blank"> Lucio Gomez</a>,
                            <a href='https://github.com/EchaideBauti' target="_blank"> Bautista Echaide </a> and
                            <a href='https://github.com/Saubers' target="_blank"> Sebastián Laserna</a>. <br />
                            This was the final test from Henry Bootcamp, we has worked with Scrum methodology, having daily meets
                            with a product owner and talking with the team. <br />
                            Although I was worked in a Full-Stack role, I worked more time in the Front-End.<br />
                            <b>Happy ending: </b>We passed the exam. </p>
                        <div className={Styles.containerLinks}>
                            <div className={Styles.itemContainer}><h5>Links: </h5></div>
                            <div className={Styles.itemContainer}><a href='https://github.com/leadavfar/Proyecto-Final.git' target="_blank"><SiGithub className={Styles.image__link} /></a></div>
                            <div className={Styles.itemContainer}><a href='https://proyecto-final-one.vercel.app/' target="_blank" ><FaLink className={Styles.image__link} /></a></div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr />
                    <h1 className={Styles.title}>Features</h1>
                    <CarshopInfoCarousel />
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
                            <div className={Styles.iconOrder}><SiMongodb />MongoDB</div>
                            <div className={Styles.iconOrder}><SiGit />Git</div>
                            <div className={Styles.iconOrder}><SiBootstrap />Bootstrap</div>
                            <div className={Styles.iconOrder}><SiPassport />Passport</div>
                            <div className={Styles.iconOrder}><SiJsonwebtokens />Jsonwebtokens</div>
                        </IconContext.Provider>
                    </div>
                </div >

            </div>
            <Footer />
        </div >
    )
};
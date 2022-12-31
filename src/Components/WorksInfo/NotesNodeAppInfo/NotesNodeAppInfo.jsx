import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import NotesNodeAppCarousel from "./NotesNodeAppCarousel/NotesNodeAppCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit, SiPassport, SiHandlebarsdotjs,
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./NotesNodeAppInfo.module.css"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function NotesNodeAppInfo() {
    return (
        <div>
            <ScrollToTop />
            <TopBar />
            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>Notes Node App</h1>
                    <div className={Styles.description}>
                        <p>The classic notes app, you can create, read and delete notes, also you can register/login. <br />
                            With this app I learned to use Mongodb, Mongoose and deploying a database, also I make visual components witouth a Front-end frameworks.
                        </p>
                        <div className={Styles.containerLinks}>
                            <div className={Styles.itemContainer}><h5>Links: </h5></div>
                            <div className={Styles.itemContainer}><a href='https://github.com/leadavfar/notes-app' target="_blank"><SiGithub className={Styles.image__link} /></a></div>
                            <div className={Styles.itemContainer}><a href='https://notes-app-production-0f62.up.railway.app/' target="_blank" ><FaLink className={Styles.image__link} /></a></div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr />
                    <h1 className={Styles.title}>Features</h1>
                    <NotesNodeAppCarousel />
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
                            <div className={Styles.iconOrder}><SiExpress />Express</div>
                            <div className={Styles.iconOrder}><SiMongodb />MongoDB</div>
                            <div className={Styles.iconOrder}><SiPassport />Passport</div>
                            <div className={Styles.iconOrder}><SiHandlebarsdotjs />Handlebars</div>
                        </IconContext.Provider>
                    </div>
                </div >

            </div>
            <Footer />
        </div >
    )
};
import React from "react";
import { Link } from "react-router-dom";
//components
import TopBar from "../../TopBar/TopBar";
import Footer from "../../Footer/Footer";
import PortfolioCarousel from "./PortfolioCarousel/PortfolioCarousel";
//icons
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit,
} from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa"
import { IconContext } from "react-icons";
//styles
import Styles from "./PortfolioInfo.module.css"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

export default function PortfolioInfo() {
    return (
        <div>
            <ScrollToTop />
            <TopBar />
            <div className={Styles.home} id='home'>

                <div>
                    <h1 className={Styles.title}>Portfolio</h1>
                    <div className={Styles.description}>
                        <p>This portfolio! It was a good practice for mi english, I designed it inspired on my CV (and also because the green/black makes me remember The Matrix movie). <br />
                            Maybe you have already watched all the features of this work, but in case you haven't, I'll show you in the next section.</p>
                    </div>
                </div>

                <div>
                    <hr />
                    <h1 className={Styles.title}>Features</h1>
                    <PortfolioCarousel />
                </div>

                <div id='technologies' >
                    <hr />
                    <h1 className={Styles.title} >Technologies implemented</h1>
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
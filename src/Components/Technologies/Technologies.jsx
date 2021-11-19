import React from "react";
import {
    SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiReact, SiRedux, SiMaterialui, SiExpress,
    SiPostgresql, SiSequelize, SiMongodb, SiGit,
} from "react-icons/si";
import { IconContext } from "react-icons";
import Styles from "./Technologies.module.css";

export default function Technologies() {
    return (
        <div id='technologies' >
            <hr />
            <h1 className={Styles.title} >Technologies</h1>
            <div className={Styles.icons}>
                <IconContext.Provider value={{ className: Styles.iconStyle, size: 120 }}>
                    <div className={Styles.iconOrder}><SiJavascript />JavaScript</div>
                    <div className={Styles.iconOrder}><SiTypescript />TypeScript</div>
                    <div className={Styles.iconOrder}><SiNodedotjs />NodeJs</div>
                    <div className={Styles.iconOrder}><SiHtml5 />HTML5</div>
                    <div className={Styles.iconOrder}><SiCss3 />CSS3</div>
                    <div className={Styles.iconOrder}><SiReact />React</div>
                    <div className={Styles.iconOrder}><SiRedux />Redux</div>
                    {/* <div className={Styles.iconOrder}><SiMaterialui />Material UI</div> */}
                    <div className={Styles.iconOrder}><SiExpress />Express</div>
                    <div className={Styles.iconOrder}><SiPostgresql />PostgreSQL</div>
                    <div className={Styles.iconOrder}><SiSequelize />Sequelize</div>
                    <div className={Styles.iconOrder}><SiMongodb />MongoDB</div>
                    <div className={Styles.iconOrder}><SiGit />Git</div>
                </IconContext.Provider>
            </div>
        </div >
    )
};
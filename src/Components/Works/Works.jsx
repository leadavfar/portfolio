import React from "react";
import carshop from "../../Images/CARSHOP.png";
import foodpage from "../../Images/foodpage.png";
import Styles from "./Works.module.css";

export default function Works() {
    return (
        <div id='works'>
            <hr />
            <h1 className={Styles.title}>Projects</h1>
            <h2 className={Styles.subtitle}>Some of the projects I have worked on</h2>

            <div className={Styles.projects}>
                <div className={Styles.project} >
                    <img src={carshop} height="350" alt="not found" />
                    <h2>CarShop</h2>
                    <p>E-Commerce</p>
                    <h1>WACHO PUTOOOOO</h1>
                </div>

                <div className={Styles.project}>
                    <img src={foodpage} height="350" alt="not found" />
                    <h2>The Food Page</h2>
                    <p>React App</p>
                </div>
            </div>

        </div>
    )
};
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

            <div className={Styles.container}>
                <div className={Styles.card}>

                    <img src={carshop} alt="not found" />

                    <div className={Styles.contenido}>
                        <h2>Carshop</h2>
                        <p> E-Commerce </p>
                        {/* <button>GO</button> */}
                    </div>
                </div>

                <div className={Styles.card}>

                    <img src={foodpage} alt="not found" />

                    <div className={Styles.contenido}>
                        <h2>The Food Page</h2>
                        <p>React App</p>
                        {/* <button>GO</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
};
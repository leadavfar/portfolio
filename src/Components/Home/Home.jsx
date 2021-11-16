import React from "react";
import Styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={Styles.home} id='home'>
            <h6>Welcome to my portfolio</h6>
            <h1 className={Styles.title}>Hi, I’m Leandro Farias</h1>
            <h3>Full Stack Developer</h3>
        </div>
    )
};
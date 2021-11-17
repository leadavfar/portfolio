import React from "react";
import Photo from "../../Images/FINAL FOTO cut viñeta.jpg"
import Styles from "./AboutMe.module.css"

export default function AboutMe() {
    return (
        <div id='aboutMe'>
            <hr />
            <div className={Styles.about}>
                <img src={Photo} height="650" alt="not found" />
                <div>
                    <h1>About Me</h1>
                    <p>
                        Hi! My name is Leandro, I'm a Front-End oriented Full Stack Developer and a Pianist.
                        I finished the Henry bootcamp with +800 hours of practice and now I'm actually looking for new challenges.
                        I created this portfolio to show my information and the projects that i've been working on. Feel free to contact me!

                        ME
                        Full Name: Leandro David Farias
                        Age: 25
                        Location: Buenos Aires, Argentina
                        Languages: Spanish (Native), English (B1: Intermediate)

                        Education and Certification
                        Systems Technician - E.E.T nro6, Buenos Aires, CA
                        2016
                        Full Stack Developer - Henry Bootcamp
                        2021
                        Graphic Designer - ABC Institute, Los Angeles, CA
                        2007

                        Experience
                        IT Support - Digital Cold
                        2018 - Current
                        Help Desk - Indicom
                        2018 - 2019
                        Full Stack Developer- Henry Bootcamp
                        2021-2021
                    </p>
                    <button className={Styles.button}> <b>Download CV</b></button>
                </div>
            </div>
        </div>
    )
};
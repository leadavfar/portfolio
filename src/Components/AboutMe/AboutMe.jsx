import React from "react";
import Photo from "../../Images/FINAL FOTO cut viñeta.jpg"
import Styles from "./AboutMe.module.css"

export default function AboutMe() {
    return (
        <div id='aboutMe'>
            <hr />
            <div className={Styles.about}>
                <img src={Photo} height="650" alt="not found" />
                <div className={Styles.all}>
                    <h1 className={Styles.title}>About Me</h1>
                    <p>Hi! My name is Leandro, I'm a <b>Front-End</b> oriented <b>Full Stack Developer</b> and a <b>Pianist</b>.
                        I finished the Henry bootcamp with +800 hours of practice and now I'm actually looking
                        for new challenges. I created this portfolio to show my information and the projects that
                        i've been working on. Feel free to contact me!</p>
                    <div>
                        <div className={Styles.mytabs}>
                            <input type='radio' id='me' name='mytabs' defaultChecked></input>
                            <label for='me'><h1>Me</h1></label>
                            <div className={Styles.tab}>
                                <p>
                                    <b>Full Name</b> - Leandro David Farias <br />
                                    <p />
                                    <b>Age</b> - 25 <br />
                                    <p />
                                    <b>Location</b> - Buenos Aires, Argentina<br />
                                    <p />
                                    <b>Languages</b> - Spanish (Native), English (B1: Intermediate)<br />
                                </p>
                            </div>

                            <input type='radio' id='experience' name='mytabs'></input>
                            <label for='experience'><h1>Experience</h1></label>
                            <div className={Styles.tab}>
                                <p>
                                    <b>IT Support</b> - Digital Cold<br />
                                    2018 - Current <br />
                                    <p />
                                    <b>Help Desk</b> - Indicom <br />
                                    2018 - 2019 <br />
                                    <p />
                                    <b>Full Stack Developer</b> - Henry Bootcamp <br />
                                    2021-2021
                                </p>
                            </div>

                            <input type='radio' id='education' name='mytabs'></input>
                            <label for='education'><h1>Education and Certification</h1></label>
                            <div className={Styles.tab}>
                                <p>
                                    <b>Full Stack Developer</b> - Henry Bootcamp <br />
                                    2021 <br />
                                    <p />
                                    <b>Systems Technician</b> - E.E.T. N° 6, Buenos Aires <br />
                                    2016 <br />
                                    <p />
                                    <b>Piano Jazz</b> - Leopoldo Marechal, Buenos Aires <br />
                                    In progress
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className={Styles.button__position}>
                        <a href='https://drive.google.com/file/d/1D80jOeL5C3X9N437EGy0jJ_r2XaM3eQH/view?usp=sharing' target="_blank">
                            <button className={Styles.button}> <b>Download CV</b>
                            </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
};
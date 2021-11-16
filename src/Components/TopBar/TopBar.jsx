import React from "react";
import { SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si"
import { HashLink } from "react-router-hash-link";
import Styles from './TopBar.module.css'

export default function TopBar() {
    return (
        <div className={Styles.fixed} id='topBar'>
            <div>
                <ul className={Styles.ul1}>
                    <HashLink smooth to='#landingPage' ><li className={Styles.li1}> <>Home</></li> </HashLink>
                    <HashLink smooth to='#aboutMe' ><li className={Styles.li1}><>About Me</></li></HashLink>
                    <HashLink smooth to='#technologies'><li className={Styles.li1}><>Technologies</></li></HashLink>
                    <HashLink smooth to='#works' ><li className={Styles.li1}><>Projects</></li></HashLink>
                    <HashLink smooth to='#contact' ><li className={Styles.li1}><>Contact </></li></HashLink>
                </ul>
            </div>
            <div>
                <ul className={Styles.ul2}>
                    <a href='https://github.com/leadavfar' target="_blank"><li className={Styles.li2}> <SiGithub /></li> </a>
                    <a href='https://www.linkedin.com/in/leadavfar/' target="_blank"><li className={Styles.li2}> <SiLinkedin /> </li></a>
                    <a href='https://api.whatsapp.com/send?phone=541164950511' target="_blank"><li className={Styles.li2}> <SiWhatsapp /></li></a>
                </ul>
            </div>
        </div>
    )
};
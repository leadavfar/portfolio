import React from "react";
import { SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si"
import { HashLink } from "react-router-hash-link";
import Styles from './TopBar.module.css'

export default function TopBar() {
    return (
        <div className={Styles.container} id='topBar'>

            <div className={Styles.hashes}>
                <HashLink smooth to='/#landingPage' ><p className={Styles.hash}> Home</p> </HashLink>
                <HashLink smooth to='/#aboutMe' ><p className={Styles.hash}>About Me</p></HashLink>
                <HashLink smooth to='/#technologies'><p className={Styles.hash}>Technologies</p></HashLink>
                <HashLink smooth to='/#works' ><p className={Styles.hash}>Projects</p></HashLink>
                <HashLink smooth to='/#contact' ><p className={Styles.hash}>Contact </p></HashLink>
            </div>

            <div className={Styles.links}>
                <a href='https://github.com/leadavfar' target="_blank"><p className={Styles.link}> <SiGithub size={25} /></p> </a>
                <a href='https://www.linkedin.com/in/leadavfar/' target="_blank"><p className={Styles.link}> <SiLinkedin size={25} /> </p></a>
                <a href='https://api.whatsapp.com/send?phone=541164950511' target="_blank"><p className={Styles.link}> <SiWhatsapp size={25} /></p></a>
            </div>

        </div>
    )
};

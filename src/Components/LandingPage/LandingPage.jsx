import React from "react";
import TopBar from "../TopBar/TopBar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Works from "../Works/Works";
import Technologies from "../Technologies/Technologies";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function LandingPage() {
    return (
        <div id= 'landingPage'>
            <TopBar />
            <Home />
            <AboutMe />
            <Technologies/>
            <Works />
            <Contact/>
            <Footer/>
        </div>
    )
};
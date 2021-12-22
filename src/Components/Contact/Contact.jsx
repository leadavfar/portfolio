import React from "react";
import emailjs from 'emailjs-com';
import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import {BsFillTelephoneFill} from "react-icons/bs"
import { FaCity } from "react-icons/fa";
import Styles from "./Contact.module.css";
import { IconContext } from "react-icons";

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('leandrodavidfarias', 'template_8mznq8e', e.target, 'user_isOg8X9MfPGoCWHnbxKub')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert("Mail Sended!")
    };

    return (
        <div id='contact'>
            <hr />
            <h1 className={Styles.title}>Contact</h1>
            <h2 className={Styles.subtitle}>Get in touch</h2>
            <div className={Styles.container} >
                <div className={Styles.mailContact} >
                    <form onSubmit={sendEmail} >

                        <div>
                            <input className={Styles.input}
                                required
                                type="text"
                                name="name"
                                placeholder="Your name*" />
                        </div>

                        <div>
                            <input className={Styles.input}
                                required
                                type="email"
                                name="email"
                                placeholder="Your Mail*" />
                        </div>

                        <div>
                            <input className={Styles.input}
                                type="text"
                                name="subject"
                                placeholder="Write a Subject" />
                        </div>

                        <div>
                            <textarea className={Styles.input}
                                required
                                rows='6'
                                name="message"
                                placeholder='Your Message*' />
                        </div>

                        <div>
                            <button className={Styles.button}
                                type="submit"
                                value="Send" >
                                <b>Send Message</b></button>
                        </div>

                    </form>
                </div>

                <div className={Styles.mailContact}>
                    <IconContext.Provider value={{ size: 40 }}>

                        <div className={Styles.contact}>
                            <FaCity />
                            <p> <a href='https://www.google.com/maps/place/Provincia+de+Buenos+Aires/@-37.0651019,-64.5166925,6z/data=
                            !3m1!4b1!4m5!3m4!1s0x95edbcb7595281d9:0x4ad309fcdcf0a144!8m2!3d-37.2017285!4d-59.8410697' target="_blank">
                                Buenos Aires, Argentina </a></p>
                        </div>

                        <div className={Styles.contact}>
                            <SiWhatsapp />
                            <p> <a href='https://api.whatsapp.com/send?phone=541164950511' target="_blank"> +54 9 011 64950511 </a></p>
                        </div>

                        {/* <div className={Styles.contact}>
                            <BsFillTelephoneFill />
                            <p className={Styles.phone}>  02202 2084-3114 </p>
                        </div> */}



                        <div className={Styles.contact}>

                            <SiGmail />
                            <p> <a href='mailto:leandrodavidfarias@gmail.com' > leandrodavidfarias@gmail.com </a></p>
                        </div>

                        <div className={Styles.contact}>
                            <SiGithub />
                            <p> <a href='https://github.com/leadavfar' target="_blank">github.com/leadavfar </a></p>
                        </div>

                        <div className={Styles.contact}>
                            <SiLinkedin />
                            <p> <a href='https://www.linkedin.com/in/leadavfar/' target="_blank"> linkedin.com/in/leadavfar/</a></p>
                        </div>

                    </IconContext.Provider>

                </div>
            </div>
        </div>
    );
};

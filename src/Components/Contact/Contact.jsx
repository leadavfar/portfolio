import React from "react";
import emailjs from 'emailjs-com';
import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin, SiGit } from "react-icons/si"
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
                <IconContext.Provider value={{ size: 50}}>

                    <div className={Styles.contact}>
                        <SiWhatsapp />
                        <p> <a href='https://api.whatsapp.com/send?phone=541164950511' target="_blank"> +54 9 6495 0511 </a></p>
                    </div>


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

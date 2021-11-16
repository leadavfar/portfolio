import React from "react";
import emailjs from 'emailjs-com';
import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from "react-icons/si"
import Styles from "./Contact.module.css";

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
             <hr/>
            <h1 className={Styles.title}>Contact</h1>
            <h2 className={Styles.subtitle}>Get in touch</h2>
            <div className={Styles.contact} >
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
                            <b>SEND MESSAGE</b></button>
                    </div>

                </form>
            </div>
        </div>
    );
};

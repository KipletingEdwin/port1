import React from 'react'
import styles from './Contact.module.css';
import emailIcon from "../../../assets/contact/email.png"
import linkedInIcon from "../../../assets/contact/linkedin.png"
import githubIcon from "../../../assets/contact/github.png"

function Contact() {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2> Contact </h2>
            <p> Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link} >
                <img src={emailIcon} alt='Email Icon'/>
                <a href='mailto:myemail@email.com'>myemail@email.com</a>
            </li>

            <li className={styles.link}>
                <img src={linkedInIcon} alt='LinkedIn Icon'/>
                <a href='www.linkedin.com/in/kipleting-edwin-25a513120'>linkedIn.com/myName</a>
            </li>

            <li className={styles.link}>
                <img src={githubIcon} alt='Github Icon'/>
                <a href='https://github.com/KipletingEdwin'>github.com/myName</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
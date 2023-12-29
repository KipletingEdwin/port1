import React from 'react'
import heroImage from "../../../assets/hero/heroImage.png"
import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ada</h1>
            <p className={styles.description}> I'm a full stack developer with five years of experience using React and NodeJS.Reach out if you'd like to learn more! </p>
            <a href="mailto:kipletingedwin4@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt='hero Image' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
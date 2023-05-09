import styles from "../styles/HeroSection.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faBolt, faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { motion } from 'framer-motion'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const HeroSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_why7vx8', 'template_c0pdv59', form.current, 'eUOXo6Tl9huOz_yuA')
            .then((result) => {
                setTimeout(() => {
                    e.target.reset();
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={styles.container_full}>
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, }} transition={{ duration: .30 }} className={styles.angle}></motion.div>
            <div className={styles.container}>
                <section className={styles.heroLeft}>
                    <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, }} transition={{ duration: .10 }} className={styles.topItem}>
                        <div className={styles.offer}><FontAwesomeIcon className={styles.bolt} icon={faBolt} /><p>Offer is going on till friday, <span className={styles.amount}>$84.99</span>/mo</p> <span className={styles.arrow}><FontAwesomeIcon icon={faArrowRightLong} /></span></div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0, }} transition={{ duration: .3 }} className={styles.headItem}>
                        <h1>Building <span>Digital Product,</span> Brand and <span className={styles.underlineTitle}>Experience</span></h1>
                        <p>We are specialize in designing, building, shipping and scaling beautiful, usable product with blazing.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, }} transition={{ duration: .3 }} className={styles.consultation}>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="email" name="user_email" required placeholder="Type your email" />
                            <button type="submit">Free Consultation</button>
                        </form>
                    </motion.div>
                </section>
                <section className={styles.heroRight}>
                    <h1 className={styles.heroTopText}>a brand, a family</h1>
                    <FontAwesomeIcon
                        className={styles.video}
                        icon={faCirclePlay}
                    />
                    <h1 className={styles.heroTopText}>Imagine. Build. Succeed.</h1>
                </section>
                <div className={styles.social}>
                    <motion.span whileHover={{ scale: 1.2 }} className={styles.item}><FontAwesomeIcon icon={faFacebook} /></motion.span>
                    <motion.span whileHover={{ scale: 1.2 }} className={styles.item}><FontAwesomeIcon icon={faTwitter} /></motion.span>
                    <motion.span whileHover={{ scale: 1.2 }} className={styles.item}><FontAwesomeIcon icon={faInstagram} /></motion.span>
                    <motion.span whileHover={{ scale: 1.2 }} className={styles.item}><FontAwesomeIcon icon={faLinkedin} /></motion.span>
                    <motion.span whileHover={{ scale: 1.2 }} className={styles.item}><FontAwesomeIcon icon={faGithub} /></motion.span>
                </div>

            </div>
        </div>
    )
}

export default HeroSection
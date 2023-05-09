import styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container_full}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopLeft}>
                        <h3>More than <span className={styles.underlineTitle}>5 years</span> in the game and we&rsquo;re just getting started. 🚀</h3>
                    </div>
                    <div className={styles.footerTopright}>
                        <div className={styles.social}>
                            <span className={styles.item}><FontAwesomeIcon icon={faFacebook} /></span>
                            <span className={styles.item}><FontAwesomeIcon icon={faTwitter} /></span>
                            <span className={styles.item}><FontAwesomeIcon icon={faInstagram} /></span>
                            <span className={styles.item}><FontAwesomeIcon icon={faLinkedin} /></span>
                            <span className={styles.item}><FontAwesomeIcon icon={faGithub} /></span>
                        </div>
                        <span><a href="mailto:mokot222@gmail.com"> contact@rottenscript.com</a></span>
                    </div>
                </div>
                <div className={styles.footerMiddle}>
                    <div className={styles.offices}>
                        <div className={styles.city}>United Kingdom</div>
                        <div className={styles.address}>NPriory St, Coventry CV1 5FB</div>
                    </div>
                    <div className={styles.offices}>
                        <div className={styles.city}>Hong Kong</div>
                        <div className={styles.address}>Hop Hing Industrial Building No. 704, Castle Peak Road, Lai Chi Kok</div>
                    </div>
                    <div className={styles.offices}>
                        <div className={styles.city}>France</div>
                        <div className={styles.address}>182, rue Saint-Honoré 75001, Paris</div>
                    </div>
                    <div className={styles.offices}>
                        <div className={styles.city}>Bangladesh</div>
                        <div className={styles.address}> Road #14, House #21, Sector #03 Uttara, Dhaka</div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomLeft}>
                        <span>&#169; {new Date().getFullYear()} rottenScript. All Right Reserved </span>
                    </div>
                    <div className={styles.footerBottomright}>
                        <ul className={styles.footerNav}>
                            <Link href="/privacy-policy"><li><a href="#">Privacy policy</a></li>
                            </Link>
                            <Link href="/terms">
                                <li><a href="#">Terms and condition</a></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
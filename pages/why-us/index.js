import styles from "../../styles/Whyus.module.scss"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlay, faQuoteRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import HeaderBanar from "../../components/HeaderBanar";
import { faStarHalfStroke, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import axios from "axios";
import { Fragment, useState } from "react";
import Contact from "../../components/Contact";

const Whyus = ({ Team }) => {
    const [team, setTeam] = useState(Team);
    const [close, setClose] = useState(false);
    return (
        <Fragment>
            <div className={styles.container_full}>
                <Head>
                    <title>Why us | rottenScript</title>
                </Head>
                <HeaderBanar title="Why us?" desc="We succeed by empowering people to solve challenges in innovative ways." img="/about/about-rottenscript.png" />
                <div className={styles.whyus_content}>
                    <div className={styles.container_2}>
                        <div className={styles.left}>
                            <div className={styles.top}>
                                <h1>Building software for world changers</h1>
                                <div className={styles.icon}>
                                    <div className={styles.icon_holder}> <FontAwesomeIcon className={styles.iconvideo} icon={faPlay} /></div>
                                    <span>See demo video</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <p>We build digital products that let people do things differently. Share your challenges with our team, and we will work with you to deliver a revolutionary digital product. Our clients have changed tha way people do banking, listen to music.</p>
                            <p> We thrive to find innovative solutions to complex problems. We work to understand your needs and offer a wide range of solutions.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.testo}>
                    <div className={styles.testoContainer}>
                        <div className={styles.testoLeft}>
                            <Image src="/about/client-profile.png" width={48} height={48} objectFit="cover" alt="" />
                            <div className={styles.clientProfile}>
                                <p className={styles.clientName}>
                                    Wiktor Schmidt
                                </p>
                                <span>Executive Chairman (ORIX)</span>
                            </div>
                            <div className={styles.clientPost}>
                                <FontAwesomeIcon className={styles.fontQuote} icon={faQuoteRight} />
                                <p>Wow. What a great experience with this copyrighter. rottenScript is a very talented digital agency.</p>
                            </div>
                        </div>
                        <div className={styles.testRightContainer}>
                            <Image src="/project/project4.png" width={600} height={400} alt="" objectFit="cover" />
                        </div>
                    </div>
                </div>
                <div className={styles.qualification}>
                    <div className={styles.qualification_container}>
                        <div className={styles.single_qualification}>
                            <FontAwesomeIcon className={styles.icon} icon={faUserAlt} />
                            <h3>Professional Team</h3>
                            <span>24+ Team Member</span>
                        </div>
                        <div className={styles.single_qualification}>
                            <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
                            <h3>Certified Globally</h3>
                            <span>65.04 k Reach</span>
                        </div>
                        <div className={styles.single_qualification}>
                            <FontAwesomeIcon className={styles.icon} icon={faStarHalfStroke} />
                            <h3>Competitive Rate</h3>
                            <span>100% Client Satisfied</span>
                        </div>
                        <div className={styles.single_qualification}>
                            <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
                            <h3>Completed Project</h3>
                            <span>1200+ Completed Project</span>
                        </div>
                    </div>
                </div>
                <div className={styles.team_section}>
                    <h1>People are the key to success</h1>
                    <div className={styles.team_container}>


                        {team.map((single_team) => (
                            <div className={styles.single_team} key={single_team._id}>
                                <Image src={single_team.image_url} width={250} height={280} objectFit="cover" alt={single_team.name} />
                                <div className={styles.data}>
                                    <h4 className={styles.name}>{single_team.name}</h4>
                                    <span>{single_team.designation}</span>
                                    <div className={styles.icon_fa}>
                                        <a href={'https://www.facebook.com/' + `${single_team.facebook}`} target="_blank" rel="noreferrer"><span className={styles.item}><FontAwesomeIcon icon={faFacebook} /></span></a>
                                        <a href={'https://www.twitter.com/' + `${single_team.twitter}`} target="_blank" rel="noreferrer"><span className={styles.item}><FontAwesomeIcon icon={faTwitter} /></span></a>
                                        <a href={'https://www.instagram.com/' + `${single_team.instagram}`} target="_blank" rel="noreferrer"><span className={styles.item}><FontAwesomeIcon icon={faInstagram} /></span></a>
                                        <a href={'https://www.linkedin.com/' + `${single_team.linkedin}`} target="_blank" rel="noreferrer"><span className={styles.item}><FontAwesomeIcon icon={faLinkedin} /></span></a>
                                        <a href={'https://www.github.com/' + `${single_team.github}`} target="_blank" rel="noreferrer"><span className={styles.item}><FontAwesomeIcon icon={faGithub} /></span></a>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className={`${styles.whyus_content} ${styles.whyus_2}`}>
                    <div className={styles.bottomHead}>
                        <div className={styles.bottomHead_container}>
                            <h1>We deploy world class <span>Creative Design Team</span> on Demand, That can design, build, ship and scale your vision in the most efficient way.</h1>
                        </div>
                    </div>
                    <div className={styles.container_2}>
                        <div className={styles.left}>
                            <div className={styles.top}>
                                <h1>At rottenScript we&rsquo;re creating world class experiences!</h1>
                                <div className={styles.button_container}>
                                    <button onClick={() => setClose(true)}>Become a partner</button>
                                    <button onClick={() => setClose(true)}>Work together</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <p>When you need a functioning application? Have peace of mind with our 24/7 application and life cycle management. Focus on your core competencies and let us help you with comprehensive software solutions.</p>
                            <p>How we manage your application? You curious about that? Don&rsquo;t worry, based on your needs, we start from scratch or build on your existing tools.</p>
                        </div>
                    </div>
                </div>
            </div>
            {close && <Contact setClose={setClose} />}
        </Fragment>
    )
}

export const getServerSideProps = async (context) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams`);
    return {
        props: {
            Team: res.data,
        },
    };
}

export default Whyus
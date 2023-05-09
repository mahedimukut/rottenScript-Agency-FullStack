import Head from "next/head";
import HeaderBanar from "../../components/HeaderBanar";
import styles from "../../styles/WhatWeDo.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faCode, faPenNib, faSeedling, faShieldHalved, faStar, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const WhatWeDo = ({ Cases }) => {
    const [cases, setCases] = useState(Cases);
    return (
        <>
            <HeaderBanar title="What we do?" desc="Have peace of mind with our 24/7 application and life cycle management." img="/about/about-hm-img.png" />
            <Head>
                <title>What we do | rottenScript</title>
            </Head>
            <div className={styles.container_full}>
                <div className={styles.container}>
                    <div className={styles.product_container}>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                            </div>
                            <h3 className={styles.p_title}>
                                Product Management
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faCode} />
                            </div>
                            <h3 className={styles.p_title}>
                                Web & Mobile Development
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faPenNib} />
                            </div>
                            <h3 className={styles.p_title}>
                                Design and Vreatives
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faChartArea} />
                            </div>
                            <h3 className={styles.p_title}>
                                Marketing and Communication
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faSeedling} />
                            </div>
                            <h3 className={styles.p_title}>
                                Human Resources
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faSuitcase} />
                            </div>
                            <h3 className={styles.p_title}>
                                Business Development
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faStar} />
                            </div>
                            <h3 className={styles.p_title}>
                                Ideation and Inovation
                            </h3>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.single_product}>
                                <FontAwesomeIcon className={styles.icon} icon={faShieldHalved} />
                            </div>
                            <h3 className={styles.p_title}>
                                Cyber Threats & Security
                            </h3>
                        </div>
                    </div>
                    <div className={styles.case_studies}>
                        <h1>Our recent completed case studies</h1>
                        <div className={styles.cases}>
                            {cases.slice(0, 3).map((singleCase) => (
                                <div className={styles.single_case} key={singleCase._id}>
                                    <div className={styles.image_container}>
                                        <Link href={`/case/${singleCase._id}`}><Image src={singleCase.image_url} width={400} height={350} alt={singleCase.title} /></Link>
                                    </div>
                                    <div className={styles.text_container}>
                                        <h3>{singleCase.title}</h3>
                                        <span>{singleCase.desc.slice(0, 50)}...</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.button}>
                            <Link href="/case"><button>View all case studies</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cases`);
    return {
        props: {
            Cases: res.data,
        },
    };
};

export default WhatWeDo
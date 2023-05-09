import styles from '../styles/Services.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faChartPie, faCode, faSearch, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Services = () => {
    return (
        <section className={styles.container_full}>
            <div className={styles.container}>
                <div className={styles.services}>
                    <div className={styles.services_left}>
                        <div className={styles.services_left_top}>
                            <h3>Grow your business with our best services.</h3>
                        </div>
                        <div className={styles.services_left_bottom}>
                            <Link href="/what-we-do">
                                <span>explore more services</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.services_right}>
                        <div className={styles.service_item}>
                            <div className={styles.service_item_icon}>
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                            <div className={styles.service_item_text}>
                                <h3>Business Analysis</h3>
                            </div>
                            <div className={styles.service_item_icon_right}>
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </div>
                        </div>
                        <div className={styles.service_item}>
                            <div className={styles.service_item_icon}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div className={styles.service_item_text}>
                                <h3>Marketing Strategy</h3>
                            </div>
                            <div className={styles.service_item_icon_right}>
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </div>
                        </div>
                        <div className={styles.service_item}>
                            <div className={styles.service_item_icon}>
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <div className={styles.service_item_text}>
                                <h3>Design and Development</h3>
                            </div>
                            <div className={styles.service_item_icon_right}>
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </div>
                        </div>
                        <div className={styles.service_item}>
                            <div className={styles.service_item_icon}>
                                <FontAwesomeIcon icon={faUserTie} />
                            </div>
                            <div className={styles.service_item_text}>
                                <h3>Business Consulting</h3>
                            </div>
                            <div className={styles.service_item_icon_right}>
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
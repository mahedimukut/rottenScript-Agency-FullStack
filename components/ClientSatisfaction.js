import styles from "../styles/ClientSatisfaction.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const ClientSatisfaction = () => {
    return (
        <div className={styles.container_full}>
            <div className={styles.clientArea}>
                <div className={styles.clientTitle}>
                    <h3>We already build solution for...</h3>
                </div>
                <div className={styles.clientIdentity}>
                    <div className={styles.singleClient}>
                        <Image src="/client/client1.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client2.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client3.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client4.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client5.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client6.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client7.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client8.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client9.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client10.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                    <div className={styles.singleClient}>
                        <Image src="/client/client11.png" width={150} height={136} title="" alt="Our best client&rsquo;s" />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.bottom}>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <FontAwesomeIcon className={styles.satisfactionIcon} icon={faThumbsUp} />
                        </div>
                        <div className={styles.right}>
                            <h3>100%</h3>
                            <span>Client Satisfaction</span>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <FontAwesomeIcon className={styles.satisfactionIcon} icon={faRectangleList} />
                        </div>
                        <div className={styles.right}>
                            <h3>1200+</h3>
                            <span>Completed Project</span>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <FontAwesomeIcon className={styles.satisfactionIcon} icon={faGears} />
                        </div>
                        <div className={styles.right}>
                            <h3>1800+</h3>
                            <span>Design Resource</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSatisfaction
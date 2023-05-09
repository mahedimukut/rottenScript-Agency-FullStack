import styles from "../styles/Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Contact from "./Contact";
import { Fragment, useState } from "react";
import { useSession, signOut } from "next-auth/react"

const Header = () => {
    const [close, setClose] = useState(false);
    const { data: session } = useSession();
    const [menu, setMenu] = useState(true);
    function handleSignOut() {
        signOut()
    }
    return (

        <Fragment>
            <div className={styles.container_full}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Link href="/" passHref><h1>rotten<span>Script.</span></h1></Link>
                    </div>

                    <div className={styles.middle}>
                        <div className={`${menu ? styles.open : styles.close}`}>
                            <nav className={styles.navbar}>
                                <ul>
                                    <Link href="/why-us">
                                        <li className={styles.listItem}>
                                            Why us
                                        </li>
                                    </Link>

                                    <Link href="/what-we-do">
                                        <li className={styles.listItem}>
                                            What we do
                                        </li>
                                    </Link>
                                    <Link href="/portfolio">
                                        <li className={styles.listItem}>
                                            Portfolio
                                        </li>
                                    </Link>
                                    <Link href="/product"><li className={styles.listItem}>Products </li></Link>
                                    <Link href="/blog"><li className={styles.listItem}>Blog</li></Link>
                                </ul>
                            </nav>
                        </div>


                        <span onClick={() => setMenu(!menu)} className={styles.bars}><FontAwesomeIcon icon={faBars} /></span>

                    </div>

                    <div className={styles.right}>
                        {session ?
                            <span className={styles.login} onClick={handleSignOut}>Sign out <FontAwesomeIcon icon={faRightFromBracket} /></span> :
                            <div className={styles.login}>
                                <Link href="/authentication/login"><span><FontAwesomeIcon icon={faUser} /> Login</span></Link>
                            </div>
                        }
                        <div className={styles.button}>
                            <button onClick={() => setClose(true)} className={styles.workTogether}>Let&rsquo;s work together</button>
                        </div>
                    </div>
                </div>
            </div>
            {close && <Contact setClose={setClose} />}
        </Fragment>
    )
}

export default Header
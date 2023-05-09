import { getSession, useSession, signOut } from "next-auth/react"
import dbConnect from '../../utils/dbConnect';
import Auth from '../../models/Auth';
import AuthorizeBloger from '../../components/admin/AuthorizeBloger';

// newly outputed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faHeart,
    faRocket,
    faSignOutAlt,
    faTachometerAlt,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/AdminDashboard.module.scss";
import Link from 'next/link';
import { faStarHalfAlt } from '@fortawesome/free-regular-svg-icons';
import { Fragment } from 'react';


const AdminDashBoard = ({ parse }) => {
    const { data: session } = useSession()
    function handleSignOut() {
        signOut()
    }
    return (
        <div className={styles.container}>
            {parse != null && parse.isAdmin == true && session.user.email === "mokot222@gmail.com" ? (
                <Fragment>
                    <div className={styles.menu}>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faTachometerAlt}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin">Dashboard</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faRocket}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin/blog">Blog</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faBookOpen}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin/portfolio">Porfolio</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin/product">Product</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faUserPlus}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin/team"> Team</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faStarHalfAlt}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin/testimonial"> Testimonial</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <Link href="/admin/case">Case</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faSignOutAlt}
                                    style={{ width: "18px", cursor: "pointer" }}
                                />{" "}
                                <a onClick={handleSignOut}>Logout</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.wrapper}>
                        <h1>Welcome to Admin Dashboard</h1>
                        <h3>Username: {session.user.name ? session.user.name : parse.username}</h3>
                        <h3>Email: {session.user.email ? session.user.email : parse.email}</h3>
                    </div>
                </Fragment>
            ) : AuthorizeBloger({ session, parse })}

        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    if (!session) {
        return {
            redirect: {
                destination: '/authentication/login',
                permanent: false
            }
        }
    }
    await dbConnect();
    const result = await Auth.findOne({ email: session.user.email });
    const data = JSON.stringify(result);
    const parse = JSON.parse(data);
    return {
        props: {
            session,
            parse
        },
    };
};

export default AdminDashBoard

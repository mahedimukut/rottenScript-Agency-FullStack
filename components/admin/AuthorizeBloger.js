import React from 'react'
import styles from "../../styles/Admin.module.scss"

const AuthorizeBloger = ({ session, parse }) => {
    return (
        <div className={styles.blogger_dashboard}>
            <h3>Blogger Dashboard</h3>
            <div className={styles.details}>
                <p>Username: {session.user.name ? session.user.name : parse.username}</p>
                <p>Email: {session.user.email ? session.user.email : parse.email}</p>
                <h5>We will verify your account and give you full access shortly. Please visit our services and know more.</h5>
            </div>
        </div>
    )
}

export default AuthorizeBloger
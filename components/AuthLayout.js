import React from 'react'
import styles from "../styles/AuthLayout.module.scss"

const AuthLayout = ({ children }) => {
    return (
        <div className={styles.auth_container}>
            <div className={styles.authHold}>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
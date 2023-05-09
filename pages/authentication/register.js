import React from 'react'
import Head from 'next/head'
import AuthLayout from '../../components/AuthLayout'
import styles from "../../styles/AuthLogin.module.scss"
import Link from 'next/link'
import { useFormik } from 'formik'
import { registerValidate } from '../../components/lib/Validate'
import axios from 'axios'
import { useRouter } from 'next/router'

const Register = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            cpassword: "",
            isAdmin: false
        },
        validate: registerValidate,
        onSubmit
    })
    async function onSubmit(values) {
        const submittedData = {
            password: values.password,
            email: values.email,
            isAdmin: values.isAdmin,
            username: values.username
        }
        await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/signup`, submittedData)
            .then(() => {
                router.push("/authentication/login")
            })
    }
    return (
        <AuthLayout>
            <Head>
                <title>Register</title>
            </Head>
            <section className={styles.login_form}>
                <div className={styles.title}>
                    <h1>Register an account?</h1>
                    <p>Try to input valid credentials!</p>
                </div>
                <form className={styles.loginForms} onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input
                            type="text"
                            name="username"
                            placeholder='username'
                            {...formik.getFieldProps("username")}
                        />
                    </div>
                    {formik.errors.username && formik.touched.username ? <span>{formik.errors.username}</span> : <></>}
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder='email'
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>}
                    <div className={styles.input_group}>
                        <input
                            type="password"
                            name="password"
                            placeholder='password'
                            {...formik.getFieldProps("password")}
                        />
                    </div>
                    {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>}
                    <div className={styles.input_group}>
                        <input
                            type="password"
                            name="cpassword"
                            placeholder='confirm password'
                            {...formik.getFieldProps("cpassword")}
                        />
                    </div>
                    {formik.errors.cpassword && formik.touched.cpassword ? <span>{formik.errors.cpassword}</span> : <></>}
                    {/* login buttons */}
                    <div className={styles.input_button}>
                        <button type="submit">Register</button>
                    </div>
                </form>
                <p className={styles.signUpText}>Already have an account? <Link href="/authentication/login"><a className={styles.signUpLing}>sign in</a></Link></p>
            </section>
        </AuthLayout>
    )
}

export default Register
import React from 'react'
import Head from 'next/head'
import AuthLayout from '../../components/AuthLayout'
import styles from "../../styles/AuthLogin.module.scss"
import Link from 'next/link'
import { signIn } from "next-auth/react"
import { useFormik } from 'formik'
import Login_validate from '../../components/lib/Validate'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const router = useRouter()

    // formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: Login_validate,
        onSubmit
    })

    async function onSubmit(values) {
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/admin"
        })
        if (status.ok) router.push(status.url);
    }
    // Google Handler function
    async function handleGoogleSignin() {
        signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/admin` })
    }
    async function handleGithubSignin() {
        signIn("github", { callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/admin` })
    }
    return (
        <AuthLayout>
            <Head>
                <title>Login</title>
            </Head>
            <section className={styles.login_form}>
                <div className={styles.title}>
                    <h1>Login your account?</h1>
                    <p>Try to log with your valid credentials!</p>
                </div>
                <form className={styles.loginForms} onSubmit={formik.handleSubmit}>
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
                    {/* login buttons */}
                    <div className={styles.input_button}>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className={styles.input_button}>
                    <button onClick={handleGoogleSignin} type="submit">Sign in with google <FontAwesomeIcon className={styles.icon} icon={faGoogle} /></button>
                </div>
                <div className={styles.input_button}>
                    <button onClick={handleGithubSignin} type="submit">Sign in with github <FontAwesomeIcon className={styles.icon} icon={faGithub} /></button>
                </div>
                <p className={styles.signUpText}>Don&rsquo;t have an account yet? <Link href="/authentication/register"><a className={styles.signUpLink}>sign up</a></Link></p>
            </section>
        </AuthLayout>
    )
}

export default Login
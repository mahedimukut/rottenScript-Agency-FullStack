import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from "../styles/ContactForm.module.scss"
import { motion } from 'framer-motion'

const Contact = ({ setClose }) => {
    const [success, setSuccess] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_why7vx8', 'template_g1xnv04', form.current, 'eUOXo6Tl9huOz_yuA')
            .then((result) => {
                setSuccess(true);
                setTimeout(() => {
                    e.target.reset();
                }, 2000)
                setTimeout(() => {
                    setClose(false)
                }, 4000)

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 0, y: -100 }} transition={{ duration: .3 }} className={styles.contact_form}>
            <div className={styles.title}>
                <h3>A Brand. A Family</h3>
                <span>Get in touch with us today!</span>
            </div>
            <form ref={form} className={styles.formC} onSubmit={sendEmail}>
                <div className={styles.item}>
                    <input required type="text" name="user_name" placeholder='Full name'></input>
                </div>
                <div className={styles.item}>
                    <input required type="email" name="user_email" placeholder='Email'></input>
                </div>
                <div className={styles.item}>
                    <input required type="text" name="user_phone" placeholder='Phone'></input>
                </div>
                <div className={styles.item}>
                    <textarea
                        rows={10}
                        type="text"
                        placeholder='Type your message here'
                        required
                        name="message"
                    />
                </div>
                <button type='submit'>Send a message</button>
                {success && <span className={styles.success}>Successfully submited!</span>}
            </form>
            <button onClick={() => setClose(false)} className={styles.closeB}>X</button>
        </motion.div>
    )
}

export default Contact
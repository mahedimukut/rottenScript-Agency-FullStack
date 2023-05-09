import styles from '../styles/HeaderBanar.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeaderBanar = ({ title, desc, img }) => {
    return (
        <div className={styles.headerDetails}>
            <div className={styles.container}>
                <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, }} transition={{ duration: .5 }} className={styles.title}>
                    <h1>{title}</h1>
                    <h3>{desc}</h3>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, }} transition={{ duration: .7 }} className={styles.info}>
                    <Image src={img} width={400} height={300} objectFit="contain" alt='' />
                </motion.div>
            </div>
        </div>
    )
}

export default HeaderBanar
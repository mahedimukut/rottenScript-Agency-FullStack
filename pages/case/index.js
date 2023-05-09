import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../../styles/Blogs.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import axios from 'axios'

const Blog = ({ Blogs }) => {

    const [blogs, setBlogs] = useState(Blogs);
    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible(preValue => preValue + 2);
    }

    return (
        <>
            <Head>
                <title>Read case studies | rottenScript</title>
            </Head>

            <div className={styles.blog_container}>
                <h1>Take a look at our recently posted cases!</h1>

                <div className={styles.blogs}>
                    {blogs.slice(0, visible).map((blog) => (
                        <motion.div initial={{ opacity: 0, y: -100, scale: 0 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: .3 }} key={blog._id} className={styles.single_blog}>
                            <div className={styles.image_container}>
                                <Link href={`/case/${blog._id}`}><Image src={blog.image_url} width={500} height={400} alt={blog.title} /></Link>
                            </div>
                            <div className={styles.text_container}>
                                <h3>{blog.title}</h3>
                                <span>{blog.desc.slice(0, 80)}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {visible < blogs.length ? (<div className={styles.button}>
                    <button onClick={showMoreItems}>Load more case</button>
                </div>) : <p style={{ textAlign: "center", color: "#292929", marginTop: "40px", }}>Sorry, no more case&rsquo;s available...</p>}
            </div>

        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cases`);
    return {
        props: {
            Blogs: res.data,
        },
    };
};

export default Blog
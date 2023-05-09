import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/SingleBlog.module.scss"

const BlogSingle = ({ singleBlogPost }) => {
    return (
        <>
            <Head>
                <title>{singleBlogPost.title}</title>
            </Head>
            <div className={styles.container_full}>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <Image src={singleBlogPost.image_url} alt="" layout="fill" />
                    </div>
                    <div className={styles.title}>
                        <h1>{singleBlogPost.title}</h1>
                    </div>
                    <div className={styles.desc}>
                        <p>{singleBlogPost.desc}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cases/${params.id}`);
    return {
        props:
        {
            singleBlogPost: res.data
        }
    }
}
export default BlogSingle
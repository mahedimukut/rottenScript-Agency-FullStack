import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import HeaderBanar from '../../components/HeaderBanar'
import styles from "../../styles/SingleBlog.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTag } from '@fortawesome/free-solid-svg-icons';

const BlogSingle = ({ singleBlogPost }) => {
    const createdDate = new Date(singleBlogPost.createdAt);
    return (
        <>
            <Head>
                <title>{singleBlogPost.title}</title>
            </Head>
            <HeaderBanar title={singleBlogPost.title} desc={singleBlogPost.desc.slice(0, 100) + "..."} img="/about/blogs.png" />
            <div className={styles.container_full}>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <Image src={singleBlogPost.image_url} alt="" layout="fill" />
                    </div>
                    <div className={styles.timeAgo}>
                        <span><FontAwesomeIcon icon={faClock} /> {createdDate.getFullYear() + "-" + (createdDate.getMonth() + 1) + "-" + createdDate.getDate()}</span>
                        <span><FontAwesomeIcon icon={faTag} /> Category: development</span>
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${params.id}`);
    return {
        props:
        {
            singleBlogPost: res.data
        }
    }
}
export default BlogSingle
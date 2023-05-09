import axios from 'axios';
import { useState } from 'react';
import styles from '../../styles/Admin.module.scss';
import { useRef } from 'react';
import Image from 'next/image';
import { getSession } from "next-auth/react"
import dbConnect from '../../utils/dbConnect';
import Auth from '../../models/Auth';

const Blog = ({ Blogs }) => {

    const [blogList, setblogList] = useState(Blogs);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [link_text, setLink_text] = useState(null);
    const [file, setFile] = useState(null);

    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDesc, setUpdatedDesc] = useState("");
    const [updatedLink, setUpdatedLink] = useState("");
    const [id, setId] = useState(null);

    const btitle = useRef(null);
    const desc = useRef(null);
    const bfile = useRef(null);

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/rottenscript/image/upload",
                data
            );
            const { url } = uploadRes.data;
            const newBlogPost = {
                title,
                description,
                link_text,
                image_url: url,
            };

            await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, newBlogPost);
            alert("Posted Successfully");
            e.target.reset();
        } catch (err) {
            alert("Error");
            console.log(err);
        }
    };

    const handleDelete = async (productID) => {
        try {
            const res = await axios.delete(
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/products/` + productID
            );
            setblogList(blogList.filter((blog) => blog._id !== productID));
            alert("Successfully Deleted!");
        } catch (error) {
            alert("Problem in deletion?");
            console.log(err);
        }
    }

    const handleUpdate = async (postId) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/` + postId);
            setUpdatedTitle(res.data.title);
            setUpdatedDesc(res.data.description);
            setUpdatedLink(res.data.link_text)

            setId(res.data._id);
        } catch (error) {
            console.log(error);
        }
    }
    const updateData = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/rottenscript/image/upload",
                data
            );
            const { url } = uploadRes.data;
            await axios.put(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/` + id, {
                title: updatedTitle,
                description: updatedDesc,
                link_text: updatedLink,
                image_url: url
            });
        } catch (error) {
            alert("Problem occured?")
        }
        alert("Updated Successfully!");
    }

    return (
        <div className={styles.full_width}>
            <div className={styles.container}>

                {/* {Create a post} */}
                <form onSubmit={handleCreate}>
                    <h3>Add new product?</h3>
                    <div className={styles.item}>
                        <label className={styles.label}>Choose an image</label>
                        <input ref={bfile} type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Title</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Link</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setLink_text(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Desc</label>
                        <textarea
                            rows={6}
                            ref={desc}
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.addButton}>
                        Create
                    </button>
                </form>
                {/* {End of create a post} */}

                {/* {delete a post} */}
                <div className={styles.blogPost}>
                    <div className={styles.singleBlog}>
                        {blogList.map((singlePost) => (
                            <table key={singlePost._id}>
                                <tbody>
                                    <tr className={styles.trTitle}>
                                        <td>
                                            <Image
                                                src={singlePost.image_url}
                                                width={50}
                                                height={50}
                                                objectFit="cover"
                                                alt=""
                                            />
                                        </td>
                                        <td>{singlePost._id.slice(0, 5)}...</td>
                                        <td>{singlePost.title}</td>
                                        <td>
                                            <button onClick={() => handleUpdate(singlePost._id)} className={styles.button}>Edit</button>
                                            <button
                                                className={styles.button}
                                                onClick={() => handleDelete(singlePost._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                    </div>
                </div>
                {/* {delete a post} */}

                {/*Edit a post*/}
                <div className={styles.editPost}>
                    <form>
                        <div className={styles.item}>
                            <label className={styles.label}>Choose an image</label>
                            <input ref={bfile} type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Title</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedTitle}
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Link</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedLink}
                                onChange={(e) => setUpdatedLink(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Desc</label>
                            <textarea
                                rows={6}
                                type="text"
                                value={updatedDesc}
                                onChange={(e) => setUpdatedDesc(e.target.value)}
                            />
                        </div>
                        <button onClick={updateData} className={styles.addButton}>
                            Update
                        </button>
                    </form>
                </div>
                {/*End of edit a post*/}
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    const blogRes = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`);

    if (!session || session.user.email !== "mokot222@gmail.com") {
        return {
            redirect: {
                destination: '/admin',
                permanent: false
            }
        }
    }
    await dbConnect();
    const result = await Auth.findOne({ email: session.user.email });
    if (result.isAdmin == false) {
        return {
            redirect: {
                destination: '/admin',
                permanent: false
            }
        }
    }
    return {
        props: {
            Blogs: blogRes.data,
            session,
        },
    };
}

export default Blog
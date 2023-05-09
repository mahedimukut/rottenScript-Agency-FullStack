import axios from 'axios';
import { useState } from 'react';
import styles from '../../styles/Admin.module.scss';
import { useRef } from 'react';
import { getSession } from "next-auth/react"
import dbConnect from '../../utils/dbConnect';
import Auth from '../../models/Auth';

const Blog = ({ Blogs }) => {

    const [blogList, setblogList] = useState(Blogs);
    const [title, setTitle] = useState(null);
    const [designation, setDesignation] = useState(null);
    const [comment, setComment] = useState(null);

    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDesignation, setUpdatedDesignation] = useState("");
    const [updatedComment, setUpdatedComment] = useState("");
    const [id, setId] = useState(null);

    const btitle = useRef(null);
    const description = useRef(null);

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const newBlogPost = {
                title,
                designation,
                comment
            };

            await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials`, newBlogPost);
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
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials/` + productID
            );
            setblogList(blogList.filter((blog) => blog._id !== productID));
            alert("Successfully Deleted!");
        } catch (error) {
            alert("Problem in deletion?");
            console.log(error);
        }
    }

    const handleUpdate = async (postId) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials/` + postId);
            setUpdatedTitle(res.data.title);
            setUpdatedDesignation(res.data.designation);
            setUpdatedComment(res.data.comment);
            setId(res.data._id);
        } catch (error) {
            console.log(error);
        }
    }
    const updateData = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials/` + id, {
                title: updatedTitle,
                designation: updatedDesignation,
                comment: updatedComment,
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
                    <h3>Add new testimonial?</h3>
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
                        <label className={styles.label}>Designation</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setDesignation(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Comment</label>
                        <textarea
                            rows={6}
                            ref={description}
                            type="text"
                            onChange={(e) => setComment(e.target.value)}
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
                            <label className={styles.label}>Name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedTitle}
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Designation</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedDesignation}
                                onChange={(e) => setUpdatedDesignation(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Desc</label>
                            <textarea
                                rows={6}
                                type="text"
                                value={updatedComment}
                                onChange={(e) => setUpdatedComment(e.target.value)}
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
    const blogRes = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials`);

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
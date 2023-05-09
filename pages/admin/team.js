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
    const [name, setName] = useState(null);
    const [designation, setDesignation] = useState(null);
    const [facebook, setFacebook] = useState(null);
    const [twitter, setTwitter] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [linkedin, setLinkedin] = useState(null);
    const [github, setGithub] = useState(null);

    const [file, setFile] = useState(null);

    const [updatedName, setUpdatedName] = useState("");
    const [updatedDesignation, setUpdatedDesignation] = useState("");
    const [updatedFacebook, setUpdatedFacebook] = useState("");
    const [updatedTwitter, setUpdatedTwitter] = useState("");
    const [updatedInstagram, setUpdatedInstagram] = useState("");
    const [updatedLinkedin, setUpdatedLinkedin] = useState("");
    const [updatedGithub, setUpdatedGithub] = useState("");

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
                name,
                designation,
                image_url: url,
                facebook,
                twitter,
                instagram,
                linkedin,
                github
            };

            await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams`, newBlogPost);
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
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/` + productID
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
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/` + postId);
            setUpdatedName(res.data.name);
            setUpdatedDesignation(res.data.designation);
            setUpdatedFacebook(res.data.facebook);
            setUpdatedTwitter(res.data.twitter);
            setUpdatedInstagram(res.data.twitter);
            setUpdatedLinkedin(res.data.linkedin);
            setUpdatedGithub(res.data.github);
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
            await axios.put(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/` + id, {
                name: updatedName,
                designation: updatedDesignation,
                facebook: updatedFacebook,
                twitter: updatedTwitter,
                instagram: updatedInstagram,
                linkedin: updatedLinkedin,
                github: updatedGithub,
                image_url: url,
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
                        <label className={styles.label}>Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setName(e.target.value)}
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
                        <label className={styles.label}>Facebook name</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setFacebook(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Twitter name</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setTwitter(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Instagram name</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setInstagram(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Linkedin name</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setLinkedin(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Github name</label>
                        <input
                            className={styles.input}
                            type="text"
                            ref={btitle}
                            onChange={(e) => setGithub(e.target.value)}
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
                            <label className={styles.label}>Name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedName}
                                onChange={(e) => setUpdatedName(e.target.value)}
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
                            <label className={styles.label}>Update facebook name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedFacebook}
                                onChange={(e) => setUpdatedFacebook(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Update twitter name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedTwitter}
                                onChange={(e) => setUpdatedTwitter(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Update instagram name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedInstagram}
                                onChange={(e) => setUpdatedInstagram(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Update linkedin name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedLinkedin}
                                onChange={(e) => setUpdatedLinkedin(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Update github name</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={updatedGithub}
                                onChange={(e) => setUpdatedGithub(e.target.value)}
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
    const blogRes = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams`);

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
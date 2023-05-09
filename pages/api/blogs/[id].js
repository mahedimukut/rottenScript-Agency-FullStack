import Blog from "../../../models/Blog";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const blog = await Blog.findById(id);
            res.status(201).json(blog);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    if (method === "PUT") {
        try {
            const blog = await Blog.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === "DELETE") {
        try {
            await Blog.findByIdAndDelete(id);
            res.status(200).json("Post successfully deleted!")
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
import Blog from "../../../models/Blog";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const blog = await Blog.find();
            res.status(201).json(blog);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    if (method === "POST") {
        try {
            const blog = await Blog.create(req.body);
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
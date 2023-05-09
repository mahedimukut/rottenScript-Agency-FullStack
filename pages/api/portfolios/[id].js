import Portfolio from "../../../models/Portfolio";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const portfolio = await Portfolio.findById(id);
            res.status(201).json(portfolio);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    if (method === "PUT") {
        try {
            const portfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(portfolio);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === "DELETE") {
        try {
            await Portfolio.findByIdAndDelete(id);
            res.status(200).json("Post successfully deleted!")
        } catch (error) {
            res.status(500).json(err);
        }
    }
}
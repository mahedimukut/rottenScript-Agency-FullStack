import Portfolio from "../../../models/Portfolio";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const portfolio = await Portfolio.find();
            res.status(201).json(portfolio);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    if (method === "POST") {
        try {
            const portfolio = await Portfolio.create(req.body);
            res.status(200).json(portfolio);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
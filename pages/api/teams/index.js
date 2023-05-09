import Team from "../../../models/Team";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const team = await Team.find();
            res.status(201).json(team);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    if (method === "POST") {
        try {
            const team = await Team.create(req.body);
            res.status(200).json(team);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
import Team from "../../../models/Team";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const team = await Team.findById(id);
            res.status(201).json(team);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    if (method === "PUT") {
        try {
            const team = await Team.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(team);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === "DELETE") {
        try {
            await Team.findByIdAndDelete(id);
            res.status(200).json("Post successfully deleted!")
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
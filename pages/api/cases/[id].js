import CaseStudies from "../../../models/CaseStudies";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const caseStudies = await CaseStudies.findById(id);
            res.status(201).json(caseStudies);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    if (method === "PUT") {
        try {
            const caseStudies = await CaseStudies.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(caseStudies);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === "DELETE") {
        try {
            await CaseStudies.findByIdAndDelete(id);
            res.status(200).json("Post successfully deleted!")
        } catch (error) {
            res.status(500).json(err);
        }
    }
}
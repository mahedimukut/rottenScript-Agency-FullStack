import CaseStudies from "../../../models/CaseStudies";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const caseStudies = await CaseStudies.find();
            res.status(201).json(caseStudies);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    if (method === "POST") {
        try {
            const caseStudies = await CaseStudies.create(req.body);
            res.status(200).json(caseStudies);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
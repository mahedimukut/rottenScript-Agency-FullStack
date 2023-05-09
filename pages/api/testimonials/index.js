import Testimonial from "../../../models/Testimonial";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const testimonial = await Testimonial.find();
            res.status(201).json(testimonial);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    if (method === "POST") {
        try {
            const testimonial = await Testimonial.create(req.body);
            res.status(200).json(testimonial);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
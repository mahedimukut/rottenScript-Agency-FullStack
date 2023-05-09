import Testimonial from "../../../models/Testimonial";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const testoMoAdd = await Testimonial.findById(id);
            res.status(201).json(testoMoAdd);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    if (method === "PUT") {
        try {
            const testoMoAdd = await Testimonial.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(testoMoAdd);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === "DELETE") {
        try {
            await Testimonial.findByIdAndDelete(id);
            res.status(200).json("Post successfully deleted!")
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
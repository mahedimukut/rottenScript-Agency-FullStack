import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link_text: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);
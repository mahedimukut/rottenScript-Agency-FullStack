import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
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
    }
}, { timestamps: true }
)

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a titile for this post.'],
        maxlength: [100, 'Name cannot be more than 60 characters'],
    },
    desc: {
        type: String,
        required: [true, "Please provide a description for this post."],
    },
    image_url: {
        type: String,
        required: [true, "Please upload an image"],
    }
}, { timestamps: true }
)

export default mongoose.models.Case || mongoose.model("Case", CaseSchema);
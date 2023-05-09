import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    }
}, { timestamps: true }
)

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);
import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username.'],
        maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please create a strong password"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }
)

export default mongoose.models.Auth || mongoose.model("Auth", AuthSchema);
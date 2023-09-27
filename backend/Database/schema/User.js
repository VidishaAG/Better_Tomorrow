import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rating: {
        type: Number,
        default: 0
    },
});

const User = new mongoose.model("User", userSchema);

export default User;
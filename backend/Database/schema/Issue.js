import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    name: String,
    email: String,
    heading: String,
    description: String,
    votes: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: new Date
    }
});

const Issue = new mongoose.model("Issue", issueSchema);

export default Issue;
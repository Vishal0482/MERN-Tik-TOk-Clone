import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    message: String,
    description: String,
    share: String
});

export default mongoose.model('tiktokVideos', tiktokSchema);
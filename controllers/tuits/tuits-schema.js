import mongoose from 'mongoose';
const schema = mongoose.Schema({avatar: String,
    userName: String,
    handle: String,
    time: String,
    title: String,
    images: String,
    imageTitle: String,
    imageDescription: String,
    imageLink: String,
    comments: Number,
    retuits: Number,
    likes: Number,
    liked: Boolean,
    disliked: Boolean,
    dislikes: Number
}, {collection: 'tuits'});
export default schema;
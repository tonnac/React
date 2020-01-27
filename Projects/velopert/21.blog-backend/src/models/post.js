import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostScheme = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostScheme);
export default Post;

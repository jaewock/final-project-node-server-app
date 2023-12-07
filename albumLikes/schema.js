import mongoose from "mongoose";

const albumLikesSchema = new mongoose.Schema(
  {
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "albums",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    albumId: String,
  },
  { collection: "albumLikes" }
);

export default albumLikesSchema;

import albumLikesSchema from "./schema.js";
import mongoose from "mongoose";

const albumLikesModel = mongoose.model("albumLikes", albumLikesSchema);

export default albumLikesModel;

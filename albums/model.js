import albumSchema from "./schema.js";
import mongoose from "mongoose";

const albumModel = mongoose.model("albums", albumSchema);

export default albumModel;

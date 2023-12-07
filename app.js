import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import UserRoutes from "./users/routes.js";
import AlbumLikesRoutes from "./albumLikes/routes.js";
import FollowsRoutes from "./follows/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

UserRoutes(app);
AlbumLikesRoutes(app);
FollowsRoutes(app);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on port " + (process.env.PORT || 4000));
});

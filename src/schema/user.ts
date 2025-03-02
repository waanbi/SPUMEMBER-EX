import mongoose from "mongoose";

const userChemas = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    birthDate: String,
    idCard: String,
    email: String,
    password: String,
    username : String,
  },
  { timestamps: true }
);

export const users = mongoose.model("users", userChemas, "users");
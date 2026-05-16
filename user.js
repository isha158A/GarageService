import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },

    myList: [
      {
        id: { type: Number },
        title: { type: String },
        poster_path: { type: String },
        vote_average: { type: Number }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
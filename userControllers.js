import User from "../models/user.js";
import mongoose from "mongoose";
export const addToMyList = async (req, res) => {
  try {
    const userId = req.user._id;
    const movie = req.body;

    console.log("MOVIE RECEIVED:", movie);
    console.log("USER ID:", userId);

    const user = await User.findById(userId);
    console.log("USER FOUND:", user ? "yes" : "no");
    console.log("EXISTING LIST:", user.myList);

    const alreadyExists = user.myList.find(m => m.id === Number(movie.id));
    if (alreadyExists) return res.json({ success: false, message: "Already in list" });

    const updated = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          myList: {
            id: Number(movie.id),
            title: movie.title,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average
          }
        }
      },
      { new: true }
    );

    console.log("UPDATED LIST LENGTH:", updated.myList.length);
    console.log("UPDATED LIST:", updated.myList);

    const verify = await User.findById(userId);
    console.log("VERIFY AFTER SAVE:", verify.myList.length);
    console.log("DB NAME:", mongoose.connection.name);
    console.log("COLLECTION:", User.collection.name);

    res.json({ success: true, myList: updated.myList });

  } catch (err) {
    console.log("ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
};
export const removeFromMyList = async (req, res) => {
  try {
    const userId = req.user._id;
    const movieId = Number(req.params.id);

    const updated = await User.findByIdAndUpdate(
      userId,
      { $pull: { myList: { id: movieId } } },
      { new: true }
    );

    res.json({ success: true, myList: updated.myList });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyList = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    console.log("GET USER:", req.user._id);
    console.log("LIST LENGTH:", user.myList.length);
    res.json({ success: true, myList: user.myList });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
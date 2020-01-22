const mongoose = require("mongoose");

const ReviewModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, maxlength: 200, required: true }
});

ReviewModel.methods = {};

ReviewModel.pre("save", function(next) {
  next();
});

const Review = mongoose.model("Review", ReviewModel);

exports.Review = Review;

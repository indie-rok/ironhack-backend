const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String, rxequired: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

RoomSchema.methods = {};

RoomSchema.pre("save", function(next) {
  next();
});

const Room = mongoose.model("Room", RoomSchema);

exports.Room = Room;

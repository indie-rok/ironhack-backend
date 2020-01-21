const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", reuqired: true },
  reviews: [] // we will update this field a bit later when we create review model
});

RoomSchema.methods = {};

RoomSchema.pre("save", function(next) {
  next();
});

const Room = mongoose.model("Room", RoomSchema);

exports.Room = Room;

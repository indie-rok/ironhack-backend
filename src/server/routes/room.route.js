const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Room } = require("../database/models/room.model");
const { isAuthorized } = require("../passport/auth");
const { userIsOwner } = require("../helpers/rooms");

router.post("/", [isAuthorized], (req, res, next) => {
  const { name, description, imageUrl } = req.body;
  const { user } = req;

  const newRoom = new Room({
    name,
    description,
    imageUrl,
    owner: user
  });

  newRoom.save((err, savedRoom) => {
    if (err) return res.status(400).json(err);
    return res.status(201).json(savedRoom);
  });
});

router.get("/", (req, res, next) => {
  Room.find({})
    .limit()
    .select("name description imageUrl owner")
    .then(rooms => {
      return res.send({ rooms });
    })
    .catch(err => {
      return res.status(400).send({ msg: err });
    });
});

router.delete("/:room_id", [isAuthorized, userIsOwner], (req, res, next) => {
  if (mongoose.Types.ObjectId.isValid(req.params.room_id)) {
    Room.findOneAndRemove({ _id: req.params.room_id })
      .then(response => {
        return res.status(204).send({});
      })
      .catch(err => {
        console.log(err);
        return res.send(400).send({ msg: "error while deleting id" });
      });
  } else {
    res.status(400).send({ msg: "invalid id" });
  }
});

router.get("/:room_id", (req, res, next) => {
  if (mongoose.Types.ObjectId.isValid(req.params.room_id)) {
    Room.findOne({ _id: req.params.room_id })
      .then(room => {
        return res.send(room);
      })
      .catch(err => {
        console.log(err);
        return res.send(400).send({ msg: "error while deleting id" });
      });
  } else {
    res.status(400).send({ msg: "invalid id" });
  }
});

router.patch("/:room_id", [isAuthorized, userIsOwner], (req, res, next) => {
  const { name, description, imageUrl } = req.body;

  if (mongoose.Types.ObjectId.isValid(req.params.room_id)) {
    Room.findOneAndUpdate(
      { _id: req.params.room_id },
      { name, description, imageUrl }
    )
      .then(room => {
        return res.send(room);
      })
      .catch(err => {
        return res.send(400).send({ msg: "error while deleting id" });
      });
  } else {
    res.status(400).send({ msg: "invalid id" });
  }
});

module.exports = router;

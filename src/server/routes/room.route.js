const express = require("express");
const router = express.Router();
const { Room } = require("../database/models/room.model");

router.post("/", (req, res, next) => {
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
    .then(movies => {
      return res.send({ movies });
    })
    .catch(err => {
      return res.status(400).send({ msg: err });
    });
});

module.exports = router;

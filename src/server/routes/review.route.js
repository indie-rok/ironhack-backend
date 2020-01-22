const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Review } = require("../database/models/review.model");
const { Room } = require("../database/models/room.model");
const { isAuthorized } = require("../passport/auth");
const { userIsOwner } = require("../helpers/rooms");

router.post("/:room_id", [isAuthorized], (req, res, next) => {
  const { room_id } = req.params;
  const { comment } = req.body;
  const { user } = req;

  const newReview = new Review({
    comment,
    user
  });

  Room.findOneAndUpdate(
    { _id: room_id },
    { $push: { reviews: newReview } },
    function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    }
  );

  res.send({});
});

module.exports = router;

const { Room } = require("../database/models/room.model");

module.exports.userIsOwner = (req, res, next) => {
  const { room_id } = req.params;
  const { _id } = req.user;

  Room.findById(room_id)
    .then(room => {
      const { owner } = room;

      if (String(owner) === String(req.user._id)) {
        next();
      } else {
        res.status(401).send({ msj: "not authorized to do this action" });
      }
    })
    .catch(err => {
      res.status(400).send({ msg: "error getting the room" });
    });
  console.log(room_id, _id);
};

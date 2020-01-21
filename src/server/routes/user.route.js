const express = require("express");
const router = express.Router();
const { User } = require("../database/models/user.model");
const passport = require("../passport");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.status(400).json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.status(400).json(err);
        res.status(201).json(savedUser);
      });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    const userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

router.get("/", (req, res, next) => {
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    res.status(404).json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.status(204).send();
  } else {
    res.status(400).send({ msg: "no user to log out" });
  }
});

module.exports = router;

const express = require("express");
const os = require("os");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://indie-rok:Cheers2u@ironhack-test-rqer6.gcp.mongodb.net/ironhack?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

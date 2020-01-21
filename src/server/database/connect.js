const mongoose = require("mongoose");
// so we dont have console errors on wrong promises
mongoose.Promise = global.Promise;

//this should be stored in secure env variable but not for now
const uri =
  "mongodb+srv://indie-rok:Cheers2u@ironhack-test-rqer6.gcp.mongodb.net/ironhack?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log("Connected to Mongo");
  },
  err => {
    /** handle initial connection error */
    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database/connect");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const PORT = 8080;

const user = require("./routes/user.route");

// used for better logs
app.use(morgan("dev"));

// used for express to understand req.body
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//use so express can understand json
app.use(bodyParser.json());

// Sessions for passport
app.use(
  session({
    secret: "cookies", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/api/user", user);

// used for production build
app.use(express.static("dist"));

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

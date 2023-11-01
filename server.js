const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mainRoutes = require("./src/routes/index");
const passport = require('./src/config/passportAuth'); // Import passport configuration
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const init = () => {
  try {
    app.use(
        session({
          secret: "dave-is-cool",
          resave: true,
          saveUninitialized: true,
        })
      );  

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use("/", mainRoutes);

    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}`);
    });
  } catch (error) {
    console.error("Server initialization failed:", error.message);
    console.error(error.stack);
  }
};

init();

module.exports = { app };

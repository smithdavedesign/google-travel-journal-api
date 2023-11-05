const express = require("express");
const session = require("express-session");
const mainRoutes = require("./src/routes/index");
const mapsRoutes = require("./src/routes/maps");
const passport = require('./src/config/passportAuth'); // Import passport configuration
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
    
    app.use("/", mainRoutes);
    app.use("/maps", mapsRoutes);


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

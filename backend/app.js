const express = require("express");
const app = express();
const colors = require("colors");

// route
const UserRoute = require("./routes/user.route");

// env config
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

// connected to DB
const connectedDB = require("./db/connect");
connectedDB();

// middleware
app.use(express.json());
app.use("/api/users", UserRoute);

// listen app
app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});

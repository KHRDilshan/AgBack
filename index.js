// Import packages
const express = require("express");
const home = require("./routes/home");
const user = require("./routes/users");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);
app.use("/user", user);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

const dotenv = require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const { errorHandler } = require("./middlewares/errorMiddleware");

// ! Initiating the app
const app = express();

// ! so that we can accept the json and url encoded body in the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ! Routes
app.use("/api/goals", require("./routes/goalRoutes.js"));

// ! using the error handler middleware
app.use(errorHandler);

app.listen(port, () => console.log(`App is running on port number ${port}`));

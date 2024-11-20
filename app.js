const express = require('express');
const app = express();

const dotenv = require("dotenv").config();
const port = process.env.PORT

// Connect to the database
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));   

// Parse requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
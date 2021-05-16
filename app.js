const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const TodoController = require("./controller/TodoController");

// Declire port
const port = process.env.PORT || 5000;

// Initilized application
const app = express();
app.use(express.json());
app.use(cors());

// Connect Database
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s0sj8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

//   Server status
app.get("/", (req, res) => {
  res.status(200).json("Server running");
});

// Routes
app.use("/todos", TodoController);

// Listen
app.listen(port, () => {
  console.log("Listening on port ", port);
});

const express = require("express");
const router = express.Router();
const Todo = require("../model/Todo");

// Get all todo
router.get("/", async (req, res) => {
  try {
    const data = await Todo.find({});
    res.status(200).json({
      data: data,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Get user todo
router.get("/:email", async (req, res) => {
  try {
    const data = await Todo.find({ email: req.params.email });
    res.status(200).json({
      data: data,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Store a Todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json({
      message: "Todo saved",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Todo status change
router.put("/updateStatus/:id", async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.params.id }, { $set: { status: 1 } });
    res.status(200).json({
      message: "Task completed",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Todo priority change
router.put("/updatePriority/:id", async (req, res) => {
  try {
    await Todo.updateOne(
      { _id: req.params.id },
      { $set: { priority: req.body.value } }
    );
    res.status(200).json({
      message: "Priority updated",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Todo priority change
router.put("/updateTodo/:id", async (req, res) => {
  try {
    await Todo.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.status(200).json({
      message: "Todo updated",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Delete Todo
router.delete("/delete/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Ops.... Somthing else. ",
    });
  }
});

module.exports = router;

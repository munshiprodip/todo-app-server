const mongoose = require("mongoose");

// Model schema
const todoSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  priority: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model using schema
const Todo = new mongoose.model("Todo", todoSchema);

// Export model
module.exports = Todo;

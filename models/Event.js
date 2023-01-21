const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
 

  amount: {
    type: Number,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", EventSchema);

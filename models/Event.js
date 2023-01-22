const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  // type: {
  //   type: String,
  //   enum:['School','Investment'],
  // },
  amount: {
    type: String,  
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

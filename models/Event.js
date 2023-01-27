const mongoose = require("mongoose");
// Add the  variables for the new events added EXAMPLE:Personal
const EventSchema = new mongoose.Schema({
  type: {
    type: String,
   
  },
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

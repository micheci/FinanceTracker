const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  type: {
    type: String,
    
  },
 

  amount: {
    type: Number,
   
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

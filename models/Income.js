const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
 
  income: {
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

module.exports = mongoose.model("Income", IncomeSchema);

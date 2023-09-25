const mongoose = require("mongoose");

// STEP 2 CREATE YOUR SCHEMA
const otherFruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  readyToEat: {
    type: Boolean,
  },
});

// STEP 3 CREATE YOUR MODEL USING SCHEMA
const OtherFruit = mongoose.model("OtherFruit", otherFruitSchema);

// STEP 4 EXPORT YOUR NEWLY CREATED MODEL
module.exports = OtherFruit;

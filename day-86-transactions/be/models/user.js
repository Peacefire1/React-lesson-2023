const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Name"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

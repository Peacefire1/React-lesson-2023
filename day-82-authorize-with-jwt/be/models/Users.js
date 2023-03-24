const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Enter the First name"],
  },
  lastname: {
    type: String,
    required: [true, "Enter the Last Name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    miimum: 0,
  },
  address: {
    type: String,
    required: [true, "Enter the address"],
  },
  userrole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRole",
  },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

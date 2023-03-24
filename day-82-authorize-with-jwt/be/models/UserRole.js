const mongoose = require("mongoose");

// admin hereglegch bol buh erhtei bn

// custoer hereglegch bol admin panel ruu nevterch chadahgui hereglegch bn

// user hereglegch n zarim neg admin panel dr ustgah uurchluh esvel uusgeh erhgui bn

const UserRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Role Name"],
    unique: true,
  },
});

const UserRole = mongoose.model("UserRole", UserRoleSchema);

module.exports = UserRole;

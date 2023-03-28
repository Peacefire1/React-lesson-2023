const mongoose = require("mongoose");

const shippingAddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Enter the address"],
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const ShippingAddress = mongoose.model(
  "shippingaddress",
  shippingAddressSchema
);

module.exports = ShippingAddress;

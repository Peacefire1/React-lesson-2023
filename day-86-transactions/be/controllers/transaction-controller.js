const Product = require("../models/Product");
const ShippingAddress = require("../models/shippingAddress");
const User = require("../models/user");

exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const product = await Product.updateOne(
      {
        _id: "64225b7690cd7606f2d35145",
      },
      {
        $inc: { quantity: -2 },
      },
      { session }
    );

    const user = await User.create(req.body.user, { session });
    const shippingAddress = await ShippingAddress.create(
      req.body.ShippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createTransactionWithOutSession = async (req, res) => {
  try {
    const product = await Product.updateOne(
      {
        _id: "64225b7690cd7606f2d35145",
      },
      {
        $inc: { quantity: -2 },
      }
    );
    const user = await User.create(req.body.user);
    const shippingAddress = await ShippingAddress.create({
      address: req.body.shippingAddress,
      user_id: user._id,
    });
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};

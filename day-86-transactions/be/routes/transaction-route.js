const { Router } = require("express");

const {
  createTransaction,
  createTransactionWithOutSession,
} = require("../controllers/transaction-controller");
const route = Router();

route.post("/shipping", createTransaction);
route.post("/shippingwithouttransaction", createTransactionWithOutSession);

module.exports = route;

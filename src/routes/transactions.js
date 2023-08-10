const express = require("express");
const router = express.Router();
const controller = require("../controller/transactions");

router.get("/transactions", (req, res) => {
  res.send("Transaction API Alive");
});
router.post("/transactions", controller.addTransactions);

module.exports = router;

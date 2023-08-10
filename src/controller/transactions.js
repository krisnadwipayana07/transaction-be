const repository = require("../repository/transactions");

async function addTransactions(req, res) {
  try {
    const data = await repository.insertTransaction(req);
    res.json(data);
  } catch (error) {
    res.status(500).send("Error Inputing Data");
  }
}

module.exports = {
  addTransactions,
};

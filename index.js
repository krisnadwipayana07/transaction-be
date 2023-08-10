require("dotenv").config();

//Route Import
const pingRouter = require("./src/routes/ping");
const transactionsRouter = require("./src/routes/transactions");

//constant
const { json } = require("express");
const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT;

app.use(json());
app.use(cors());

app.use("/", pingRouter);
app.use("/api", transactionsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

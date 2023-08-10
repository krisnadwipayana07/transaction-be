const mysql = require("mysql2");
const database = mysql.createConnection(process.env.DB_LINK);

database.connect(function (error) {
  if (!error) {
    console.log("connected to db");
    return;
  }
  console.error("error connecting to DB:" + error);
});

module.exports = database;

const database = require("../database/mysql");

const insertTransaction = async (req) => {
  const promise = new Promise((resolve, reject) => {
    const data = req.body;
    console.log(data);
    database.query(
      `
            INSERT INTO transactions(name, total, type)
            VALUES("${data.name}", ${data.total}, ${data.type});
        `,
      (err, res) => {
        if (err) {
          console.error("err querying database: " + err);
          reject(err);
        }
        resolve("ok");
      }
    );
  });
  return promise;
};

module.exports = {
  insertTransaction,
};

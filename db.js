const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  // Function to establish connection to DB
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/bookStore")
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  //   Function to get data from DB
  getDb: () => {
    return dbConnection;
  },
};

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const databaseConnector = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Mongo Connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = databaseConnector;

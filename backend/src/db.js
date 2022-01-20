const mongoose = require("mongoose");
let mongoURL =
  "mongodb+srv://dota:cjSfbiaHgkiSxgyR@cluster0.dilry.mongodb.net/MernStack?retryWrites=true&w=majority";

mongoose.connect(mongoURL);

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("Mongodb Connection Failed");
});

dbconnect.on("connected", () => {
  console.log("Mongodb Connection Connect");
});

module.exports = mongoose;

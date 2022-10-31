require("dotenv").config();

const mongoose = require("mongoose");

const ConnectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.oddnlmn.mongodb.net/ecommerceapp?retryWrites=true&w=majority`;

mongoose
  .connect(ConnectionStr, { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
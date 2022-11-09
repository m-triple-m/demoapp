const { Schema, model } = require("../connection");

const schema = new Schema({
  username: String,
  email: String,
  password: String,
  createdAt: Date,
});

module.exports = model("users", schema);

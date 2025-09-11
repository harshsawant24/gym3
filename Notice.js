const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: String,
  desc: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notice", noticeSchema);

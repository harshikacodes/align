const mongoose = require("mongoose");
const URI = require("../../env.js");

const connectDB = async () => {
    await mongoose.connect(URI);
};

module.exports = connectDB;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Sudhakara's MongoDB ~ Connected`);
  } catch (error) {
    console.log("Mongo DB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
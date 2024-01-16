const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  console.log("process.env.MONGO_URL", process.env.MONGO_URL);
  try {
    await mongoose.connect(process.env.MONGO_URL, {});

    console.log("Connected to the database");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
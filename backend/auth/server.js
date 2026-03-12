require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Auth service connected to MongoDB");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Auth service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error:", err);
  });
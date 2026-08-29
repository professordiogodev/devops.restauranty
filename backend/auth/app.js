const express = require("express");
const app = express();

// body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// routes
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);

  res.status(500).json({
    message: err.message
  });
});

module.exports = app;
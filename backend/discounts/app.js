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
const discountRoutes = require("./routes/discounts.routes");
app.use("/discounts", discountRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);

  res.status(500).json({
    message: err.message
  });
});

module.exports = app;
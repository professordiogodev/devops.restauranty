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
const itemsRoutes = require("./routes/items.routes");
app.use("/items", itemsRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);
  console.error(err.stack);

  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = app;
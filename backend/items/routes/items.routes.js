const express = require("express");
const router = express.Router();

const Item = require("../models/Item.model");
const fileUploader = require("../config/cloudinary.config");

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE item with image
router.post("/", fileUploader.single("image"), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const itemData = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.file ? [req.file.path] : []
    };

    const newItem = await Item.create(itemData);

    res.status(201).json(newItem);

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
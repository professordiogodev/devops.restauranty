const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

const saltRounds = 10;



// SIGNUP
router.post("/signup", async (req, res) => {
  try {

    const { name, surname, email, password, address, phoneNumber } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Email, password and name are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      name,
      surname,
      email,
      password: hashedPassword,
      address,
      phoneNumber
    });

    res.status(201).json(newUser);

  } catch (err) {
    res.status(500).json(err);
  }
});



// LOGIN
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({
        message: "Incorrect password"
      });
    }

    const payload = {
      _id: user._id,
      email: user.email,
      name: user.name
    };

    const token = jwt.sign(payload, process.env.SECRET, {
      algorithm: "HS256",
      expiresIn: "6h"
    });

    res.json({
      authToken: token
    });

  } catch (err) {
    res.status(500).json(err);
  }
});



// VERIFY TOKEN
router.get("/verify", isAuthenticated, (req, res) => {
  res.json(req.payload);
});


module.exports = router;
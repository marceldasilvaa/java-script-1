const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// register user and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  // check if the user already exists
  if (user) {
    return res
      .status(422)
      .json({ errors: ["Por favor, utilize outro email."] });
  }

  // generate password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  // create user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  // if user was created successfully, return the token
  if (!newUser) {
    return res.status(422).json({
      errors: ["Houve um erro, por favor tente mais tarde."],
    });
  } else {
    return res.status(201).json({
      _id: newUser._id,
      token: generateToken(newUser._id),
    });
  }
};

module.exports = {
  register,
};

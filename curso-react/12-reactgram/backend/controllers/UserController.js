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

// sign user in
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // check if user exists
  if (!user) {
    return res.status(404).json({ errors: ["Usuário não encontrado."] });
  }

  // check if password matches
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(422).json({ errors: "Senha inválida." });
  } else {
    // return user with token
    return res.status(201).json({
      _id: user._id,
      profileImage: user.profileImage,
      token: generateToken(user._id),
    });
  }
};

// get current logged in user
const getCurrentUser = async (req, res) => {
  const user = req.user;

  return res.status(200).json(user);
};

// update an user
const update = async (req, res) => {
  res.send("Update");
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
};

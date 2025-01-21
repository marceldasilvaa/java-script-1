const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

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
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const userReq = req.user;

  console.log(userReq._id);

  const user = await User.findById(
    new mongoose.Types.ObjectId(userReq._id)
  ).select("-password");

  if (name) {
    user.name = name;
  }

  if (password) {
    // generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    user.password = passwordHash;
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  await user.save();

  res.status(200).json(user);
};

// get user by id
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(new mongoose.Types.ObjectId(id)).select(
      "-password"
    );

    // check if user exists
    if (!user) {
      return res.status(404).json({ errors: ["Usuário não encontrado 2."] });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ errors: ["Usuário não encontrado."] });
  }
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
};

const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const title = req.title;
  const image = req.file.filename;

  const userReq = req.user;

  const user = await User.findById(userReq._id);

  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  // if photo was successfully, return data
  if (!newPhoto) {
    return res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."],
    });
  }

  res.status(201).json(newPhoto);
};

// remove a photo from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const userReq = req.user;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    // check if photo exists
    if (!photo) {
      return res.status(404).json({ errors: ["Foto não encontrada."] });
    }

    // check if photo belongs to user
    if (!photo.userId.equals(userReq._id)) {
      return res.status(422).json({
        errors: ["Houve um erro, por favor tente novamente mais tarde."],
      });
    }

    await Photo.findByIdAndDelete(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluída com sucesso." });
  } catch (error) {
    return res.status(404).json({ errors: ["Foto não encontrada."] });
  }
};

module.exports = {
  insertPhoto,
  deletePhoto,
};

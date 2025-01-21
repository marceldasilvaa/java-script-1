const express = require("express");
const router = express.Router();

// middlewares
const { photoInsertValidation } = require("../middlewares/PhotoValidations");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// controller
const { insertPhoto } = require("../controllers/PhotoController");

// routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

module.exports = router;

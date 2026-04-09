const express = require("express");
const AuthController = require("../../controller/AuthController");
const ValidationMiddleware = require("../../middlewares/ValidationMiddleware");
const AuthValidation = require("../../validations/AuthValidation");
const AuthMiddleware = require("../../middlewares/AuthMiddleware");
const router = express.Router();
 

router.route("/login")
.post(AuthValidation.loginUser, ValidationMiddleware,  AuthController.loginUser)


router.route("/register")
.post(AuthValidation.registerUser , ValidationMiddleware, AuthController.registerUser)

router.route("/profile")
.get( AuthMiddleware, AuthController.profileUser)

module.exports = router;
const express = require("express");
const AuthController = require("../../controller/AuthController");
const ValidationMiddleware = require("../../middlewares/ValidationMiddleware");
const AuthValidation = require("../../validations/AuthValidation");
const router = express.Router();
 

router.route("/login")
.post(AuthValidation.loginUser, ValidationMiddleware,  AuthController.loginUser)


router.route("/register")
.post(AuthValidation.registerUser , ValidationMiddleware, AuthController.registerUser)

 
module.exports = router;
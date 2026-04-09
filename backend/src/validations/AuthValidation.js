const {body} = require("express-validator");


class AuthValidation {
    static loginUser=[
        body("email").notEmpty().withMessage("Email is required"),
        body("password").notEmpty().withMessage("Password is required"),
    ]



    static registerUser=[
        body("name").notEmpty().withMessage("Name is required"),
        body("email").notEmpty().withMessage("Email is required"),
        body("password").notEmpty().withMessage("Password is required"),
        body("ac_type").notEmpty().withMessage("Account type is required").isIn(['saving', 'current']).withMessage("Account should be saving or current account"),    
    ]

}

module.exports = AuthValidation;
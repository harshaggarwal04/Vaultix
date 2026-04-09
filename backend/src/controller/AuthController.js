const AuthService = require('../service/AuthService.js')

class AuthController {
    static async loginUser(req,res){
        const res_object = await AuthService.loginUser(req.body); 
        res.status(200).send(res_object);
    }

    static async registerUser(req,res){
        const res_object = await AuthService.registerUser(req.body);
        res.status(201).send(res_object);
    }

     static async profileUser(req,res){
        const res_object = await AuthService.profileUser(req.user);
        res.status(200).send(res_object); 
     }
}

module.exports = AuthController;
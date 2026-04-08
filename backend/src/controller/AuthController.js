const AuthService = require('../service/AuthService.js')

class AuthController {
    static async loginUser(req,res){
        const res_object = await AuthService.loginUser(req.body); 
        return res.status(200).send(res_object);
    }
}

module.exports = AuthController;
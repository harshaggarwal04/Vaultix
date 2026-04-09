class AuthService {
    static async loginUser(body){
        return{
            msg: "login route"
        } 
    }

    static async registerUser(body){
        const {name, email, password, ac_type} = body;
        
    }
}

module.exports = AuthService;
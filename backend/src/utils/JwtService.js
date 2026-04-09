const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET; 



class JwtService{

    static generateToken(user){
        const token = jwt.sign({user}, jwtSecret, {
            algorithm: "HS256",
            expiresIn: '1d',

        } )

        return token;
    }

    static validateToken(token){
        const data = jwt.verify(token, jwtSecret);
        return data;
    }

}

module.exports = JwtService;
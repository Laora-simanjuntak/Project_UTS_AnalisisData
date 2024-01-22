const userModel = require("../models/user_models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function login (req, res) {
    try {
        const  { email, password } = req.body;
        if(email == null || password == null) {
            res.json({
                message: "User is riquired"
            });
            return;
        }
        const user = await userModel.getUserByEmail(email);

        if(user == null) {
            res.json({
                message: "Email/Password salah"
            });
            return;
        }

        const isValidPassword = await verifiedPassword(password, user.password);
        if(!isValidPassword) {
            res.json({
                message: "Email/Password salah"
            });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            "secret",
            { expiresIn: "2 days" }
        );

        res.json({
            message: "Login success",
            id: user.id,
            token: token
        });
    } catch (error) {
        console.log(error);
    }
}

async function verifiedPassword (password, passwordHash) {
    return await bcrypt.compare(password, passwordHash);
}


module.exports = {
    login
}
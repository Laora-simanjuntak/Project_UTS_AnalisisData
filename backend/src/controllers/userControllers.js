const user_models = require("../models/user_models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// create
const insert = async (req, res) => {
    const { name, email, password, address} = req.body;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await user_models.insertUser(name, email, passwordHash, address);

    res.status(200).json({
        message: "get users berhasil",
        user: user
    });
}

// get
const getAll = async (req, res) => {
    const users = await user_models.getUsers();

    res.status(200).json({
        message: "get users berhasil",
        users: users
    });
}

const getOne = async (req, res) => {
    console.log(req.params);
    const id = req.params.id;

    const user = await user_models.getUserById(id);

    if(user == null) {
        res.status(404).json({
            message: "user tidak ditemukan"
        });
    } else {
        res.status(200).json({
            message: "get user berhasil",
            user: user
        });
    }
}

// update
const update = async (req, res) => {
    const id = req.params.id;
    const {name, email, password, address} = req.body;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await user_models.updateUser(id, name, email, passwordHash, address);

    if(user == null) {
        res.status(404).json({
            message: "user tidak ditemukan"
        });
    } else {
        res.status(200).json({
            message: "get user berhasil",
            user: user
        });
    }
}

// delete
const remove = async (req, res) => {
    const id = req.params.id;
    const user = await user_models.removeUser(id);

    if(user == null) {
        res.status(404).json({
            message: "user tidak ditemukan"
        });
    } else {
        res.status(200).json({
            message: "delete user berhasil",
            user: user
        });
    }
}

module.exports = {
    insert,
    getAll,
    getOne,
    update,
    remove
};
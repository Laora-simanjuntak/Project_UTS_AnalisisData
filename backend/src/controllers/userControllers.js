const db = require("../database/db");

// create
const insert = (req, res) => {
    const user = req.body;
    const query = "INSERT INTO users SET ?";

    db.query(query, user, (err, result) => {
        if(err) {
            res.status(400).json({
                message: "insert user gagal",
                serverMessage: err
            });
        } else {
            res.status(201).json({
                message: "insert user berhasil"
            });
        }
    });
}

// get
const getAll = (req, res) => {
    const query = "SELECT * FROM users";
    db.query(query, [], (err, result) => {
        if(err) {
            res.status(400).json({
                message: "get users gagal",
                serverMessage: err
            });
        } else {
            res.status(200).json({
                message: "get users berhasil",
                users: result
            });
        }
    })
}

const getOne = (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const query = "SELECT name, email, address FROM users WHERE users.id=?";

    db.query(query, id, (err, result) => {
        if(err) {
            res.status(400).json({
                message: "get user gagal",
                serverMessage: err
            });
        } else {
            res.status(200).json({
                message: "get user berhasil",
                users: result[0]
            })
        }
    });
}

// update
const update = (req, res) => {
    const id = req.params.id;
    const users = req.body;
    const query =  `UPDATE users SET ? WHERE id=${id}`;

    db.query(query, users, (err, result) => {
        if(err) {
            res.status(400).json({
                message: "update users gagal",
                serverMessage: err
            });
        } else {
            res.status(200).json({
                message: "update users berhasil",
                users: users
            });
        }
    });
}

// delete
const remove = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM users WHERE id = ?";

    db.query(query, [id], (err, result) => {
        if(err) {
            res.status(400).json({
                message: "delete users gagal",
                serverMessage: err
            });
        } else {
            res.status(200).json({
                message: "delete users berhasil",
            });
        }
    });
}

module.exports = {
    insert,
    getAll,
    getOne,
    update,
    remove
};
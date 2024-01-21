const connection = require("../database/db");

async function insertUser(name, email, password, address) {
    const [result] = await connection.execute(
        "INSERT INTO users (name, email, password, address) VALUES (?,?,?,?)", 
        [name, email, password, address]
    );
    return result;
}

async function getUsers() {
    const [result] = await connection.execute("SELECT * FROM users");
    return result;
}

async function getUserById(id) {
    try {
        const [result] = await connection.execute("SELECT * FROM users WHERE id=?", [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateUser(id, name, email, password, address) {
    try {
        const [result] = await connection.execute("UPDATE users SET name=?, email=?, password=?, address=? WHERE id=?",
        [name, email, password, address,id]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function removeUser(id) {
    try {
        const [result] = await connection.execute("DELETE FROM users WHERE id=?", [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUsers,
    getUserById,
    insertUser,
    updateUser,
    removeUser
}
const connection = require("../database/db");

async function users() {
    const [result] = await connection.execute("SELECT * FROM users");
    return result;
}

async function userDetailById(id) {
    try {
        const [result] = await connection.execute("SELECT * FROM users WHERE id=?", [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    users,
    userDetailById
}
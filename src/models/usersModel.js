const pool = require('../db/db');

const getUsers = () => {
    return pool.query('SELECT * FROM users');
};

const getUserById = (id) => {
    return pool.query('SELECT * FROM users WHERE id = $1', [id]);
};

module.exports = {
    getUsers,
    getUserById,
};
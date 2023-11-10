const users = require('../models/usersModel');

const getUsers = (req, res) => {
    users.getUsers()
        .then(response => res.json(response.rows))
        .catch(err => res.status(500).json({ error: err.message }));
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    users.getUserById(id)
        .then(response => {
            if (response.rows.length) {
                res.json(response.rows[0]);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
    getUsers,
    getUserById,
};
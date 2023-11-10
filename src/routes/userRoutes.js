const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

module.exports = router;
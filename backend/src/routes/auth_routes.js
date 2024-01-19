const express = require("express");
const routes = express.Router();
const { login } = require('../controllers/auth');
const userModels = require('../models/user_models');
const authenticationToken = require('../middleware/auth');

routes.post('/login', login);
routes.get('/:id', authenticationToken, userModels.userDetailById);

module.exports = routes;
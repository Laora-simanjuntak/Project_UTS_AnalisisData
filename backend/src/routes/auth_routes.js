const express = require("express");
const routes = express.Router();
const { login } = require('../controllers/auth');
const userControllers = require('../controllers/userControllers');
const authenticationToken = require('../middleware/auth');

routes.post('/login', login);
routes.get('/:id', authenticationToken, userControllers.getOne);

module.exports = routes;
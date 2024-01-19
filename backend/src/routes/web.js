const express = require("express");
const routes = express.Router();
const authRoutes = require('./auth_routes');
const users = require('./user');

routes.use('/auth', authRoutes);
routes.use('/users', users);

module.exports = routes;
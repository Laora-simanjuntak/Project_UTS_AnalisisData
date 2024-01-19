const express = require("express");
const route = express.Router();

const userControllers = require("../controllers/userControllers");

route.post("/", userControllers.insert);
route.get("/", userControllers.getAll);
route.get("/:id", userControllers.getOne);
route.patch("/:id", userControllers.update);
route.delete("/:id", userControllers.remove);

module.exports = route;
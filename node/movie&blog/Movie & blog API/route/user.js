const express = require("express");
const route = express.Router();
const User = require("../model/user");
const { register, login, logout } = require("../controller/user")

route.post("/register", register);

route.post("/login", login);

route.get("/logout", logout);

module.exports = route;
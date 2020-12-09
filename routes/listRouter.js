const express = require("express");
const app = require("../app");
const listRouter = express.Router();
const User = require("../models/user.model");
const List = require("../models/list.model");
const Item = require("../models/item.model");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");






module.exports = listRouter;

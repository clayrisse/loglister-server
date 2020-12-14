const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user.model");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");


// ROUTES

router.post('/signup', isNotLoggedIn, validationLogin, (req, res, next) => {

  const { username, password } = req.body;

  User
  .findOne({ username })
  .then((foundUser) => {

    if (foundUser) return next( createError(400) ); 
    
    else { 
      const salt = bcrypt.genSaltSync(saltRounds);
      const encryptedPassword = bcrypt.hashSync(password, salt);

      User
      .create({ username, password: encryptedPassword })
      .then((createdUser) => { // set the `req.session.currentUser` using newly created user object, to trigger creation of the session and cookie
        createdUser.password = "**no picking**";
        req.session.currentUser = createdUser; // automatically logs in the user by setting the session/cookie
        res.status(201).json(createdUser);// Created // res.send()
      })
      .catch((err) => next( createError(err) )) //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
    }
  })
  .catch((err) => next( createError(err) ));

})


router.post('/login', isNotLoggedIn, validationLogin, (req, res, next) => {

  const { username, password } = req.body;

  User
  .findOne({ username })
  .then((user) => {
    if (!user) return next( createError(404) );  // user not Not Found

    const passwordIsValid = bcrypt.compareSync(password, user.password); //  true/false

    if (passwordIsValid) {// set the `req.session.currentUser`, to trigger creation of the session
      user.password = "*";
      req.session.currentUser = user;
      res.status(200).json(user);
    }
    else next( createError(401) ); // Unathorized
  })
  .catch((err) => next( createError(err) ));

})


router.get('/logout',  isLoggedIn, (req, res, next) => {

  req.session.destroy((err) => {
    if (err) return next(err);
    res.status(204).send();// 204 No Content
  })
  
})


router.get('/me', isLoggedIn, (req, res, next) => {

  const currentUserSessionData = req.session.currentUser;
  res.status(200).json(currentUserSessionData);

})


module.exports = router;

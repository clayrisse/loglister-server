const express = require("express");
const app = require("../app");
const userRouter = express.Router();
const User = require("../models/user.model");
const List = require("../models/list.model");
const uploader = require("./../config/cloudinary");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");


// ROUTES

userRouter.get("/", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  User.findById(currentUser)
    .populate(/*whit all the lists*/) // still to do more
    .then ((user) => {
      user.password="****"
      req.session.currentUser = user;
      res.status(201).json(user)
    })
  .catch ((err) => next( createError(err)));
});


userRouter.get("/edit", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  User.findById(currentUser)
    .then ((user) => {
      user.password="****"
      req.session.currentUser = user;
      res.status(201).json(user)
    })
  .catch ((err) => next( createError(err)));
})

//for cloudinary
userRouter.post("/upload", uploader.single("image"), (req, res, next) => {

  console.log("file is: ", req.file);  //test and erase
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
   res.json({ secure_url: req.file.secure_url });
});


userRouter.put("/edit", isLoggedIn, (req, res, next) => {
  const { username, image } = req.body;
  const password = req.body.password
  const salt = bcrypt.genSaltSync(saltRounds);
  const encryptedPassword = bcrypt.hashSync(password, salt);
    
  const userValues = password
    ? {username, image, password: encryptedPassword}
    : {username, image}

    User.findByIdAndUpdate(
      req.session.currentUser._id,
      userValues , { new: true }
    )
    .then((editedUser) => {
      req.session.currentUser = editedUser
        res.status(418).json(editedUser)
    })
    .catch((err) => next( createError(err) ));
});


userRouter.delete("/delete", isLoggedIn, (req, res, next) => {
 
  User
  .findByIdAndDelete(req.session.currentUser._id)
  .then(()=>{
    req.session.destroy(() => {
      res.status(204).send();
      return;
    })
  })
  .catch((err) => next( createError(err) ));
})



module.exports = userRouter;







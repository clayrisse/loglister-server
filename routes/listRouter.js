const express = require("express");
const app = require("../app");
const listRouter = express.Router();
const User = require("../models/user.model");
const List = require("../models/list.model");
const Item = require("../models/item.model");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");

// ROUTES

listRouter.post('/add', isLoggedIn, (req, res, next) =>{
    
    console.log('req.body', req.body)
    const {name, type, background, editorsName  } = req.body
    let editorId = undefined
    const authorId = req.session.currentUser._id;
    const ownerId = req.session.currentUser._id;

    createListAndUpdateUser = () => {
        List
        .create({name, type, background, authorId, ownerId, editorId })
        .then((createdList) => {        
            const newListId = createdList._id
            User
            .findByIdAndUpdate(ownerId, {$push: {listsId: newListId}}, {new:true})
            .then(() => res.status(200).send())
            .catch ((err) =>  next( createError(err)));
        })
        .catch((err) =>  next( createError(err)));
    }
     
    if (req.body.editorsName) {
        User
        .findOne({username: editorsName})
        .then((editorObj) => {
            if (editorObj) { 
                editorId = editorObj._id //ads new value in case it exists
                createListAndUpdateUser()
            } 
            createListAndUpdateUser()
        })
        .catch((err)=>{
            console.log('error from editors id', err)
            next( createError(err));
        })
    } else {
        createListAndUpdateUser()
    }
    
 
   
    

})




module.exports = listRouter;
// {

//     name: "cla", 
//     type: "todo", 
   
    
//     background: "https://images.unsplash.com/photo-1597062360909-733a26e70e74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
// }
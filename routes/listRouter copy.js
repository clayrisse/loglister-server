const express = require("express");
const app = require("../app");
const listRouter = express.Router();
const User = require("../models/user.model");
const List = require("../models/list.model");
const Item = require("../models/item.model");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");
const { findByIdAndUpdate } = require("../models/user.model");

// ROUTES

listRouter.post('/add', isLoggedIn, (req, res, next) =>{
    
    console.log('req.body', req.body)
    const {name, type, background, editorsName  } = req.body
    let editorId = undefined
    const authorId = req.session.currentUser._id;
    const ownerId = req.session.currentUser._id;
    let newListId = undefined
    
    createListAndUpdateUser = () => {
        List
        .create({name, type, background, authorId, ownerId, editorId })
        .then((createdList) => {        
            newListId = createdList._id

            User
            .findByIdAndUpdate(ownerId, {$push: {listsId: newListId}}, {new:true})
            .then(()=> res.status(200).send())
            .catch ((err) =>  next( createError(err)));

            includeListIdInCoeditor ()
        })    
    }

    includeListIdInCoeditor = () => {
        User
        .findByIdAndUpdate(editorId, { $push: { editorsListsId: newListId }}, {new:true})
        .then((prObj)=> res.status(200).send())
        .catch((err) =>  next( createError(err)));
    } 

    if (req.body.editorsName) {
        User
        .findOne({username: editorsName})
        .then((editorObj) => {
            if (editorObj) { 
                editorId = editorObj._id //ads new value in case it exists
                createListAndUpdateUser()   
                // includeListIdInCoeditor ()

            } else  createListAndUpdateUser()  //>CL: remember to add mesage that the coeditor username does no extists
        })
        .catch((err)=>next( createError(err)))
        
    } else createListAndUpdateUser()
})


listRouter.get('/:id', isLoggedIn, (req, res, next) => {
    const listId = req.params.id
    const currentUserId = req.session.currentUser._id
    List
    .findById(listId)
    .populate("editorId")
    .then((foundList) => {
        console.log("foundList", foundList)
        if ( currentUserId == foundList.ownerId || !foundList.isPrivate ) { //dont touch the doble=
            res.status(200).json(foundList) //i im the owner or is public
         } else { 
            console.log("--------STOP looking other people's lists-------")
            next( createError(404)  )
           
        }
    })
    .catch ((err) =>  next( createError(err)));
})


listRouter.put('/:id', isLoggedIn, (req, res, next) => {
    const listId = req.params.id;
    const currentUserId = req.session.currentUser._id
    const {name, type, background , isPrivate , editorsName  } = req.body

    let editorId = undefined
    // if ( currentUserId == foundList.ownerId || currentUserId == foundList.editorId._ID){ // 

    findUserAndUpdateIt = (editorId) => {
        console.log('editorId', editorId)
        console.log('listId', listId)
        console.log('name', name)
        List
        .findByIdAndUpdate(listId,  {$set: {name, type, background, isPrivate, editorId:editorId}}, {new:true})
        .then((editedUser) => {
            console.log('editedUser', editedUser)
            res.status(418).json(editedUser)
        .catch ((err) =>  next( createError(err)));
        })
    }

   

    if (req.body.editorsName) {
        User
        .findOne({username: editorsName})
        .then((editorObj) => { //it makes sure the user exits and it maches anoter in DB
            console.log('editorObj', editorObj)
            editorObj
            ? findUserAndUpdateIt(editorObj._id)//overwrites and ads new value in case it exists
            : findUserAndUpdateIt(editorId)  

            editorObj //finds las editor and removes id from his "editorsListId" array
            // console.log('it issssssssssssssssss', it issssssssssssssssss)
            User
            .findByIdAndUpdate(editorObj._id, {$push: {editorsListsId:listId}})
            .then((editedUser) => {
                console.log('editedUserpush------------', editedUser)
                 User
                    .findByIdAndUpdate(editorId, {$pull: {editorsListsId:listId}})
                    .then((editedUser) => {
                        console.log('editedUserpull------------', editedUser)
                        res.status(418).json(editedUser)
                    .catch ((err) =>  next( createError(err)));
                    }) 
                 res.status(418).json(editedUser)
            .catch ((err) =>  next( createError(err)));
            }) 

            
            
            

        })           
    }   else  findUserAndUpdateIt(editorId) 
})
  

// "background": "https://images.unsplash.com/photo-1554382983-4316587176f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
// "isPrivate": true,
// "type": "list",

module.exports = listRouter;

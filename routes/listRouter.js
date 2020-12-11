const express = require("express");
const app = require("../app");
const listRouter = express.Router();
const User = require("../models/user.model");
const List = require("../models/list.model");
const Item = require("../models/item.model");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");
const { findByIdAndUpdate, findOneAndUpdate } = require("../models/user.model");

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
            .catch ((err) => next( createError(err)));

            includeListIdInCoeditor ()
        })        
        .catch((err) =>  next( createError(err)));         // SI PETA ALGO, EMPIEZA BORRANDO ESTO
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
    .populate("listItems")
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

    findListAndUpdateIt = (editorId) => {

        List
        .findById(listId)
        .then((foundedList) => {
            const oldEditorId = foundedList.editorId

            User //erases list from old editors list
            .findByIdAndUpdate(oldEditorId, {$pull: {editorsListsId: listId}})
            .then((updatedUser)=> res.status(201).json(updatedUser))
            .catch ((err) =>  next( createError(err)));
        })

        List
        .findByIdAndUpdate(listId,  {$set: {name, type, background, isPrivate, editorId:editorId}}, {new:true})
        .then((editedUser) => res.status(418).json(editedUser))
        .catch ((err) =>  next( createError(err))); 

    }

    if (req.body.editorsName) {

        User
        .findOne({username: editorsName})
        .then((editorObj) => { //it makes sure the user exits and it maches another user in DB by username
            
            if (editorObj) {
                findListAndUpdateIt(editorObj._id)//overwrites and ads new value in case it exists
            
                User
                .findByIdAndUpdate(editorObj._id, {$push: {editorsListsId:listId}})
                .then((editedUser) => {
        
                    User
                    .findByIdAndUpdate(editorId, {$pull: {editorsListsId:listId}})
                    .then(() => res.status(200).json(editedUser))
                    .catch ((err) => next( createError(err)));  
                })
                .catch ((err) =>  next( createError(err)));

            }   else  findListAndUpdateIt(editorId) 
        }) 
        .catch ((err) =>  next( createError(err)));

    }   else  findListAndUpdateIt(editorId) 
})
  

listRouter.delete('/:id', isLoggedIn, (req, res, next) => {
    const currUser = req.session.currentUser._id;
    const listId = req.params.id

    User //erase from editors list
    .findOneAndUpdate({editorsListsId:listId}, {$pull: {editorsListsId: listId}})
    .then((foundedMan) => console.log("foundedMan", foundedMan))
    .catch((err) => next(createError(err)))

    List 
    .findByIdAndDelete(listId)
    .then(deletedList => {

        User
        .findByIdAndUpdate(currUser,{ $pull: { listsId: listId} }, { new: true })
        .then(() => res.status(204).send())
        .catch((err) => next(createError(err)))
    })
    .catch((err) => next(createError(err)))
})


module.exports = listRouter;

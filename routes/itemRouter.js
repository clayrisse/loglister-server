const express = require("express");
const app = require("../app");
const itemRouter = express.Router();
const User = require("../models/user.model");
const List = require("../models/list.model");
const Item = require("../models/item.model");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");
const { findByIdAndUpdate, findOneAndUpdate } = require("../models/user.model");

// ROUTES

itemRouter.get('/:idItem', isLoggedIn, (req, res, next) => {
    const itemId = req.params.idItem
    const currentUserId = req.session.currentUser._id
    Item
    .findById(itemId)
    .then((foundItem) => {
     console.log('foundItem', foundItem)
     res.status(200).json(foundItem)
    })
    .catch ((err) =>  next( createError(err)));
})

itemRouter.post('/:idList', (req, res, next) => { //the id: here is from the LIst! REMEMBER include in front
    console.log('req.params', req.params, "req.body", req.body)
    const listId = req.params.idList //esta pendiente de si esto esta en la ruta
    const {title} = req.body
    
    Item
    .create({title, listId})
    .then(createdItem => {
        const newItemId = createdItem._id
        
        List
        .findByIdAndUpdate(listId, { $push: {listItems: newItemId}})
        // .then((updatedList) => console.log('updatedList', updatedList))
        .catch(err => next(createError(err)))
        
        res.status(200).json(createdItem)
    })
    .catch(err => next(createError(err)))
})

itemRouter.put('/:idItem', (req, res, next) => {
    const itemId = req.params.idItem
    const {title, notes, isDone} = req.body;  //later include "status" key
    const doDate = req.body.setDate //REMEMBER to set the "form with this "setDate" key
        ? { hasDate: true, date: req.body.setDate}
        : { hasDate: false, date: Date.now()} //REMEMBER to use the one bellow, this one is for checking date functioning
        // : { hasDate: false}

    Item
    .findByIdAndUpdate(itemId, {title, notes, isDone, doDate})
    .then((updatedItem) => res.status(201).json(updatedItem))
    .catch((err) => next( createError(err)))
})

itemRouter.put('/check/:idItem', (req, res, next) => {
    console.log('req.body', req.body)
    console.log('req.params', req.params)
    const itemId = req.params.idItem
    const { isDone } = req.body;  //later include "status" key
   console.log('isDone', isDone)
   let isDoneBoolean = isDone ? {isDone: true} : {isDone: flase}
console.log('isDoneBoolean', isDoneBoolean)
    Item
    .findByIdAndUpdate(itemId, isDoneBoolean)
    .then((updatedItem) => {
        console.log('updatedItem.isDone', updatedItem.isDone)
        res.status(201).json(updatedItem)})
    .catch((err) => next( createError(err)))

})

itemRouter.delete('/:idItem', (req, res, next) => {
    const itemId = req.params.idItem
    
    Item 
    .findById(itemId)
    .then((foundItem) => {
        const itemsListId = foundItem.listId

        List
        .findByIdAndUpdate(itemsListId, { $pull: { listItems: itemId }}, { new: true })
        .then((result) => console.log('result', result))
        .catch((err) => next( createError(err)))
    })
    .catch((err) => next( createError(err)))
    
    Item
    .findByIdAndRemove(itemId)
    .then(() => res.status(204).send())
    .catch((err) => next( createError(err)))
})


module.exports = itemRouter;
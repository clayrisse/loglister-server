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

//the id: here is from the list REMEMBER
itemRouter.post('/new/:id', (req, res, next) => { //include the id of the list in the queue
    const listId = req.params.id //esta pendiente de si esto esta en la ruta
    const {title} = req.body
    
    Item
    .create({title, listId})
    .then(createdItem => {
        const newItemId = createdItem._id
        
        List
        .findByIdAndUpdate(listId, { $push: {listItems: newItemId}})
        .then((updatedList) => console.log('updatedList', updatedList))
        .catch(err => next(createError(err)))
        
        res.status(200).json(createdItem)
    })
    .catch(err => next(createError(err)))
})



itemRouter.put('/edit/:id', (req, res, next) => {
    const itemId = req.params.id
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



module.exports = itemRouter;

// listId, title, notes, isDone, status, categoryTitle, doDate: {   hasDate: {type: Boolean, default: false},  date: Date,
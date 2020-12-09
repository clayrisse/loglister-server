const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, ref: "User" },
    editorsId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  
    listId: { type: Schema.Types.ObjectId, ref: "List" },
    title: { type: String, maxlength: 50, default: "+ add" },
    notes: { type: String, maxlength: 200 },
    isDone: { type: Boolean, default: false},
    status: { type: String, enum: [ "todo", "done", "item", "category"], default: "todo"},
    categoryTitle: {type: String},//needs to add specitif routes for implement this
    doDate: { 
      hasDate: {type: Boolean, default: false},
      date: Date,
     },
  }, { 
    timestamps: {
        createdAt: 'create_at', 
        updatedAt: 'updated_at' 
    }
  });
  
  const Item = mongoose.model("Item", itemSchema);
  module.exports = Item;
  
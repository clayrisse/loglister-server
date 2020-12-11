const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, ref: "User" },
  ownerId: { type: Schema.Types.ObjectId, ref: "User" },
  // followersId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  editorId: { type: Schema.Types.ObjectId, ref: "User" },

  background: { type: String, default: "https://images.unsplash.com/photo-1597062360909-733a26e70e74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" },
  name: { type: String }, //, default: "New List"
  isPrivate: { type: Boolean, default: "true"},
  // status: { type: String, enum: [ "active", "frozen", "deleted"], default: "active"},
  type: { type: String, enum: [ "list", "cyclelist", "log", "instructions", "todo"], default: "todo"},
  listItems: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  categories: [{type: String}]//needs to add specitif routes for implement this
}, { 
    timestamps: {
        createdAt: 'create_at', 
        updatedAt: 'updated_at' }
});

const List = mongoose.model("List", listSchema);
module.exports = List;

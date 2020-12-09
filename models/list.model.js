const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "User" },
  followersId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  editorsId: [{ type: Schema.Types.ObjectId, ref: "User" }],

  background: { type: String },
  name: { type: String, default: "New List" },
  isPrivate: { type: Boolean, default: "true"},
  // status: { type: String, enum: [ "active", "frozen", "deleted"], default: "active"},
  type: { type: String, enum: [ "list", "cyclelist", "log", "instructions", "todo"], default: "Favor Created"},
  listedItemsId: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  categories: [{type: String}]//needs to add specitif routes for implement this
}, { 
    timestamps: {
        createdAt: 'create_at', 
        updatedAt: 'updated_at' }
});

const List = mongoose.model("List", listSchema);
module.exports = List;
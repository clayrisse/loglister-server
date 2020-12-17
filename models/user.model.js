const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true  },
  password: { type: String, minlength: 2, required: true }, //change to 6 at the end
  // email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, required: true, unique: true },
  image: { type: String, default: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-it-crowd-richard-ayoade.jpg"  },
  isPrivate: { type: Boolean, default: "true"},
  listsId: [{ type: Schema.Types.ObjectId, ref: "List" }],
  editorsListsId: [{ type: Schema.Types.ObjectId, ref: "List" }],
  // itemsId: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  // followedListsId: [{ type: Schema.Types.ObjectId, ref: "List" }],
  // followedUsersId: [{ type: Schema.Types.ObjectId, ref: "List" }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;


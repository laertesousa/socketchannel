const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: { type: String, unique: true, index: true },
  accessToken: String,
  createdDate: { type: Date, default: Date.now }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = {
  roomSchema,
  Room
};

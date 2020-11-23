const mongoose = require('mongoose');
const { Schema } = mongoose;

const channelSchema = new Schema({
  name: String,
  url: String,
  accessToken: String,
  createdDate: { type: Date, default: Date.now }
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = {
  channelSchema,
  Channel
};

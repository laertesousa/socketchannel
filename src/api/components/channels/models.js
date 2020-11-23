const mongoose = require('mongoose');
const { Schema } = mongoose;

const channelSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = {
  channelSchema,
  Channel
};

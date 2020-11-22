const mongoose = require('mongoose');
const { Schema } = mongoose;

const channelScheme = new Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

const Channel = mongoose.model('Channel', channelScheme);

module.exports = {
  Channel
};

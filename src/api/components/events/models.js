const mongoose = require('mongoose');
const { Schema } = mongoose;

const { receivedStatus, sentStatus } = require('./constants');

const eventSchema = new Schema({
  channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  status: { type: String, enum: [receivedStatus, sentStatus], default: receivedStatus },
  data: Map,
  receivedDate: { type: Date, default: Date.now },
  sentDate: Date
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  Event
};

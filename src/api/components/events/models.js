const mongoose = require('mongoose');
const { Schema } = mongoose;

const { channelSchema } = require('../channels/models');
const { receivedStatus, sentStatus } = require('./constants');

const eventSchema = new Schema({
  status: { type: String, enum: [receivedStatus, sentStatus], default: receivedStatus },
  data: Map,
  channel: channelSchema,
  receivedDate: { type: Date, default: Date.now },
  sentDate: Date
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  Event
};

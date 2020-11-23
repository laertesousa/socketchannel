const { Event } = require('../components/events/models');
const { receivedStatus, sentStatus } = require("../components/events/constants");
const { sendMessage } = require("../../services/events");

const setupEventPoller = () => {
  const eventPoller = async () => {
    const event = await Event.findOne({ status: receivedStatus }).sort('receivedDate').exec();

    sendMessage(event.channel, event.data);
    
    event.status = sentStatus;
    event.save();
  };
  setInterval(eventPoller, 5000);
};

module.exports = setupEventPoller;

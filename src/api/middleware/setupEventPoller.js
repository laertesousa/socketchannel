const { Event } = require('../components/events/models');
const { receivedStatus, sentStatus } = require("../components/events/constants");
const { sendMessage } = require("../../services/events");
const { Channel } = require('../components/channels/models');

const setupEventPoller = () => {
  const eventPoller = async () => {
    const channelIds = await Event.find({ status: receivedStatus }).select('channel').distinct('channel').exec();

    for (const channelId of channelIds) {
      const channel = await Channel.findById(channelId).exec();
      const events = await Event.find({ status: receivedStatus, channel: channelId }).exec();
      const successIds = [];

      for (const event of events) {
        try {
          sendMessage(channel.name, event.data);
          successIds.push(event._id);
        } catch (e) {
          console.error(`Failed to send event ${event._id} to channel ${channel._id}`);
          break;
        }
      }

      Event.updateMany({ _id: { $in: successIds } }, { $set: { status: sentStatus } }).exec();
    }
  };
  setInterval(eventPoller, 5000);
};

module.exports = setupEventPoller;

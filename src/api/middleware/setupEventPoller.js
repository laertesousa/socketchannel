const { Event } = require('../components/events/models');
const {
  receivedStatus,
  sentStatus
} = require('../components/events/constants');
const { sendMessage } = require('../../services/events');
const { Room } = require('../components/rooms/models');

const setupEventPoller = () => {
  const eventPoller = async () => {
    const roomIds = await Event.find({ status: receivedStatus })
      .select('room')
      .distinct('room')
      .exec();

    for (const roomId of roomIds) {
      const room = await Room.findById(roomId).exec();
      const events = await Event.find({
        status: receivedStatus,
        room: roomId
      })
        .sort('receivedDate')
        .exec();
      const successIds = [];

      for (const event of events) {
        try {
          sendMessage(room.name, event.channel, event.data);
          successIds.push(event._id);
        } catch (e) {
          console.error(
            `Failed to send event ${event._id} to channel ${room._id}`
          );
          break;
        }
      }

      Event.updateMany(
        { _id: { $in: successIds } },
        { $set: { status: sentStatus } }
      ).exec();
    }
  };
  setInterval(eventPoller, 5000);
};

module.exports = setupEventPoller;

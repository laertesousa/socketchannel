const { getInstance } = require('../api/middleware/socketio');
const { Event } = require('../api/components/events/models');
const {
  receivedStatus,
  sentStatus
} = require('../api/components/events/constants');
const { Room } = require('../api/components/rooms/models');

const sendMessage = (room, channel, data) => {
  if (!room || !channel || !data) {
    throw new Error('room, channel and data is required');
  }
  console.log('send message', room, channel, data);
  getInstance().to(room).emit(channel, data);
};

const processEvents = async () => {
  const roomIds = await Event.find({ status: receivedStatus })
    .select('room')
    .distinct('room')
    .exec();

  console.log(`${roomIds.length} rooms with pending events.`);

  for (const roomId of roomIds) {
    const room = await Room.findById(roomId).exec();
    const events = await Event.find({
      status: receivedStatus,
      room: roomId
    })
      .sort('receivedDate')
      .exec();

    console.log(`${events.length} pending events for ${room.name}.`);

    const successIds = [];

    for (const event of events) {
      try {
        sendMessage(room.name, event.channel, event.data);
        successIds.push(event._id);
      } catch (e) {
        console.error(
          `Failed to send event ${event._id} to room ${room._id} on channel ${event.channel}. ${e}`
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

module.exports = {
  sendMessage,
  processEvents
};

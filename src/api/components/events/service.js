const { Event } = require('./models');
const { Channel } = require('../channels/models');

const createNewEvent = async ({
  status,
  data,
  channelName,
  receivedDate,
  postedDate
}) => {
  const channel = Channel.findOne({ name: channelName }); // TODO: Replace with accessToken?
  await Event.create({
    status,
    data,
    channel,
    receivedDate,
    postedDate
  });
}

module.exports = {
  createNewEvent
};

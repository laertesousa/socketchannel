const { getEvents, createNewEvent } = require('./service');

const get = async (req, res) => {
  const events = await getEvents();
  res.json(events);
};

const post = async (req, res) => {
  const { channelName, data } = req.body.event;
  const event = await createNewEvent(channelName, data);
  res.json(event);
};

module.exports = {
  get,
  post
};

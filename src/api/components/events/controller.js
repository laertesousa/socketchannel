const { createNewEvent } = require('./service');

const post = async (req, res) => {
  const { channelName, data } = req.body.event;
  const event = await createNewEvent(channelName, data);
  res.json(event);
};

module.exports = {
  post
};

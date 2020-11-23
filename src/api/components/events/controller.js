const { createNewEvent } = require('./service');

const post = async (req, res) => {
  const event = await createNewEvent(req.body.event);
  res.json(event);
};

module.exports = {
  post
};

const { getEvents, create } = require('./service');

const get = async (req, res) => {
  try {
    const events = await getEvents();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
};

const post = async (req, res) => {
  const { roomName, channel, data } = req.body;
  try {
    const event = await create(roomName, channel, data);
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
};

module.exports = {
  get,
  post
};

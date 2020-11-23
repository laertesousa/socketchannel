const { getRooms, create, sendMessage } = require('./service');

const get = async (req, res) => {
  const rooms = await getRooms();
  res.json(rooms);
};

const post = async (req, res) => {
  const { name, url, accessToken } = req.body;
  try {
    const room = await create(name, url, accessToken);
    res.json(room);
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
};

module.exports = {
  get,
  post
};

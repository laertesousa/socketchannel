const { createNewChannel } = require('./service');

const post = async (req, res) => {
  const channel = await createNewChannel('test');
  res.json(channel);
};

module.exports = {
  post
};

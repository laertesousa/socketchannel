const { createNewChannel, sendMessage } = require('./service');

const post = async (req, res) => {
  const channel = await createNewChannel('test');
  res.json(channel);
};

const handleSendMessagePost = (req, res) => {
  const { channel, data } = req.body;
  sendMessage(channel, data);

  res.json();
};

module.exports = {
  post,
  handleSendMessagePost
};

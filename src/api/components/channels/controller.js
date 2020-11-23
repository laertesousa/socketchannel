const { getChannels, createNewChannel, sendMessage } = require('./service');

const get = async (req, res) => {
  const channels = await getChannels();
  res.json(channels);
};

const post = async (req, res) => {
  const { name, url, accessToken } = req.body.channel;
  const channel = await createNewChannel(name, url, accessToken);
  res.json(channel);
};

const handleSendMessagePost = (req, res) => {
  const { channel, data } = req.body;
  sendMessage(channel, data);

  res.json();
};

module.exports = {
  get,
  post,
  handleSendMessagePost
};

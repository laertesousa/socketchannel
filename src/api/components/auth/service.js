const { Authentication } = require('./models');
const jwt = require ('jsonwebtoken')

const getAuth = async () =>
  await Authentication.find().exec()
  
const getKeyByIdandToken = async (appId, token) => 
await Authentication.findOne({ appId, token });

const create  = async (appId, appKey ) => {
    const token = jwt.sign({ clientId: appId }, appKey);
    await Authentication.create({ appId, token })
};

module.exports = {
  getKeyByIdandToken,
    create,
    getAuth
}

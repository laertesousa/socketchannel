const { Authentication } = require('./models');
const jwt = require ('jsonwebtoken')

const getAuth = async () =>
  await Authentication.find().exec()
  
const getKeyByUserandPassword = async (appId, password) => 
await Authentication.findOne({ appId, token });

const create  = async (appId, token ) => {
    const token = jwt.sign({ clientId: appId }, password);
    await Authentication.create({ appId, token })
};

module.exports = {
    getKeyByUserandPassword,
    create,
    getAuth
}

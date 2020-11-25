const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
    appId: { type : String, unique: true, index: true },
    token: String,
});

const Authentication = mongoose.model('Authentication', authSchema);

module.exports = {
    authSchema,
    Authentication
}
const mongoose = require('mongoose');

const dbBaseUrl = process.env.DB_URL;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const setupDatabase = () => {
  console.log(`mongodb://${username}:${password}@${dbBaseUrl}`);
  mongoose.connect(`mongodb://${username}:${password}@${dbBaseUrl}`, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('database connected');
  });
};

module.exports = setupDatabase;

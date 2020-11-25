const Agenda = require('agenda');
const eventDispatcherTask = require('./event-dispatcher');

const dbBaseUrl = process.env.DB_URL;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const setupTask = async () => {
  const agenda = new Agenda({
    db: { address: `mongodb://${username}:${password}@${dbBaseUrl}` }
  });

  // Register tasks
  const eventDispatcherTaskName = eventDispatcherTask(agenda);

  await agenda.start();

  await agenda.every('2 seconds', [eventDispatcherTaskName]);
};

module.exports = setupTask;

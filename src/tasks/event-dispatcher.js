const { processEvents } = require('../services/events');

const TASK_NAME = 'Handle new events';
const setupTask = agenda => {
  agenda.define(
    TASK_NAME,
    { priority: 'high', concurrency: 1 },
    async (job, done) => {
      console.log(`running ${TASK_NAME}.`);
      try {
        await processEvents();
      } catch (err) {
        console.log(`Error ${TASK_NAME} - ${err.message}`);
      } finally {
        console.log(`completed ${TASK_NAME}.`);
      }

      done();
    }
  );

  return TASK_NAME;
};

module.exports = setupTask;

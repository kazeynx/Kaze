const loadCommands = require('./commandHandler');
const loadEvents = require('./eventHandler');

module.exports = (client) => {
  loadCommands(client);
  loadEvents(client);
};
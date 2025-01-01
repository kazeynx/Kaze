const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
  const commandFolders = readdirSync(path.join(__dirname, '../commands'));

  for (const folder of commandFolders) {
    const commandFiles = readdirSync(path.join(__dirname, `../commands/${folder}`)).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`);
      const commandName = command.data?.name || command.name;
      client.commands.set(commandName, command);
    }
  }
};

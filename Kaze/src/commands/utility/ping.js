const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interactionOrMessage, args) {
    if (interactionOrMessage.reply) {
      await interactionOrMessage.reply('Pong!');
    } else {
      await interactionOrMessage.reply('Pong!');
    }
  },
};
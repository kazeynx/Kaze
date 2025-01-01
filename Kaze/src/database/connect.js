const colors = require("colors");
const mongoose = require('mongoose');
const { mongoUri } = require('../config/config.json');

module.exports = async (client) => {
  try {
    await mongoose.connect(mongoUri);  // Connect to MongoDB
    console.log(`${colors.cyan(colors.bold(client.user.username))} | Successfully connected to MongoDB`);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

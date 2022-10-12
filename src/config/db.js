const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?authSource=admin`;

const connect = async() => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('DATABASE IS CONNECTED');
  } catch (err) {
    console.log('DATABASE IS NOT CONNECTED ' + err);
  };
};

module.exports = connect;
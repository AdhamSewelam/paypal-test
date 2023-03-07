const mongoose = require('mongoose');
require('dotenv').config();

// CONNECT TO MONGODB
const db = async () => {
  const uri = process.env.MONGO_ATLAS;
  console.log(uri);
  await mongoose
    .connect(`${uri}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MONGO_DB CONNECTED');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;

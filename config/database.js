const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
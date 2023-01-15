require('dotenv').config();

const mongoDB = require('mongoose');

mongoDB.set('strictQuery', true);
mongoDB.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'character-creator'
})
  .then(() => console.log('Connected to Mongo character-creator DB.'))
  .catch(err => console.log(err));


const Schema = mongoDB.Schema;

const sessionSchema = new Schema({
  publicKey: { type: String, required: true, unique: true },
  privateKey: { type: String, required: true, unique: true  },
  createdAt: { type: Date, expires: process.env.SESSION_EXPIRE_TIME, default: Date.now }
});

const Session = mongoDB.model('Session', sessionSchema);

module.exports = { Session };

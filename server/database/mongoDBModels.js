require('dotenv').config();

const mongoDB = require('mongoose');

mongoDB.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'character-creator'
})
  .then(() => console.log('Connected to Mongo character-creator DB.'))
  .catch(err => console.log(err));


const Schema = mongoDB.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: process.env.SESSION_EXPIRE_TIME, default: Date.now }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = { Session };

require('dotenv').config();

const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.PG_URI,
});

// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

// bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
//     if (err) return next(err);
//     password = hash;
// });

module.exports = {
    query: (text, params, callback) => {
        // console.log('executed query', text);
        return pool.query(text, params, callback)
    }
}
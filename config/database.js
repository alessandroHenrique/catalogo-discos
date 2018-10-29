let options = process.env.NODE_ENV === 'production';

if (process.env.NODE_ENV === 'production') {
  options = {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL
  }
} else {
  require('dotenv').config();
  options = {
    client: process.env.DB_CLIENT || 'mysql',
    connection: {
      host : process.env.DB_HOST || '127.0.0.1',
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    }
  }
}

const knex = require('knex')(options);

module.exports = knex;

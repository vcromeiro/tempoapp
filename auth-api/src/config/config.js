require('dotenv').config();

module.exports = {

  "development": {
    "username": process.env.AUTH_PG_USER,
    "password": process.env.AUTH_PG_PASS,
    "database": process.env.AUTH_PG_DB,
    "host": process.env.AUTH_PG_HOST,
    "dialect": process.env.AUTH_PG_DIALECT,
    "port": process.env.AUTH_PG_PORT,
    // "migrationStorageTableSchema": "teste",
    // "seederStorageTableSchema": "teste"
  },
  "test": {
    "username": process.env.AUTH_PG_USER,
    "password": process.env.AUTH_PG_PASS,
    "database": process.env.AUTH_PG_DB,
    "host": process.env.AUTH_PG_HOST,
    "dialect": process.env.AUTH_PG_DIALECT,
    "port": process.env.AUTH_PG_PORT
  },
  "production": {
    "username": process.env.AUTH_PG_USER,
    "password": process.env.AUTH_PG_PASS,
    "database": process.env.AUTH_PG_DB,
    "host": process.env.AUTH_PG_HOST,
    "dialect": process.env.AUTH_PG_DIALECT,
    "port": process.env.AUTH_PG_PORT,
    "dialectOptions": {
      ssl: true
    }
  }
};

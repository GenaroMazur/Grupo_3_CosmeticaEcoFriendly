require("dotenv").config()
module.exports={
  "development": {
    "username": process.env.usernameDb,
    "password": process.env.passwordDb,
    "database": process.env.databaseDb,
    "host": process.env.hostDb,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.usernameDb,
    "password": process.env.passwordDb,
    "database": process.env.databaseDb,
    "host": process.env.hostDb,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.usernameDb,
    "password": process.env.passwordDb,
    "database": process.env.databaseDb,
    "host": process.env.hostDb,
    "dialect": "mysql"
  }
};

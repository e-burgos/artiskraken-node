const dotenv = require('dotenv');
dotenv.config();

const {
  USERNAME,
  PASSWORD,
  DATABASE,
  HOST,
  DIALECT,
  DB_PORT
} = process.env

module.exports = {
    development: {
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        dialect: DIALECT,
        port: DB_PORT,
        define: {
            //"underscored": true,
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "8889",
    },
    production: {
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql",
    }
};

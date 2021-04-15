const dotenv = require("dotenv");
dotenv.config();

const {
    USERNAME_DEV,
    PASSWORD_DEV,
    DATABASE_DEV,
    HOST_DEV,
    DIALECT_DEV,
    DB_PORT_DEV,
    JAWSDB_URL,
} = process.env;

module.exports = {
    development: {
        username: USERNAME_DEV,
        password: PASSWORD_DEV,
        database: DATABASE_DEV,
        host: HOST_DEV,
        dialect: DIALECT_DEV,
        port: DB_PORT_DEV,
        define: {
            //"underscored": true,
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        use_env_variable: JAWSDB_URL,
        dialect: "mysql",
    },
};


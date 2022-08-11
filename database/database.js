const Sequelize = require("sequelize");

const connection = new Sequelize(
    "API_CARS_BD",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);


module.exports = connection;
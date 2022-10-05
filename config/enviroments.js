require("dotenv").config()

module.exports = {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    SECRET_KEY: process.env.SECRET_KEY
}
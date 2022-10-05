const mongoose = require("mongoose");
const env = require("./enviroments")

mongoose.connect(`mongodb://${env.DB_HOST}/${env.DB_NAME}`, (error)=>{
    if(error) throw error 
    else console.log("Connection success")
})

module.exports = mongoose
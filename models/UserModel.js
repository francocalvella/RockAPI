const mongoose = require("../config/mongodb")
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    email: {
        type: String, 
        required: [true, "Must provide an {PATH}"]
    },
    password: {
        type: String, 
        required: [true, "Must provide a {PATH}"]
    },
    name: String,
    lastname: String
})
userSchema.pre("save", function (next){
    this.password=bcrypt.hashSync(this.password, 10)
    next()
})

module.exports = mongoose.model("users", userSchema)
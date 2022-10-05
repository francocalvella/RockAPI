const mongoose = require("../config/mongodb")

const albumsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must provide a {PATH}"]
    },
    artist: {
        type: String,
        required: [true, "Must provide a {PATH}"]
    },
    year: {
        type:Number,
        required: [true, "Must provide a {PATH}"]
    },
    isHeard: {
        type:Boolean,
        default: false
    },
    isFav: {
        type:Boolean,
        default: false
    },
    valoration: {
        type:Number,
        enum: [1,2,3,4,5,6,7,8,9,10]
    }
})

module.exports = mongoose.model("albums", albumsSchema)
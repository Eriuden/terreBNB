const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user"
    },
        
    title: {
        type: String,
        required: true
    },

    address: {
        Type: String,
        required: true
    },
    pics: {
        type:[String]
    },
    description: {
        type: String,
        required: true
    },
    perks: {
        type: String,
    },
    extraInfo: {
        type: String,
    },
    checkIn: {
        type: Number,
    },
    checkOut: {
        type: Number,
    },
    maxGuest: {
        type: Number,
        required: true
    }
})

const placeModel = mongoose.model("place", placeSchema)

modules.exports = placeModel
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counterSchema = new Schema({
    identifierName: {
        type: String
    },
    count: {
        type: Number
    }

}, {
    timestamps: true
})


const User = mongoose.model('Counter', counterSchema)
module.exports = User
const mongoose = require('mongoose')
const crypto = require('crypto')
const Schema = mongoose.Schema

const userSchema = new Schema({


    userName: {
        type: String,
        required: true,
        unique: true
    },
    userFullName: {
        type: String,
    },
    userEmail: {
        type: String,
    },
    userDOB: {
        type: Date,
    },
    userTasks: [
        {   taskId : number,
            description: String,
            completed: Boolean
        }

    ],
    password: {
        type: String
    },

    hash: String,
    salt: String,
}, {
    timestamps: true
})

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, `sha512`).toString(`hex`);
};

userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};

const User = mongoose.model('User', userSchema)
module.exports = User
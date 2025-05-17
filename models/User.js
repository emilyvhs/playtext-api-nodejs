//require in mongoose
const mongoose = require('mongoose')

//set up User schema
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    }
}, {timestamps:true})

module.exports = mongoose.model('User', UserSchema)
const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        unique: [true, ' username already taken '],
        required: true
    },
    email:{
        type: String,
        unique: [true, ' email should be valid '],
        required : true
    },
    password:{
        type: String,

    }
})

const userModel = mongoose.model("users",userSchema)

module.exports= userModel;
const userModel= require('../models/user.model')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
const blacklistToken = require('../models/blacklist.model')
/**
    @route POST /api/auth/register 
    @description Register a new user with email,username,password 
    @acess Public 
    @name registerUserController 
 */

async function registerUserController(req,res){
    const { username , email , password }= req.body
    if(!username || !email || !password){
        return res.status(400).json({
            message: "Please enter the valid username email or password "
        })
    }

    const userAlreadyExisist = await userModel.findOne({
        $or: [{ username },{ email }]
    })

    if(userAlreadyExisist){
        return res.status(400).json({
            message : "User already exisist with this username or email  "
    })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password : hash
    })

    const token = jwt.sign(
        {id: user._id, useranme: user.username},
        process.env.JWT_SECERET,
        {expiresIn:"1d"}
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000
    })

    res.status(201).json({
        message: ('User register sucessfully'),
        user:{
            id: user.id,
            username: user.username,
            email: user.email
        }
    })
}


/** 
 * @name loginUserController
 * @description login with email and password 
 * @acess public 
 */

async function loginUserController(req,res){
    const { email , password } = req.body 
    const user = await userModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message: ' Invalid email  '
        })
    }

    const isPasswordValid= await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message : 'Invalid email or password '
        })
    }

    const token = jwt.sign(
     {id: user._id, useranme: user.username},
        process.env.JWT_SECERET,
        {expiresIn:"1d"}
    )

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000
    })
    res.status(200).json({
        message : 'User Logged in Sucessfully ',
        user:{
            id : user._id,
            username: user.username,
            email : user.email
        }
    })
}

async function logoutUserController(req,res){
    const token = req.cookies.token

    if(token){
        await blacklistToken.create({ token })
    }

    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    })

    res.status(200).json({
        message: 'Logout sucessfully '
    })
}

async function getUserData( req,res ){
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message : ' User Data fetch sucessfully ',
       user : {
        id : user._id,
        username : user.username,
        email : user.email
       }
    })
}


module.exports= {
    registerUserController,
    loginUserController,
    logoutUserController,
    getUserData
}

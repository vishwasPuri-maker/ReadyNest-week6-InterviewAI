const express= require('express')


const authRouter= express.Router()
const authController= require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
/**
    @route POST /api/auth/register 
    this api is for register the new user 
    @acess Public
 */

authRouter.post('/register',authController.registerUserController)  /**
  noemally we can write controller in another file so we are writting that controller in controller 
 */

/**
 * @route post hogi logi ke liye ha 
 * @description this api is for login the user /api/auth/login
 * @acess public  
 */  
authRouter.post('/login', authController.loginUserController)

/**
 * @route post hogi logout  ke liye ha 
 * @description in thsi api we will take the user token and and remove it from the database for temperoroy tor pe and also blaclist his token so that the of some is using his token they will not 
 * @acess public  
 */  

authRouter.get('/logout', authController.logoutUserController)

/**
 * @route GET /api/auth/get-me 
 * @description hame ye btaye ga ki konsa user login ha uske liye hame ek middleware ki bhi jaroorat hogi 
 * @access private
 */

authRouter.get('/get-me',authMiddleware.authUser , authController.getUserData)

module.exports= authRouter


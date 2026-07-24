const express = require('express')
const cookieParser= require('cookie-parser')
const cors = require('cors')

const app=express()

app.use (express.json())
app.use(cookieParser())
app.use((req, res, next) => {
    console.log("Incoming:", req.method, req.url);
    next();
});
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}))

// require all the rotes here 
const authRouter= require('./routes/auth.routes')
const interviewRouter = require("./routes/interview.routes")

// This is the api for authentication all api will be send to that api and prefix would be this 
app.use("/api/auth",authRouter)
app.use("/api/interview",interviewRouter)

module.exports=app

require("dotenv").config()
const app= require("./src/app")
const connectionDb = require("./src/config/database")
const gen = require("./src/services/ai.service")





app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})



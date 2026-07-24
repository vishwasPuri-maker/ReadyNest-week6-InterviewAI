require("dotenv").config()
const app= require("./src/app")
const connectionDb = require("./src/config/database")
const gen = require("./src/services/ai.service")





const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})



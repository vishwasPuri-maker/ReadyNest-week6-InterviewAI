const mongoose= require('mongoose')


async function connectionDb(){
    try{
   await mongoose.connect(process.env.DATABASE_URL)

   console.log('Monggose is conncted and Database is connected')
}catch(error){
    console.log('Unfrotunately Mongoose cannat connect please check your connection')
}
}

module.exports=connectionDb()
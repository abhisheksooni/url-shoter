const mongoose = require("mongoose") 

function connectDB (){
    return mongoose.connect(`mongodb+srv://URLSHOTER:2000@urlshoter.vovyooj.mongodb.net/?retryWrites=true&w=majority&appName=URLSHOTER`)
 
    .then(console.log("DB connect"))
    .catch(error=>console.log('mongo canect erre' + error))
 }


module.exports = connectDB
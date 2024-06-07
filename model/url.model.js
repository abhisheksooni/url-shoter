const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    urlname:{
        type:String,
        require:true
    },
    shortId:{
        type:String,
        require:true
    },
    visitHistory:[{
        timestamps:{type:Number}
    }]
},{timestamps:true})

const Url = mongoose.model("url",urlSchema)

module.exports = Url
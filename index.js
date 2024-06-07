// const express = require('express')
const mongoose = require("mongoose") 
const app = require("./routers/router")
const Url = require("./model/url.model")
const shortId = require('shortid')

const connectDB = require("./DB/connectDB")

connectDB()



app.listen(8000, ()=>console.log('sever start'))
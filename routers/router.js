const express = require("express");
const app = express();
const {getAllUrl, getFindOneUrl, postUrl} = require("../controllers/controllers")

app.use(express.urlencoded({extended:false}))

// get all Id
app.get('/',getAllUrl )

// search
app.get("/find/:shotId",getFindOneUrl)

// creacted
app.post('/post', postUrl)


module.exports = app  
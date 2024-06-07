const Url = require("../model/url.model")
const ShortId = require('shortid')


const getAllUrl = async (req,res)=>{
    const allURL = await Url.find({})
res.send(allURL)
}


const getFindOneUrl = async (req , res)=>{
    const shortId = req.params.shotId;
    const entry = await Url.findOneAndUpdate(
        {shortId},
        {$push:{visitHistory:{type:Date.now()}}}
    )
    if (!entry) {
        return res.status(404).send("URL not found");}

    return res.redirect(entry.urlname)
}

const postUrl = async (req,res)=>{
    const body = req.body;
    const shortUrl = ShortId.generate();
    await Url.create({
        urlname:body.url,
        shortId:shortUrl,
        visitHistory:[]
    })
    return res.status(201).json({mes:"add data done"})
}

module.exports =  {getAllUrl, getFindOneUrl,postUrl, }
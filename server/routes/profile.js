const express = require('express')
const profileRouter = express.Router()
const userSchema = require('../models/user')

profileRouter.post('/', async(req,res) => {
    console.log('inside profile api');

    console.log(req.body)

    const profileQuery = {
        username : req.body.userId,
    }

    const result = await userSchema.findOne(profileQuery)

    console.log(result);
    
    res.send({
        data : result
    })

    // res.json({
    //     data : result
    // })
    
})

module.exports = profileRouter
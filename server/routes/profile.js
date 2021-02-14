const express = require('express')
const profileRouter = express.Router()
const userSchema = require('../models/user')

profileRouter.post('/', async (req, res) => {
    console.log('inside profile api');

    console.log(req.body)

    const profileQuery = {
        username: req.body.userId,
    }

    const result = await userSchema.findOne(profileQuery)

    console.log(result);

    res.send({
        data: result
    })
})

try {
    profileRouter.post('/update', async (req, res) => {
        console.log('inside profile update api');

        const result = await userSchema.findOneAndUpdate({
            username: req.body.username
        },
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: req.body.password
            },
            {
                upsert: false,
                new : true
            })
        // console.log(result);

        res.send({
            data: result
        })
    })
}
catch (err) {
    console.error('ERROR : ', err)
}

module.exports = profileRouter
const express = require('express')
const registerRouter = express.Router()
const userSchema = require('../models/user')

registerRouter.post('/', async (req, res) => {
    const saveData = new userSchema({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    })
    try {
        saveData.save()        
        res.send({
            data : true
        })
    }
    catch (e) {
        console.log(e)
        res.send({
            data : false,
            error : e
        })
    }

})

module.exports = registerRouter
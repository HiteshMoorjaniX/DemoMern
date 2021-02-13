const express = require('express')
const loginRouter = express.Router()
const loginSchema = require('../models/user')

loginRouter.get('/', (req,res) => {
    console.log('inside login')
    res.send({
        name: 'Hitesh',
        empId : '1234'
    })
})

loginRouter.post('/', async(req,res) => {
    console.log('inside post api');
    console.log(req.body)
    const loginQuery = {
        username : req.body.username,
        password : req.body.password
    }
    const result = await loginSchema.findOne(loginQuery)
    console.log(result);
    res.send({
        data : result
    })
    // if(result != null) res.json('Login Successful')
    // else res.json('Login failed pls provide valid credentials')

    // const saveData = new loginSchema({
    //     username : req.body.username,
    //     password : req.body.password
    // })

    // saveData.save(() => {
    //     console.log('Data saved')
    // })

    // if(req.body.username == 'Hitesh' && req.body.password == 'admin'){
    //     res.json('Login successful')
    // }
    // else{
    //     res.json('Login failed')
    // }
    
})

module.exports = loginRouter

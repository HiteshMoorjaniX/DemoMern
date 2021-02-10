const express = require('express')
const cors = require('cors')
const app = express()
const port = 9000

app.use(express.json())
app.use(cors())
app.listen(port, () => {
    console.log('Node js app started running')
    console.log('Hitesh')
    console.log('Vinod');
})

app.get('/login', (req,res) => {
    console.log('inside login')
    res.send({
        name: 'Hitesh',
        empId : '1234'
    })
})

app.post('/login', async(req,res) => {
    console.log('inside post api');
    console.log(req.body)
    if(req.body.username == 'Hitesh' && req.body.password == 'admin'){
        res.json('Login successful')
    }
    else{
        res.json('Login failed')
    }
    
})
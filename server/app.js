const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 9000

const url = 'mongodb://localhost/demodb'

app.use(express.json())
app.use(cors())

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.catch(error => console.error(error));

const db = mongoose.connection

db.on('error',() => {
    console.log('errorrrr');
})

db.on('open', () => {
    console.log("Connected....")
})



const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const registerRouter = require('./routes/register')
app.use('/register', registerRouter)


app.listen(port, () => {
    console.log('Node js app started running')
    console.log('Hitesh')
    console.log('Vinod');
})


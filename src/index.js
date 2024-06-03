const express = require('express');
const app = express()
const data = require('./data')

app.use(express.json())

app.get('/home',(req,res)=>{
    res.status(200).send(data)
})

app.listen(3000)
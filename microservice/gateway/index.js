const express = require('express')
const axios = require('axios')
const To = require('await-to-js').default

const app = express()

app.get('/', async (req, res) => {
    const [error1, service1] = await To (axios.get("http://localhost:3001"))
    const [error2, service2] = await To (axios.get("http://localhost:3002"))
    res.send({service1: service1?.data,service2:service2?.data})
})

app.listen(3000, (err) => {
    if(err) console.log(err)
    console.log("Server is Running")
})
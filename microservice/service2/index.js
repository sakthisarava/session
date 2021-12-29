const express = require('express')

const app = express()

app.get('/', (req, res) => res.send("Hello World From Service 2 "))

app.listen(3002, (err) => {
    if(err) console.log(err)
    console.log("Server 2 is Running")
})
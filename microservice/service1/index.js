const express = require('express')

const app = express()

app.get('/', (req, res) => res.send("Hello World From Service 1 "))

app.listen(3001, (err) => {
    if(err) console.log(err)
    console.log("Server 1 is Running")
})
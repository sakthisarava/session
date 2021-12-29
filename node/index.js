const express = require('express')

const app = express()

app.get('/', (req, res) => res.send("Hello world"))

app.listen(3000, (err) => {
    if (err) console.log(err)
    console.log("Server is Running")
})
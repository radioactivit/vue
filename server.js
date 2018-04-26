const express = require('express')
const app = express()

app.use("/static", express.static("bin"))

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(80, function () {
    console.log('Listening on port 80!')
})
const express = require('express')
const app = express()

app.use("/", express.static("bin/assets/your-first-pwapp-master/final"))

app.listen(80, function () {
    console.log('Listening on port 80!')
})
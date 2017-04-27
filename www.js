const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/dist'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port)
console.log("app listening on" + port)

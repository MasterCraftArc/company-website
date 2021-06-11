// set up ======================================================================
const express = require('express')
const app = express()

let port = process.env.PORT
if (port == null || port == ""){ 
    port = 8080 //use localhost:8080 if environmental variable is not set
}
const morgan = require('morgan'); //log requests to the console
const setupRoutes = require('../app/routes.js')

// config ======================================================================
setupRoutes(app)

app.use(morgan('dev')); // use morgan middleware
app.use(express.static('public')) //access files inside our public folder

app.set('view engine', 'ejs') // set up ejs for templating

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port);
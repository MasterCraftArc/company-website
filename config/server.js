// set up ======================================================================
const express = require('express')
const app = express()
const maintenance = require('nodejs-server-maintenance');
maintenance(app);

let port = process.env.PORT
if (port == null || port == ""){ 
    port = 8080 //use localhost:8080 if environmental variable is not set
}
const morgan = require('morgan'); //log requests to the console
const setupRoutes = require('../app/routes.js')

// config ======================================================================
setupRoutes(app)


app.use(morgan('dev')); // use morgan middleware

app.use('/css', express.static('node_modules/bootstrap/dist/css')) //access our bootstrap files
app.use('/js', express.static('node_modules/bootstrap/dist/js'))

app.use(express.static('public')) //access files inside our public folder

app.use((req, res, next) => {

    // -----------------------------------------------------------------------
    // authentication middleware
  
    const auth = {login: 'defenseunicorns', password: 'leapfrog'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
      // Access granted...
      return next()
    }
  
    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message
  
    // -----------------------------------------------------------------------
  
  })

app.set('view engine', 'ejs') // set up ejs for templating

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port);
module.exports = setupRoutes;

function setupRoutes(app){

    //load the homepage
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })
    
    app.get('/blog', (req, res) => {
        res.render('blog.ejs')
    })

    app.get('/blog1', (req, res) => {
        res.render('blogposts/blogpost1.ejs')
    })

    app.get('/about', (req, res) => {
        res.render('about.ejs')
    })

    app.get('/approach', (req, res) => {
        res.render('approach.ejs')
    })

    app.get('/contact', (req, res) => {
        res.render('contact.ejs')
    })

    app.get('/products', (req, res) => {
        res.render('products.ejs')
    })
}
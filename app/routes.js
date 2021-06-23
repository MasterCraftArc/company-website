module.exports = setupRoutes;

function setupRoutes(app){

    //load the homepage
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })

    //load blog page
    app.get('/blog', (req, res) => {
        res.render('blog.ejs')
    })

    //load blog page
    app.get('/blog1', (req, res) => {
        res.render('blogposts/blogpost1.ejs')
    })
}
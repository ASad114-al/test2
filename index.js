const express = require('express');
const app = express();
const PORT = process.env.PORT || 5007
// const routes = require('./routes')
app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.use(routes)
app.get('/', (req, res ) => {
    res.render('index' )
 })
app.use(function (req, res, next) {
    res.status(404).render('404');
});
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));


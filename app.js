const express = require('express')
const app = express()
const methodOverride = require('method-override');
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json())
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/apiroutes', apiRoutes)

app.set('view engine', 'ejs');
app.set('views', 'views');


app.listen('3021', () => {
    console.log('app corriendo en puerto 3021 ...')
})
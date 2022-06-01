const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const { request } = require('express');

app.set('views','./views');
app.set('view engine','ejs');


let user = "Moi"

app.get('/', (req,res) =>{
    res.render('home', {user:user})
})


app.listen(3000)

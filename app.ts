import express from 'express';
const app = express();
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({defaultLayout: "main"});

const path = require('path');
const router = require('../routes/routes.js')


app.use(bodyParser.urlencoded({extends: true}));
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, '..', 'public')));

    //handlebars
    app.set('view engine', "handlebars");
    app.set('view cache', true);
    app.engine('handlebars', hbs.engine);


app.use("/", router)
app.listen(3000, ()=>{
    console.log("App puerto 3000!")
});

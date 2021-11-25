
const db = require('../services/db.js');

exports.userData = async (req,res)=>{
    let data = await  db.query('SELECT * FROM users');
    res.render("users.handlebars", {data})
}

//INSERT INTO users (name, surname) VALUES("Sergio", "Tomas"), ("Pilar", "Espinosa"), ("Iria", "Alonso");

exports.createUser = async(req,res)=>{
    let response = await db.query(`INSERT INTO users (name, surname) VALUES("${req.body.name}", "${req.body.surname}")`)
    res.redirect("/datosUsuarios")
}
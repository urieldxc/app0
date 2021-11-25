const express = require('express');
const router = express.Router();

const path = require('path');
const controller = require('../build/controller.js');

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"..","/public/form.html"))
});

router.get("/datosUsuarios", controller.userData)

router.post("/userList", controller.createUser);


module.exports = router;
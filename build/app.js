"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({ defaultLayout: "main" });
const path = require('path');
const router = require('../routes/routes.js');
app.use(bodyParser.urlencoded({ extends: true }));
app.use(express_1.default.static("views"));
app.use(express_1.default.static(path.join(__dirname, '..', 'public')));
//handlebars
app.set('view engine', "handlebars");
app.set('view cache', true);
app.engine('handlebars', hbs.engine);
app.use("/", router);
app.listen(3000, () => {
    console.log("App puerto 3000!");
});

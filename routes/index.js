const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

app.get("/", lesson1Controller.miriamRoute)
app.get("/moroni", lesson1Controller.moroniRoute)

module.exports = routes;

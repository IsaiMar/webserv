// express web server
const express = require("express")
const app = express()
const port = 3000

const lesson1Controller = require('./controllers/lesson1');

// app.use('/', require('./routes'))

app.get("/", lesson1Controller.miriamRoute)
app.get("/moroni", lesson1Controller.moroniRoute)

app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.port || port))
})

const http = require('http')

const express = require("express");
const app = express();
const path = require("path")

app.use("/public", express.static(path.join(__dirname, 'public')));

app.locals.basedir = __dirname

app.set('view engine','pug')
app.get('/',function (req, res) {
    res.render('hello', { title: 'Hello Vartak College', message: 'Hey There!' })
  }
)

const server = http.createServer(app)

const port = 3000

server.listen(8080)
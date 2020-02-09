const http = require('http')

const express = require("express");
const app = express();
const path = require("path")

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine','pug')
app.get('/',function (req, res) {
    res.render('hello', { title: 'Hello Vartak College', message: 'Hey There!' })
  }
)

const server = http.createServer(app)

server.listen(3000)
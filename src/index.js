const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;


const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./controllers/authController')(app);


server.listen(port, ()=>{
    console.log("Servidor iniciado: http://localhost:"+port);
})
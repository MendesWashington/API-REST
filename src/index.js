const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4000;
const hostname = 'localhost';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require('./controllers/authController')(app);
require('./controllers/projectsController')(app);

//Inicia o servidor npm start
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
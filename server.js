//set endpoint
projectData = {};

//load express to run the server and routes
const express = require('express');

//Start instance
const app = express();

//load dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);
const cors = require('cors');
app.use(cors());

//initialize website folder
app.use(express.static('website'));

//start server
const port = 8000;
const server = app.listen(port, listening);
  function listening () {
    console.log(`running on localhost: ${port}`);
  };

//GET route
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
};

//POST route
app.post('/add', callBack);

function callBack (req, res) {
  res.send('Post recieved');
}


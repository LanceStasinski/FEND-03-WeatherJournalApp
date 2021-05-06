//set endpoint
projectData = [];

//load express to run the server and routes
const express = require('express');

//Start instance
const app = express();

//load dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors - cross-origin allowance
const cors = require('cors');
app.use(cors());

//initialize website folder
app.use(express.static('website'));

//spin up server
const port = 3000;
const server = app.listen(port, listening);
  function listening () {
    console.log(`running on localhost: ${port}`);
  };

//send the website to the browser when the local host is opened
app.get('/', function (req, res) {
  res.sendFile('website/index.html')
})

//POST route
app.post('/add', addEntry);

function addEntry (req, res) {
  console.log(req.body);
  const newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    weather: req.body.weather,
    feelings: req.body.feelings,
    entry: req.body.entry,
  };
  projectData.push(newEntry);
}

//GET route
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
};



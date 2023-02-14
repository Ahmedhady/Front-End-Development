// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser')
// Middleware
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET route
//App get all data from server like lesson 9 chain promises
app.get('/all' ,sendData);

function sendData(req, res){
  res.send(projectData)
  console.log(projectData)
}

// POST route
//App post data(date, temp, feelings) to server and server will show data in the terminal like lesson 9 chain promises
app.post('/add' , addData);

function addData (req, res) {
  newEntry={
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }
  projectData = newEntry;
  console.log(projectData)
  res.send(projectData)
}
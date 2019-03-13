// // Express Server --------------------------------------------------------------------------------------------
const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const { ObjectID } = require('mongoose');
const { modelTrainer, modelPokemon, modelRegion } = require('./models/models');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.use(bodyParser.json())

app.get(`/trainer`, (req, res) => {})
app.get('/trainer/:id', (req, res) => {})
app.post('/trainer', (req, res) => {})
app.delete('/trainer/:id', (req, res) => {})

app.get(`/pokemon`, (req, res) => {})
app.get('/pokemon/:id', (req, res) => {})
app.post('/pokemon', (req, res) => {})
app.delete('/pokemon/:id', (req, res) => {})

app.get(`/region`, (req, res) => {})
app.get('/region/:id', (req, res) => {})
app.post('/region', (req, res) => {})
app.delete('/region/:id', (req, res) => {})

const serverHttp = http.listen(port, () => {
  console.log('\x1b[32m%s\x1b[0m', '\n-----------===== API Pokemon - PKMNAPI =====-----------');
  console.log('Server: ' + serverHttp.address().address + ':' + serverHttp.address().port);
});

module.exports = serverHttp;
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

app.get(`/trainer`, (req, res) => {
  modelTrainer.find({}).then(trainer => {
    console.log(trainer);
    res.json(trainer)
  }).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});


app.get('/trainer/:id', (req, res) => {
  const {id} = req.params;
  console.log(req.params.id);
  modelTrainer.findById(req.params.id).then((err, trainer) => {
    console.log(trainer);
    res.json(trainer)
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.post('/trainer', (req, res) => {
  new modelTrainer({
    number: req.body.number,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    job: req.body.job,
    pokemon: req.body.pokemon,
    region: req.body.region
  }).save().then(user => {
    res.send(trainer);
    console.log(trainer);
  }).catch(err => {
    res.status(500).send(err);
  });
});

app.delete('/trainer/:id', (req, res) => {
  const {id} = req.params;
  modelTrainer.findByIdAndRemove(id).then(trainer => {
    if(!trainer){
      res.status(404).send();
    }
    res.send(trainer);
  }).catch(err => {
    res.status(500).send(err);
  });
});

app.put('/trainer/:id', (req, res) => {
  const {id} = req.params;
  modelTrainer.findByIdAndUpdate(id, {$set: req.body}).then(trainer => {
    if(!trainer){
      res.status(404).send();
    }
    res.send(trainer);
  }).catch(err => {
    res.status(500).send(err);
  });
});

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
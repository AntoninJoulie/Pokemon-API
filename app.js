// const port = process.env.PORT || 4000;

// Yargs -----------------------------------------------------------------------------------------------------------
const yargs = require('yargs');
const url = yargs.argv.url || 'http://localhost:4000/';
const inputport = yargs.argv.port || process.env.PORT || 4000
const port = (inputport && !isNaN(inputport) && (inputport > 0 && inputport %1 == 0)) ? inputport : 4000;

if(/^(http[s]?:\/\/[^\/]+\/([^\s]+[^,.?!:;])?)/.test(url)) {
  console.log('\x1b[32m%s\x1b[0m', 'URL is correct 👍');
} else {
  console.log('\x1b[31m%s\x1b[0m', 'URL is incorrect  ⚠️');
}

// Express Server --------------------------------------------------------------------------------------------------
const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");

// Models ----------------------------------------------------------------------------------------------------------
const { modelTrainer, modelPokemon, modelRegion } = require("./models/models");

// Methode ---------------------------------------------------------------------------------------------------------
const { getAll, getId, deleteId, putId } = require("./methods");


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
  res.render('index', { url: url });
});


// Methods for Trainer tables -------------------------------------------------------------------------------------

/**
 * GET All method Trainer
 */
app.get(`/trainer`, (req, res) => { getAll(modelTrainer, res); });

/**
 * GET by Number method Trainer
 */
app.get("/trainer/:number", (req, res) => {
  getId(req.params.number, modelTrainer).then((trainer) => {
    res.json(trainer);
  }).catch((err) => {
    res.status(204).send(err);
  });
});

/**
 * POST method Trainer
 */
app.post("/trainer", (req, res) => {
  getId(req.body.number, modelTrainer).then((trainer) => {
    if (trainer === null) {
      new modelTrainer({
        number: req.body.number,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        job: req.body.job,
        pokemon: req.body.pokemon,
        region: req.body.region
      }).save().then(trainer => {
        res.status(201).send(trainer);
        console.log('Post Trainer:\n', trainer);
      }).catch(err => {
        res.status(500).send(err);
      });
    } else res.status(400).send(err);
  }).catch(err => {
    res.status(400).send(err);
  });
});

/**
 * DELETE method Trainer
 */
app.delete("/trainer/:number", (req, res) => { deleteId(req.params.number, modelTrainer, res); });

/**
 * PUT method Trainer
 */
app.put("/trainer/:number", (req, res) => { putId(req.params.number, modelTrainer, res, req); });

// Methods for Pokemon tables -------------------------------------------------------------------------------------

/**
 * GET All method Pokemon
 */
app.get(`/pokemon`, (req, res) => { getAll(modelPokemon, res); });

/**
 * GET by Number method Pokemon
 */
app.get("/pokemon/:number", (req, res) => {
  getId(req.params.number, modelPokemon).then(pokemon => {
    res.json(pokemon);
  }).catch(err => {
    res.status(500).send(err);
  });
});

/**
 * POST method Pokemon
 */
app.post("/pokemon", (req, res) => {
  getId(req.params.number, modelPokemon).then(pokemon => {
    if (pokemon === null) {
      new modelPokemon({
        number: req.body.number,
        name: req.body.name,
        type: req.body.type,
        trainer: req.body.trainer,
        region: req.body.region
      }).save().then(pokemon => {
        res.status(201).send(pokemon);
        console.log('Post Pokemon:\n', pokemon);
      }).catch(err => {
        res.status(500).send(err);
      });
    } else res.status(400).send(err);
  }).catch(err => {
    res.status(400).send(err);
  });
});

/**
 * DELETE method
 */
app.delete("/pokemon/:number", (req, res) => { deleteId(req.params.number, modelPokemon, res); });

/**
 * PUT method Pokemon
 */
app.put("/pokemon/:number", (req, res) => { putId(req.params.number, modelPokemon, res, req); });

// Methods for Region tables -------------------------------------------------------------------------------------

/**
 * GET All method Region
 */
app.get(`/region`, (req, res) => { getAll(modelRegion, res); });

/**
 * GET by Number method Region
 */
app.get("/region/:number", (req, res) => {
  getId(req.params.number, modelRegion).then((region) => {
    res.json(region);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

/**
 * POST method Region
 */
app.post("/region", (req, res) => {
  getId(req.params.number, modelRegion).then(region => {
    if (region === null) {
      new modelRegion({
        number: req.body.number,
        name: req.body.name,
        nativeTrainer: req.body.nativeTrainer,
        nativePokemon: req.body.nativePokemon
      }).save().then(region => {
        res.status(201).send(region);
        console.log('Post Region:\n', region);
      }).catch(err => {
        res.status(500).send(err);
      });
    } else res.status(400).send(err);
  }).catch(err => {
    res.status(400).send(err);
  });
});

/**
 * DELETE method Region
 */
app.delete("/region/:number", (req, res) => { deleteId(req.params.number, modelRegion, res); });

/**
 * PUT method Region
 */
app.put("/region/:number", (req, res) => { putId(req.params.number, modelRegion, res, req); });


// Server ------------------------------------------------------------------------------------------------
http.listen(port, () => {
  console.log(`\x1b[36m%s\x1b[0m`,`\n-----------===== API Pokemon - PKMNAPI =====-----------\nServer: ${url}`);
});
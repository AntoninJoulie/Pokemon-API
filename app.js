// // Express Server --------------------------------------------------------------------------------------------
const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const { modelTrainer, modelPokemon, modelRegion } = require("./models/models");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.json());

// Methods for Trainer tables ---------------------------------------------------

/**
 * GET All method
 */

app.get(`/trainer`, (req, res) => {
  modelTrainer
    .find({})
    .then(trainer => {
      console.log(trainer);
      res.json(trainer);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

/**
 * GET by Number method 
 */

app.get("/trainer/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelTrainer
    .findOne({ number: number })
    .then(trainer => {
      console.log(trainer);
      res.json(trainer);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST method 
 */

app.post("/trainer", (req, res) => {
  new modelTrainer({
    number: req.body.number,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    job: req.body.job,
    pokemon: req.body.pokemon,
    region: req.body.region
  })
    .save()
    .then(trainer => {
      res.send(trainer);
      console.log(trainer);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE method
 */

app.delete("/trainer/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelTrainer
    .findOneAndRemove(number)
    .then(trainer => {
      if (!trainer) {
        res.status(404).send();
      }
      res.send(trainer);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT method
 */

app.put("/trainer/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelTrainer
    .findOneAndUpdate(number, { $set: req.body })
    .then(trainer => {
      if (!trainer) {
        res.status(404).send();
      }
      res.send(trainer);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Methods for Pokemon tables -------------------------------------------------------------------------------------

/**
 * GET All method
 */

app.get(`/pokemon`, (req, res) => {
  modelPokemon
    .find({})
    .then(pokemon => {
      console.log(pokemon);
      res.json(pokemon);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

/**
 * GET by Number method
 */

app.get("/pokemon/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelTrainer
    .findOne({ number: number })
    .then(pokemon => {
      console.log(pokemon);
      res.json(pokemon);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST method
 */

app.post("/pokemon", (req, res) => {
  new modelPokemon({
    number: req.body.number,
    name: req.body.name,
    type: req.body.type,
    trainer: req.body.trainer,
    region: req.body.region
  })
  .save()
    .then(pokemon => {
      res.send(pokemon);
      console.log(pokemon);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE method
 */

app.delete("/pokemon/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelPokemon
    .findOneAndRemove(number)
    .then(pokemon => {
      if (!pokemon) {
        res.status(404).send();
      }
      res.send(pokemon);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT method
 */

app.put("/pokemon/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelPokemon
    .findOneAndUpdate(number, { $set: req.body })
    .then(pokemon => {
      if (!pokemon) {
        res.status(404).send();
      }
      res.send(pokemon);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Methods for Region tables -------------------------------------------------------------------------------------

/**
 * GET All method
 */

app.get(`/region`, (req, res) => {
  modelRegion
  .find({})
  .then(region => {
    console.log(region);
    res.json(region);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});

/**
 * GET by Number method
 */

app.get("/region/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelRegion
    .findOne({ number: number })
    .then(region => {
      console.log(region);
      res.json(region);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST method
 */

app.post("/region", (req, res) => {
  new modelRegion({
    number: req.body.number,
    name: req.body.name,
    nativeTrainer: req.body.nativeTrainer,
    nativePokemon: req.body.nativePokemon
  })
  .save()
    .then(region => {
      res.send(region);
      console.log(region);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE method
 */

app.delete("/region/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelRegion
    .findOneAndRemove(number)
    .then(region => {
      if (!region) {
        res.status(404).send();
      }
      res.send(region);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT method
 */

app.put("/region/:number", (req, res) => {
  const { number } = Number(req.params.numbers);
  console.log(number);
  modelRegion
    .findOneAndUpdate(number, { $set: req.body })
    .then(region => {
      if (!region) {
        res.status(404).send();
      }
      res.send(region);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

const serverHttp = http.listen(port, () => {
  console.log(
    "\x1b[32m%s\x1b[0m",
    "\n-----------===== API Pokemon - PKMNAPI =====-----------"
  );
  console.log(
    "Server: " + serverHttp.address().address + ":" + serverHttp.address().port
  );
});

module.exports = serverHttp;

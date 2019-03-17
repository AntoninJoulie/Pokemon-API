// Function get all -------------------------------------------------------------------------------------------------
const getAll = (model, res) => {
    model.find({}).then(body => {
        res.json(body);
    }).catch(err => {
        res.status(500).send(err);
    });
}

// Function to get by id --------------------------------------------------------------------------------------------
const getId = (number, model) => {
    return new Promise((resolve, reject) => {
        model.findOne({ number: Number(number) }).then(body => {
            resolve(body);
        }).catch(err => {
            if (err) reject(err);
        });
    });
}

// Function delete by id --------------------------------------------------------------------------------------------
const deleteId = (number, model, res) => {
    let intNumber = Number(number);
    getId(intNumber, model).then(body => {
        if (body != null) {
            model.findOneAndDelete().then(body => {
                res.status(202).send(err);
            }).catch(err => {
                res.status(500).send(err);
            });
        } else res.status(204).send(err);
    }).catch(err => {
        res.status(204).send(err);
    });
}

// Function put by id ------------------------------------------------------------------------------------------------
const putId = (number, model, res, req) => {
    let intNumber = Number(number);
    getId(intNumber, model).then(body => {
        if (body != null) {
            model.findOneAndUpdate(intNumber, { $set: req.body }).then(body => {
                res.status(202).send(err);
            }).catch(err => {
                res.status(500).send(err);
            });
        } else res.status(204).send(err);
    }).catch(err => {
        res.status(204).send(err);
    });
}

module.exports = { getAll, getId, deleteId, putId };

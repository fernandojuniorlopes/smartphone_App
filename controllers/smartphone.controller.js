const Smartphone = require('../models/smartphone.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.smartphone_create = function (req, res) {
    let smartphone = new Smartphone(
        {
            name: req.body.name,
            brand: req.body.brand
        }
    );

    smartphone.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Smartphone added successfully')
    })
};

exports.smartphone_details = function (req, res) {
    Smartphone.findById(req.params.id, function (err, smartphone) {
        if (err) return next(err);
        res.send(smartphone);
    })
};

exports.smartphone_update = function (req, res) {
    Smartphone.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, smartphone) {
        if (err) return next(err);
        res.send('Smartphone udpated.');
    });
};

exports.smartphone_delete = function (req, res) {
    Smartphone.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
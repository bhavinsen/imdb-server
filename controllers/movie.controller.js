const MovieSchema = require('../models/movie.model');
const {  validationResult } = require('express-validator');

module.exports = {
    getAll: function (req, res) {
        MovieSchema.find({}, function (err, result) {
            if (err) {
                res.status(400).json({ msg: err })
            } else {
                res.status(200).json({ msg: "Data found", result })
            }
        })
    },
    getById: function (req, res) {
        MovieSchema.findById(req.params.id, function (err, result) {
            if (err) {
                res.status(400).json({ msg: err })
            } else {
                res.status(200).json({ msg: "Data found", result })
            }
        })
    },
    createMovie: function (req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
          
        const movie = {
            name: req.body.name,
            yearOfRelease: req.body.yearOfRelease,
            poster: req.file?.filename,
            plot: req.body.plot,
            actor: req.body.actor,
            producer: req.body.producer,
        }
        MovieSchema.create(movie, function (err, result) {
            if (err) {
                res.status(400).json({ msg: err })
            } else {
                res.status(200).json({ msg: "Created", result })
            }
        })
    },

    editMovie: async function (req, res) {
        const id = req.params.id
        const movie = {
            name: req.body.name,
            yearOfRelease: req.body.yearOfRelease,
            poster: req?.file?.filename,
            plot: req.body.plot,
            actor: JSON.stringify(req.body.actor),
            producer: JSON.stringify(req.body.producer),
        }
        const update = await MovieSchema.findByIdAndUpdate(id, movie, { new: true })
        return res.status(200).json({ msg: "Created", update })

    },
}

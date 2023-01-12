const ProducerSchema = require('../models/producer.model');

module.exports = {
    getAll: function(req, res) {
        ProducerSchema.find({}, function(err, result) {
            if(err){
                res.status(400).json({msg: err})
            } else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
    getById: function(req, res) {
        ProducerSchema.findById(req.params.id, function(err, result) {
            if(err) {
                res.status(400).json({msg: err})
            }else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
    createProducer: function(req, res) {
        ProducerSchema.create(req.body, function(err, result) {
            if(err) {
                res.status(400).json({msg: err})
            }else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
    editProducer: function(req, res) {
        ProducerSchema.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if(err) {
                res.status(400).json({msg: err})
            }else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
}
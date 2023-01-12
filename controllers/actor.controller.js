const ActorSchema = require('../models/actor.model');

module.exports = {
    getAll: function(req, res) {
        ActorSchema.find({}, function(err, result) {
            if(err){
                res.status(400).json({msg: err})
            } else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
    getById: function(req, res) {
        ActorSchema.findById(req.params.id, function(err, result) {
            if(err) {
                res.status(400).json({msg: err})
            }else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
    editActor: function(req, res) {
        ActorSchema.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if(err) {
                res.status(400).json({msg: err})
            }else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    },
    createActor: function(req, res) {
        ActorSchema.create(req.body, function(err, result) {
            if(err) {
                res.status(400).json({msg: err})
                console.log(err,"error")
            }else {
                res.status(200).json({msg: "Data found", result})
            }
        })
    }
}
const { where } = require("sequelize");
const db = require("../models");
const Moto = db.motos;
const Op = db.Sequelize.Op;

//Create and save a new moto
exports.create = (req, res) => {
    if(!req.body.model) {
        res.status(400).send({
            message:"Content can not be empty"
        });
        return;
    }


    //Create motorbike
    const moto = {
        model: req.body.model,
        cylinderCap: req.body.cylinderCap,
        color: req.body.color
    };

    //Save moto in the db
    Moto.create(moto).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating a motorbike"
            });
        });
};



exports.findAll = (req, res) => {
    Moto.findAll()
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while looking for motorbikes"
        });
    });
};


exports.findOne = (req, res) => {
    Moto.findOne()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while looking for a motorbike"
        });
    }); 
};

exports.update = (req, res) => {
    const id =req.params.id;

    Moto.update(req.body, {where:{id:id}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while updating a motorbike"
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Moto.delete({where:{id:id}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while deleting a motorbike"
        });
    });
}; 

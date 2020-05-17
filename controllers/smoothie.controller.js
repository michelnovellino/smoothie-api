const express = require('express')
const router = express.Router()
const Model = require('../models/smoothie.model')

exports.Get = async (req, res) => {
    const Smoothies = await Model.find()
        .populate('fruits')
        .populate('liquids')
        .populate('proteins')
        .exec()
    console.log(Smoothies)
    console.table(req.body)
    res.json(Smoothies)
};

// exports.GetById = async (req, res) => {
//     const Smoothie = await Model.findById(req.params.id)
//     res.status(200).json(Smoothie)
// };

exports.Create = async (req, res) => {
    const Smoothie = new Model(req.body)
    console.info(req.body)
    await Smoothie.save()

    res.status(200).json(Smoothie)
};

// exports.Update = async (req, res) => {
//     await Model.findByIdAndUpdate(req.params.id, req.body)

//     res.status(200).json({
//         response: 'Smoothie Updated',
//         param: req.params,
//         obj: req.body,
//     })
// };

// exports.Remove = async function (req, res) {
//     await Model.findByIdAndRemove(req.params.id)
// };

const express = require('express')
const router = express.Router()
const Model = require('../models/liquid.model')

exports.Get = async (req, res) => {
	const Liquids = await Model.find()
	console.log(Liquids)
	res.json(Liquids)
};

// exports.GetById = async (req, res) => {
//     const Smoothie = await Model.findById(req.params.id)
//     res.status(200).json(Smoothie)
// };

// exports.Create = async (req, res) => {
// 	const Liquids = new Model(req.body)
// 	await Liquids.save()

// 	res.status(200).json(Liquids)
// };

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
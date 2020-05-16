const express = require('express')
const router = express.Router()
const Model = require('../models/fruits.model')

exports.Get = async (req, res) => {
	const Fruits = await Model.find()
	console.log(Fruits)
	res.json(Fruits)
};

// exports.GetById = async (req, res) => {
//     const Smoothie = await Model.findById(req.params.id)
//     res.status(200).json(Smoothie)
// };

// exports.Create = async (req, res) => {
// 	const Fruits = new Model(req.body)
// 	await Fruits.save()

// 	res.status(200).json(Fruits)
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

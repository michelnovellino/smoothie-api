const express = require('express')
const router = express.Router()
const Model = require('../models/protein.model')

exports.Get = async (req, res) => {
	const Proteins = await Model.find()
	console.log(Proteins)
	//console.log(req)
	res.json(Proteins)
};

// exports.GetById = async (req, res) => {
//     const Smoothie = await Model.findById(req.params.id)
//     res.status(200).json(Smoothie)
// };

// exports.Create = async (req, res) => {
// 	const Proteins = new Model(req.body)
// 	await Proteins.save()

// 	res.status(200).json(Proteins)
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
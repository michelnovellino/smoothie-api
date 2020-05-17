const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        name: { type: String },
        value: { type: Number }
    }, {
    colecction: 'fruits'
});

module.exports = mongoose.model('Fruit', Model);
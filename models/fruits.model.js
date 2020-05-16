const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        name: { type: String },
    }, {
    colecction: 'fruits'
});

module.exports = mongoose.model('Fruit', Model);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        name: { type: String },
    }, {
    colecction: 'liquids'
});

module.exports = mongoose.model('Liquid', Model);
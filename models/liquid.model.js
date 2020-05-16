const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        name: { type: String },
    }, {
    colecction: 'liquid'
});

module.exports = mongoose.model('Liquid', Model);
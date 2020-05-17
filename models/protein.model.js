const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        name: { type: String }
    }, {
    colecction: 'proteins'
});

module.exports = mongoose.model('Protein', Model);
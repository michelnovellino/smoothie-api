const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        name: { type: String },
    }, {
    colecction: 'protein'
});

module.exports = mongoose.model('Protein', Model);
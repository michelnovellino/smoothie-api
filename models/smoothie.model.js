const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        title: { type: String },
        fruitsID: [Schema.Types.ObjectId],
        liquidID: Schema.Types.ObjectId,
        proteinID: Schema.Types.ObjectId
    }, {
    colecction: 'smoothies'
});

module.exports = mongoose.model('Smoothie', Model);
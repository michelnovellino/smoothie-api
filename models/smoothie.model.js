// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const Model = new Schema(
//     {
//         title: { type: String },
//         fruitsID: [Schema.Types.ObjectId],
//         liquidID: Schema.Types.ObjectId,
//         proteinID: Schema.Types.ObjectId
//     }, {
//     colecction: 'smoothies'
// });

// module.exports = mongoose.model('Smoothie', Model);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Model = new Schema(
    {
        title: { type: String },
        fruits: [{
            type: Schema.Types.ObjectId,
            ref: 'Fruit',
        }],
        liquids: {
            type: Schema.Types.ObjectId,
            ref: 'Liquid'
        },
        proteins: {
            type: Schema.Types.ObjectId,
            ref: 'Protein'
        },
        tastes: { type: Number }
    }, {
    colecction: 'smoothies'
});


module.exports = mongoose.model('Smoothie', Model);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let treasureSchema = new Schema (
    {
        title: {type: String},
        tale: {type: String},
        value: {type: Number}
    }
)

module.exports = mongoose.model("treasure", treasureSchema);
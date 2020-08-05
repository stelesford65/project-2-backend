const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const CommentSchema = new Schema({
    "text":{type: String}
    })

const comment = model('Comment',
CommentSchema)

module.exports = comment 
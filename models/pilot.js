const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const pilotSchema = new Schema({
    "post": {type: String},
    "caption": {type: String},
    "comments": [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})
 
const pilot = model('Pilot',
pilotSchema)

module.exports = pilot 
//-------------------------------------------------------------


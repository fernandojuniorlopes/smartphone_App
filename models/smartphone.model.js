const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SmartphoneSchema = new Schema({
    name: {type: String, required: true, max: 100},
    brand: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Smartphone', SmartphoneSchema);
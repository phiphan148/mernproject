var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define a schema
var itinerarySchema = new Schema({ name: String }, { collection: 'itinerary' });
module.exports = Itinerary = mongoose.model('Itinerary', itinerarySchema);
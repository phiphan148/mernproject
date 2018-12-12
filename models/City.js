var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define a schema
var CitySchema = new Schema({ name: String, country: String }, { collection: 'cities' });
module.exports = City = mongoose.model('City', CitySchema);


// assign a function to the "methods" object of our animalSchema
// var city1 = new city({ name: 'Paris' });
// city1.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
// });
//
// // or
//
// city.create({ name: 'Paris' }, function (err, cityName) {
//     if (err) return handleError(err);
//     // saved!
// });
//
// // or, for inserting large batches of documents
// City.insertMany([{ name: 'Paris', country: 'France' }, { name: 'London', country: 'UK' }], function(err) {
//     if (err) return handleError(err);
//     // saved!
// });

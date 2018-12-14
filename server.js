const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
var citySchema = require("./models/City");
var cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://dev1:dev12345678@ds129904.mlab.com:29904/mernproject', { useNewUrlParser: true }, function(error) {
    if(error) return console.log(error);
});

app.get('/cities', (req, res)=>{
    citySchema.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://dev1:dev12345678@ds129904.mlab.com:29904/mernproject', { useNewUrlParser: true }, (err, database) => {
    var dbase = database.db("mernproject");
    if (err) return console.log(err);

    app.post('/cities/add', (req, res, next) => {

        let city = {
            name: req.body.name,
            country: req.body.country
        };

        dbase.collection("cities").save(city, (err, result) => {
            if(err) {
                console.log(err);
            }

            res.send('city added successfully');
        });
    });

    app.put('/cities/update/:id', (req, res, next) => {
        let id = {
            _id: new ObjectID(req.params.id)
        };

        dbase.collection("cities").updateOne(id, {$set:{name: req.body.name, src: req.body.src, country: req.body.country}}, (err, result) => {
            if(err) {
                throw err;
            }

            res.send('city updated sucessfully');
        });
    });

    app.get('/cities', (req, res) => {
        dbase.collection('cities').find().toArray( (err, results) => {
            res.send(results)
        });
    });

    app.get('/cities/:id', (req, res, next) => {
        if(err) {
            throw err;
        }

        let id = ObjectID(req.params.id);
        dbase.collection('cities').find(id).toArray( (err, result) => {
            if(err) {
                throw err;
            }

            res.send(result);
        });
    });

    app.delete('/cities/delete/:id', (req, res, next) => {
        let id = ObjectID(req.params.id);

        dbase.collection('cities').deleteOne({_id: id}, (err, result) => {
            if(err) {
                throw err;
            }

            res.send('city deleted');
        });
    });

    app.post('/names/add', (req, res, next) => {

        let name = {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        };

        dbase.collection("names").save(name, (err, result) => {
            if(err) {
                console.log(err);
            }

            res.send('name added successfully');
        });
    });
});

router.get('/', (req, res) => {
    res.send('This is the homepage!')
});

router.get('/testworking', (req, res) => {
    res.send({ msg: 'Test works' });
});

router.post('/contact', (req, res) => {
    res.send('This is the contact page with a POST request')
});

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

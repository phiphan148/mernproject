const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
var citySchema = require("./models/City");

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

    app.get('/names', (req, res) => {
        dbase.collection('names').find().toArray( (err, results) => {
            res.send(results)
        });
    });

    app.get('/names/:id', (req, res, next) => {
        if(err) {
            throw err;
        }

        let id = ObjectID(req.params.id);
        dbase.collection('names').find(id).toArray( (err, result) => {
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

    app.put('/names/update/:id', (req, res, next) => {
        let id = {
            _id: new ObjectID(req.params.id)
        };

        dbase.collection("names").updateOne(id, {$set:{first_name: req.body.first_name, last_name: req.body.last_name}}, (err, result) => {
            if(err) {
                throw err;
            }

            res.send('user updated sucessfully');
        });
    });

    app.delete('/names/delete/:id', (req, res, next) => {
        let id = ObjectID(req.params.id);

        dbase.collection('names').deleteOne({_id: id}, (err, result) => {
            if(err) {
                throw err;
            }

            res.send('user deleted');
        });
    });
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
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

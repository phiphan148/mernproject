const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID; // we will use this later

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://dev2:dev12345678@ds129904.mlab.com:29904/mernproject', (err, database) => {
    var dbase = database.db("mernproject");
    if (err) return console.log(err)
    app.post('/name/add', (req, res, next) => {

        var name = {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        };

        dbase.collection("name").save(name, (err, result) => {
            if(err) {
                console.log(err);
            }

            res.send('name added successfully');
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

router.get('/test', (req, res) => {
    res.send({ msg: 'Test works' });
});

router.post('/contact', (req, res) => {
    res.send('This is the contact page with a POST request')
});

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

// const express = require("express");
// const app = express();
// app.get("/", (req, res) => res.send("HELLO WORLD"));
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));
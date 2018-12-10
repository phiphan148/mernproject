const express = require('express');

const app = express();

const router = express.Router(); // 1

router.get('/', (req, res) => {  // 2
    res.send('This is the homepage!')
});

router.get('/test', (req, res) => {  // 2
    res.send('Test works');
});

router.post('/contact', (req, res) => {  // 3
    res.send('This is the contact page with a POST request')
});

app.use('/', router);  // 4

app.listen(5000, () => {
    console.log(`Server running at port 5000`)
});
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/users', (req, res) => {


    console.log('Hello /users');

    console.log(req.body.email);

    console.log(req.body.hasOwnProperty('email'));
    if (req.body.hasOwnProperty('email')) {
        // I accept or validate more
        const result = {
            id: 234622
        };

        URLSearchParams.push({
            id: URLSearchParams.length + 1,
            username: req.body.username,
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            email: req.body.email
        })

        res.status(201).json(result);
    }
    else {
        res.status(400);
    }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
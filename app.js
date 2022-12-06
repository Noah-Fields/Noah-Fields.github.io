'use strict';
const express = require('express');
const app = express();

app.get('/math/circle/:r', function(req, res) {
    if(req.params['r']) {
        let radius = req.params['r'];
        let area = radius * radius * Math.PI;
        let circumference = 2 * Math.PI * radius;
        let response = {area, circumference};
        res.type('json');
        res.send(response);
    }
});

app.get('/hello/name', function(req, res) {
    if(req.query['first'] && req.query['last']) {
        let first = req.query['first'];
        let last = req.query['last'];
        let response = "Hello " + first + " " + last;
        res.send(response);
    } else if(req.query['first']) {
        res.status(400);
        res.send("Missing Required GET parameters: last")
    } else if(req.query['last']) {
        res.status(400);
        res.send("Missing Required GET parameters: first")
    } else {
        res.status(400);
        res.send("Missing Required GET parameters: first, last")
    }
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

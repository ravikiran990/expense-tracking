const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/expense-routes');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/expenses', routes);

mongoose.connect('mongodb://127.0.0.1:27017/expense', 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(3000, () => {
            console.log(`app is running on http://localhost:${3000}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
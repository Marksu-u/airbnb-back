// imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');
const apiRouter = require('./routes/index.route');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://airbnb:${process.env.MONGODB_PASSWORD}@airbnbclusterjs.szpgtab.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Successfully connect to database")
    }).catch(err => console.log(err))

app.use("/api/v1", apiRouter);
app.use(errorHandler);

app.listen(process.env.PORT, function () {
    console.log("server launched");
});
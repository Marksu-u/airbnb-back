// packages import
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const errorHandler = require('./middlewares/errorHandler');
const apiRouter = require('./routes/index.route');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

  }));

const port = process.env.PORT || 5000;

app.use("/api/v1", apiRouter);
app.use(errorHandler);

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://airbnb:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Successfully connect to database")
    }).catch(err => console.log(err))

// console text when app is running
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
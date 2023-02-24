const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');
const apiRouter = require('./routes/index.route');

require('dotenv').config();

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  

app.use(bodyParser.json());

app.use("/api/v1", apiRouter);
app.use(errorHandler);

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://airbnb:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Successfully connect to database")
    }).catch(err => console.log(err))

app.listen(process.env.PORT, function () {
    console.log("server launched on port " + process.env.PORT);
});
